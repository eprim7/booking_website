import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Small inline motifs — kept as plain SVG so this page has no icon    */
/* library dependency.                                                 */
/* ------------------------------------------------------------------ */

function SwirlMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 60c0 15 12 25 28 25s30-11 30-28-13-27-27-27-22 9-22 20 9 18 19 18 14-6 14-13"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ScissorMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="6" />
      <circle cx="24" cy="76" r="11" stroke="currentColor" strokeWidth="6" />
      <path d="M33 31 88 82M33 69 88 18" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Layout helpers                                                      */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-accent italic text-lg md:text-xl text-pink mb-2">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display uppercase tracking-tight text-4xl md:text-6xl leading-[0.95]">
      {children}
    </h2>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const tickerItems = [
  "CUT & STYLE $65",
  "FULL COLOR $140",
  "BALAYAGE $220",
  "GLOSS TREATMENT $45",
  "CURL SET $85",
  "ROOT TOUCH-UP $95",
  "BLOWOUT $55",
];

const menu = [
  {
    category: "Cuts",
    items: [
      { name: "Signature cut", price: "$65" },
      { name: "Precision fringe trim", price: "$25" },
      { name: "Kids cut (12 & under)", price: "$35" },
    ],
  },
  {
    category: "Color",
    items: [
      { name: "Full color", price: "$140" },
      { name: "Balayage", price: "$220" },
      { name: "Root touch-up", price: "$95" },
      { name: "Vivid / fashion color", price: "$180" },
    ],
  },
  {
    category: "Treatments",
    items: [
      { name: "Gloss treatment", price: "$45" },
      { name: "Deep repair mask", price: "$40" },
      { name: "Scalp facial", price: "$55" },
    ],
  },
  {
    category: "Styling",
    items: [
      { name: "Blowout", price: "$55" },
      { name: "Curl set", price: "$85" },
      { name: "Special occasion updo", price: "$110" },
    ],
  },
];

const lookbook = [
  {
    title: "Balayage",
    blurb: "Hand-painted, sun-warmed, grown-out on purpose.",
    bg: "bg-pink",
    text: "text-paper",
  },
  {
    title: "Curl Set",
    blurb: "Bounce that survives the subway ride home.",
    bg: "bg-cyan",
    text: "text-plum",
  },
  {
    title: "Color Pop",
    blurb: "One vivid panel. Maximum commitment optional.",
    bg: "bg-citrus",
    text: "text-plum",
  },
  {
    title: "Precision Cut",
    blurb: "Sharp lines, no filler, cut for how you actually move.",
    bg: "bg-plum",
    text: "text-paper",
  },
];

