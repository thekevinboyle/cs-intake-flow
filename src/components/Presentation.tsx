import { useState, useEffect, type ReactNode } from "react";
import { RecipientCard } from "./RecipientCard";
import { RecipientCardLive } from "./RecipientCardLive";
import { IntakeFlow } from "./IntakeFlow";
import { emptyRecipient, partialRecipient, fullRecipient } from "../lib/recipients";

function Slide({
  children,
  bg = "bg-nw-bg-app",
}: {
  children: ReactNode;
  bg?: string;
}) {
  return (
    <div
      className={`flex h-screen w-screen flex-col justify-center ${bg} px-24 py-16`}
    >
      {children}
    </div>
  );
}

function SlideTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-display text-[56px] font-semibold leading-[1.15] text-nw-primary">
      {children}
    </h1>
  );
}

function SlideBody({ children }: { children: ReactNode }) {
  return <p className="mt-6 max-w-3xl text-2xl leading-relaxed text-nw-secondary">{children}</p>;
}

function SlideLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-sm font-medium uppercase tracking-widest text-nw-quaternary">
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 space-y-5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4 text-xl leading-relaxed text-nw-secondary">
          <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-periwinkle-400" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Screenshot({ src, alt }: { src: string; alt: string }) {
  const base = import.meta.env.BASE_URL;
  return (
    <img
      src={`${base}screenshots/${src}`}
      alt={alt}
      className="h-auto max-h-80 rounded-nw-lg border border-nw-border object-contain shadow-nw-md"
    />
  );
}

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-64 items-center justify-center rounded-nw-lg border-2 border-dashed border-nw-border bg-nw-bg-subtle text-sm text-nw-quaternary">
      {label}
    </div>
  );
}

