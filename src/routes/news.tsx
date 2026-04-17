import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — Your Name" },
      { name: "description", content: "Latest news, talks, and announcements." },
      { property: "og:title", content: "News — Your Name" },
      { property: "og:description", content: "Latest news, talks, and announcements." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <News />
    </SiteLayout>
  ),
});

const items = [
  { date: "2025", text: "Replace with a recent news item, e.g. 'Paper X accepted at Conference Y.'" },
  { date: "2025", text: "Invited talk at [Venue] on [Topic]." },
  { date: "2024", text: "Our group received [Award / Grant Name]." },
  { date: "2024", text: "New preprint released: [Title]." },
  { date: "2023", text: "Joined [Institution] as [Role]." },
];

function News() {
  return (
    <article>
      <h2 className="text-2xl font-serif font-semibold mb-6 pb-2 border-b border-border">News</h2>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="grid grid-cols-[60px_1fr] gap-4 leading-7">
            <span className="text-sm font-semibold text-muted-foreground pt-0.5">{item.date}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
