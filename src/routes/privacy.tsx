import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, FileText, Cookie, Lock, UserCheck, Mail } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Firma Projektz Ltd" },
      {
        name: "description",
        content:
          "Read the Firma Projektz Ltd Privacy Policy to learn how we collect, use, protect and manage your personal information.",
      },
      { property: "og:title", content: "Privacy Policy | Firma Projektz Ltd" },
      {
        property: "og:description",
        content: "How Firma Projektz Ltd collects, uses and protects your personal information.",
      },
      { property: "og:url", content: "/privacy" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Privacy Policy | Firma Projektz Ltd" },
      { name: "twitter:description", content: "How we handle and protect your personal information." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  const effectiveDate = "July 24, 2026";

  const sections = [
    {
      id: "collect",
      icon: FileText,
      title: "Information We Collect",
      content: (
        <>
          <p>
            We collect information that you voluntarily provide when you contact us, request a quote,
            subscribe to updates or engage with our services. This may include your name, email address,
            phone number, company name, project details and any other details you choose to share.
          </p>
          <p>
            We also collect certain technical information automatically when you visit our website, such as
            your IP address, browser type, device information, pages visited and the dates and times of
            your visits. This helps us understand how visitors use our site and improve their experience.
          </p>
        </>
      ),
    },
    {
      id: "use",
      icon: UserCheck,
      title: "How We Use Your Information",
      content: (
        <>
          <p>
            We use the information we collect to respond to your enquiries, prepare accurate project
            quotations, provide construction and engineering services, communicate project updates and
            improve our website and client experience.
          </p>
          <p>
            With your consent, we may also send you occasional updates about our projects, services and
            company news. You can opt out of marketing communications at any time by contacting us or using
            the unsubscribe link in our emails.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      icon: Cookie,
      title: "Cookies & Tracking Technologies",
      content: (
        <>
          <p>
            Our website may use cookies and similar technologies to enhance your browsing experience,
            analyse site traffic and understand how visitors interact with our content. Cookies are small
            text files stored on your device that help us remember preferences and improve site
            functionality.
          </p>
          <p>
            You can manage or disable cookies through your browser settings. Please note that disabling
            certain cookies may affect how some features of our website function.
          </p>
        </>
      ),
    },
    {
      id: "third-party",
      icon: Shield,
      title: "Third-Party Services",
      content: (
        <>
          <p>
            We may use trusted third-party services to help operate our website, manage communications and
            analyse website usage. These providers are contractually required to handle your information
            securely and only process it for the purposes we specify.
          </p>
          <p>
            We do not sell, rent or trade your personal information to third parties for marketing purposes.
            Any sharing of information is limited to what is necessary to deliver our services or comply with
            legal obligations.
          </p>
        </>
      ),
    },
    {
      id: "security",
      icon: Lock,
      title: "Data Security",
      content: (
        <>
          <p>
            We take reasonable administrative, technical and physical measures to protect your personal
            information from unauthorised access, disclosure, alteration or destruction. This includes
            secure hosting, access controls and regular review of our data handling practices.
          </p>
          <p>
            While we work hard to protect your data, no method of transmission over the internet or
            electronic storage is completely secure. We encourage you to contact us immediately if you
            suspect any unauthorised access to your information.
          </p>
        </>
      ),
    },
    {
      id: "rights",
      icon: UserCheck,
      title: "Your Rights",
      content: (
        <>
          <p>
            Depending on your location, you may have the right to access, correct, update or delete the
            personal information we hold about you. You may also have the right to object to or restrict
            certain processing activities.
          </p>
          <p>
            To exercise your rights or ask questions about how we handle your data, please contact us
            using the details below. We will respond to your request in accordance with applicable laws and
            within a reasonable timeframe.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page explains how Firma Projektz Ltd collects, uses, protects and manages your personal information when you visit our website or engage with our services."
      />

      <section className="section-y">
        <div className="container-x max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-brand" />
              <span>Effective date: {effectiveDate}</span>
            </div>
            <p className="mt-4 text-ink-soft leading-relaxed">
              This Privacy Policy is maintained by Firma Projektz Ltd to answer common questions about
              how we handle personal information. It applies to information collected through this
              website and related communications. We may update this policy from time to time, and the
              latest version will always be available on this page.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {sections.map((section) => (
              <article key={section.id} id={section.id}>
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                    <section.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-ink-soft leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-surface-alt p-8 md:p-12">
            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand text-brand-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Contact Us</h2>
                <p className="mt-4 text-ink-soft leading-relaxed">
                  If you have any questions, concerns or requests regarding this Privacy Policy or how we
                  handle your personal information, please reach out to us.
                </p>
                <div className="mt-6 space-y-2 text-ink-soft">
                  <p>
                    <span className="font-semibold text-ink">Email:</span>{" "}
                    <a href="mailto:firmaprojektz@gmail.com" className="text-brand hover:underline">
                      firmaprojektz@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Phone:</span>{" "}
                    <a href="tel:+2330555771670" className="text-brand hover:underline">
                      +233 (0) 555 771 670
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Address:</span> DTD: BAE 30/37 Sakumono,
                    Tema, Greater Accra Region, Ghana
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
