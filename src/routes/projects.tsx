import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Github, AudioLines, ScanHeart, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Your Name" },
      { name: "description", content: "Selected research and engineering projects." },
      { property: "og:title", content: "Projects — Your Name" },
      { property: "og:description", content: "Selected research and engineering projects." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <Projects />
    </SiteLayout>
  ),
});

export type Project = {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  github?: string;
};

// Edit this list to add/remove your projects.
// Browse icons at https://lucide.dev/icons and import them above.
export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "Short description of what the project does, the techniques used, and the impact or results achieved.",
    icon: AudioLines,
    category: "Speech AI",
    github: "https://github.com/your-username/project-one",
  },
  {
    title: "Project Two",
    description:
      "A brief overview of the project goals, dataset, models, and notable findings or contributions.",
    icon: ScanHeart,
    category: "Medical Imaging",
    github: "https://github.com/your-username/project-two",
  },
];

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <article className="group rounded-lg border border-border bg-card overflow-hidden flex flex-col transition-shadow hover:shadow-md">
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-primary shrink-0" strokeWidth={2} />
          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
            {project.category}
          </span>
        </div>
        <h3 className="text-lg font-serif font-semibold leading-snug">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-6 flex-1">{project.description}</p>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium no-underline hover:underline w-fit"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
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
