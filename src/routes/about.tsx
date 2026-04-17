import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Your Name" },
      { name: "description", content: "Biography, education, and academic background." },
      { property: "og:title", content: "About — Your Name" },
      { property: "og:description", content: "Biography, education, and academic background." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <About />
    </SiteLayout>
  ),
});

function About() {
  return (
    <article className="space-y-10">
      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4 pb-2 border-b border-border">Biography</h2>
        <div className="space-y-4 leading-7">
          <p>
            Replace this with a longer narrative biography. Talk about your background,
            how you entered the field, the research questions that drive you, and the
            communities you collaborate with.
          </p>
          <p>
            Mention your collaborators, students you've supervised, and the broader
            impact of your work.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4 pb-2 border-b border-border">Education</h2>
        <ul className="space-y-3">
          <li>
            <div className="font-semibold">Ph.D. in [Field]</div>
            <div className="text-sm text-muted-foreground">[University Name], [Year]</div>
          </li>
          <li>
            <div className="font-semibold">M.Sc. in [Field]</div>
            <div className="text-sm text-muted-foreground">[University Name], [Year]</div>
          </li>
          <li>
            <div className="font-semibold">B.Sc. in [Field]</div>
            <div className="text-sm text-muted-foreground">[University Name], [Year]</div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4 pb-2 border-b border-border">Experience</h2>
        <ul className="space-y-3">
          <li>
            <div className="font-semibold">[Current Title]</div>
            <div className="text-sm text-muted-foreground">[Institution] · [Year]–Present</div>
          </li>
          <li>
            <div className="font-semibold">[Previous Title]</div>
            <div className="text-sm text-muted-foreground">[Institution] · [Year]–[Year]</div>
          </li>
        </ul>
      </section>
    </article>
  );
}
