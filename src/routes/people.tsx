import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/people")({
  head: () => ({
    meta: [
      { title: "People — Your Name" },
      { name: "description", content: "Current and former students, postdocs, and collaborators." },
      { property: "og:title", content: "People — Your Name" },
      { property: "og:description", content: "Current and former students, postdocs, and collaborators." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <People />
    </SiteLayout>
  ),
});

type Person = { name: string; role: string; note?: string };

const current: Person[] = [
  { name: "Student One", role: "PhD Student", note: "Working on [topic]." },
  { name: "Student Two", role: "PhD Student", note: "Working on [topic]." },
  { name: "Postdoc One", role: "Postdoctoral Researcher", note: "[Research area]." },
  { name: "Student Three", role: "MSc Student", note: "Thesis on [topic]." },
];

const alumni: Person[] = [
  { name: "Alumnus One", role: "PhD, Year", note: "Now at [Institution / Company]." },
  { name: "Alumnus Two", role: "Postdoc, Year", note: "Now at [Institution]." },
];

function PersonCard({ p }: { p: Person }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-14 h-14 rounded-full bg-muted shrink-0 flex items-center justify-center text-sm font-serif text-muted-foreground">
        {p.name.split(" ").map((n) => n[0]).join("")}
      </div>
      <div>
        <div className="font-semibold">{p.name}</div>
        <div className="text-sm text-muted-foreground">{p.role}</div>
        {p.note && <div className="text-sm mt-0.5">{p.note}</div>}
      </div>
    </div>
  );
}

function People() {
  return (
    <article className="space-y-10">
      <section>
        <h2 className="text-2xl font-serif font-semibold mb-6 pb-2 border-b border-border">Current Group</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {current.map((p, i) => <PersonCard key={i} p={p} />)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold mb-6 pb-2 border-b border-border">Alumni</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {alumni.map((p, i) => <PersonCard key={i} p={p} />)}
        </div>
      </section>
    </article>
  );
}
