import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Flame } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const news = [
  "Welcome message — replace these news items with your own latest updates and announcements.",
  "Paper accepted at [Conference Name] — congratulations to all collaborators.",
  "Invited talk at [Venue] on [Topic]. Slides available upon request.",
  "Our project [Project Name] received the [Award Name].",
  "Serving as Area Chair for [Conference Year].",
];

function HomePage() {
  return (
    <SiteLayout>
      <Home />
    </SiteLayout>
  );
}

function Home() {
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
        <h2 className="text-2xl font-serif font-semibold flex items-center gap-2 mb-4 pb-2 border-b border-border">
          <Flame className="w-6 h-6 text-orange-500" />
          News
        </h2>
        <ul className="space-y-2 list-disc pl-5 marker:text-muted-foreground">
          {news.map((item, i) => (
            <li key={i} className="leading-7">{item}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
