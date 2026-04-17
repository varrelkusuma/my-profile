import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Award, Building2, type LucideIcon } from "lucide-react";

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

type Honor = { year: string; text: string; icon: LucideIcon };

const honors: Honor[] = [
  { year: "2025", text: "Distinguished Research Award, [Institution].", icon: Building2 },
  { year: "2024", text: "Best Paper Award, [Conference].", icon: Building2 },
  { year: "2023", text: "Outstanding Reviewer Award, [Conference].", icon: Building2 },
  { year: "2022", text: "Early Career Researcher Award, [Society].", icon: Building2 },
  { year: "2021", text: "Travel Grant, [Funding Body].", icon: Building2 },
];

function Honors() {
  return (
    <article>
      <h2 className="text-2xl font-serif font-semibold mb-6 pb-2 border-b border-border flex items-center gap-2">
        <Award className="w-6 h-6 text-amber-500" />
        Honors and Awards
      </h2>
      <ul className="space-y-4">
        {honors.map((h, i) => {
          const Icon = h.icon;
          return (
            <li key={i} className="grid grid-cols-[60px_1fr_auto] gap-4 leading-7 items-start">
              <span className="text-sm font-semibold text-muted-foreground pt-0.5">{h.year}</span>
              <span>{h.text}</span>
              <Icon className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" strokeWidth={1.75} />
            </li>
          );
        })}
      </ul>
    </article>
  );
}
