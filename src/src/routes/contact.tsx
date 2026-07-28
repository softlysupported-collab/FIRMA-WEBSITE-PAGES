import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import contactHero from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Firma Projektz Ltd | Construction Company in Ghana" },
      {
        name: "description",
        content:
          "Contact Firma Projektz Ltd — construction and civil engineering company in Ghana. Reach us by phone, WhatsApp, email or contact form for your next project.",
      },
      { property: "og:title", content: "Contact Firma Projektz Ltd | Construction in Ghana" },
      {
        property: "og:description",
        content: "Reach the Firma Projektz team by phone, email, WhatsApp or contact form.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Contact Firma Projektz Ltd" },
      {
        name: "twitter:description",
        content: "Reach our Ghana construction team by phone, email, WhatsApp or contact form.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Firma Projektz Ltd",
          url: "/contact",
          mainEntity: {
            "@type": "Organization",
            name: "Firma Projektz Ltd",
            telephone: "+233-555-771-670",
            areaServed: { "@type": "Country", name: "Ghana" },
            contactPoint: [{
              "@type": "ContactPoint",
              telephone: "+233-555-771-670",
              contactType: "customer service",
              areaServed: "GH",
              availableLanguage: ["English"],
            }],
          },
        }),
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(2, "Enter a subject").max(150),
  message: z.string().trim().min(10, "Please add a few details").max(2000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      for (const i of r.error.issues) errs[i.path[0] as string] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's build something exceptional together."
        description="Whether you're planning a residential, commercial, industrial or civil engineering project, our team is ready to discuss your requirements and deliver construction solutions you can trust."
        image={contactHero}
        imageAlt="Firma Projektz project manager welcoming a client with a handshake at a modern construction site."
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Get In Touch</span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink">
                We'd love to hear about your project
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                From concept and planning to construction and handover, our team is ready to support
                you at every stage.
              </p>

              <div className="mt-10 space-y-8">
                <div>
                  <h3 className="font-bold text-xl">Head Office</h3>
                  <p className="mt-2 text-ink-soft">
                    DTD: BAE 30/37 Sakumono, Tema<br />
                    Greater Accra Region, Ghana
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Call Us</h3>
                  <p className="mt-2 text-ink-soft">
                    +233 (0) 555 771 670<br />
                    +233 (0) 540 745 556
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Email</h3>
                  <p className="mt-2 text-ink-soft">firmaprojektz@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Working Hours</h3>
                  <p className="mt-2 text-ink-soft">
                    Monday – Friday<br />
                    8:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-3xl bg-surface-alt border border-border p-10">
                <span className="eyebrow">Quick Inquiry</span>
                <h3 className="mt-4 text-3xl font-display font-bold">Ready to start?</h3>
                <p className="mt-5 text-ink-soft leading-relaxed">
                  Send us your project details, request a quotation or schedule a consultation — we'll respond within 48 hours.
                </p>

                <form onSubmit={onSubmit} className="mt-8 space-y-4" noValidate>
                  <div>
                    <input
                      name="name"
                      placeholder="Your Name"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3"
                    />
                    {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3"
                    />
                    {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      name="subject"
                      placeholder="Subject"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3"
                    />
                    {errors.subject && <p className="mt-1 text-sm text-destructive">{errors.subject}</p>}
                  </div>
                  <div>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3"
                    />
                    {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-brand text-brand-foreground px-6 py-4 font-semibold hover:bg-brand/90"
                  >
                    Send Message
                  </button>
                  {submitted && (
                    <p className="text-sm text-ink-soft">Thanks — we'll be in touch shortly.</p>
                  )}
                </form>

                <div className="mt-6 space-y-4">
                  <a
                    href="/quote"
                    className="block rounded-lg bg-brand text-brand-foreground px-6 py-4 text-center font-semibold hover:bg-brand/90"
                  >
                    Request a Free Quote
                  </a>
                  <a
                    href="https://wa.me/233555771670"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border px-6 py-4 text-center font-semibold hover:bg-surface"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface-alt">
        <div className="container-x">
          <span className="eyebrow">Find Us</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold">Visit our office</h2>
          <p className="mt-6 max-w-3xl text-lg text-ink-soft">
            Our head office in Sakumono, Tema puts us within easy reach of clients across Greater Accra and nationwide.
          </p>
          <div className="mt-12 overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Office location map"
              src="https://www.google.com/maps?q=Sakumono,Tema,Ghana&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="rounded-3xl bg-card border border-border p-12">
            <h2 className="font-display text-4xl font-bold text-center">Why work with Firma Projektz?</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="font-bold text-xl">Experienced Team</h3>
                <p className="mt-3 text-ink-soft">
                  Qualified engineers, architects and project managers working as one delivery unit.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl">Quality Assurance</h3>
                <p className="mt-3 text-ink-soft">
                  Rigorous QA/QC and safety controls at every stage of every project.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl">On-Time Delivery</h3>
                <p className="mt-3 text-ink-soft">
                  Disciplined planning and execution keep projects on programme and on budget.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl">Trusted Partner</h3>
                <p className="mt-3 text-ink-soft">
                  Long-term relationships built on integrity, transparency and consistent delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
