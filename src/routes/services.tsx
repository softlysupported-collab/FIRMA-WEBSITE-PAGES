import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/CTA";
import { services } from "@/lib/site-data";
import servicesHero from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Construction Services in Ghana | Firma Projektz Ltd" },
      {
        name: "description",
        content:
          "Building construction, civil engineering, design-build, project management, industrial construction and facility maintenance services in Ghana by Firma Projektz Ltd.",
      },
      { property: "og:title", content: "Construction Services in Ghana | Firma Projektz Ltd" },
      {
        property: "og:description",
        content:
          "A complete range of construction and civil engineering services delivered across Ghana under one roof.",
      },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Construction Services in Ghana | Firma Projektz Ltd" },
      {
        name: "twitter:description",
        content: "Building, civil engineering, design-build and project management services in Ghana.",
      },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Firma Projektz Ltd — Construction Services",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.description,
              areaServed: { "@type": "Country", name: "Ghana" },
              provider: { "@type": "Organization", name: "Firma Projektz Ltd" },
            },
          })),
        }),
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete Construction & Engineering Solutions"
        description="From concept to commissioning, Firma Projektz Ltd delivers construction, civil engineering, design-build, project management and infrastructure services for residential, commercial, industrial and public-sector projects across Ghana."
        image={servicesHero}
        imageAlt="Firma Projektz construction crew executing reinforced concrete works on a large commercial project."
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.slug}
                className="group relative rounded-2xl border border-border bg-card p-8 md:p-10 hover:border-brand transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-ink">{s.title}</h2>
                    <p className="mt-3 text-ink-soft leading-relaxed">{s.description}</p>
                    <Link
                      to="/quote"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
                    >
                      Request a quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface-alt">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">Our Process</span>

            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
              How we deliver every project
            </h2>

            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              A structured, transparent process from first conversation to final handover — engineered
              to protect quality, budget and programme.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <article className="rounded-2xl bg-card border border-border p-8">
              <div className="text-5xl font-display font-bold text-brand">01</div>

              <h3 className="mt-6 text-2xl font-display font-bold text-ink">Consultation & Planning</h3>

              <p className="mt-4 text-ink-soft leading-relaxed">
                We start by understanding your objectives, budget, timeline and site conditions,
                then shape a delivery strategy built around them.
              </p>
            </article>

            <article className="rounded-2xl bg-card border border-border p-8">
              <div className="text-5xl font-display font-bold text-brand">02</div>

              <h3 className="mt-6 text-2xl font-display font-bold text-ink">Design & Engineering</h3>

              <p className="mt-4 text-ink-soft leading-relaxed">
                Architectural concepts, engineering designs, technical drawings and schedules are
                prepared by an integrated team aligned to industry standards.
              </p>
            </article>

            <article className="rounded-2xl bg-card border border-border p-8">
              <div className="text-5xl font-display font-bold text-brand">03</div>

              <h3 className="mt-6 text-2xl font-display font-bold text-ink">Construction & Execution</h3>

              <p className="mt-4 text-ink-soft leading-relaxed">
                Skilled crews, vetted materials and rigorous QA/QC procedures move the design safely
                and efficiently from paper to structure.
              </p>
            </article>

            <article className="rounded-2xl bg-card border border-border p-8">
              <div className="text-5xl font-display font-bold text-brand">04</div>

              <h3 className="mt-6 text-2xl font-display font-bold text-ink">Handover & Aftercare</h3>

              <p className="mt-4 text-ink-soft leading-relaxed">
                Comprehensive inspections, snagging and documentation ensure a clean handover — with
                defects-liability support to protect your investment.
              </p>
            </article>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
