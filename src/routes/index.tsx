import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Sparkles,
  CheckCircle2,
  Quote,
  Handshake,
  Wallet,
  ClipboardCheck,
  MessagesSquare,
} from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import { services, projects, stats, testimonials } from "@/lib/site-data";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Construction Company in Ghana | Firma Projektz Ltd" },
      {
        name: "description",
        content:
          "Premium construction, civil engineering, design & build project management services in Ghana. Landmark projects for government, corporate, industrial and residential clients — delivered end-to-end.",
      },
      { property: "og:title", content: "Construction Company in Ghana | Firma Projektz Ltd" },
      {
        property: "og:description",
        content:
          "Premium construction, civil engineering, design & build project management services for government, corporate, industrial and residential clients in Ghana — delivered end-to-end.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Construction Company in Ghana | Firma Projektz Ltd" },
      {
        name: "twitter:description",
        content:
          "Premium construction, civil engineering, design & build project management services for government, corporate, industrial and residential clients in Ghana — delivered end-to-end.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Firma Projektz Ltd",
          url: "/",
          inLanguage: "en-GH",
          publisher: { "@type": "Organization", name: "Firma Projektz Ltd" },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden -mt-[calc(var(--spacing)*18)] pt-[calc(var(--spacing)*18)]">
        <img
          src={heroImg}
          alt="Firma Projektz engineers reviewing plans on a construction site at golden hour"
          width={1600}
          height={907}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" aria-hidden="true" />
        <div className="container-x relative py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="eyebrow text-brand">Total Construction Solutions</span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.02] text-white">
              Engineering Excellence.
              <span className="block text-brand">Building Lasting Value.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed">
              Firma Projektz Ltd is a Ghanaian construction and civil engineering firm delivering building,
              infrastructure, design & build project management services for government, corporate, industrial and
              private clients. Technically led, safely executed, delivered to last.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/quote"
                className="group inline-flex items-center gap-2 rounded-md bg-brand px-7 py-4 text-sm font-semibold text-brand-foreground shadow-lg hover:bg-brand/90 transition-all hover:shadow-xl"
              >
                Request a Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 backdrop-blur px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-24 items-start">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
              An engineering-led construction company, built on trust and precision.
            </h2>
          </div>
          <div className="space-y-6 text-ink-soft text-lg leading-relaxed">
            <p>
              Firma Projektz Ltd serves government institutions, property developers, corporates, industrial operators,
              NGOs and private homeowners across Ghana, pairing local delivery capacity with international engineering
              standards.
            </p>
            <p>
              From concept to commissioning, our multidisciplinary team owns every phase — design, engineering,
              procurement, construction and handover — under a single accountable partnership.
            </p>
            <div className="pt-4 flex flex-wrap gap-x-8 gap-y-3">
              {["Turn-key delivery", "International standards", "Zero-harm safety culture", "In-house engineering"].map(
                (f) => (
                  <div key={f} className="flex items-center gap-2 text-ink font-medium">
                    <CheckCircle2 className="h-5 w-5 text-brand" />
                    {f}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ink text-white">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="py-14 px-6 text-center">
              <div className="font-display text-4xl md:text-6xl font-bold text-brand">{s.value}</div>
              <div className="mt-3 text-sm md:text-base text-white/60 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-y bg-surface-alt">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">What we do</span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
                A complete range of construction services under one roof.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.slug}
                className="group relative rounded-2xl border border-border bg-card p-7 hover:border-brand hover:-translate-y-1 transition-all duration-300"
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">Selected projects</span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
                Delivering landmark projects across sectors.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
            >
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <article
                key={p.slug}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className={`overflow-hidden ${i === 0 ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.category} project by Firma Projektz`}
                    width={1200}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest">
                    <span className="text-brand">{p.category}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{p.location}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground">{p.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-y bg-surface-alt">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Why Firma Projektz</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
              A partner clients trust with their most important builds.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award,
                title: "Engineering Excellence",
                body: "Technical precision, disciplined workmanship and unwavering quality standards on every build.",
              },
              {
                icon: Users,
                title: "Experienced Professionals",
                body: "Chartered engineers, architects and project managers working as one integrated delivery team.",
              },
              {
                icon: ShieldCheck,
                title: "Safety & Compliance",
                body: "A zero-harm HSE culture backed by documented procedures, inductions and continuous training.",
              },
              {
                icon: Handshake,
                title: "Client-Focused Service",
                body: "Long-term partnerships built on transparency, responsiveness and consistently exceeding expectations.",
              },
              {
                icon: Sparkles,
                title: "On-Time Delivery",
                body: "Rigorous planning and disciplined execution keep projects on programme without compromising quality.",
              },
              {
                icon: Wallet,
                title: "Cost-Effective Solutions",
                body: "Value-engineered proposals that optimise scope, resources and budget without cutting corners.",
              },
              {
                icon: ClipboardCheck,
                title: "Reliable Execution",
                body: "From procurement to handover, every stage is managed with accountability and attention to detail.",
              },
              {
                icon: MessagesSquare,
                title: "Transparent Reporting",
                body: "Regular progress updates, clear documentation and open dialogue from kickoff through handover.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-card p-8 border border-border">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-ink text-brand">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY & QUALITY */}
      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-2 items-center">
          <div className="relative rounded-3xl overflow-hidden bg-ink aspect-[4/5] max-w-md">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "linear-gradient(135deg, oklch(0.72 0.17 55) 0%, oklch(0.18 0 0) 100%)",
              }}
              aria-hidden="true"
            />
            <div className="relative h-full flex flex-col justify-between p-10 text-white">
              <ShieldCheck className="h-14 w-14 text-white" />
              <div>
                <div className="font-display text-6xl font-bold">Zero</div>
                <div className="mt-2 text-white/80 text-lg">Harm target across every site.</div>
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow">Safety &amp; Quality</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
              Committed to the highest standards of safety and quality on every project.
            </h2>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              Safety is engineered into how we plan, procure and build. Our HSE programme, site inductions and
              continuous training ensure that every worker goes home safely — and every structure we deliver meets
              stringent quality benchmarks.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Certified site supervision and independent QA/QC",
                "Documented method statements and risk assessments",
                "Compliance with national codes and international best practice",
                "Environmental stewardship on every project",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-ink">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-brand shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-y bg-ink text-white">
        <div className="container-x">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="eyebrow text-brand">Our Commitment</span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
                Building Trust Through Every Project.
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 relative">
                <Quote className="h-8 w-8 text-brand" />
                <p className="mt-5 text-white/80 leading-relaxed italic">{testimonial.quote}</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="font-display font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-widest text-brand/70">
                  Our Promise
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
