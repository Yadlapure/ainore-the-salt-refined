import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Nav } from "@/components/Nav";
import { Particles } from "@/components/Particles";
import { Reveal } from "@/components/Reveal";
import heroSalt from "@/assets/hero-abstract.jpg";
import factory from "@/assets/factory-new.jpg";
import product from "@/assets/product-debut.jpg";
import saltPans from "@/assets/campus-aerial.jpg";
import logo from "@/assets/ainore-logo-clean.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AINORE — Engineered Purity. Built to Manufacture Anything." },
      {
        name: "description",
        content:
          "AINORE is a precision manufacturing house engineering premium consumer and industrial products for the world.",
      },
      { property: "og:title", content: "AINORE — Engineered Purity" },
      {
        property: "og:description",
        content:
          "A manufacturing powerhouse. Our debut is just the beginning.",
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
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden py-24 md:min-h-[760px] md:py-0"
    >

      <motion.div style={{ y, scale }} className="absolute inset-0 overflow-hidden">
        <img
          src={heroSalt}
          alt="Cinematic texture"
          className="h-full w-full object-cover opacity-60"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
        <div className="absolute inset-0 bg-aurora" />
      </motion.div>

      <Particles count={50} />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6"
      >

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-8 flex justify-center"
        >
          <img
            src={logo}
            alt="AINORE"
            className="h-20 w-20 object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.25)] sm:h-28 sm:w-28 md:h-40 md:w-40"
            width={320}
            height={320}
          />

        </motion.div>

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
          className="font-display text-4xl font-light leading-[0.95] tracking-tight text-balance sm:text-5xl md:text-7xl lg:text-[7rem]"
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
          AINORE is a precision manufacturing house engineered for whatever
          comes next. Our debut product carries the same discipline that will
          power every category we build.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:mt-12"
        >
          <a
            href="#product"
            className="group relative overflow-hidden rounded-full bg-primary px-6 py-3.5 text-center text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground transition-all hover:shadow-glow sm:px-8 sm:py-4"
          >
            <span className="relative z-10">Discover the Debut</span>
          </a>
          <a
            href="#manufacturing"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm uppercase tracking-[0.18em] text-foreground transition-all hover:border-accent/60 hover:bg-glass sm:px-8 sm:py-4"
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
    "FSSAI 11226334000424",
    "BUILT TO EXPORT",
    "MANUFACTURING HOUSE",
    "PREMIUM GRADE",
    "GLOBAL SUPPLY",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border py-4 md:py-6">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap md:gap-16">
        {doubled.map((it, i) => (
          <span
            key={i}
            className="font-display text-base tracking-[0.25em] text-muted-foreground/60 sm:text-xl md:text-2xl md:tracking-[0.3em]"
          >
            {it} <span className="ml-10 text-accent md:ml-16">✦</span>
          </span>
        ))}
      </div>
    </div>

  );
}