function CodeBlock({ lines }: { lines: { text: string; color: string }[] }) {
  return (
    <div className="rounded-nw-lg bg-[#1e1e1e] px-8 py-6 font-mono text-lg leading-relaxed">
      {lines.map((line, i) => (
        <div key={i} style={{ color: line.color }}>
          {line.text}
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
        <div className="mb-6 h-16 w-16 rounded-full bg-periwinkle-500" />
        <h1 className="font-display text-[72px] font-semibold leading-none text-nw-primary">
          Care Recipient card
        </h1>
        <p className="mt-4 text-2xl text-nw-tertiary">
          A design engineering case study for Wellthy
        </p>
        <p className="mt-12 text-lg text-nw-quaternary">
          Kevin Boyle · April 17, 2026
        </p>
      </div>
    </Slide>
  );
}

function S02() {
  return (
    <Slide>
      <SlideTitle>
        One component. Three problems.
        <br />
        Six sprints of work.
      </SlideTitle>
      <BulletList
        items={[
          "A UX gap a new user hits in their first 90 seconds",
          "A design system migration caught half-finished in production",
          "An architectural seam between your React app and a legacy stack",
        ]}
      />
    </Slide>
  );
}

function S03() {
  return (
    <Slide>
      <SlideTitle>I logged in.</SlideTitle>
      <SlideBody>
        I pulled your production DOM, extracted your CSS custom properties, and
        mapped your design system surface by surface.
      </SlideBody>
      <div className="mt-10">
        <Screenshot src="app-concierge-welcome.png" alt="Wellthy app concierge welcome screen — live capture, April 10, 2026" />
      </div>
    </Slide>
  );
}

function S04() {
  return (
    <Slide>
      <SlideLabel>Finding one</SlideLabel>
      <SlideTitle>
        Your Recipient card lives in three eras at once.
      </SlideTitle>
      <div className="mt-10">
        <CodeBlock
          lines={[
            { text: "/* BEM — original era */", color: "#666" },
            { text: "care-recipient-card", color: "#f87171" },
            { text: "", color: "transparent" },
            { text: "/* Tailwind — migration era */", color: "#666" },
            { text: "relative block w-full rounded-2xl", color: "#60a5fa" },
            { text: "", color: "transparent" },
            { text: "/* nw-* tokens — new era */", color: "#666" },
            {
              text: "border-nw-secondary bg-nw-primary shadow-nw-xs",
              color: "#4ade80",
            },
          ]}
        />
      </div>
      <div className="mt-6 flex gap-8 text-sm">
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
    </Slide>
  );
}

function S05() {
  return (
    <Slide>
      <SlideLabel>Finding two</SlideLabel>
      <SlideTitle>
        Your most important CTA takes users out of your app.
      </SlideTitle>
      <SlideBody>
        Clicking "Get Started" navigates from app.wellthy.com to
        www.wellthy.com/profiles/care_recipients/create/ — a different hostname,
        a different tech stack, and a different design system era.
      </SlideBody>
      <div className="mt-10 grid grid-cols-2 items-start gap-8">
        <Screenshot src="app-concierge-welcome.png" alt="React app at app.wellthy.com" />
        <Screenshot src="intake-step1-recipient-create.png" alt="Legacy intake form at www.wellthy.com/profiles/care_recipients/create/" />
      </div>
    </Slide>
  );
}

function S06() {
  return (
    <Slide>
      <SlideLabel>Finding three</SlideLabel>
      <SlideTitle>
        The Next button on the intake form is silently hidden.
      </SlideTitle>
      <SlideBody>
        I filled the form. The Next button never appeared. No error, no hint, no
        guidance.
      </SlideBody>
      <div className="mt-10">
        <Screenshot src="intake-step1-filled.png" alt="Intake form with all fields filled but no Next button visible" />
      </div>
      <p className="mt-4 text-center text-sm italic text-nw-quaternary">
        No button. No error. No feedback.
      </p>
    </Slide>
  );
}

function S07() {
  return (
    <Slide>
      <SlideLabel>Finding four</SlideLabel>
      <SlideTitle>
        Your Recipient card shows me nothing when I'm new.
      </SlideTitle>
      <SlideBody>
        On a new account, the card displays "Birthdate unknown / Care Circle ---
        / Services ---" with no affordance to fix any of it.
      </SlideBody>
      <div className="mt-10 flex justify-center">
        <RecipientCardLive recipient={emptyRecipient} />
      </div>
      <p className="mt-4 text-center text-sm italic text-nw-quaternary">
        What a new member sees. No CTA, no hint, no next step.
      </p>
    </Slide>
  );
}

function S08() {
  return (
    <Slide>
      <SlideTitle>Every finding points at the same component.</SlideTitle>
      <div className="mt-12 flex items-center gap-12">
        <ul className="space-y-6 text-xl text-nw-secondary">
          <li className="flex items-center gap-3">
            <span className="text-periwinkle-500">→</span> The mixed class list → Recipient card
          </li>
          <li className="flex items-center gap-3">
            <span className="text-periwinkle-500">→</span> The empty state → Recipient card
          </li>
          <li className="flex items-center gap-3">
            <span className="text-periwinkle-500">→</span> The intake form that doesn't finish → creates a Recipient card
          </li>
        </ul>
      </div>
    </Slide>
  );
}

function S09() {
  return (
    <Slide>
      <SlideTitle>Three layers, three timelines.</SlideTitle>
      <div className="mt-12 space-y-6">
        {[
          { label: "Layer 1: Redesign the card itself", sprints: 1, color: "bg-periwinkle-300" },
          { label: "Layer 2: Extract it into your design system", sprints: 2, color: "bg-periwinkle-500" },
          { label: "Layer 3: Rebuild the intake flow on React", sprints: 3, color: "bg-periwinkle-700" },
        ].map((layer) => (
          <div key={layer.label} className="flex items-center gap-6">
            <div
              className={`${layer.color} h-12 rounded-nw-sm`}
              style={{ width: `${layer.sprints * 160}px` }}
            />
            <div>
              <p className="text-lg font-medium text-nw-primary">{layer.label}</p>
              <p className="text-sm text-nw-quaternary">
                {layer.sprints} {layer.sprints === 1 ? "sprint" : "sprints"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}

function S10() {
  return (
    <Slide>
      <SlideLabel>Layer one</SlideLabel>
      <SlideTitle>The card as it is today.</SlideTitle>
      <div className="mt-10 flex justify-center">
        <div className="relative">
          <RecipientCardLive recipient={emptyRecipient} />
          <div className="absolute -right-64 top-2 text-sm text-red-500">
            ← decorative banner, no information
          </div>
          <div className="absolute -right-64 top-24 text-sm text-red-500">
            ← color has no name, no meaning
          </div>
          <div className="absolute -right-64 top-40 text-sm text-red-500">
            ← dead dashes, no affordances
          </div>
        </div>
      </div>
    </Slide>
  );
}

function S11() {
  return (
    <Slide>
      <SlideLabel>Layer one</SlideLabel>
      <SlideTitle>The card as I'd redesign it.</SlideTitle>
      <div className="mt-10 flex flex-wrap justify-center gap-8">
        <div>
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-nw-quaternary">
            Empty
          </p>
          <RecipientCard recipient={emptyRecipient} />
        </div>
        <div>
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-nw-quaternary">
            Partial
          </p>
          <RecipientCard recipient={partialRecipient} />
        </div>
        <div>
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-nw-quaternary">
            Full
          </p>
          <RecipientCard recipient={fullRecipient} />
        </div>
      </div>
    </Slide>
  );
}

function S12() {
  return (
    <Slide>
      <SlideLabel>Layer two</SlideLabel>
      <SlideTitle>Unify the card's class list.</SlideTitle>
      <SlideBody>
        Three concrete moves — token migration, component extraction, governance.
      </SlideBody>
      <div className="mt-10 grid grid-cols-2 gap-12">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-nw-quaternary">
            Before → After
          </p>
          <CodeBlock
            lines={[
              { text: "/* Remove (7 classes) */", color: "#666" },
              { text: "- care-recipient-card", color: "#f87171" },
              { text: "- care-recipient-card__banner", color: "#f87171" },
              { text: "- care-recipient-card__content", color: "#f87171" },
              { text: "", color: "transparent" },
              { text: "/* Keep + add (5 classes) */", color: "#666" },
              { text: "+ rounded-nw-lg border-nw-border", color: "#4ade80" },
              { text: "+ bg-nw-bg-card shadow-nw-xs", color: "#4ade80" },
              { text: "+ text-nw-primary", color: "#4ade80" },
            ]}
          />
        </div>
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-nw-quaternary">
            Figma component
          </p>
          <ScreenshotPlaceholder label="Figma component panel with variants — drop Figma export here" />
        </div>
      </div>
    </Slide>
  );
}

function S13() {
  return (
    <Slide>
      <SlideLabel>Layer three</SlideLabel>
      <SlideTitle>Rebuild the intake flow on React.</SlideTitle>
      <p className="mt-3 text-lg text-nw-tertiary">
        Four frames showing a conversational intake pattern, mobile-first.
      </p>
      <div className="mt-8 flex justify-center">
        <div className="scale-[0.85] origin-top">
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
        <p className="text-sm font-medium uppercase tracking-widest text-periwinkle-600">
          Live prototype
        </p>
        <h1 className="mt-4 font-display text-[64px] font-semibold text-nw-primary">
          Switching to browser...
        </h1>
        <p className="mt-6 text-xl text-nw-tertiary">
          React 19 · Tailwind 4 · Vite 8 · running on localhost
        </p>
      </div>
    </Slide>
  );
}

function S15() {
  return (
    <Slide>
      <SlideTitle>Scoping: what ships first, what ships later.</SlideTitle>
      <div className="mt-10 overflow-hidden rounded-nw-lg border border-nw-border">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-nw-border bg-nw-bg-subtle">
              <th className="px-6 py-4 text-sm font-semibold text-nw-primary">Work</th>
              <th className="px-6 py-4 text-sm font-semibold text-nw-primary">Sprints</th>
              <th className="px-6 py-4 text-sm font-semibold text-nw-primary">Retires</th>
              <th className="px-6 py-4 text-sm font-semibold text-nw-primary">User-visible</th>
            </tr>
          </thead>
          <tbody className="text-sm text-nw-secondary">
            {[
              ["Recipient card redesign", "1", "Dead-dash empty state", "Yes — day 1"],
              ["Card extraction + detail page", "2", "More BEM classes", "Yes"],
              ["Home + Care Circle + token audit", "3", "Old Home variants", "Yes"],
              ["Intake flow — design + build", "3–5", "— (prep)", "Gated by flag"],
              ["Intake flow — rollout", "5", "Legacy intake page", "Yes — significant"],
              ["Legacy retirement", "6", "Knockout + jQuery UI", "Implicit"],
            ].map(([work, sprints, retires, visible], i) => (
              <tr key={i} className="border-b border-nw-border last:border-0">
                <td className="px-6 py-4 font-medium text-nw-primary">{work}</td>
                <td className="px-6 py-4">
                  <span className="inline-block rounded-full bg-periwinkle-100 px-3 py-1 text-xs font-medium text-periwinkle-700">
                    {sprints}
                  </span>
                </td>
                <td className="px-6 py-4">{retires}</td>
                <td className="px-6 py-4">{visible}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Slide>
  );
}

function S16() {
  return (
    <Slide>
      <SlideTitle>How I used AI on the case study itself.</SlideTitle>
      <div className="mt-12 space-y-6">
        {[
          {
            phase: "Audit phase",
            left: "Claude Code (extraction)",
            right: "me (synthesis)",
            color: "bg-periwinkle-200",
          },
          {
            phase: "Design phase",
            left: "me (judgment)",
            right: "",
            color: "bg-periwinkle-100",
          },
          {
            phase: "Code phase",
            left: "Claude Code (scaffold)",
            right: "me (polish)",
            color: "bg-periwinkle-200",
          },
        ].map((band) => (
          <div key={band.phase} className={`flex items-center gap-6 rounded-nw-md ${band.color} px-8 py-5`}>
            <span className="w-32 text-sm font-semibold text-nw-primary">
              {band.phase}
            </span>
            <span className="text-sm text-nw-secondary">
              {band.left}
              {band.right && <> → {band.right}</>}
            </span>
          </div>
        ))}
      </div>
      <BulletList
        items={[
          "Claude Code for the audit (DOM extraction, CSS property mining)",
          "Claude Code drafted the initial React scaffold",
          "Every design decision and redesign direction is mine",
        ]}
      />
    </Slide>
  );
}

function S17() {
  return (
    <Slide>
      <div className="flex flex-1 items-center justify-center">
        <blockquote className="max-w-3xl text-center font-display text-3xl font-medium leading-relaxed text-nw-primary">
          "This work isn't abstract to me. My youngest brother has had several
          experimental surgeries since he was born, and my family is still
          navigating providers, insurance, and logistics. I know what the hard
          days feel like."
        </blockquote>
      </div>
      <div className="absolute bottom-16 right-24 h-4 w-4 rounded-full bg-periwinkle-400 opacity-40" />
    </Slide>
  );
}

function S18() {
  return (
    <Slide>
      <SlideTitle>Why I want this role specifically.</SlideTitle>
      <BulletList
        items={[
          "I'm a design engineer, not a designer-who-codes-a-little or an engineer-with-design-opinions",
          "I care about the seam between Figma and production",
          "Wellthy's mission aligns with my lived experience",
          "You need someone to fill UX gaps where designs don't exist yet — that's the work I like most",
        ]}
      />
    </Slide>
  );
}

function S19() {
  return (
    <Slide>
      <SlideTitle>If I joined on day one.</SlideTitle>
      <div className="mt-12 flex items-start gap-12">
        {[
          { time: "Week 1", text: "Validate or adjust the scoping table with the engineering manager" },
          { time: "Week 2", text: "Ship the new Recipient card behind a flag" },
          { time: "Week 3", text: "Start the design system migration with the token work" },
          { time: "Month 2", text: "Propose the AI-assisted class pattern audit as a team experiment" },
        ].map((item, i) => (
          <div key={i} className="flex flex-1 flex-col items-center text-center">
            <div className="mb-4 h-4 w-4 rounded-full bg-periwinkle-500" />
            <p className="text-sm font-semibold text-periwinkle-600">{item.time}</p>
            <p className="mt-2 text-sm leading-relaxed text-nw-secondary">{item.text}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}

function S20() {
  return (
    <Slide bg="bg-periwinkle-50">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="font-display text-[80px] font-semibold text-nw-primary">
          Let's talk.
        </h1>
      </div>
      <p className="text-center text-sm text-nw-quaternary">
        Kevin Boyle · thekevinboyle@gmail.com
      </p>
    </Slide>
  );
}

// ─── PRESENTATION SHELL ─────────────────────────────────────────────

const slides = [S01, S02, S03, S04, S05, S06, S07, S08, S09, S10, S11, S12, S13, S14, S15, S16, S17, S18, S19, S20];

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
      if (e.key === "Home") {
        setCurrent(0);
      }
      if (e.key === "End") {
        setCurrent(slides.length - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const CurrentSlide = slides[current];

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <CurrentSlide />
      {/* Slide counter */}
      <div className="fixed bottom-4 right-6 rounded-full bg-black/10 px-3 py-1 text-xs font-medium text-nw-quaternary backdrop-blur-sm">
        {current + 1} / {slides.length}
      </div>
      {/* Click zones */}
      <div
        className="fixed left-0 top-0 h-full w-1/3 cursor-w-resize"
        onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
      />
      <div
        className="fixed right-0 top-0 h-full w-1/3 cursor-e-resize"
        onClick={() => setCurrent((c) => Math.min(c + 1, slides.length - 1))}
      />
    </div>
  );
}
