import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Al Varrel Putra Kusuma" },
      { name: "description", content: "Selected publications, papers, and preprints." },
      { property: "og:title", content: "Publications — Al Varrel Putra Kusuma" },
      { property: "og:description", content: "Selected publications, papers, and preprints." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <Publications />
    </SiteLayout>
  ),
});

type Pub = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  links?: { label: string; href: string }[];
};

const pubs: Record<string, Pub[]> = {
  "2027": [
    {
      title: "(Placeholder) Working paper in Speech AI",
      authors: "Author One, Author Two, Author Three",
      venue: "Conference / Journal Name",
      year: "2027",
      links: [
        { label: "Publication", href: "#" },
        { label: "Code", href: "#" },
        { label: "arXiv", href: "#" },
      ],
    },
  ],
  "2026": [
    {
      title: "Robust Pipeline for Mitigating Shortcut Learning in Multi-Pathology Chest X-Ray Classification",
      authors: "Al Varrel Putra Kusuma, Federico E. Boiardi, Antoine D. Lain, Joram M. Posma",
      venue: "MIUA 2026",
      year: "2026",
      links: [
        { label: "Publication", href: "#" },
        { label: "Code", href: "#" },
        { label: "arXiv", href: "#" },
      ],
    },
  ],
};

function Publications() {
  return (
    <article className="space-y-10">
      <header>
        <h2 className="text-2xl font-serif font-semibold mb-3 pb-2 border-b border-border">Publications</h2>
        <p className="text-sm text-muted-foreground">
          Selected publications. See <a href="#" className="underline">Google Scholar</a> for the full list.
        </p>
      </header>

      {Object.entries(pubs).map(([year, list]) => (
        <section key={year}>
          <h3 className="text-lg font-serif font-semibold mb-4 text-muted-foreground">{year}</h3>
          <ul className="space-y-6">
            {list.map((p, i) => (
              <li key={i} className="leading-7">
                <div className="font-semibold">{p.title}</div>
                <div className="text-sm text-muted-foreground italic">{p.authors}</div>
                <div className="text-sm">
                  <span className="font-medium">{p.venue}</span>, {p.year}
                </div>
                {p.links && (
                  <div className="text-sm mt-1 flex flex-wrap gap-x-3">
                    {p.links.map((l, j) => (
                      <a key={j} href={l.href}>[{l.label}]</a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  );
}