function Manifesto() {
  return (
    <section id="craft" className="relative px-4 py-20 sm:px-6 sm:py-28 md:py-48">
      <div className="mx-auto max-w-6xl">
        <Reveal direction="left" distance={200}>
          <p className="mb-12 text-[10px] uppercase tracking-[0.4em] text-accent">
            01 — The Manifesto
          </p>
        </Reveal>
        <Reveal direction="right" distance={300} delay={1}>
          <h2 className="font-display text-3xl font-light leading-[1.05] tracking-tight text-balance sm:text-4xl md:text-6xl lg:text-7xl">
            A factory is only as honest as
            <span className="text-muted-foreground"> the first thing it ships.</span>
            <br />
            Ours had to be{" "}
            <span className="italic text-foil">pure.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-12 text-base leading-relaxed text-muted-foreground md:grid-cols-2 md:text-lg">
          <Reveal direction="left" distance={250} delay={2}>
            <p>
              AINORE was built as a manufacturing platform — not a single
              product. Our floors are designed for category-agnostic precision:
              consumables, materials, formulations, finishing. Whatever we
              choose to make next, the standard is set on day one.
            </p>
          </Reveal>
          <Reveal direction="right" distance={250} delay={3}>
            <p>
              We chose a debut that forgives nothing. Every unit is a test of
              source, environment, process and packaging. If we can ship the
              cleanest product in the room, we can ship anything.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


function Product() {
  return (
    <section
      id="product"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 md:py-48"
    >
      <div className="absolute inset-0 bg-aurora opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal direction="left" distance={300}>
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">
              02 — Debut Product
            </p>
            <h2 className="font-display text-4xl font-light leading-[1] tracking-tight sm:text-5xl md:text-7xl">
              The first,
              <br />
              <span className="italic text-foil">redrawn.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Produced under controlled environment, finished in laminar
              airflow, and sealed in a vessel built to outlast its contents.
              Retail-grade. Export-ready. Quietly perfect.
            </p>

            <dl className="mt-12 grid grid-cols-3 gap-3 border-t border-border pt-8 sm:gap-6">
              {[
                { k: "99.8%", v: "Purity" },
                { k: "0", v: "Additives" },
                { k: "FSSAI", v: "Certified" },
              ].map((s, i) => (
                <Reveal key={s.v} direction="up" distance={60} delay={i + 1}>
                  <div>
                    <dt className="font-display text-xl text-foreground sm:text-3xl md:text-4xl">
                      {s.k}
                    </dt>
                    <dd className="mt-2 text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.25em]">
                      {s.v}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>


            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
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

        <Reveal direction="right" distance={400} delay={2}>
          <motion.div
            whileHover={{ scale: 1.03, rotate: -1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto aspect-[3/4] w-full max-w-lg"
          >
            <div className="absolute -inset-10 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border shadow-deep">
              <img
                src={product}
                alt="AINORE debut product in matte black vessel"
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
                    The Debut
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
    <section id="manufacturing" className="relative px-4 py-20 sm:px-6 sm:py-28 md:py-48">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="left" distance={200}>
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">
            03 — Capability
          </p>
        </Reveal>
        <Reveal direction="left" distance={350} delay={1}>
          <h2 className="max-w-4xl font-display text-3xl font-light leading-[1.05] tracking-tight text-balance sm:text-4xl md:text-6xl">
            The platform behind the product.
          </h2>
        </Reveal>

        <Reveal direction="scale" delay={2}>
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-border shadow-deep">
            <img
              src={factory}
              alt="AINORE manufacturing floor at night"
              className="h-[280px] w-full object-cover sm:h-[420px] md:h-[560px]"
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
            <Reveal
              key={p.t}
              direction={i % 2 === 0 ? "left" : "right"}
              distance={250}
              delay={i}
            >
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
    { tag: "Live", title: "Debut Product", note: "Retail + HORECA, export-ready" },
    { tag: "2026", title: "Specialty Line", note: "Premium variants and editions" },
    { tag: "2026", title: "Co-pack & Private Label", note: "Built for brand partners" },
    { tag: "Beyond", title: "Adjacent Verticals", note: "Materials · Personal care · Industrial" },
  ];
  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-28 md:py-48">
      <div className="mx-auto max-w-6xl">
        <Reveal direction="right" distance={200}>
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">
            04 — Roadmap
          </p>
        </Reveal>
        <Reveal direction="right" distance={350} delay={1}>
          <h2 className="font-display text-3xl font-light leading-[1.05] tracking-tight text-balance sm:text-4xl md:text-6xl">
            The first chapter is shipping.
            <br />
            <span className="text-muted-foreground">
              The book is the manufacturing house.
            </span>
          </h2>
        </Reveal>

        <div className="mt-20 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
          {items.map((it, i) => (
            <Reveal
              key={it.title}
              direction={i % 2 === 0 ? "left" : "right"}
              distance={400}
              delay={i}
            >
              <div className="group flex flex-col gap-4 bg-background p-8 transition-all hover:bg-card md:flex-row md:items-center md:p-10">
                <div className="shrink-0 md:w-32">
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
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 md:py-48"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-5 lg:items-center">
        <Reveal direction="left" distance={400} delay={1} className="lg:col-span-3">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border shadow-deep">
            <img
              src={saltPans}
              alt="Aerial view of geometric production facility at sunrise"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
          </div>
        </Reveal>

        <div className="lg:col-span-2">
          <Reveal direction="right" distance={300}>
            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">
              05 — Sustainability
            </p>
          </Reveal>
          <Reveal direction="right" distance={300} delay={1}>
            <h2 className="font-display text-3xl font-light leading-[1.05] tracking-tight text-balance sm:text-4xl md:text-5xl">
              Engineered with the planet in the spec sheet.
            </h2>
          </Reveal>
          <Reveal direction="right" distance={300} delay={2}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Solar-assisted processing. Recyclable packaging. Closed-loop
              water on every line. The same restraint that defines our product
              defines its footprint.
            </p>
          </Reveal>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Solar-assisted production",
              "Zero plastic in primary packaging",
              "Closed-loop process water",
              "Carbon-mapped supply chain",
            ].map((t, i) => (
              <Reveal key={t} direction="right" distance={200} delay={i + 3}>
                <li className="flex items-center gap-3 border-b border-border pb-3 text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-accent" /> {t}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 md:py-48"
    >
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <Particles count={30} />
      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal direction="down" distance={120}>
          <p className="mb-8 text-[10px] uppercase tracking-[0.4em] text-accent">
            06 — Partner With Us
          </p>
        </Reveal>
        <Reveal direction="scale" delay={1}>
          <h2 className="font-display text-4xl font-light leading-[0.95] tracking-tight text-balance sm:text-5xl md:text-7xl lg:text-8xl">
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
        <Reveal delay={4}>
          <div className="mx-auto mt-16 grid max-w-4xl gap-8 border-t border-border pt-12 text-left md:grid-cols-3">
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-accent">
                Email
              </p>
              <a
                href="mailto:granityinternational@gmail.com"
                className="text-sm text-foreground hover:text-accent"
              >
                granityinternational@gmail.com
              </a>
            </div>
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-accent">
                FSSAI
              </p>
              <p className="font-display text-sm tracking-[0.15em] text-foreground">
                11226334000424
              </p>
            </div>
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-accent">
                Registered Office
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Grainity International Pvt. Ltd.
                <br />
                #89 Sy. No 6/1, Nyannapanahally Village,
                <br />
                Hulimavu, Bengaluru — 560076
              </p>
            </div>
          </div>
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
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="AINORE"
              className="h-10 w-10 object-contain"
              width={80}
              height={80}
            />
            <p className="font-display text-3xl tracking-[0.3em]">AINORE</p>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A manufacturing house engineered for whatever comes next. Our debut
            is shipping — and it's only the beginning.
          </p>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Grainity International Pvt. Ltd.
            <br />
            #89 Sy. No 6/1, Nyannapanahally Village, Hulimavu,
            <br />
            Bengaluru — 560076, India
          </p>
        </div>
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-accent">
            Explore
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#product" className="hover:text-foreground">Debut</a></li>
            <li><a href="#manufacturing" className="hover:text-foreground">Manufacturing</a></li>
            <li><a href="#sustainability" className="hover:text-foreground">Sustainability</a></li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-accent">
            Contact
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="mailto:granityinternational@gmail.com"
                className="hover:text-foreground"
              >
                granityinternational@gmail.com
              </a>
            </li>
            <li>Export · Wholesale · Co-pack</li>
            <li className="pt-2 text-xs">FSSAI: 11226334000424</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Grainity International Pvt. Ltd. All rights reserved.</p>
        <p className="font-display tracking-[0.3em]">ENGINEERED · PURE · BUILT TO LAST</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="relative w-full max-w-full overflow-x-clip bg-background text-foreground">
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
