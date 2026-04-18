import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { GraduationCap, Briefcase } from "lucide-react";
import AllureAI from '../assets/allureai.jpg';
import MIFX from '../assets/mifx.png';
import Bonza from '../assets/bonza.jpg';
import Pomona from '../assets/pomona.png';
import Imperial from '../assets/imperial.png';
import ITB from '../assets/itb.png';

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
        <h2 className="text-2xl font-serif font-semibold mb-4 pb-2 border-b border-border">Education</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <img 
              src={Imperial} 
              alt="Imperial College London logo" 
              className="w-5 h-5 shrink-0 mt-1 object-contain rounded-sm" 
            />
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4">
                <div className="font-semibold text-pretty">Master of Research (MRes) · Biomedical Research (Data Science)</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">2025-2026</div>
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">Imperial College London</div>
            </div>
          </li>
          
          <li className="flex items-start gap-3">
            <img 
              src={ITB} 
              alt="Institut Teknologi Bandung logo" 
              className="w-5 h-5 shrink-0 mt-1 object-contain rounded-sm" 
            />
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4">
                <div className="font-semibold text-pretty">Bachelor of Engineering (BE) · Information System and Technology</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">2016-2020</div>
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">Institut Teknologi Bandung · GPA: 3.75/4.00 · Valedictorian · Cum Laude</div>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4 pb-2 border-b border-border">Experience</h2>
        <ul className="space-y-4">

          <li className="flex items-start gap-3">
            <img 
              src={MIFX} 
              alt="MIFX logo" 
              className="w-5 h-5 shrink-0 mt-1 object-contain rounded-sm" 
            />
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4">
                <div className="font-semibold text-pretty">Lead Product Manager</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">2023-2025</div>
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">Monex Investindo Futures (MIFX)</div>
            </div>
          </li>
          
          <li className="flex items-start gap-3">
            <img 
              src={AllureAI} 
              alt="Allure AI logo" 
              className="w-5 h-5 shrink-0 mt-1 object-contain rounded-sm" 
            />
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4">
                <div className="font-semibold text-pretty">Co-Founder/CEO</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">2021-2024</div>
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">Allure AI</div>
            </div>
          </li>
          
          <li className="flex items-start gap-3">
            <img 
              src={Bonza} 
              alt="Bonza Technology logo" 
              className="w-5 h-5 shrink-0 mt-1 object-contain rounded-sm" 
            />
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4">
                <div className="font-semibold text-pretty">Product Manager</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">2021-2021</div>
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">Bonza Technology</div>
            </div>
          </li>
          
          <li className="flex items-start gap-3">
            <img 
              src={Pomona} 
              alt="Pomona Technology logo" 
              className="w-5 h-5 shrink-0 mt-1 object-contain rounded-sm" 
            />
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4">
                <div className="font-semibold text-pretty">Product Manager</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">2020-2020</div>
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">Pomona Technology</div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
