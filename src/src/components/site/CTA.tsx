import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 md:px-16 md:py-24 text-white">
          <div
            className="absolute inset-0 opacity-20"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, oklch(0.72 0.17 55) 0%, transparent 45%), radial-gradient(circle at 80% 80%, oklch(0.72 0.17 55) 0%, transparent 45%)",
            }}
          />
          <div className="relative max-w-3xl">
            <span className="eyebrow text-brand">Let's build together</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight">
              Ready to build with confidence?
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              From residential and commercial to industrial and civil engineering projects, Firma
              Projektz Ltd combines technical expertise with disciplined delivery to turn your
              vision into reality — safely, on time and on budget.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground hover:bg-brand/90 transition-colors"
              >
                Request a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Contact our team
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
            <span>✓ Experienced professionals</span>
            <span>✓ Quality workmanship</span>
            <span>✓ On-time delivery</span>
            <span>✓ Client-focused solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
