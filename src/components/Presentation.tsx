import { useState, useEffect, type ReactNode } from "react";
import { RecipientCardLive } from "./RecipientCardLive";
import { InteractiveCardDemo } from "./InteractiveCardDemo";
import { emptyRecipient } from "../lib/recipients";

const BASE = import.meta.env.BASE_URL;

// ─── PRIMITIVES ─────────────────────────────────────────────────────

function Slide({
  children,
  bg = "bg-nw-bg-app",
}: {
  children: ReactNode;
  bg?: string;
}) {
  return (
    <div className={`flex h-screen w-screen flex-col ${bg} px-16 py-12`}>
      {children}
    </div>
  );
}

function H1({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-display text-[52px] font-semibold leading-[1.1] tracking-tight text-nw-primary">
      {children}
    </h1>
  );
}

function H1Large({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-display text-[72px] font-semibold leading-none tracking-tight text-nw-primary">
      {children}
    </h1>
  );
}

function Body({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`max-w-3xl text-xl leading-relaxed text-nw-secondary ${className}`}
    >
      {children}
    </p>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.15em] text-periwinkle-600">
      {children}
    </p>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 space-y-5">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-4 text-[22px] leading-relaxed text-nw-secondary"
        >
          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-periwinkle-400" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={`${BASE}screenshots/${src}`}
      alt={alt}
      className="h-full w-full rounded-nw-md border border-nw-border object-contain shadow-nw-lg"
    />
  );
}

function Code({ lines }: { lines: { text: string; color: string }[] }) {
  return (
    <div className="rounded-nw-md bg-[#1c1917] px-10 py-8 font-mono text-[20px] leading-[1.8]">
      {lines.map((line, i) => (
        <div key={i} style={{ color: line.color }}>
          {line.text || "\u00A0"}
        </div>
      ))}
    </div>
  );
}

