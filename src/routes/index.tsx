import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FolderGit2 } from "lucide-react";
import { ProjectCard, projects } from "./projects";

export const Route = createFileRoute("/")({
  component: HomePage,
});

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
          I am a [Your Title] at [Your Institution]. Previously, I was a [Previous Role]
          at [Previous Institution] and worked with [Group / Lab Name]. I am also affiliated
          with [Affiliation], where I [brief description of role since YEAR].
        </p>
        <p>
          My research focuses on [primary research area], [secondary area], and
          [tertiary area]. These topics aim to advance [broader goal] and have
          applications in [application 1], [application 2], and [application 3].
        </p>
        <p>
          <strong>Positions Available!</strong> I am looking for motivated candidates
          for [PhD / PostDoc / RA] positions. Strong background in [requirement 1],
          [requirement 2], and prior publications in [venues] are preferred. Please
          email your CV and a short research statement.
        </p>
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
