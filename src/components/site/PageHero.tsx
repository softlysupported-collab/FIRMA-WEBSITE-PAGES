import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            width={1600}
            height={907}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40"
            aria-hidden="true"
          />
        </>
      ) : (
        <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand blur-3xl" />
        </div>
      )}
      <div className="container-x relative pt-28 pb-20 md:pt-40 md:pb-28">
        <span className="eyebrow text-brand">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl md:text-6xl font-bold leading-[1.05] text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
