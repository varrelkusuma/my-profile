import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Award, type LucideIcon } from "lucide-react";
import { type ReactNode } from "react";
import AllureAI from '../assets/allureai.jpg';
import Imperial from '../assets/imperial.png';
import ITB from '../assets/itb.png';
import SMAN2 from '../assets/sman2.jpg';

export const Route = createFileRoute("/honors")({
  head: () => ({
    meta: [
      { title: "Honors and Awards — Your Name" },
      { name: "description", content: "Awards, honors, and recognitions." },
      { property: "og:title", content: "Honors and Awards — Your Name" },
      { property: "og:description", content: "Awards, honors, and recognitions." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <Honors />
    </SiteLayout>
  ),
});

type Honor = { year: string; text: ReactNode; icon: LucideIcon | string };

const honors: Honor[] = [
  { year: "2025", text: (<>Endowment Fund for Education Scholarship (LPDP) Awardee. <span className="italic text-muted-foreground">[Indonesia Ministry of Finance]</span></>), icon: Imperial },
  { year: "2021", text: (<>1st Winner of Kolabpreneur Startup Competition. <span className="italic text-muted-foreground">[WU Hub/Huawei Cloud]</span></>), icon: AllureAI },
  { year: "2021", text: (<>Best Pitch of Bandung Startup Pitching Day. <span className="italic text-muted-foreground">[The Greater Hub ITB]</span></>), icon: AllureAI },
  { year: "2020", text: (<>2nd Winner of Intel-Synnex Openvino Hackathon. <span className="italic text-muted-foreground">[Intel/Synnex Metro Data]</span></>), icon: AllureAI },
  { year: "2020", text: (<>Valedictorian & Cum Laude Awardee. <span className="italic text-muted-foreground">[Institut Teknologi Bandung]</span></>), icon: ITB },
  { year: "2020", text: (<>3x Ganesha Karsa Awardee. <span className="italic text-muted-foreground">[Institut Teknologi Bandung]</span></>), icon: ITB },
  { year: "2020", text: (<>3rd Winner of ITFest Business-IT Case Competition. <span className="italic text-muted-foreground">[Universitas Sumatera Utara]</span></>), icon: ITB },
  { year: "2019", text: (<>1st Winner of Information System Case Competition. <span className="italic text-muted-foreground">[Bina Nusantara University]</span></>), icon: ITB },
  { year: "2019", text: (<>1st Winner of Project Management Challenge. <span className="italic text-muted-foreground">[Project Management Institute]</span></>), icon: ITB },
  { year: "2019", text: (<>2nd Winner of Compfest XI Startup Academy. <span className="italic text-muted-foreground">[University of Indonesia]</span></>), icon: ITB },
  { year: "2018", text: (<>1st Winner of Techphoria Business-IT Case Competition. <span className="italic text-muted-foreground">[Sriwijaya University]</span></>), icon: ITB },
  { year: "2018", text: (<>2nd Winner of ITFest Business-IT Case Competition. <span className="italic text-muted-foreground">[Universitas Sumatra Utara]</span></>), icon: ITB },
  { year: "2017", text: (<>1st Winner of E-Fest Business Plan Competition. <span className="italic text-muted-foreground">[Brawijaya University]</span></>), icon: ITB },
  { year: "2015", text: (<>Top 10 in Junior Statistics Competition. <span className="italic text-muted-foreground">[Bogor Agricultural University]</span></>), icon: SMAN2 },
  { year: "2015", text: (<>3rd Winner of National Indonesian Debate Competition. <span className="italic text-muted-foreground">[Indonesia Ministry of Education]</span></>), icon: SMAN2 },
  { year: "2015", text: (<>4th Winner in Constitutional Debate. <span className="italic text-muted-foreground">[Padjadjaran University]</span></>), icon: SMAN2 },
  { year: "2015", text: (<>1st Winner & 2nd Best Speaker of Banten Debate Competition. <span className="italic text-muted-foreground">[Indonesia Ministry of Education]</span></>), icon: SMAN2 },
];

function Honors() {
  return (
    <article>
      <h2 className="text-2xl font-serif font-semibold mb-6 pb-2 border-b border-border flex items-center gap-2">
        Honors and Awards
      </h2>
      <ul className="space-y-4">
        {honors.map((h, i) => {
          return (
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
          );
        })}
      </ul>
    </article>
  );
}
