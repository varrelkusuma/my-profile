import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ReactNode } from "react";

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
  authors: string | ReactNode;
  venue: string;
  year: string;
  focus?: string;
  links?: { label: string; href: string }[];
};

const pubs: Record<string, Pub[]> = {
  "2026": [
        {
      title: "AphaVoice: Text-to-Speech Model for Aphasia Patient Simulation",
      authors: <><strong>Al Varrel Putra Kusuma</strong>, Fernando Bello, Joshua Brown</>,
      venue: "Under Review (OpenReview)",
      focus: "Speech AI",
      year: "2027",
      links: [
        { label: "Code", href: "https://github.com/varrelkusuma/AphaVoice" },
      ],
    },
    {
      title: "Robust Pipeline for Mitigating Shortcut Learning in Multi-Pathology Chest X-Ray Classification",
      authors: <><strong>Al Varrel Putra Kusuma</strong>, Federico E. Boiardi, Antoine D. Lain, Joram M. Posma</>,
      venue: "MIUA 2026",
      focus: "Medical Imaging",
      year: "2026",
      links: [
        { label: "Code", href: "https://github.com/varrelkusuma/Reliable-CXR-AI-Pipeline" },
      ],
    },
  ],
};

function Publications() {
  return (
    <article className="space-y-12"> {/* Increased overall section spacing */}
      <header>
        <h2 className="text-2xl font-serif font-semibold mb-3 pb-2 border-b border-border">Publications</h2>
        <p className="text-sm text-muted-foreground">
          Selected publications. See <a href="#" className="underline hover:text-foreground transition-colors">Google Scholar</a> for the full list.
        </p>
      </header>

      {Object.entries(pubs).map(([year, list]) => (
        <section key={year}>
          <h3 className="text-lg font-serif font-semibold mb-6 text-foreground/80">{year}</h3>
          <ul className="space-y-10"> 
            {list.map((p, i) => (
              <li key={i} className="flex flex-col gap-2.5">
                <div className="text-base font-semibold leading-snug text-foreground">
                  {p.title}
                </div>
                
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {p.authors}
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-0.5">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                    {p.venue}
                  </span>
                  
                  {p.focus && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/50">
                      {p.focus}
                    </span>
                  )}
                </div>

                {p.links && (
                  <div className="text-sm mt-1.5 flex flex-wrap gap-x-4 gap-y-2">
                    {p.links.map((l, j) => (
                      <a 
                        key={j} 
                        href={l.href}
                        className="text-primary/80 hover:text-primary hover:underline underline-offset-4 transition-colors font-medium"
                      >
                        [{l.label}]
                      </a>
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