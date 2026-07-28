#!/usr/bin/env node
/**
 * Mirrors every Lovable CDN asset referenced by src/assets/*.asset.json into
 * public/__l5e/assets-v1/{asset_id}/{filename} so the site is self-contained
 * when deployed outside Lovable hosting (e.g. GitHub -> Cloudflare Pages).
 *
 * Run after adding/removing assets:  node scripts/sync-lovable-assets.mjs
 */
import fs from "node:fs";
import path from "node:path";

const BASE = process.env.LOVABLE_ASSET_ORIGIN || "https://firmaprojektzltd.lovable.app";
const dir = "src/assets";
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".asset.json"));

let ok = 0, skip = 0, fail = 0;
await Promise.all(
  files.map(async (f) => {
    const j = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    const out = path.join("public", j.url);
    if (fs.existsSync(out) && fs.statSync(out).size === j.size) { skip++; return; }
    fs.mkdirSync(path.dirname(out), { recursive: true });
    const r = await fetch(BASE + j.url);
    if (!r.ok) { console.error("FAIL", j.url, r.status); fail++; return; }
    fs.writeFileSync(out, Buffer.from(await r.arrayBuffer()));
    ok++;
  }),
);
console.log(`downloaded=${ok} skipped=${skip} failed=${fail} total=${files.length}`);
if (fail) process.exit(1);