function FileCard({
  name,
  type,
  description,
  details,
}: {
  name: string;
  type: string;
  description: string;
  details: string[];
}) {
  return (
    <div className="flex flex-col rounded-nw-md border border-nw-border bg-white p-5 shadow-nw-xs">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-nw-sm bg-periwinkle-100">
          <span className="text-[11px] font-bold text-periwinkle-700">
            {type}
          </span>
        </div>
        <div>
          <p className="font-mono text-[14px] font-semibold text-nw-primary">
            {name}
          </p>
          <p className="text-[12px] text-nw-quaternary">{description}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-1.5">
        {details.map((d, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-[13px] leading-snug text-nw-tertiary"
          >
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-periwinkle-400" />
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── SLIDES ─────────────────────────────────────────────────────────

// 1. Cover
function S01() {
  return (
    <Slide>
      <div className="flex flex-1 flex-col justify-center">
        <div className="mb-8 h-20 w-20 rounded-full bg-periwinkle-500" />
        <H1Large>Care Recipient card</H1Large>
        <p className="mt-5 text-2xl text-nw-tertiary">
          A design engineering case study for Wellthy
        </p>
        <p className="mt-16 text-lg text-nw-quaternary">
          Kevin Boyle &middot; April 17, 2026
        </p>
      </div>
    </Slide>
  );
}

// 2. The approach — frame the journey, not the conclusion
function S02() {
  return (
    <Slide>
      <div className="flex flex-1 flex-col justify-center">
        <Label>The approach</Label>
        <H1>
          Started with the product,
          <br />
          not a portfolio.
        </H1>
        <Body className="mt-6">
          The goal was to find a real problem inside Wellthy's live product.
          AI handled the extraction work. A human decided what mattered.
        </Body>
        <div className="mt-12 flex gap-3">
          {[
            { phase: "Discover", desc: "AI-assisted audit of the live product", color: "bg-periwinkle-200" },
            { phase: "Decide", desc: "Human judgment on what to solve first", color: "bg-periwinkle-100" },
            { phase: "Design", desc: "A starting direction, not a finished spec", color: "bg-periwinkle-200" },
          ].map((band) => (
            <div
              key={band.phase}
              className={`flex flex-1 items-center gap-4 rounded-nw-sm ${band.color} px-5 py-4`}
            >
              <span className="text-[14px] font-semibold text-nw-primary">
                {band.phase}
              </span>
              <span className="text-[14px] text-nw-secondary">
                {band.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

// 3. The audit — how discovery worked
function S03() {
  return (
    <Slide>
      <div className="shrink-0">
        <Label>Discovery</Label>
        <H1>The audit started by logging into the product.</H1>
        <Body className="mt-3">
          Claude Code pulled the production DOM, extracted CSS custom properties,
          and mapped the design system surface by surface. Three hours of
          AI-assisted extraction instead of two days of manual work.
        </Body>
      </div>
      <div className="mt-8 flex flex-1 items-center justify-center overflow-hidden">
        <Img
          src="app-concierge-welcome.png"
          alt="Wellthy app — live capture, April 10, 2026"
        />
      </div>
    </Slide>
  );
}

// 4. Finding: Three eras on one element
function S04() {
  return (
    <Slide>
      <div className="shrink-0">
        <Label>What the audit found</Label>
        <H1>The Recipient card lives in three eras at once.</H1>
      </div>
      <div className="mt-8 flex flex-1 flex-col justify-center">
        <Code
          lines={[
            { text: "/* BEM (original era) */", color: "#666" },
            { text: "care-recipient-card", color: "#f87171" },
            { text: "", color: "" },
            { text: "/* Tailwind (migration era) */", color: "#666" },
            { text: "relative block w-full rounded-2xl", color: "#60a5fa" },
            { text: "", color: "" },
            { text: "/* nw-* tokens (current era) */", color: "#666" },
            {
              text: "border-nw-secondary bg-nw-primary shadow-nw-xs",
              color: "#4ade80",
            },
          ]}
        />
        <div className="mt-5 flex gap-10 text-[15px] text-nw-tertiary">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" /> BEM
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-blue-400" /> Tailwind
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-400" /> Current
            tokens
          </span>
        </div>
      </div>
    </Slide>
  );
}

// 5. Finding: The architectural seam
function S05() {
  return (
    <Slide>
      <div className="shrink-0">
        <Label>What the audit found</Label>
        <H1>The most important CTA takes users off the app entirely.</H1>
      </div>
      <div className="mt-6 grid flex-1 grid-cols-2 gap-6 overflow-hidden">
        <div className="relative flex flex-col">
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-widest text-periwinkle-600">
            React app
          </p>
          <div className="flex-1 overflow-hidden">
            <Img
              src="app-concierge-welcome.png"
              alt="React app at app.wellthy.com"
            />
          </div>
        </div>
        <div className="relative flex flex-col">
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-widest text-red-500">
            Legacy form (different hostname, different stack)
          </p>
          <div className="flex-1 overflow-hidden">
            <Img src="intake-step1-recipient-create.png" alt="Legacy form" />
          </div>
        </div>
      </div>
    </Slide>
  );
}

// 6. Finding: The first-minute experience (combines old slides 6+7)
function S06() {
  return (
    <Slide>
      <div className="shrink-0">
        <Label>What the audit found</Label>
        <H1>The first-minute experience breaks twice.</H1>
      </div>
      <div className="mt-6 grid flex-1 grid-cols-2 gap-10 overflow-hidden">
        <div className="flex flex-col">
          <p className="mb-3 text-[15px] font-semibold text-nw-primary">
            The intake form hides its own Next button
          </p>
          <div className="flex-1 overflow-hidden">
            <Img
              src="intake-step1-filled.png"
              alt="Filled form with no Next button"
            />
          </div>
          <p className="mt-2 text-[13px] italic text-nw-quaternary">
            Form filled out completely. No button, no error, no feedback.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="mb-3 text-[15px] font-semibold text-nw-primary">
            The card that gets created shows nothing
          </p>
          <div className="flex flex-1 items-center justify-center">
            <RecipientCardLive recipient={emptyRecipient} />
          </div>
          <p className="mt-2 text-[13px] italic text-nw-quaternary">
            What a new member sees. Dead dashes, no next step.
          </p>
        </div>
      </div>
    </Slide>
  );
}

// 7. Synthesis — frame as opportunity, not critique
function S07() {
  return (
    <Slide>
      <div className="flex flex-1 flex-col justify-center">
        <H1>
          Every finding points at the same component,
          <br />
          and the same opportunity.
        </H1>
        <div className="mt-10 space-y-5">
          {[
            "A design system migration with a clear next surface to finish",
            "An empty state that could welcome new members instead of ignoring them",
            "An intake flow that could be rebuilt on the modern stack",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-5 rounded-nw-md bg-white/60 px-8 py-5 text-xl text-nw-secondary shadow-nw-xs"
            >
              <span className="text-2xl text-periwinkle-500">→</span>
              {text}
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg text-nw-tertiary">
          The Recipient card sits at the center of all three. A good place for a
          first contribution to start.
        </p>
      </div>
    </Slide>
  );
}

// 8. The craft moment — interactive before/after, add fields to see the redesign come alive
function S08() {
  return (
    <Slide>
      <div className="shrink-0">
        <Label>A starting direction</Label>
        <H1>Redesigning the empty state.</H1>
        <Body className="mt-3">
          The proposed card is live. Click the dashed chips to add fields and
          watch it transform.
        </Body>
      </div>
      <div className="mt-8 flex flex-1 items-center justify-center gap-16">
        <div className="flex flex-col items-center">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-red-400">
            Today
          </p>
          <RecipientCardLive recipient={emptyRecipient} />
        </div>
        <div className="flex flex-col items-center self-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            className="text-periwinkle-400"
          >
            <path
              stroke="currentColor"
              d="M5 12h14m0 0-7-7m7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-periwinkle-600">
            Proposed (try it)
          </p>
          <InteractiveCardDemo />
        </div>
      </div>
      <p className="mt-4 shrink-0 text-center text-[12px] text-nw-quaternary">
        Built with Motion{" "}
        <code className="rounded bg-nw-bg-subtle px-1.5 py-0.5">layout</code>{" "}
        animations, CSS{" "}
        <code className="rounded bg-nw-bg-subtle px-1.5 py-0.5">
          @starting-style
        </code>
        , and anchor-positioned hover popovers on the full state.
      </p>
    </Slide>
  );
}

// 9. Intake flow direction — ONE frame, explicitly a sketch
function S09() {
  return (
    <Slide>
      <div className="shrink-0">
        <Label>A starting direction</Label>
        <H1>Rethinking the intake as a conversation.</H1>
        <Body className="mt-3">
          Today's form asks for a medical diagnosis in the first 30 seconds.
          This is a warmer entry point. One step shown here. The rest would
          get designed together.
        </Body>
      </div>
      <div className="mt-8 flex flex-1 items-center justify-center gap-16 overflow-hidden">
        {/* Single intake frame — Frame 1 only */}
        <div className="flex w-[340px] shrink-0 flex-col overflow-hidden rounded-[32px] border border-nw-border bg-white shadow-nw-lg">
          <div className="flex h-12 items-center justify-center bg-white px-6">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-periwinkle-500" />
              <div className="h-2 w-2 rounded-full bg-nw-border" />
              <div className="h-2 w-2 rounded-full bg-nw-border" />
              <div className="h-2 w-2 rounded-full bg-nw-border" />
            </div>
          </div>
          <div className="flex flex-1 flex-col px-7 pb-8">
            <h2 className="font-display text-[26px] font-semibold leading-tight text-nw-primary">
              Who are you caring&nbsp;for?
            </h2>
            <p className="mt-2.5 text-[14px] leading-relaxed text-nw-tertiary">
              Take your time. You can change or add more later.
            </p>
            <div className="mt-7 space-y-3">
              {[
                { label: "Myself", color: "hsl(230 89% 67%)", selected: true },
                { label: "A family member", color: "hsl(147 22% 39%)", selected: false },
                { label: "Both", color: "hsl(240 37% 66%)", selected: false },
                { label: "It's complicated", color: "hsl(8 53% 60%)", selected: false },
              ].map((opt) => (
                <div
                  key={opt.label}
                  className={`flex items-center gap-3 rounded-nw-md border-2 px-4 py-3.5 ${
                    opt.selected
                      ? "border-periwinkle-500 bg-periwinkle-50 shadow-nw-sm"
                      : "border-nw-border"
                  }`}
                >
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: opt.color }}
                  />
                  <span className="text-[14px] font-medium text-nw-primary">
                    {opt.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-7">
              <button
                type="button"
                className="w-full rounded-nw-md bg-periwinkle-500 py-3.5 text-[14px] font-semibold text-white shadow-nw-sm"
              >
                Continue
              </button>
            </div>
            <p className="mt-3 text-center text-[13px] text-nw-quaternary">
              I need help getting started
            </p>
          </div>
        </div>

        {/* The "what's next" — intentionally incomplete */}
        <div className="max-w-sm space-y-6">
          <div className="space-y-4">
            <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-nw-quaternary">
              The remaining steps we'd design together
            </p>
            {[
              "A freeform prompt instead of forced diagnosis fields",
              "Optional context, with skip always visible",
              "A confirmation that sets concrete expectations",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-nw-sm border border-dashed border-nw-border bg-white/50 px-5 py-4"
              >
                <span className="mt-0.5 text-[15px] text-periwinkle-400">
                  {i + 2}.
                </span>
                <span className="text-[15px] leading-snug text-nw-tertiary">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

// 10. What we'd explore together — the 40%, collaborative
function S10() {
  return (
    <Slide>
      <div className="flex flex-1 flex-col justify-center">
        <H1>What we'd want to explore together.</H1>
        <Body className="mt-4">
          This case study is a hypothesis. Here are the questions that would
          shape where it goes next.
        </Body>
        <div className="mt-10 grid grid-cols-2 gap-5">
          {[
            {
              q: "What does the Care Coordinator see?",
              why: "The redesign only shows the member side. Their workflow might change the intake approach entirely.",
            },
            {
              q: "How far along is the current migration?",
              why: "There may be an existing plan, a stalled effort, or decisions already made that change the priority.",
            },
            {
              q: "What would a quick win look like to the team right now?",
              why: "The card redesign might not be the right first move. Listening before shipping.",
            },
            {
              q: "Is there a reason the legacy page still exists?",
              why: "Hidden dependencies. A CRM integration, a coordinator workflow, a compliance requirement.",
            },
          ].map(({ q, why }) => (
            <div
              key={q}
              className="rounded-nw-md border border-nw-border bg-white p-6 shadow-nw-xs"
            >
              <p className="text-[17px] font-semibold text-nw-primary">{q}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-nw-tertiary">
                {why}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

// 11. How AI shaped this — workflow + artifacts
function S11() {
  return (
    <Slide>
      <div className="shrink-0">
        <H1>How AI shaped this case study.</H1>
      </div>
      <div className="mt-6 flex shrink-0 gap-3">
        {[
          {
            phase: "Discover",
            desc: "Claude Code extraction, human synthesis",
            color: "bg-periwinkle-200",
          },
          {
            phase: "Decide",
            desc: "Human judgment",
            color: "bg-periwinkle-100",
          },
          {
            phase: "Design",
            desc: "Claude Code scaffold, human polish",
            color: "bg-periwinkle-200",
          },
        ].map((band) => (
          <div
            key={band.phase}
            className={`flex flex-1 items-center gap-4 rounded-nw-sm ${band.color} px-5 py-3`}
          >
            <span className="text-[13px] font-semibold text-nw-primary">
              {band.phase}
            </span>
            <span className="text-[13px] text-nw-secondary">{band.desc}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 shrink-0 text-[13px] font-semibold uppercase tracking-[0.15em] text-nw-quaternary">
        Artifacts produced, ready for day one
      </p>
      <div className="mt-3 grid flex-1 grid-cols-3 gap-4 overflow-hidden">
        <FileCard
          name="CLAUDE.md"
          type="CTX"
          description="AI context file for the design system"
          details={[
            "Full nw-* token reference with semantic usage rules",
            "Component patterns and class naming constraints",
            "Any engineer with Claude Code gets the rules automatically",
          ]}
        />
        <FileCard
          name="tokens.json"
          type="DST"
          description="Machine-readable design token spec"
          details={[
            "W3C Design Tokens format for cross-tool compatibility",
            "All 13 recipient identity colors with solid + bg variants",
            "Single source of truth for Figma, Tailwind, and code",
          ]}
        />
        <FileCard
          name="migration-runbook.md"
          type="RUN"
          description="Step-by-step BEM → nw-* migration guide"
          details={[
            "Audit → Map → Replace → Verify → Update Figma → PR",
            "AI-assisted: one Claude Code command per component",
            "Human reviews the diff, verifies visually, ships",
          ]}
        />
      </div>
      <p className="mt-4 shrink-0 text-[15px] text-nw-tertiary">
        Every design decision was a human call. Claude Code handled extraction,
        scaffolding, and documentation.
      </p>
    </Slide>
  );
}

// 12. Personal hook — unchanged, present tense, load-bearing pivot
function S12() {
  return (
    <Slide>
      <div className="flex flex-1 items-center justify-center">
        <blockquote className="max-w-4xl text-center font-display text-[36px] font-medium leading-[1.5] text-nw-primary">
          &ldquo;This work isn't abstract to me. My youngest brother has had
          several experimental surgeries since he was born, and my family is
          still navigating providers, insurance, and logistics. I know what the
          hard days feel like.&rdquo;
        </blockquote>
      </div>
      <div className="absolute bottom-16 right-16 h-5 w-5 rounded-full bg-periwinkle-400 opacity-30" />
    </Slide>
  );
}

// 13. Why this role
function S13() {
  return (
    <Slide>
      <div className="flex flex-1 flex-col justify-center">
        <H1>Why this role.</H1>
        <Bullets
          items={[
            "I'm a design engineer. The seam between Figma and production is where I do my best work.",
            "Wellthy's mission aligns with my lived experience.",
            "The JD says \"fill UX gaps where designs don't exist yet.\" That's the work I like most.",
            "This case study is a sample of how I'd operate, not only what I'd ship.",
          ]}
        />
      </div>
    </Slide>
  );
}

// 14. Close
function S14() {
  return (
    <Slide bg="bg-periwinkle-50">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <H1Large>Let's talk.</H1Large>
        <p className="mt-8 text-xl text-nw-tertiary">
          The questions on slide 10 are real. I'd love to hear yours.
        </p>
      </div>
      <p className="shrink-0 text-center text-[15px] text-nw-quaternary">
        Kevin Boyle &middot; thekevinboyle@gmail.com
      </p>
    </Slide>
  );
}

// ─── SHELL ──────────────────────────────────────────────────────────

const slides = [
  S01, S02, S03, S04, S05, S06, S07, S08, S09, S10, S11, S12, S13, S14,
];

export function Presentation() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        setCurrent((c) => Math.min(c + 1, slides.length - 1));
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrent((c) => Math.max(c - 1, 0));
      }
      if (e.key === "Home") setCurrent(0);
      if (e.key === "End") setCurrent(slides.length - 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const CurrentSlide = slides[current];

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <CurrentSlide />
      <div className="fixed bottom-5 right-6 z-50 rounded-full bg-black/10 px-4 py-1.5 text-[13px] font-medium text-nw-quaternary backdrop-blur-sm">
        {current + 1} / {slides.length}
      </div>
      <div
        className="fixed left-0 top-0 z-40 h-full w-1/3 cursor-w-resize"
        onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
      />
      <div
        className="fixed right-0 top-0 z-40 h-full w-1/3 cursor-e-resize"
        onClick={() => setCurrent((c) => Math.min(c + 1, slides.length - 1))}
      />
    </div>
  );
}
