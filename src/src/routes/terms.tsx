import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe,
  FileCheck,
  Copyright,
  AlertTriangle,
  ExternalLink,
  RefreshCw,
  Scale,
  Mail,
  Gavel,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Firma Projektz Ltd" },
      {
        name: "description",
        content:
          "Read the Firma Projektz Ltd Terms of Use — the rules, responsibilities and limitations governing use of our website and services.",
      },
      { property: "og:title", content: "Terms of Use | Firma Projektz Ltd" },
      {
        property: "og:description",
        content: "Terms, conditions and governing law for using the Firma Projektz Ltd website and services.",
      },
      { property: "og:url", content: "/terms" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Terms of Use | Firma Projektz Ltd" },
      { name: "twitter:description", content: "Rules and terms for using our website and services." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  const effectiveDate = "July 24, 2026";

  const sections = [
    {
      id: "website-use",
      icon: Globe,
      title: "Website Use",
      content: (
        <>
          <p>
            By accessing and using this website, you accept and agree to be bound by these Terms of Use.
            If you do not agree with any part of these terms, please discontinue use of the website
            immediately.
          </p>
          <p>
            This website is intended to provide information about Firma Projektz Ltd, our construction
            and engineering services, completed projects and ways to contact or engage with us. You agree
            to use the website only for lawful purposes and in a manner that does not infringe the rights of
            others or restrict their use and enjoyment of the site.
          </p>
        </>
      ),
    },
    {
      id: "accuracy",
      icon: FileCheck,
      title: "Accuracy of Information",
      content: (
        <>
          <p>
            We make every reasonable effort to ensure that the information on this website is accurate,
            complete and up to date. However, construction specifications, project details, service
            descriptions and other content may change over time and may not always reflect the latest
            developments.
          </p>
          <p>
            Any information provided on this website is for general guidance only and does not constitute
            professional advice, a binding quotation or a contractual offer. Always contact us directly to
            confirm details before making decisions based on website content.
          </p>
        </>
      ),
    },
    {
      id: "intellectual-property",
      icon: Copyright,
      title: "Intellectual Property",
      content: (
        <>
          <p>
            All content on this website — including text, images, graphics, logos, project photography,
            videos, icons, trademarks and downloadable materials — is the property of Firma Projektz Ltd or
            its content suppliers and is protected by copyright, trademark and other intellectual property
            laws.
          </p>
          <p>
            You may view, download and print pages from the website for personal, non-commercial reference
            only. You may not reproduce, republish, distribute, modify, transmit or exploit any content for
            commercial purposes without our prior written permission.
          </p>
        </>
      ),
    },
    {
      id: "liability",
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: (
        <>
          <p>
            Firma Projektz Ltd shall not be liable for any direct, indirect, incidental, consequential or
            punitive damages arising out of your access to, use of or inability to use this website, even
            if we have been advised of the possibility of such damages.
          </p>
          <p>
            This includes, but is not limited to, damages resulting from errors, omissions, interruptions,
            defects, delays in operation, computer viruses, loss of data or unauthorised access. Your use
            of the website is entirely at your own risk.
          </p>
        </>
      ),
    },
    {
      id: "external-links",
      icon: ExternalLink,
      title: "External Links",
      content: (
        <>
          <p>
            This website may contain links to third-party websites, resources or services that are not owned
            or controlled by Firma Projektz Ltd. These links are provided for convenience and informational
            purposes only.
          </p>
          <p>
            We do not endorse, guarantee or assume responsibility for the content, privacy practices or
            accuracy of any third-party websites. We encourage you to review the terms and privacy policies
            of any external sites you visit.
          </p>
        </>
      ),
    },
    {
      id: "changes",
      icon: RefreshCw,
      title: "Changes to Terms",
      content: (
        <>
          <p>
            We reserve the right to update, amend or replace these Terms of Use at any time without prior
            notice. Changes take effect immediately upon posting to this page, and the updated effective date
            will be reflected at the top of the document.
          </p>
          <p>
            Continued use of the website after any changes constitutes your acceptance of the revised terms.
            We recommend reviewing this page periodically to stay informed of any updates.
          </p>
        </>
      ),
    },
    {
      id: "governing-law",
      icon: Scale,
      title: "Governing Law",
      content: (
        <>
          <p>
            These Terms of Use are governed by and construed in accordance with the laws of the Republic of
            Ghana. Any disputes arising from or relating to the use of this website shall be subject to the
            exclusive jurisdiction of the courts of Ghana.
          </p>
          <p>
            If any provision of these terms is found to be invalid or unenforceable under Ghanaian law, the
            remaining provisions shall continue in full force and effect.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="These Terms of Use govern your access to and use of the Firma Projektz Ltd website and outline the responsibilities, rights and limitations that apply."
      />

      <section className="section-y">
        <div className="container-x max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Gavel className="h-4 w-4 text-brand" />
              <span>Effective date: {effectiveDate}</span>
            </div>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Please read these Terms of Use carefully before using our website. By continuing to browse or
              interact with this site, you agree to comply with and be bound by the following terms and
              conditions, together with our Privacy Policy and any other applicable notices.
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
                <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Contact Information</h2>
                <p className="mt-4 text-ink-soft leading-relaxed">
                  If you have any questions about these Terms of Use, our Privacy Policy or any other legal
                  matter, please contact us using the details below.
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
