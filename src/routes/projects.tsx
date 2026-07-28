import { createFileRoute } from "@tanstack/react-router";
import { MapPin, CheckCircle2, User, Tag } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/CTA";
import { hospitalProject, civilProject, academicProject, officeProject, energyProject, industrialProject, hostelProject, residentialProject, type Project } from "@/lib/site-data";
import projectsHero from "@/assets/projects-hero.jpg";

function FeaturedProject({ project, altBg = false }: { project: Project; altBg?: boolean }) {
  return (
    <section className={`section-y ${altBg ? "bg-surface-alt" : ""}`}>
      <div className="container-x">
        <div className="max-w-3xl mb-10">
          <span className="eyebrow text-brand">Featured Project</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink">{project.title}</h2>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed">{project.description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="overflow-hidden aspect-[16/10]">
              <img
                src={project.gallery![0].src}
                alt={project.gallery![0].alt}
                width={1600}
                height={1000}
                loading="lazy" decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-display text-xl font-bold text-ink">Project Details</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <Tag className="h-4 w-4 mt-0.5 text-brand shrink-0" />
                <div>
                  <div className="text-muted-foreground">Category</div>
                  <div className="font-medium text-ink">{project.category}</div>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-brand shrink-0" />
                <div>
                  <div className="text-muted-foreground">Location</div>
                  <div className="font-medium text-ink">{project.location}</div>
                </div>
              </li>
              <li className="flex gap-3">
                <User className="h-4 w-4 mt-0.5 text-brand shrink-0" />
                <div>
                  <div className="text-muted-foreground">Client</div>
                  <div className="font-medium text-ink">{project.client}</div>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand shrink-0" />
                <div>
                  <div className="text-muted-foreground">Status</div>
                  <div className="font-medium text-ink">{project.status}</div>
                </div>
              </li>
            </ul>
          </aside>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {project.gallery!.slice(1).map((img, i) => (
            <figure
              key={i}
              className="group relative overflow-hidden rounded-xl border border-border bg-card aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1200}
                height={900}
                loading="lazy" decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {img.caption && (
                <figcaption className="absolute inset-x-0 bottom-0 p-3 md:p-4 text-white text-xs md:text-sm font-medium bg-gradient-to-t from-ink/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


const featuredProjects = [
  hospitalProject,
  civilProject,
  academicProject,
  officeProject,
  energyProject,
  industrialProject,
  hostelProject,
  residentialProject,
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Construction Projects in Ghana | Firma Projektz Ltd Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of hospital, academic, office, energy, hotel, hospitality and residential construction projects delivered by Firma Projektz Ltd across Ghana.",
      },
      { property: "og:title", content: "Construction Projects in Ghana | Firma Projektz Ltd" },
      {
        property: "og:description",
        content:
          "Landmark buildings, civil works and infrastructure projects delivered by Firma Projektz Ltd across Ghana.",
      },
      { property: "og:url", content: "/projects" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Construction Projects Portfolio | Firma Projektz Ltd" },
      {
        name: "twitter:description",
        content: "Landmark construction and civil engineering projects delivered across Ghana.",
      },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Firma Projektz Ltd Project Portfolio",
          url: "/projects",
          hasPart: featuredProjects.map((p) => ({
            "@type": "CreativeWork",
            name: p.title,
            about: p.category,
            locationCreated: { "@type": "Place", name: p.location },
          })),
        }),
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Landmark projects delivered across Ghana."
        description="A selection of residential, commercial, civil and industrial projects that reflect our commitment to quality workmanship, engineering rigour and long-term client partnerships."
        image={projectsHero}
        imageAlt="Completed modern corporate building representative of Firma Projektz Ltd project delivery quality."
      />
      <FeaturedProject project={hospitalProject} altBg />
      <FeaturedProject project={civilProject} />
      <FeaturedProject project={academicProject} altBg />
      <FeaturedProject project={officeProject} />
      <FeaturedProject project={energyProject} altBg />
      <FeaturedProject project={industrialProject} />
      <FeaturedProject project={hostelProject} altBg />
      <FeaturedProject project={residentialProject} />

      <section className="section-y">
  <div className="container-x">

    <div className="max-w-3xl">
      <span className="eyebrow">Our Standards</span>

      <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink">
        Built to international standards
      </h2>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2">

      <article className="rounded-2xl border border-border bg-card p-8">
        <h3 className="text-2xl font-display font-bold">Quality Assurance</h3>
        <p className="mt-4 text-ink-soft">
          Independent inspections and documented QA/QC at every stage — from materials testing to
          final snagging.
        </p>
      </article>

      <article className="rounded-2xl border border-border bg-card p-8">
        <h3 className="text-2xl font-display font-bold">Health & Safety</h3>
        <p className="mt-4 text-ink-soft">
          A zero-harm HSE programme, method statements and risk assessments governing every task on
          site.
        </p>
      </article>

      <article className="rounded-2xl border border-border bg-card p-8">
        <h3 className="text-2xl font-display font-bold">Timely Delivery</h3>
        <p className="mt-4 text-ink-soft">
          Rigorous planning and disciplined project management keep programmes on track and
          budgets protected.
        </p>
      </article>

      <article className="rounded-2xl border border-border bg-card p-8">
        <h3 className="text-2xl font-display font-bold">Client Collaboration</h3>
        <p className="mt-4 text-ink-soft">
          Transparent reporting and close collaboration ensure delivery stays aligned with the
          client's vision.
        </p>
      </article>

    </div>

  </div>
</section>
      <FinalCTA />
    </>
  );
}
