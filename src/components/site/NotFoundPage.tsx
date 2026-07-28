import { Link } from "@tanstack/react-router";
import { Home, Mail, AlertCircle } from "lucide-react";

export function NotFoundPage() {
  return (
    <section className="section-y flex flex-1 items-center">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <div className="grid h-20 w-20 place-items-center rounded-2xl bg-brand/10 text-brand">
              <AlertCircle className="h-10 w-10" />
            </div>
          </div>

          <p className="mt-8 font-display text-[8rem] font-bold leading-none tracking-tighter text-ink md:text-[10rem]">
            404
          </p>

          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Page not found
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-lg text-ink-soft leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Check the URL, or head
            back to our homepage.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90 sm:w-auto"
            >
              <Home className="h-4 w-4" />
              Return Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
