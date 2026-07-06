import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Nav } from "@/components/Nav";
import { Particles } from "@/components/Particles";
import { Reveal } from "@/components/Reveal";
import heroSalt from "@/assets/hero-abstract.jpg";
import factory from "@/assets/factory-new.jpg";
import product from "@/assets/salt.png";
import saltPans from "@/assets/campus-aerial.jpg";
import logo from "@/assets/ainore-logo-clean.png";
import teaImage from "@/assets/tea.jpeg";

// Add this after your imports
const PRODUCTS = {
  salt: {
    id: "salt",
    name: "Premium Salt",
    image: product,
    purity: "99.8%",
    additives: "0",
    certification: "FSSAI",
    description:
      "Produced under controlled environment, finished in laminar airflow, and sealed in a vessel built to outlast its contents. Retail-grade. Export-ready. Quietly perfect.",
    specs: [
      { k: "99.8%", v: "Purity" },
      { k: "0", v: "Additives" },
      { k: "FSSAI", v: "Certified" },
    ],
    badge: "New",
    status: "Available",
  },
  tea: {
    id: "tea",
    name: "Premium Tea",
    image: teaImage,
    purity: "Single Origin",
    additives: "0",
    certification: "FSSAI",
    description:
      "Finest tea leaves sourced from premium estates, processed with precision to preserve aroma and flavor. Packaged fresh for retail and HORECA.",
    specs: [
      { k: "Single Origin", v: "Source" },
      { k: "0", v: "Additives" },
      { k: "FSSAI", v: "Certified" },
    ],
    badge: "New",
    status: "Available",
  },
};

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
        content: "A manufacturing powerhouse. Our debut is just the beginning.",
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
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />A New Manufacturing
          House
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
          AINORE is a precision manufacturing house engineered for whatever comes next. Our debut
          product carries the same discipline that will power every category we build.
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
            Ours had to be <span className="italic text-foil">pure.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-12 text-base leading-relaxed text-muted-foreground md:grid-cols-2 md:text-lg">
          <Reveal direction="left" distance={250} delay={2}>
            <p>
              AINORE was built as a manufacturing platform — not a single product. Our floors are
              designed for category-agnostic precision: consumables, materials, formulations,
              finishing. Whatever we choose to make next, the standard is set on day one.
            </p>
          </Reveal>
          <Reveal direction="right" distance={250} delay={3}>
            <p>
              We chose a debut that forgives nothing. Every unit is a test of source, environment,
              process and packaging. If we can ship the cleanest product in the room, we can ship
              anything.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Manufacturers() {
  const [activeTab, setActiveTab] = useState("salt");
  const [isOpen, setIsOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const manufacturers = {
    salt: [
      {
        name: "MAGHIL AQUA PRODUCTS",
        gst: "33ABSPJ1258Q1Z2",
        fssai: "",
        address: "135 C. Polpettai Near, New Bus Stand, Thoothukudi, Tamilnadu - 628002",
        batch_no: "MG001",
      },
      {
        name: "S.K.S.C. NADARAJAN & BROR",
        gst: "33AAEFS893L1ZS",
        fssai: "10014042001615",
        address: "No. 117, South Raja Street, Tuticorin - 628 001",
        batch_no: "SK001",
      },
      {
        name: "BHAGWATI MARKETING",
        gst: "29AAFFB2454A1ZW",
        fssai: "11222332000268",
        address:
          "#23, 5TH CROSS ROAD, LORRY SHED GODOWN AREA, NEAR APMC YARD, YESHWANTHPUR, BANGALORE, 560022",
        batch_no: "BM001",
      },
    ],
    tea: [
      {
        name: "DEVON PLANTATION & INDUSTRIES LIMITED",
        gst: "29AAACD7869H1Z6",
        fssai: "11218310000004",
        address: "DEVON ESTATES PB NO 14, KOPPA, 577126, CHIKMAGALUR DIST",
        batch_no: "DE1",
      },
    ],
  };

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 400;
    const targetScroll =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  const currentManufacturers = manufacturers[activeTab as keyof typeof manufacturers] || [];

  return (
    <section
      id="manufacturers"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 md:py-48"
    >
      <div className="absolute inset-0 bg-aurora opacity-30" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal direction="left" distance={200}>
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">
            Our Manufacturers
          </p>
        </Reveal>
        <Reveal direction="left" distance={350} delay={1}>
          <div
            className="flex cursor-pointer items-center gap-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h2 className="max-w-4xl font-display text-3xl font-light leading-[1.05] tracking-tight text-balance sm:text-4xl md:text-6xl">
              The <span className="italic text-foil">craftsmen</span> behind our products.
            </h2>
            <motion.button
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0 rounded-full border border-accent/30 bg-glass p-3 text-accent transition-all hover:border-accent hover:bg-accent/10 hover:shadow-glow"
              aria-label={isOpen ? "Close manufacturers" : "View manufacturers"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </motion.button>
          </div>
        </Reveal>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? 48 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="flex gap-2 border-b border-border overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab("salt")}
              className={`px-4 sm:px-6 py-3 text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === "salt"
                  ? "border-b-2 border-accent text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Salt ({manufacturers.salt.length})
            </button>
            <button
              onClick={() => setActiveTab("tea")}
              className={`px-4 sm:px-6 py-3 text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === "tea"
                  ? "border-b-2 border-accent text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Tea ({manufacturers.tea.length})
            </button>
          </div>

          <div className="mt-6 md:mt-8 relative group">
            {/* Left Scroll Button - Hidden on mobile */}
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-background/80 backdrop-blur-sm border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent transition-all shadow-lg opacity-0 group-hover:opacity-100"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Right Scroll Button - Hidden on mobile */}
            <button
              onClick={() => handleScroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-background/80 backdrop-blur-sm border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent transition-all shadow-lg opacity-0 group-hover:opacity-100"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Horizontal Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 md:pb-6 scrollbar-hide"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {currentManufacturers.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="min-w-[280px] max-w-[320px] sm:min-w-[320px] sm:max-w-[380px] flex-shrink-0 rounded-2xl border border-border bg-card/40 p-5 sm:p-8 shadow-deep backdrop-blur-sm transition-all hover:border-accent/40 hover:shadow-glow md:min-w-[380px] md:p-10"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-0">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg sm:text-2xl text-foreground break-words">
                        {m.name}
                      </h3>
                      {m.gst && (
                        <p className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-accent break-words">
                          GST: {m.gst}
                        </p>
                      )}
                      {m.fssai && (
                        <p className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-accent break-words">
                          FSSAI: {m.fssai}
                        </p>
                      )}
                      {m.batch_no && (
                        <p className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-accent break-words">
                          BATCH NO: {m.batch_no}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 rounded-full border border-accent/30 bg-glass px-3 py-1 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-accent self-start sm:self-auto">
                      Manufacturer
                    </span>
                  </div>

                  {m.address && (
                    <div className="mt-4 sm:mt-6 space-y-3 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span className="mt-0.5 text-accent text-sm">📍</span>
                        <span className="break-words">{m.address}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile scroll indicators */}
            <div className="mt-3 sm:mt-4 flex justify-center gap-1 md:hidden">
              {currentManufacturers.map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full transition-colors"
                  style={{
                    backgroundColor: i === 0 ? "hsl(var(--accent))" : "hsl(var(--accent) / 0.3)",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Product() {
  const [activeProduct, setActiveProduct] = useState<"salt" | "tea">("salt");
  const [isPaused, setIsPaused] = useState(false);
  const product = PRODUCTS[activeProduct];

  // Get all product IDs for navigation
  const productIds = Object.keys(PRODUCTS) as Array<keyof typeof PRODUCTS>;
  const currentIndex = productIds.indexOf(activeProduct);

  // Auto-rotate products every 4 seconds
  useEffect(() => {
    if (isPaused) return; // Don't auto-rotate if paused

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % productIds.length;
      setActiveProduct(productIds[nextIndex]);
    }, 4000); // Change product every 4 seconds

    return () => clearInterval(interval);
  }, [activeProduct, isPaused, productIds.length]);

  const handlePrev = () => {
    setIsPaused(true); // Pause on user interaction
    const newIndex = currentIndex === 0 ? productIds.length - 1 : currentIndex - 1;
    setActiveProduct(productIds[newIndex]);
    // Resume after 5 seconds of inactivity
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleNext = () => {
    setIsPaused(true); // Pause on user interaction
    const newIndex = currentIndex === productIds.length - 1 ? 0 : currentIndex + 1;
    setActiveProduct(productIds[newIndex]);
    // Resume after 5 seconds of inactivity
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleDotClick = (id: "salt" | "tea") => {
    setIsPaused(true); // Pause on user interaction
    setActiveProduct(id);
    // Resume after 5 seconds of inactivity
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section id="product" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 md:py-48">
      <div className="absolute inset-0 bg-aurora opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Text content */}
        <Reveal direction="left" distance={300} key={`text-${activeProduct}`}>
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent">
                02 — Debut Product
              </p>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-accent/20 px-3 py-1 text-[8px] uppercase tracking-[0.15em] text-accent">
                  {product.status}
                </span>
              </div>
            </div>

            <h2 className="font-display text-4xl font-light leading-[1] tracking-tight sm:text-5xl md:text-7xl">
              {product.name}
              <br />
              <span className="italic text-foil">redrawn.</span>
            </h2>

            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              {product.description}
            </p>

            <dl className="mt-12 grid grid-cols-3 gap-3 border-t border-border pt-8 sm:gap-6">
              {product.specs.map((s, i) => (
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
              <Reveal direction="up" distance={60} delay={4}>
                <a
                  href="#contact"
                  className="rounded-full bg-primary px-7 py-3.5 text-sm uppercase tracking-[0.18em] text-primary-foreground transition-all hover:shadow-glow"
                >
                  Request Sample
                </a>
              </Reveal>
              <Reveal direction="up" distance={60} delay={5}>
                <a
                  href="#manufacturing"
                  className="rounded-full border border-border px-7 py-3.5 text-sm uppercase tracking-[0.18em] text-foreground transition-all hover:border-accent/60"
                >
                  Spec Sheet
                </a>
              </Reveal>
            </div>

            {/* Product Navigation Dots */}
            <div className="mt-8 flex justify-start gap-2">
              {productIds.map((id) => (
                <button
                  key={id}
                  onClick={() => handleDotClick(id)}
                  className={`h-2 rounded-full transition-all ${
                    activeProduct === id
                      ? "w-8 bg-accent"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`View ${PRODUCTS[id].name}`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Image with navigation arrows */}
        <Reveal direction="scale" delay={2} className="mt-8 lg:mt-0">
          <div
            className="relative mx-auto aspect-[3/4] w-full max-w-sm sm:max-w-md md:max-w-lg"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute -inset-10 rounded-full bg-accent/20 blur-3xl" />

            {/* Product Image */}
            <motion.div
              key={activeProduct}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full w-full overflow-hidden rounded-3xl border border-border shadow-deep"
            >
              <img
                src={product.image}
                alt={`AINORE ${product.name}`}
                className="h-full w-full object-cover"
                loading="lazy"
                width={1280}
                height={1600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div>
                  <p className="font-display text-xl text-foreground sm:text-2xl">
                    {product.id === "salt" ? "N°01" : "N°02"}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {product.name}
                  </p>
                </div>
                <span className="rounded-full border border-accent/40 bg-glass px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-accent">
                  {product.badge}
                </span>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            {productIds.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent transition-all shadow-lg opacity-70 hover:opacity-100"
                  aria-label="Previous product"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent transition-all shadow-lg opacity-70 hover:opacity-100"
                  aria-label="Next product"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}

            {/* Progress bar */}
            {!isPaused && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 4, ease: "linear" }}
                className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-accent/30 overflow-hidden"
                style={{ transformOrigin: "left" }}
              >
                <div className="h-full w-full bg-accent" />
              </motion.div>
            )}
          </div>
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
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">03 — Capability</p>
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
            <Reveal key={p.t} direction={i % 2 === 0 ? "left" : "right"} distance={250} delay={i}>
              <div className="group h-full bg-background p-8 transition-colors hover:bg-card md:p-10">
                <p className="font-display text-sm text-accent">{p.n}</p>
                <h3 className="mt-6 font-display text-2xl text-foreground">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
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
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-accent">04 — Roadmap</p>
        </Reveal>

        <Reveal direction="right" distance={350} delay={1}>
          <h2 className="font-display text-3xl font-light leading-[1.05] tracking-tight text-balance sm:text-4xl md:text-6xl">
            The first chapter is shipping.
            <br />
            <span className="text-muted-foreground">The book is the manufacturing house.</span>
          </h2>
        </Reveal>

        <div className="mt-20 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col gap-4 bg-background p-8 transition-all hover:bg-card md:flex-row md:items-center md:p-10"
            >
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
                <h3 className="font-display text-2xl text-foreground md:text-3xl">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.note}</p>
              </div>
              <span className="font-display text-3xl text-muted-foreground/40 transition-all group-hover:text-accent group-hover:translate-x-2">
                →
              </span>
            </motion.div>
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
      <div className="mx-auto grid max-w-7xl gap-12 lg:gap-16 lg:grid-cols-5 lg:items-center">
        {/* Image section with Reveal scale animation like manufacturing image */}
        <Reveal direction="scale" delay={1} className="lg:col-span-3">
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
              Solar-assisted processing. Recyclable packaging. Closed-loop water on every line. The
              same restraint that defines our product defines its footprint.
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
    <section id="contact" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 md:py-48">
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
            Distributors, co-packers, retailers, and product founders — if you need a manufacturing
            partner who treats your spec like our own, we should talk.
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
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-accent">Email</p>
              <a
                href="mailto:grainityinternational@gmail.com"
                className="text-sm text-foreground hover:text-accent"
              >
                grainityinternational@gmail.com
              </a>
            </div>
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-accent">FSSAI</p>
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
            A manufacturing house engineered for whatever comes next. Our debut is shipping — and
            it's only the beginning.
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
          <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-accent">Explore</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#product" className="hover:text-foreground">
                Debut
              </a>
            </li>
            <li>
              <a href="#manufacturing" className="hover:text-foreground">
                Manufacturing
              </a>
            </li>
            <li>
              <a href="#sustainability" className="hover:text-foreground">
                Sustainability
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-accent">Contact</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="mailto:grainityinternational@gmail.com" className="hover:text-foreground">
                grainityinternational@gmail.com
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
        <Manufacturers />
        <Manufacturing />
        <Roadmap />
        <Sustainability />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
