import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FolderGit2, CircleCheck } from "lucide-react";
import { ProjectCard, projects } from "./projects";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const updates = [
  {
    date: "Jun 2026",
    content: <>1 paper accepted to <strong>MIUA 2026</strong>. See you in Dublin! 🇮🇪</>,
  },
];

function HomePage() {
  return (
    <SiteLayout>
      <Home />
    </SiteLayout>
  );
}

function Home() {
  const featured = projects.slice(0, 2);
  return (
    <article className="space-y-10">
      <section className="space-y-4 text-[15px] leading-7">
        <p>
          I am a research postgraduate student at Imperial College London. Previously, I worked as Product Manager
          at several companies (MIFX, Bonza, Pomona) and founded a startup Allure AI (acquired by IDX:TLKM).
        </p>
        <p>
          My research focuses on Speech/Audio AI, Computer Vision, and
          Multimodal Large Language Models (MLLMs). My main area of research is in healthcare applications.
        </p>
      </section>


      <section>
        <div className="mb-6 pb-2 border-b border-border">
          <h2 className="text-2xl font-serif font-semibold flex items-center gap-2">
            <CircleCheck className="w-6 h-6 text-primary" />
            Updates
          </h2>
        </div>

        <div className="flex flex-col">
          {updates.map((update, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row gap-1 sm:gap-8 py-4 border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors rounded-sm px-2 -mx-2"
            >
              <div className="w-28 shrink-0 text-sm font-medium text-muted-foreground sm:pt-0.5">
                {update.date}
              </div>
              <div className="flex-1 text-sm leading-relaxed text-foreground">
                {update.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-border">
          <h2 className="text-2xl font-serif font-semibold flex items-center gap-2">
            <FolderGit2 className="w-6 h-6 text-primary" />
            Projects
          </h2>
          <Link to="/projects" className="text-sm no-underline hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </article>
  );
}
