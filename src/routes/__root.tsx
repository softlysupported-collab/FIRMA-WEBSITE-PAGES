import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { WhatsAppButton } from "../components/site/WhatsAppButton";
import { NotFoundPage } from "../components/site/NotFoundPage";
import ogImage from "../assets/firma-projektz-og.png.asset.json";

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-ink">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Construction Company in Ghana | Firma Projektz Ltd" },
      {
        name: "description",
        content:
          "Premium construction, civil engineering, design-build and project management services in Ghana. Landmark projects for government, corporate, industrial and residential clients — delivered end-to-end.",
      },
      {
        name: "keywords",
        content:
          "construction company Ghana, civil engineering Ghana, design and build Ghana, project management Ghana, building contractors Ghana, infrastructure Ghana, Firma Projektz",
      },
      { name: "author", content: "Firma Projektz Ltd" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "Firma Projektz Ltd" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GH" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@FirmaProjektz" },
      { property: "og:image", content: ogImage.url },
      { name: "twitter:image", content: ogImage.url },
      { name: "theme-color", content: "#F58220" },
      { name: "geo.region", content: "GH" },
      { name: "geo.placename", content: "Accra, Ghana" },
      { property: "og:title", content: "Construction Company in Ghana | Firma Projektz Ltd" },
      { name: "twitter:title", content: "Construction Company in Ghana | Firma Projektz Ltd" },
      { property: "og:description", content: "Premium construction, civil engineering, design-build and project management services in Ghana. Landmark projects for government, corporate, industrial and residential clients — delivered end-to-end." },
      { name: "twitter:description", content: "Premium construction, civil engineering, design-build and project management services in Ghana. Landmark projects for government, corporate, industrial and residential clients — delivered end-to-end." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/dGoIjInjkYQlzohn9eRimyeW5gn2/social-images/social-1784866160296-ChatGPT_Image_Jul_4,_2026,_04_34_28_AM.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/dGoIjInjkYQlzohn9eRimyeW5gn2/social-images/social-1784866160296-ChatGPT_Image_Jul_4,_2026,_04_34_28_AM.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/x-icon", sizes: "16x16", href: "/favicon.ico" },
      { rel: "icon", type: "image/x-icon", sizes: "32x32", href: "/favicon.ico" },
      { rel: "icon", type: "image/x-icon", sizes: "192x192", href: "/favicon.ico" },
      { rel: "icon", type: "image/x-icon", sizes: "512x512", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "Firma Projektz Ltd",
          alternateName: "Firma Projektz",
          description:
            "Ghanaian construction, civil engineering, design-build and project management firm delivering premium buildings and infrastructure.",
          areaServed: { "@type": "Country", name: "Ghana" },
          address: { "@type": "PostalAddress", addressCountry: "GH", addressRegion: "Greater Accra", addressLocality: "Accra" },
          telephone: "+233-555-771-670",
          knowsAbout: [
            "Building Construction",
            "Civil Engineering",
            "Design and Build",
            "Project Management",
            "Industrial Construction",
            "Hospital Construction",
            "Academic Infrastructure",
            "Energy Infrastructure",
            "Residential Apartments",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </QueryClientProvider>
  );
}
