import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Nav } from "@/components/Nav";
import { Particles } from "@/components/Particles";
import { Reveal } from "@/components/Reveal";
import heroSalt from "@/assets/hero-salt.jpg";
import factory from "@/assets/factory.jpg";
import product from "@/assets/product.jpg";
import saltPans from "@/assets/salt-pans.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AINORE — Engineered Purity. Built to Manufacture Anything." },
      {
        name: "description",
        content:
          "AINORE is a precision manufacturing house. Our debut product — a premium salt brand — is the first of many categories engineered for the world.",
      },
      { property: "og:title", content: "AINORE — Engineered Purity" },
      {
        property: "og:description",
        content:
          "A manufacturing powerhouse. Premium salt is just the beginning.",
      },
    ],
  }),
  component: Index,
});

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-screen min-h-[760px] w-full items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroSalt}
          alt="Cinematic cascade of pure salt crystals"
          className="h-full w-full object-cover opacity-70"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0 bg-aurora" />
      </motion.div>

      <Particles count={50} />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-glass px-5 py-2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
          A New Manufacturing House
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl font-light leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-[8rem]"
        >
          We don't make
          <br />
          <span className="text-foil italic">just one thing.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mx-auto mt-8 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          AINORE is a precision manufacturing house. Our debut — a premium salt
          brand — is engineered with the same discipline that will power every
          category we touch next.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#product"
            className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground transition-all hover:shadow-glow"
          >
            <span className="relative z-10">Discover the Debut</span>
          </a>
          <a
            href="#manufacturing"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm uppercase tracking-[0.18em] text-foreground transition-all hover:border-accent/60 hover:bg-glass"
          >
            Our Capability
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-3">
          Scroll
          <span className="block h-10 w-px animate-pulse bg-gradient-to-b from-accent to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = [
    "PRECISION ENGINEERED",
    "ISO 22000 CERTIFIED",
    "BUILT TO EXPORT",
    "MANUFACTURING HOUSE",
    "PREMIUM GRADE",
    "GLOBAL SUPPLY",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border py-6">
      <div className="marquee-track flex w-max gap-16 whitespace-nowrap">
        {doubled.map((it, i) => (
          <span
            key={i}
            className="font-display text-2xl tracking-[0.3em] text-muted-foreground/60"
          >
            {it} <span className="ml-16 text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Manifesto() {
  return (
    <section id="craft" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-12 text-[10px] uppercase tracking-[0.4em] text-accent">
            01 — The Manifesto
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
            A factory is only as honest as
            <span className="text-muted-foreground"> the first thing it ships.</span>
            <br />
            Ours had to be{" "}
            <span className="italic text-foil">pure.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-16 grid gap-12 text-base leading-relaxed text-muted-foreground md:grid-cols-2 md:text-lg">
            <p>
              AINORE was built as a manufacturing platform — not a single
              product. Our floors are designed for category-agnostic precision:
              food, materials, formulations, finishing. Whatever we choose to
              make next, the standard is set on day one.
            </p>
            <p>
              We started with salt because salt forgives nothing. Every crystal
              is a test of source, environment, process and packaging. If we
              can ship the cleanest salt in the room, we can ship anything.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section
      id="product"
      className="relative overflow-hidden px-6 py-32 md:py-48"
    >
      <div className="absolute inset-0 bg-aurora opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">
              02 — Debut Product
            </p>
            <h2 className="font-display text-5xl font-light leading-[1] tracking-tight md:text-7xl">
              Salt,
              <br />
              <span className="italic text-foil">redrawn.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              A signature crystal harvested under controlled evaporation, dried
              in laminar airflow, and sealed in a vessel built to outlast its
              contents. Restaurant-grade. Export-ready. Quietly perfect.
            </p>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "99.8%", v: "Purity" },
                { k: "0", v: "Additives" },
                { k: "ISO", v: "Certified" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl text-foreground md:text-4xl">
                    {s.k}
                  </dt>
                  <dd className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 flex gap-4">
              <a
                href="#contact"
                className="rounded-full bg-primary px-7 py-3.5 text-sm uppercase tracking-[0.18em] text-primary-foreground transition-all hover:shadow-glow"
              >
                Request Sample
              </a>
              <a
                href="#manufacturing"
                className="rounded-full border border-border px-7 py-3.5 text-sm uppercase tracking-[0.18em] text-foreground transition-all hover:border-accent/60"
              >
                Spec Sheet
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <motion.div
            whileHover={{ scale: 1.03, rotate: -1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto aspect-[3/4] w-full max-w-lg"
          >
            <div className="absolute -inset-10 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border shadow-deep">
              <img
                src={product}
                alt="AINORE premium salt vessel in matte black"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1280}
                height={1600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div>
                  <p className="font-display text-2xl text-foreground">N°01</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Signature Crystal
                  </p>
                </div>
                <span className="rounded-full border border-accent/40 bg-glass px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-accent">
                  New
                </span>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

function Manufacturing() {
  const pillars = [
    {
      n: "I",
      t: "Source Discipline",
      d: "Vertically controlled inputs, audited at the earliest possible stage of the chain.",
    },
    {
      n: "II",
      t: "Process Engineering",
      d: "Laminar, low-contamination floors with closed-loop quality telemetry across every line.",
    },
    {
      n: "III",
      t: "Finish & Pack",
      d: "In-house finishing for retail, food-service, and industrial export specifications.",
    },
    {
      n: "IV",
      t: "Category Agnostic",
      d: "Modular cells built to flex into adjacent verticals — formulations, materials, FMCG.",
    },
  ];
  return (
    <section id="manufacturing" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">
            03 — Capability
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="max-w-4xl font-display text-4xl font-light leading-[1.05] tracking-tight text-balance md:text-6xl">
            The platform behind the product.
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-border shadow-deep">
            <img
              src={factory}
              alt="AINORE manufacturing floor at night"
              className="h-[420px] w-full object-cover md:h-[560px]"
              loading="lazy"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <p className="font-display text-3xl md:text-5xl">
                One floor. <span className="italic text-foil">Infinite categories.</span>
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i}>
              <div className="group h-full bg-background p-8 transition-colors hover:bg-card md:p-10">
                <p className="font-display text-sm text-accent">{p.n}</p>
                <h3 className="mt-6 font-display text-2xl text-foreground">
                  {p.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.d}
                </p>
                <span className="mt-8 block h-px w-8 bg-accent transition-all group-hover:w-16" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const items = [
    { tag: "Live", title: "Premium Salt", note: "Signature crystal, retail + HORECA" },
    { tag: "2026", title: "Specialty Minerals", note: "Pink, smoked, infused variants" },
    { tag: "2026", title: "Food Ingredients", note: "Co-pack & private label" },
    { tag: "Beyond", title: "Adjacent Verticals", note: "Materials · Personal care · Industrial" },
  ];
  return (
    <section className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">
            04 — Roadmap
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-balance md:text-6xl">
            Salt is the first chapter.
            <br />
            <span className="text-muted-foreground">
              The book is the manufacturing house.
            </span>
          </h2>
        </Reveal>

        <div className="mt-20 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i}>
              <div className="group flex flex-col gap-4 bg-background p-8 transition-all hover:bg-card md:flex-row md:items-center md:p-10">
                <div className="w-32 shrink-0">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.25em] ${
                      it.tag === "Live"
                        ? "bg-accent text-accent-foreground"
                        : "border border-border text-muted-foreground"
                    }`}
                  >
                    {it.tag}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-foreground md:text-3xl">
                    {it.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.note}</p>
                </div>
                <span className="font-display text-3xl text-muted-foreground/40 transition-all group-hover:text-accent group-hover:translate-x-2">
                  →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sustainability() {
  return (
    <section
      id="sustainability"
      className="relative overflow-hidden px-6 py-32 md:py-48"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-5 lg:items-center">
        <Reveal delay={1} className="lg:col-span-3">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border shadow-deep">
            <img
              src={saltPans}
              alt="Aerial view of geometric salt evaporation pans at sunrise"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
          </div>
        </Reveal>

        <div className="lg:col-span-2">
          <Reveal>
            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">
              05 — Sustainability
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-balance md:text-5xl">
              Engineered with the planet in the spec sheet.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Solar evaporation. Recyclable packaging. Closed-loop water on
              every line. The same restraint that defines our product defines
              its footprint.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "100% solar-driven evaporation",
                "Zero plastic in primary packaging",
                "Closed-loop process water",
                "Carbon-mapped supply chain",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 border-b border-border pb-3 text-muted-foreground"
                >
                  <span className="h-1 w-1 rounded-full bg-accent" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 md:py-48"
    >
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <Particles count={30} />
      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="mb-8 text-[10px] uppercase tracking-[0.4em] text-accent">
            06 — Partner With Us
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-5xl font-light leading-[0.95] tracking-tight text-balance md:text-8xl">
            Build the next
            <br />
            <span className="italic text-foil">category</span> with us.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Distributors, co-packers, retailers, and product founders — if you
            need a manufacturing partner who treats your spec like our own, we
            should talk.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-12 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="your@company.com"
              className="flex-1 rounded-full border border-border bg-glass px-6 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-8 py-4 text-sm uppercase tracking-[0.18em] text-primary-foreground transition-all hover:shadow-glow"
            >
              Start Conversation
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl tracking-[0.3em]">AINORE</p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A manufacturing house engineered for whatever comes next. Premium
            salt is our debut — not our limit.
          </p>
        </div>
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-accent">
            Explore
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#product" className="hover:text-foreground">Product</a></li>
            <li><a href="#manufacturing" className="hover:text-foreground">Manufacturing</a></li>
            <li><a href="#sustainability" className="hover:text-foreground">Sustainability</a></li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-accent">
            Contact
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@ainore.com</li>
            <li>Export · Wholesale · Co-pack</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} AINORE Manufacturing. All rights reserved.</p>
        <p className="font-display tracking-[0.3em]">ENGINEERED · PURE · BUILT TO LAST</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="relative bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Product />
        <Manufacturing />
        <Roadmap />
        <Sustainability />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
