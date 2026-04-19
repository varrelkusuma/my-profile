import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Award, Medal, Trophy, Sparkles, type LucideIcon } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import AllureAI from '../assets/allureai.jpg';
import Imperial from '../assets/imperial.png';
import ITB from '../assets/itb.png';
import SMAN2 from '../assets/sman2.jpg';

export const Route = createFileRoute("/honors")({
  head: () => ({
    meta: [
      { title: "Honors and Awards — Al Varrel Putra Kusuma" },
      { name: "description", content: "Awards, honors, and recognitions." },
      { property: "og:title", content: "Honors and Awards — Al Varrel Putra Kusuma" },
      { property: "og:description", content: "Awards, honors, and recognitions." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <Honors />
    </SiteLayout>
  ),
});

type Category = "grant & scholarship" | "honors & awards" | "competitions" | "grant";
type Honor = { year: string; text: ReactNode; icon: LucideIcon | string; category: Category };

const honors: Honor[] = [
  { year: "2025", text: (<>Endowment Fund for Education Scholarship (LPDP) | Awardee. <span className="italic text-muted-foreground">[Indonesia Ministry of Finance]</span></>), icon: Imperial, category: "grant & scholarship" },
  { year: "2022", text: (<>Startup AWS Activate Credits | $20,000 | CEO/Co-Founder. <span className="italic text-muted-foreground">[AWS]</span></>), icon: AllureAI, category: "grant & scholarship" },
  { year: "2022", text: (<>Selected Startup for G-20 Digital Innovation Network. <span className="italic text-muted-foreground">[Representing Indonesia]</span></>), icon: AllureAI, category: "honors & awards" },
  { year: "2022", text: (<>Selected Startup for B-20 Business Summit. <span className="italic text-muted-foreground">[Representing Allure AI]</span></>), icon: AllureAI, category: "honors & awards" },
  { year: "2021", text: (<>Starup Pre-Seed Funding (Indigo Incubator) | $50,000 | CEO/Co-Founder. <span className="italic text-muted-foreground">[PT. Telkom Indonesia]</span></>), icon: AllureAI, category: "grant & scholarship" },
  { year: "2021", text: (<>Startup Grant (LPIK-ITB) | Rp20M | CEO/Co-Founder. <span className="italic text-muted-foreground">[Institut Teknologi Bandung]</span></>), icon: AllureAI, category: "grant & scholarship" },
  { year: "2021", text: (<>1st Winner of Kolabpreneur Startup Competition. <span className="italic text-muted-foreground">[WU Hub/Huawei Cloud]</span></>), icon: AllureAI, category: "competitions" },
  { year: "2021", text: (<>Best Pitch of Bandung Startup Pitching Day. <span className="italic text-muted-foreground">[The Greater Hub ITB]</span></>), icon: AllureAI, category: "competitions" },
  { year: "2020", text: (<>2nd Winner of Intel-Synnex Openvino Hackathon. <span className="italic text-muted-foreground">[Intel/Synnex Metro Data]</span></>), icon: AllureAI, category: "competitions" },
  { year: "2020", text: (<>Valedictorian & Cum Laude Awardee. <span className="italic text-muted-foreground">[Institut Teknologi Bandung]</span></>), icon: ITB, category: "honors & awards" },
  { year: "2020", text: (<>3x Ganesha Karsa Awardee. <span className="italic text-muted-foreground">[Institut Teknologi Bandung]</span></>), icon: ITB, category: "honors & awards" },
  { year: "2020", text: (<>3rd Winner of ITFest Business-IT Case Competition. <span className="italic text-muted-foreground">[Universitas Sumatera Utara]</span></>), icon: ITB, category: "competitions" },
  { year: "2019", text: (<>1st Winner of Information System Case Competition. <span className="italic text-muted-foreground">[Bina Nusantara University]</span></>), icon: ITB, category: "competitions" },
  { year: "2019", text: (<>1st Winner of Project Management Challenge. <span className="italic text-muted-foreground">[Project Management Institute]</span></>), icon: ITB, category: "competitions" },
  { year: "2019", text: (<>2nd Winner of Compfest XI Startup Academy. <span className="italic text-muted-foreground">[University of Indonesia]</span></>), icon: ITB, category: "competitions" },
  { year: "2018", text: (<>1st Winner of Techphoria Business-IT Case Competition. <span className="italic text-muted-foreground">[Sriwijaya University]</span></>), icon: ITB, category: "competitions" },
  { year: "2018", text: (<>2nd Winner of ITFest Business-IT Case Competition. <span className="italic text-muted-foreground">[Universitas Sumatra Utara]</span></>), icon: ITB, category: "competitions" },
  { year: "2017", text: (<>1st Winner of E-Fest Business Plan Competition. <span className="italic text-muted-foreground">[Brawijaya University]</span></>), icon: ITB, category: "competitions" },
  { year: "2015", text: (<>Top 10 in Junior Statistics Competition. <span className="italic text-muted-foreground">[Bogor Agricultural University]</span></>), icon: SMAN2, category: "competitions" },
  { year: "2015", text: (<>3rd Winner of National Indonesian Debate Competition. <span className="italic text-muted-foreground">[Indonesia Ministry of Education]</span></>), icon: SMAN2, category: "competitions" },
  { year: "2015", text: (<>4th Winner in Constitutional Debate. <span className="italic text-muted-foreground">[Padjadjaran University]</span></>), icon: SMAN2, category: "competitions" },
  { year: "2015", text: (<>1st Winner & 2nd Best Speaker of Banten Debate Competition. <span className="italic text-muted-foreground">[Indonesia Ministry of Education]</span></>), icon: SMAN2, category: "competitions" },
];

const filters: { key: Category; label: string; icon: LucideIcon }[] = [
  { key: "grant & scholarship", label: "Grant & Scholarship", icon: Award },
  { key: "honors & awards", label: "Honors & Awards", icon: Medal },
  { key: "competitions", label: "Competitions", icon: Trophy },
];

function Honors() {
  const [active, setActive] = useState<Category>("grant & scholarship");
  const filtered = honors.filter((h) => h.category === active);

  return (
    <article>
      <h2 className="text-2xl font-serif font-semibold mb-6 pb-2 border-b border-border flex items-center gap-2">
        Honors and Awards
      </h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => {
          const Icon = f.icon;
          const isActive = active === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="w-3.5 h-3.5" strokeWidth={2} />
              {f.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground italic">No items in this category yet.</p>
      ) : (
        <ul className="space-y-4">
          {filtered.map((h, i) => (
            <li key={i} className="grid grid-cols-[60px_1fr_auto] gap-4 leading-7 items-start">
              <span className="text-sm font-semibold text-muted-foreground pt-0.5">{h.year}</span>
              <span>{h.text}</span>
              {typeof h.icon === 'string' ? (
                <img
                  src={h.icon}
                  alt="Honor icon"
                  className="w-5 h-5 shrink-0 mt-0.5 object-contain rounded-sm"
                />
              ) : (
                <h.icon className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" strokeWidth={1.75} />
              )}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
