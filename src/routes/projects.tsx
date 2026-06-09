import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  Github,
  AudioLines,
  ScanHeart,
  FileText,
  BookOpen,
  Quote,
  AlignLeft,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Al Varrel Putra Kusuma" },
      { name: "description", content: "Selected research and engineering projects." },
      { property: "og:title", content: "Projects — Al Varrel Putra Kusuma" },
      { property: "og:description", content: "Selected research and engineering projects." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <Projects />
    </SiteLayout>
  ),
});

export type ProjectLinks = {
  paper?: string;
  github?: string;
  arxiv?: string;
  bibtex?: string;
  abstract?: string;
};

export type Project = {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  venue?: string; // conference / journal name shown above the pill
  thumbnail?: string; // image URL or imported asset
  links?: ProjectLinks;
};

// Edit this list to add/remove your projects.
// Browse icons at https://lucide.dev/icons and import them above.
export const projects: Project[] = [
  {
    title: "AphaVoice",
    description:
      "Text-to-speech and automatic speech recognition (ASR) for aphasia patients",
    icon: AudioLines,
    category: "Speech AI",
    venue: "(Under Review)",
    thumbnail: "https://res.cloudinary.com/dwgwif5hc/image/upload/v1781012348/Figure8_izz5tg.jpg",
    links: {
      github: "https://github.com/varrelkusuma/MedEmoji-TTS",
    },
  },
  {
    title: "Transparent CXR",
    description:
      "Generalizable and interpretable deep learning for chest X-ray analysis",
    icon: ScanHeart,
    category: "Vision AI",
    venue: "MIUA 2026",
    thumbnail: "https://res.cloudinary.com/dwgwif5hc/image/upload/v1781012643/AphaVoice-TTS_inbjkx.jpg",
    links: {
      github: "https://github.com/varrelkusuma/Reliable-CXR-AI-Pipeline",
    },
  },
];

const LINK_META: Record<
  keyof ProjectLinks,
  { label: string; icon: LucideIcon }
> = {
  paper: { label: "Paper", icon: FileText },
  github: { label: "GitHub", icon: Github },
  arxiv: { label: "arXiv", icon: BookOpen },
  bibtex: { label: "BibTeX", icon: Quote },
  abstract: { label: "Abstract", icon: AlignLeft },
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const linkEntries = (Object.keys(LINK_META) as (keyof ProjectLinks)[])
    .filter((k) => project.links?.[k])
    .map((k) => ({ key: k, href: project.links![k]!, ...LINK_META[k] }));

  return (
    <article className="group rounded-lg border border-border bg-card overflow-hidden flex flex-col transition-shadow hover:shadow-md">
      {project.thumbnail && (
        <div className="aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between gap-2">
          {project.venue ? (
            <div className="text-xs uppercase tracking-wide text-muted-foreground font-medium">
              {project.venue}
            </div>
          ) : (
            <span />
          )}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-2.5 py-1 text-xs font-medium shrink-0">
            <Icon className="w-3 h-3" strokeWidth={2} />
            {project.category}
          </span>
        </div>
        <h3 className="text-lg font-serif font-semibold leading-snug">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-6 flex-1">{project.description}</p>
        {linkEntries.length > 0 && (
          <div className="pt-1">
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1.5 text-sm font-medium rounded-md border border-border bg-background px-3 py-1.5 hover:bg-accent transition-colors">
                Resources
                <ChevronDown className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {linkEntries.map(({ key, href, label, icon: LinkIcon }) => (
                  <DropdownMenuItem key={key} asChild>
                    <a href={href} target="_blank" rel="noreferrer" className="cursor-pointer">
                      <LinkIcon className="w-4 h-4" />
                      {label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <article>
      <h2 className="text-2xl font-serif font-semibold mb-6 pb-2 border-b border-border">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </article>
  );
}
