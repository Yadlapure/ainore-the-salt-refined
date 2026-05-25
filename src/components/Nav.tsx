import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ainore-logo-clean.png";

const links = [
  { href: "#product", label: "Debut" },
  { href: "#craft", label: "Craft" },
  { href: "#manufacturing", label: "Manufacturing" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2 md:py-3" : "py-4 md:py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 transition-all duration-500 ${
          scrolled
            ? "rounded-full border border-border bg-background/60 px-3 py-2 backdrop-blur-xl md:max-w-5xl md:px-4"
            : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2 md:gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="AINORE"
            className="h-8 w-8 object-contain md:h-9 md:w-9"
            width={72}
            height={72}
          />
          <span className="font-display text-base tracking-[0.25em] text-foreground md:text-xl md:tracking-[0.3em]">
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

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-accent transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-glow sm:inline-block"
          >
            Enquire
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur-xl md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[64px] z-40 origin-top transition-all duration-300 ${
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2"
        }`}
      >
        <div className="mx-4 rounded-2xl border border-border bg-background/95 p-6 backdrop-blur-xl shadow-deep">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:bg-glass hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full border border-accent/40 bg-accent/10 px-4 py-3 text-center text-xs uppercase tracking-[0.18em] text-accent"
            >
              Enquire
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