const team = [
  { name: "Maya Ortiz", role: "Colorist", tag: "balayage & vivids" },
  { name: "Jae-won Cho", role: "Master Stylist", tag: "precision cuts" },
  { name: "Priya Nandan", role: "Stylist", tag: "curls & texture" },
  { name: "Theo Marsh", role: "Colorist", tag: "gloss & correction" },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <main className="overflow-x-clip">
      {/* ---------------- Hero ---------------- */}
      <section
        id="top"
        className="relative grain bg-plum text-paper min-h-[85svh] flex items-end overflow-hidden"
      >
        {/* diagonal pink field */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 h-full w-[65%] md:w-[52%] bg-pink"
          style={{ clipPath: "polygon(38% 0, 100% 0, 100% 100%, 8% 100%)" }}
        />
        <SwirlMotif className="absolute top-24 right-8 md:right-24 w-24 h-24 md:w-40 md:h-40 text-plum/80" />

        <div className="relative z-10 px-6 md:px-10 pb-16 md:pb-24 pt-24 md:pt-32 max-w-4xl">
          <p className="font-mono uppercase text-xs tracking-widest text-citrus mb-4">
            A color studio · Est. 2019
          </p>
          <h1 className="font-display uppercase leading-[0.9] text-[15vw] md:text-[7.5rem]">
            Color is
            <br />a language.
          </h1>
          <p className="font-accent italic text-2xl md:text-3xl text-citrus mt-2">
            we&apos;re fluent.
          </p>
          <p className="font-body text-base md:text-lg max-w-md mt-6 text-paper/85">
            Bold cuts, custom color, and blowouts that don&apos;t quit. Walk
            in ordinary, walk out iconic.
          </p>
          <a
            href="#book"
            className="inline-block mt-8 font-mono uppercase text-sm tracking-widest bg-citrus text-plum rounded-full px-7 py-3 hover:bg-paper transition-colors"
          >
            Book a chair →
          </a>
        </div>
      </section>

      {/* ---------------- Marquee ticker (signature element) ---------------- */}
      <div
        className="bg-citrus text-plum py-3 overflow-hidden border-y-4 border-plum"
        aria-label="Services and pricing"
      >
        <div className="marquee-track font-mono uppercase text-sm md:text-base tracking-wide">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center px-6 whitespace-nowrap">
              <ScissorMotif className="w-4 h-4 mr-6 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ---------------- Menu ---------------- */}
      <section id="menu" className="bg-paper text-ink px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <Eyebrow>no bland allowed</Eyebrow>
          <SectionHeading>The Menu</SectionHeading>

          <div className="mt-12 space-y-10">
            {menu.map((group) => (
              <div key={group.category}>
                <h3 className="font-mono uppercase text-xs tracking-widest text-pink mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline font-body text-lg md:text-xl"
                    >
                      <span>{item.name}</span>
                      <span className="leader" aria-hidden="true" />
                      <span className="font-mono">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Lookbook ---------------- */}
      <section id="lookbook" className="bg-paper text-ink px-6 md:px-10 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>the edit</Eyebrow>
          <SectionHeading>Lookbook</SectionHeading>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {lookbook.map((tile) => (
              <div
                key={tile.title}
                className={`relative rounded-2xl p-8 md:p-10 min-h-[240px] flex flex-col justify-between overflow-hidden ${tile.bg} ${tile.text}`}
              >
                <SwirlMotif className="absolute -bottom-6 -right-6 w-32 h-32 opacity-20" />
                <span className="font-mono uppercase text-xs tracking-widest opacity-80">
                  Style study
                </span>
                <div>
                  <h3 className="font-display uppercase text-3xl md:text-4xl leading-none">
                    {tile.title}
                  </h3>
                  <p className="font-body mt-3 max-w-[26ch]">{tile.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Team ---------------- */}
      <section id="team" className="relative grain bg-plum text-paper px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-5xl mx-auto relative z-10">
          <Eyebrow>the roster</Eyebrow>
          <SectionHeading>Behind the chair</SectionHeading>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {team.map((person, i) => (
              <div
                key={person.name}
                className="flex items-baseline justify-between border-b border-paper/20 pb-4"
              >
                <div>
                  <p className="font-mono text-xs text-citrus uppercase tracking-widest mb-1">
                    {String(i + 1).padStart(2, "0")} — {person.role}
                  </p>
                  <p className="font-display uppercase text-2xl md:text-3xl">
                    {person.name}
                  </p>
                </div>
                <p className="font-accent italic text-pink text-right ml-4">
                  {person.tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Testimonial ---------------- */}
      <section className="bg-cyan text-plum px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <span aria-hidden="true" className="font-display text-8xl leading-none block mb-2">
            &ldquo;
          </span>
          <p className="font-accent italic text-2xl md:text-4xl leading-snug">
            I&apos;ve never left a salon actually excited to be seen. Now I
            book a month out.
          </p>
          <p className="font-mono uppercase text-xs tracking-widest mt-6">
            — Renata F., client since 2021
          </p>
        </div>
      </section>

      {/* ---------------- CTA band ---------------- */}
      <section id="book" className="bg-pink text-paper px-6 md:px-10 py-20 md:py-24 text-center">
        <p className="font-mono uppercase text-xs tracking-widest mb-4">
          Chairs fill up by Thursday
        </p>
        <h2 className="font-display uppercase text-4xl md:text-6xl leading-[0.95] max-w-3xl mx-auto">
          Your next era starts in the chair.
        </h2>
        <a
          href="tel:+15555550119"
          className="inline-block mt-8 font-mono uppercase text-sm tracking-widest bg-plum text-paper rounded-full px-8 py-4 hover:bg-citrus hover:text-plum transition-colors"
        >
          Book now
        </a>
      </section>

    </main>
  );
}
