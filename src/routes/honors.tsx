import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Award } from "lucide-react";

export const Route = createFileRoute("/honors")({
  head: () => ({
    meta: [
      { title: "Honors and Awards — Your Name" },
      { name: "description", content: "Awards, honors, and recognitions." },
      { property: "og:title", content: "Honors and Awards — Your Name" },
      { property: "og:description", content: "Awards, honors, and recognitions." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <Honors />
    </SiteLayout>
  ),
});

const honors = [
  { year: "2025", text: "Distinguished Research Award, [Institution]." },
  { year: "2024", text: "Best Paper Award, [Conference]." },
  { year: "2023", text: "Outstanding Reviewer Award, [Conference]." },
  { year: "2022", text: "Early Career Researcher Award, [Society]." },
  { year: "2021", text: "Travel Grant, [Funding Body]." },
];

function Honors() {
  return (
    <article>
      <h2 className="text-2xl font-serif font-semibold mb-6 pb-2 border-b border-border flex items-center gap-2">
        <Award className="w-6 h-6 text-amber-500" />
        Honors and Awards
      </h2>
      <ul className="space-y-4">
        {honors.map((h, i) => (
          <li key={i} className="grid grid-cols-[60px_1fr] gap-4 leading-7">
            <span className="text-sm font-semibold text-muted-foreground pt-0.5">{h.year}</span>
            <span>{h.text}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
