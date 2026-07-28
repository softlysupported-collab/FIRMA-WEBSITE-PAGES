import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Construction Quote in Ghana | Firma Projektz Ltd" },
      {
        name: "description",
        content:
          "Request a free construction quote from Firma Projektz Ltd. Share your project details and our Ghana-based team will respond within 48 hours.",
      },
      { property: "og:title", content: "Request a Construction Quote | Firma Projektz Ltd" },
      {
        property: "og:description",
        content:
          "Tell us about your project and receive a tailored construction and civil engineering quotation from our Ghana team.",
      },
      { property: "og:url", content: "/quote" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Request a Construction Quote | Firma Projektz Ltd" },
      {
        name: "twitter:description",
        content: "Get a tailored construction quotation from Firma Projektz Ltd in Ghana.",
      },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: Quote,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(30),
  organisation: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().min(1, "Select a service"),
  location: z.string().trim().min(2, "Enter the project location").max(120),
  budget: z.string().optional().or(z.literal("")),
  timeline: z.string().optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please add a few details (min 10 characters)")
    .max(2000, "Please keep your message under 2000 characters"),
});

function Quote() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <PageHero eyebrow="Request a Quote" title="Thank you — your request is on its way." />
        <section className="section-y">
          <div className="container-x max-w-2xl">
            <div className="rounded-2xl border border-border bg-card p-10 text-center">
              <CheckCircle2 className="h-14 w-14 mx-auto text-brand" />
              <h2 className="mt-6 font-display text-2xl font-bold text-ink">Request received</h2>
              <p className="mt-4 text-ink-soft">
                A member of our team will review the details and respond within 48 hours.
                For urgent enquiries, please call or message us on WhatsApp.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us about your project."
        description="Share a few details and our team will prepare a tailored quotation. We typically respond within 48 hours."
      />
      <section className="section-y">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">Professional Consultation</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink">
              Let's turn your vision into reality
            </h2>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              Every successful project starts with clear planning. Share your requirements below
              and our team will review the brief before preparing a detailed proposal and
              quotation.
            </p>
          </div>
        </div>
      </section>
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <aside className="space-y-8 lg:col-span-1">
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">What happens next</h3>
              <ol className="mt-6 space-y-5 text-sm text-ink-soft">
                {[
                  "We review your project brief.",
                  "A specialist reaches out to clarify scope.",
                  "You receive a written proposal and quotation.",
                  "We agree on next steps and mobilise.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground font-semibold text-xs">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl bg-ink text-white p-8">
              <h3 className="font-display text-lg font-semibold">Prefer to talk?</h3>
              <p className="mt-3 text-white/70 text-sm">
                Call us directly and speak to a project consultant.
              </p>
              <a
                href="tel:+233555771670"
                className="mt-6 block font-display text-2xl font-bold text-brand"
              >
                +233 (0) 555 771 670
              </a>
              <a
                href="tel:+233540745556"
                className="mt-2 block font-display text-2xl font-bold text-brand"
              >
                +233 (0) 540 745 556
              </a>
            </div>
          </aside>

          <form
            onSubmit={onSubmit}
            noValidate
            className="lg:col-span-2 rounded-2xl border border-border bg-card p-8 md:p-10 space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full name" name="name" required error={errors.name} />
              <Field label="Email" name="email" type="email" required error={errors.email} />
              <Field label="Phone" name="phone" type="tel" required error={errors.phone} />
              <Field label="Organisation (optional)" name="organisation" error={errors.organisation} />
              <div className="space-y-2">
                <label className="block text-sm font-medium text-ink" htmlFor="service">
                  Service required *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full rounded-md border border-input bg-background px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                  defaultValue=""
                >
                  <option value="" disabled>Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="text-xs text-destructive">{errors.service}</p>}
              </div>
              <Field label="Project location" name="location" required error={errors.location} />
              <Field label="Estimated budget (optional)" name="budget" placeholder="e.g. GHS 500,000+" />
              <Field label="Preferred timeline (optional)" name="timeline" placeholder="e.g. Q2 2026" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-ink" htmlFor="message">
                Project details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                maxLength={2000}
                className="w-full rounded-md border border-input bg-background px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="Describe the scope, size and objectives of your project."
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="inline-flex w-full md:w-auto items-center justify-center rounded-md bg-brand px-8 py-4 text-sm font-semibold text-brand-foreground hover:bg-brand/90 transition-colors"
            >
              Submit quote request
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-ink" htmlFor={name}>
        {label}
        {required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
