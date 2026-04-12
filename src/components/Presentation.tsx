import { useState, useEffect, type ReactNode } from "react";
import { RecipientCard } from "./RecipientCard";
import { RecipientCardLive } from "./RecipientCardLive";
import { IntakeFlow } from "./IntakeFlow";
import {
  emptyRecipient,
  partialRecipient,
  fullRecipient,
} from "../lib/recipients";

const BASE = import.meta.env.BASE_URL;

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

function Body({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`max-w-3xl text-xl leading-relaxed text-nw-secondary ${className}`}>
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

// ─── SLIDES ─────────────────────────────────────────────────────────

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

function S02() {
  return (
    <Slide>
      <div className="flex flex-1 flex-col justify-center">
        <H1>
          One component. Three problems.
          <br />
          Six sprints of work.
        </H1>
        <Bullets
          items={[
            "A UX gap a new user hits in their first 90 seconds",
            "A design system migration caught half-finished in production",
            "An architectural seam between your React app and a legacy stack",
          ]}
        />
      </div>
    </Slide>
  );
}

function S03() {
  return (
    <Slide>
      <div className="shrink-0">
        <H1>Starting with the product.</H1>
        <Body className="mt-3">
          The audit pulled your production DOM, extracted your CSS custom
          properties, and mapped the design system surface by surface.
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

function S04() {
  return (
    <Slide>
      <div className="shrink-0">
        <Label>Finding one</Label>
        <H1>The Recipient card lives in three eras at once.</H1>
      </div>
      <div className="mt-8 flex flex-1 flex-col justify-center">
        <Code
          lines={[
            { text: "/* BEM — original era */", color: "#666" },
            { text: "care-recipient-card", color: "#f87171" },
            { text: "", color: "" },
            { text: "/* Tailwind — migration era */", color: "#666" },
            { text: "relative block w-full rounded-2xl", color: "#60a5fa" },
            { text: "", color: "" },
            { text: "/* nw-* tokens — new era */", color: "#666" },
            { text: "border-nw-secondary bg-nw-primary shadow-nw-xs", color: "#4ade80" },
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
            <span className="h-3 w-3 rounded-full bg-green-400" /> New tokens
          </span>
        </div>
      </div>
    </Slide>
  );
}

function S05() {
  return (
    <Slide>
      <div className="shrink-0">
        <Label>Finding two</Label>
        <H1>The most important CTA takes users out of the app.</H1>
        <Body className="mt-3">
          Clicking "Get Started" navigates from{" "}
          <span className="font-semibold">app.wellthy.com</span> to{" "}
          <span className="font-semibold">www.wellthy.com/profiles/care_recipients/create/</span>
        </Body>
      </div>
      <div className="mt-6 grid flex-1 grid-cols-2 gap-6 overflow-hidden">
        <div className="relative flex flex-col">
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-widest text-periwinkle-600">
            React app
          </p>
          <div className="flex-1 overflow-hidden">
            <Img src="app-concierge-welcome.png" alt="React app at app.wellthy.com" />
          </div>
        </div>
        <div className="relative flex flex-col">
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-widest text-red-500">
            Legacy form
          </p>
          <div className="flex-1 overflow-hidden">
            <Img src="intake-step1-recipient-create.png" alt="Legacy form" />
          </div>
        </div>
      </div>
    </Slide>
  );
}

function S06() {
  return (
    <Slide>
      <div className="shrink-0">
        <Label>Finding three</Label>
        <H1>The Next button is silently hidden.</H1>
        <Body className="mt-3">
          The form was filled out completely. The Next button never appeared. No
          error, no hint.
        </Body>
      </div>
      <div className="mt-6 flex flex-1 items-center justify-center overflow-hidden">
        <Img src="intake-step1-filled.png" alt="Intake form with no Next button" />
      </div>
      <p className="mt-3 shrink-0 text-center text-[15px] italic text-nw-quaternary">
        No button. No error. No feedback.
      </p>
    </Slide>
  );
}

function S07() {
  return (
    <Slide>
      <div className="shrink-0">
        <Label>Finding four</Label>
        <H1>New users see nothing on the Recipient card.</H1>
      </div>
      <div className="mt-6 flex flex-1 flex-col items-center justify-center gap-5">
        <RecipientCardLive recipient={emptyRecipient} />
        <p className="shrink-0 text-[15px] italic text-nw-quaternary">
          What a new member sees. No CTA, no hint, no next step.
        </p>
      </div>
    </Slide>
  );
}

function S08() {
  return (
    <Slide>
      <div className="flex flex-1 flex-col justify-center">
        <H1>Every finding points at the same component.</H1>
        <div className="mt-12 space-y-8">
          {[
            "The mixed class list → Recipient card",
            "The empty state → Recipient card",
            "The intake form that doesn't finish → creates a Recipient card",
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
      </div>
    </Slide>
  );
}

function S09() {
  return (
    <Slide>
      <div className="flex flex-1 flex-col justify-center">
        <H1>Three layers, three timelines.</H1>
        <div className="mt-12 space-y-8">
          {[
            { label: "Layer 1: Redesign the card itself", sprints: 1, w: "25%", color: "bg-periwinkle-300" },
            { label: "Layer 2: Extract it into the design system", sprints: 2, w: "50%", color: "bg-periwinkle-500" },
            { label: "Layer 3: Rebuild the intake flow on React", sprints: 3, w: "75%", color: "bg-periwinkle-700" },
          ].map((layer) => (
            <div key={layer.label} className="flex items-center gap-8">
              <div
                className={`${layer.color} h-14 rounded-nw-sm`}
                style={{ width: layer.w }}
              />
              <div>
                <p className="text-xl font-medium text-nw-primary">{layer.label}</p>
                <p className="text-sm text-nw-quaternary">
                  {layer.sprints} {layer.sprints === 1 ? "sprint" : "sprints"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function S10() {
  return (
    <Slide>
      <div className="shrink-0">
        <Label>Layer one</Label>
        <H1>The card as it is today.</H1>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="relative scale-[1.4]">
          <RecipientCardLive recipient={emptyRecipient} />
          <div className="absolute -right-72 top-1 flex items-center gap-2 text-[13px] font-medium text-red-500">
            <span className="h-px w-8 bg-red-300" />
            decorative banner, no information
          </div>
          <div className="absolute -right-72 top-[88px] flex items-center gap-2 text-[13px] font-medium text-red-500">
            <span className="h-px w-8 bg-red-300" />
            color has no name, no meaning
          </div>
          <div className="absolute -right-72 top-[152px] flex items-center gap-2 text-[13px] font-medium text-red-500">
            <span className="h-px w-8 bg-red-300" />
            dead dashes, no affordances
          </div>
        </div>
      </div>
    </Slide>
  );
}

function S11() {
  return (
    <Slide>
      <div className="shrink-0">
        <Label>Layer one</Label>
        <H1>The card, redesigned.</H1>
      </div>
      <div className="flex flex-1 items-center justify-center gap-10">
        {[
          { label: "Empty", r: emptyRecipient },
          { label: "Partial", r: partialRecipient },
          { label: "Full", r: fullRecipient },
        ].map(({ label, r }) => (
          <div key={label} className="flex flex-col items-center">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.15em] text-nw-quaternary">
              {label}
            </p>
            <RecipientCard recipient={r} />
          </div>
        ))}
      </div>
    </Slide>
  );
}

function S12() {
  return (
    <Slide>
      <div className="shrink-0">
        <Label>Layer two</Label>
        <H1>Unifying the card's class list.</H1>
        <Body className="mt-3">
          Three concrete moves — token migration, component extraction, and a
          shared governance rule.
        </Body>
      </div>
      <div className="mt-8 flex flex-1 items-start gap-12 overflow-hidden">
        <div className="flex-1">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-nw-quaternary">
            Before → After
          </p>
          <Code
            lines={[
              { text: "/* Remove (7 classes) */", color: "#666" },
              { text: "- care-recipient-card", color: "#f87171" },
              { text: "- care-recipient-card__banner", color: "#f87171" },
              { text: "- care-recipient-card__content", color: "#f87171" },
              { text: "", color: "" },
              { text: "/* Keep + add (5 classes) */", color: "#666" },
              { text: "+ rounded-nw-lg border-nw-border", color: "#4ade80" },
              { text: "+ bg-nw-bg-card shadow-nw-xs", color: "#4ade80" },
              { text: "+ text-nw-primary", color: "#4ade80" },
            ]}
          />
        </div>
        <div className="flex-1">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-nw-quaternary">
            Component variants
          </p>
          <div className="rounded-nw-md border border-nw-border bg-white p-5">
            <div className="flex gap-4">
              {[
                { label: "Empty", r: emptyRecipient },
                { label: "Partial", r: partialRecipient },
                { label: "Full", r: fullRecipient },
              ].map(({ label, r }) => (
                <div key={label} className="flex-1">
                  <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-widest text-nw-quaternary">
                    {label}
                  </p>
                  <div className="origin-top scale-[0.42]">
                    <RecipientCard recipient={r} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function S13() {
  return (
    <Slide>
      <div className="shrink-0">
        <Label>Layer three</Label>
        <H1>Rebuilding the intake flow on React.</H1>
      </div>
      <div className="mt-6 flex flex-1 items-center justify-center overflow-hidden">
        <div className="origin-center scale-[0.92]">
          <IntakeFlow />
        </div>
      </div>
    </Slide>
  );
}

function S14() {
  return (
    <Slide bg="bg-periwinkle-50">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-periwinkle-600">
          Live prototype
        </p>
        <h1 className="mt-6 font-display text-[64px] font-semibold text-nw-primary">
          Switching to browser...
        </h1>
        <p className="mt-6 text-xl text-nw-tertiary">
          React 19 &middot; Tailwind 4 &middot; Vite 8 &middot; running on
          localhost
        </p>
      </div>
    </Slide>
  );
}

function S15() {
  return (
    <Slide>
      <div className="shrink-0">
        <H1>What we'd ship first, and what comes later.</H1>
      </div>
      <div className="mt-8 flex-1 overflow-hidden rounded-nw-lg border border-nw-border bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-nw-border bg-nw-bg-subtle">
              <th className="px-8 py-5 text-[15px] font-semibold text-nw-primary">Work</th>
              <th className="px-8 py-5 text-[15px] font-semibold text-nw-primary">Sprints</th>
              <th className="px-8 py-5 text-[15px] font-semibold text-nw-primary">Retires</th>
              <th className="px-8 py-5 text-[15px] font-semibold text-nw-primary">User-visible</th>
            </tr>
          </thead>
          <tbody className="text-[15px] text-nw-secondary">
            {[
              ["Recipient card redesign", "1", "Dead-dash empty state", "Yes — day 1"],
              ["Card extraction + detail page", "2", "More BEM classes", "Yes"],
              ["Home + Care Circle + token audit", "3", "Old Home variants", "Yes"],
              ["Intake flow — design + build", "3–5", "— (prep)", "Gated by flag"],
              ["Intake flow — rollout", "5", "Legacy intake page", "Yes — significant"],
              ["Legacy retirement", "6", "Knockout + jQuery UI", "Implicit"],
            ].map(([work, sprints, retires, visible], i) => (
              <tr key={i} className="border-b border-nw-border last:border-0">
                <td className="px-8 py-5 font-medium text-nw-primary">{work}</td>
                <td className="px-8 py-5">
                  <span className="inline-block rounded-full bg-periwinkle-100 px-4 py-1.5 text-[13px] font-semibold text-periwinkle-700">
                    {sprints}
                  </span>
                </td>
                <td className="px-8 py-5">{retires}</td>
                <td className="px-8 py-5">{visible}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Slide>
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

function S16() {
  return (
    <Slide>
      <div className="shrink-0">
        <H1>How AI shaped this case study.</H1>
      </div>

      {/* Phase bands — the workflow */}
      <div className="mt-6 flex shrink-0 gap-3">
        {[
          { phase: "Audit", desc: "Claude Code (extraction) → human (synthesis)", color: "bg-periwinkle-200" },
          { phase: "Design", desc: "Human (judgment)", color: "bg-periwinkle-100" },
          { phase: "Code", desc: "Claude Code (scaffold) → human (polish)", color: "bg-periwinkle-200" },
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

      {/* Artifact cards — what was produced */}
      <p className="mt-6 shrink-0 text-[13px] font-semibold uppercase tracking-[0.15em] text-nw-quaternary">
        Artifacts produced — ready for day one
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
        Every design decision and redesign direction was a human call. Claude
        Code handled extraction, scaffolding, and documentation — the work
        that's mechanical and repeatable.
      </p>
    </Slide>
  );
}

function S17() {
  return (
    <Slide>
      <div className="flex flex-1 items-center justify-center">
        <blockquote className="max-w-4xl text-center font-display text-[36px] font-medium leading-[1.5] text-nw-primary">
          &ldquo;This work isn't abstract to me. My youngest brother has had
          several experimental surgeries since he was born, and my family is
          still navigating providers, insurance, and logistics. I know what
          the hard days feel like.&rdquo;
        </blockquote>
      </div>
      <div className="absolute bottom-16 right-16 h-5 w-5 rounded-full bg-periwinkle-400 opacity-30" />
    </Slide>
  );
}

function S18() {
  return (
    <Slide>
      <div className="flex flex-1 flex-col justify-center">
        <H1>Why I want this role specifically.</H1>
        <Bullets
          items={[
            "I'm a design engineer, not a designer-who-codes-a-little or an engineer-with-design-opinions",
            "I care about the seam between Figma and production",
            "Wellthy's mission aligns with my lived experience",
            "You need someone to fill UX gaps where designs don't exist yet — that's the work I like most",
          ]}
        />
      </div>
    </Slide>
  );
}

function S19() {
  return (
    <Slide>
      <div className="flex flex-1 flex-col justify-center">
        <H1>A potential first month together.</H1>
        <div className="mt-14 grid grid-cols-4 gap-8">
          {[
            { time: "Week 1", text: "Validate the scoping table together with the engineering manager" },
            { time: "Week 2", text: "Ship the new Recipient card behind a flag" },
            { time: "Week 3", text: "Start the design system migration with the team" },
            { time: "Month 2", text: "Propose the AI-assisted class pattern audit as a shared experiment" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-5 h-5 w-5 rounded-full bg-periwinkle-500" />
              <p className="text-[15px] font-semibold text-periwinkle-600">{item.time}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-nw-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function S20() {
  return (
    <Slide bg="bg-periwinkle-50">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <H1Large>Let's talk.</H1Large>
      </div>
      <p className="shrink-0 text-center text-[15px] text-nw-quaternary">
        Kevin Boyle &middot; thekevinboyle@gmail.com
      </p>
    </Slide>
  );
}

// ─── SHELL ──────────────────────────────────────────────────────────

const slides = [
  S01, S02, S03, S04, S05, S06, S07, S08, S09, S10,
  S11, S12, S13, S14, S15, S16, S17, S18, S19, S20,
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
