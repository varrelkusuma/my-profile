import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Your Name" },
      { name: "description", content: "Selected publications, papers, and preprints." },
      { property: "og:title", content: "Publications — Your Name" },
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
  "2025": [
    {
      title: "[Paper Title Goes Here] — replace with your work",
      authors: "Author One, Author Two, Your Name",
      venue: "Conference / Journal Name",
      year: "2025",
      links: [
        { label: "PDF", href: "#" },
        { label: "Code", href: "#" },
        { label: "BibTeX", href: "#" },
      ],
    },
    {
      title: "[Another Paper Title]",
      authors: "Your Name, Coauthor A, Coauthor B",
      venue: "Conference Name",
      year: "2025",
      links: [
        { label: "PDF", href: "#" },
        { label: "Project", href: "#" },
      ],
    },
  ],
  "2024": [
    {
      title: "[2024 Paper Title]",
      authors: "Your Name, Collaborator",
      venue: "Journal / Conference",
      year: "2024",
      links: [{ label: "PDF", href: "#" }],
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
