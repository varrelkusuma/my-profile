import { Link, Outlet } from "@tanstack/react-router";
import { MapPin, Mail, Twitter, Linkedin, GraduationCap } from "lucide-react";

const navItems = [
  { to: "/", label: "Homepage" },
  { to: "/about", label: "About Me" },
  { to: "/news", label: "News" },
  { to: "/publications", label: "Publications" },
  { to: "/honors", label: "Honors and Awards" },
  { to: "/people", label: "People" },
] as const;

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Nav */}
      <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-40">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-x-7 gap-y-2 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-muted-foreground hover:text-foreground no-underline transition-colors"
              activeProps={{ className: "text-foreground font-semibold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Two-column layout */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 md:gap-14">
        <aside className="md:sticky md:top-24 md:self-start">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-44 h-44 rounded-full bg-muted overflow-hidden border-4 border-background shadow-md mb-5 flex items-center justify-center">
              {/* Replace with your photo */}
              <span className="text-5xl font-serif text-muted-foreground">YN</span>
            </div>
            <h1 className="text-2xl font-serif font-semibold mb-2">Your Name</h1>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Your short tagline describing your role and research interests goes here.
            </p>
            <ul className="space-y-2 text-sm w-full">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>City, Country</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-muted-foreground" />
                <a href="mailto:you@example.com">Email</a>
              </li>
              <li className="flex items-center gap-2">
                <Twitter className="w-4 h-4 shrink-0 text-muted-foreground" />
                <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 shrink-0 text-muted-foreground" />
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 shrink-0 text-muted-foreground" />
                <a href="https://scholar.google.com" target="_blank" rel="noreferrer">Google Scholar</a>
              </li>
            </ul>
          </div>
        </aside>

        <main className="min-w-0">
          <Outlet />
        </main>
      </div>

      <footer className="max-w-6xl mx-auto px-6 py-10 mt-10 border-t border-border text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} Your Name. Template inspired by academic personal pages.
      </footer>
    </div>
  );
}
