import { useEffect, useState } from "react";
import logo from "@/assets/ainore-logo.jpeg";

const links = [
  { href: "#product", label: "Debut" },
  { href: "#craft", label: "Craft" },
  { href: "#manufacturing", label: "Manufacturing" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
          scrolled
            ? "rounded-full border border-border bg-background/60 px-4 py-2 backdrop-blur-xl md:max-w-5xl"
            : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="AINORE"
            className="h-9 w-9 object-contain mix-blend-screen"
            width={72}
            height={72}
          />
          <span className="font-display text-xl tracking-[0.3em] text-foreground">
            AINORE
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-accent transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-glow"
        >
          Enquire
        </a>
      </div>
    </header>
  );
}
