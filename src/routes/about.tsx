import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/CTA";
import { stats } from "@/lib/site-data";
import aboutHero from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Firma Projektz Ltd | Ghana Construction & Engineering Firm" },
      {
        name: "description",
        content:
          "Firma Projektz Ltd is a Ghana-based construction, civil engineering and project management firm delivering premium building and infrastructure works for government, corporate and private clients.",
      },
      { property: "og:title", content: "About Firma Projektz Ltd | Ghana Construction Firm" },
      {
        property: "og:description",
        content:
          "An engineering-led Ghanaian construction and civil engineering company built on trust, technical excellence and disciplined delivery.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "About Firma Projektz Ltd" },
      {
        name: "twitter:description",
        content: "Engineering-led Ghanaian construction and civil engineering company.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Firma Projektz Ltd",
          url: "/about",
          about: { "@type": "Organization", name: "Firma Projektz Ltd" },
        }),
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Engineering Excellence. Building Ghana's Future."
        description="Firma Projektz Ltd is a trusted Ghanaian construction and engineering firm delivering building construction, civil engineering, infrastructure, design & build project management services for government, corporate and private clients. We combine technical expertise, modern construction practice and disciplined delivery to create infrastructure that lasts."
        image={aboutHero}
        imageAlt="Professional engineers and project managers reviewing architectural plans on a Firma Projektz construction site."
      />

      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-2 items-start">
          <div>
            <span className="eyebrow">Company Overview</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
              Purpose-built to deliver excellence across Ghana.
            </h2>
          </div>
          <div className="space-y-6 text-ink-soft text-lg leading-relaxed">
            <p>
              Firma Projektz Ltd is a Ghanaian construction and engineering firm delivering
              end-to-end solutions across building construction, civil engineering, infrastructure,
              design-build, project management and property development. We pair technical rigour
              with modern construction practice to build assets that create lasting value.
            </p>

            <p>
              We serve government institutions, corporates, property developers, educational and
              healthcare institutions, faith organisations and private homeowners — delivering
              projects of every scale with professionalism, integrity and an uncompromising
              commitment to quality.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt section-y">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Our Mission",
                body: "To deliver safe, innovative and sustainable construction that exceeds client expectations and creates lasting value for the communities and businesses we serve.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                body: "To be West Africa's most trusted construction and engineering partner — recognised for excellence, integrity and the successful delivery of world-class infrastructure.",
              },
              {
                icon: Heart,
                title: "Our Values",
                body: "Integrity, safety, professionalism, innovation and teamwork guide every decision — ensuring every project is delivered with excellence and every client relationship is built on trust.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl bg-card p-10 border border-border">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand text-brand-foreground">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink">{card.title}</h3>
                <p className="mt-4 text-ink-soft leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="section-y">
        <div className="container-x">
          <span className="eyebrow">Who we serve</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-ink leading-tight max-w-3xl">
            Trusted by clients across multiple sectors.
          </h2>
          <p className="mt-6 max-w-3xl text-ink-soft text-lg leading-relaxed">
            Our multidisciplinary expertise lets us tailor construction and engineering solutions
            to public- and private-sector clients — regardless of project size or complexity.
          </p>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              "Government institutions",
              "Property developers",
              "Corporate organisations",
              "Manufacturing companies",
              "NGOs",
              "Schools",
              "Hospitals",
              "Churches",
              "Homeowners",
              "International investors",
            ].map((c) => (
              <div
                key={c}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-4 text-sm font-medium text-ink"
              >
                <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                {c}
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Link
              to="/quote"
              className="inline-flex items-center rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Founder & Leadership */}
      <section className="section-y bg-surface-alt">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="eyebrow">Founder & Leadership</span>

              <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
                Driven by vision. Built on integrity.
              </h2>

              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                Firma Projektz Ltd was founded to raise the standard of Ghana's construction
                industry through professionalism, innovation and uncompromising quality. Every
                project reflects our commitment to engineering excellence, safety and long-term
                value.
              </p>

              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                Great construction is built on trust, collaboration and technical expertise. By
                combining rigorous project management with practical engineering, we consistently
                exceed client expectations — whatever the scale or complexity.
              </p>

              <blockquote className="mt-8 border-l-4 border-brand pl-6 italic text-ink-soft">
                "Every project is an opportunity to build lasting value, strengthen communities and
                earn the trust of our clients."
              </blockquote>
            </div>

            <div className="rounded-3xl bg-card border border-border p-10 shadow-sm">
              <div className="h-20 w-20 rounded-full bg-brand flex items-center justify-center text-brand-foreground text-3xl font-bold">
                AA
              </div>

              <h3 className="mt-6 font-display text-3xl font-bold text-ink">Mr. Albert Amanor</h3>

              <p className="mt-2 text-brand font-semibold">Founder & Business Development</p>

              <p className="mt-6 text-ink-soft leading-relaxed">
                A visionary leader driving Firma Projektz Ltd through technical excellence and
                disciplined project execution. Dedicated to building long-term partnerships that
                create measurable value for clients, communities and industry across Ghana.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-lg bg-surface-alt px-4 py-3">✓ Strategic Project Leadership</div>

                <div className="rounded-lg bg-surface-alt px-4 py-3">✓ Construction & Engineering Excellence</div>

                <div className="rounded-lg bg-surface-alt px-4 py-3">✓ Client-First Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
