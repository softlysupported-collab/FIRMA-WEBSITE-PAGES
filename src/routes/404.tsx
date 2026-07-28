import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/site/NotFoundPage";

export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [
      { title: "Page Not Found — Firma Projektz Ltd" },
      {
        name: "description",
        content:
          "The page you are looking for does not exist. Return to the Firma Projektz Ltd homepage or contact us for assistance.",
      },
      { property: "og:title", content: "Page Not Found — Firma Projektz Ltd" },
      {
        property: "og:description",
        content:
          "The requested page could not be found on the Firma Projektz Ltd website.",
      },
      { property: "og:url", content: "/404" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "/404" }],
  }),
  component: NotFoundPage,
});
