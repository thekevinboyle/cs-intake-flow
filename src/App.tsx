import { RecipientCard } from "./components/RecipientCard";
import { RecipientCardLive } from "./components/RecipientCardLive";
import { IntakeFlow } from "./components/IntakeFlow";
import {
  mockRecipients,
  emptyRecipient,
  partialRecipient,
  fullRecipient,
} from "./lib/recipients";

const allThirteenColors = [
  "lavender",
  "evergreen",
  "herb",
  "sage",
  "sandalwood",
  "berry",
  "plum",
  "peach",
  "honey",
  "aqua",
  "wildflower",
  "mist",
  "periwinkle",
] as const;

function App() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <p className="mb-2 text-sm uppercase tracking-wide text-nw-quaternary">
          Wellthy design engineer case study — live prototype
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-nw-primary">
          Care Recipient card
        </h1>
        <p className="mt-3 max-w-2xl text-nw-secondary">
          React 19 + Tailwind 4 + Vite 8, running on the real Wellthy{" "}
          <code className="rounded bg-nw-bg-subtle px-1.5 py-0.5 text-sm">
            nw-*
          </code>{" "}
          token hierarchy, periwinkle scale, and the 13 recipient nature colors.
        </p>
      </header>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 1 — Current live mock (the "before")
          Faithful reproduction from the audit. Uses RecipientCardLive
          which preserves the original card with dead dashes and no
          progressive affordances.
          ────────────────────────────────────────────────────────────── */}
      <section className="mb-14">
        <h2 className="mb-2 font-display text-xl font-semibold text-nw-primary">
          1 · Today's card, reproduced from the live DOM
        </h2>
        <p className="mb-5 max-w-2xl text-sm text-nw-tertiary">
          Pulled from{" "}
          <code className="rounded bg-nw-bg-subtle px-1 text-xs">
            app.wellthy.com
          </code>{" "}
          during the audit. Same tokens, same measurements, same empty-state
          behavior. This is the "before."
        </p>
        <RecipientCardLive recipient={emptyRecipient} />
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 2 — The redesign: three states
          Progressive completion + conversation-starter pattern.
          Empty → dashed "add" chips + invitation prompt.
          Partial → mix of filled pills + add chips.
          Full → all pills filled + activity strip + arrow.
          ────────────────────────────────────────────────────────────── */}
      <section className="mb-14">
        <h2 className="mb-2 font-display text-xl font-semibold text-nw-primary">
          2 · The redesign — empty, partial, full
        </h2>
        <p className="mb-5 max-w-2xl text-sm text-nw-tertiary">
          Progressive completion pattern: every field slot is always visible as
          either a filled pill or a dashed "add" chip. The user sees what's done,
          what's next, and how to get there. Empty cards get a warm invitation
          instead of dead dashes.
        </p>
        <div className="flex flex-wrap gap-6">
          <div>
            <div className="mb-2 text-xs font-medium uppercase tracking-wide text-nw-quaternary">
              Empty
            </div>
            <RecipientCard recipient={emptyRecipient} />
          </div>
          <div>
            <div className="mb-2 text-xs font-medium uppercase tracking-wide text-nw-quaternary">
              Partial
            </div>
            <RecipientCard recipient={partialRecipient} />
          </div>
          <div>
            <div className="mb-2 text-xs font-medium uppercase tracking-wide text-nw-quaternary">
              Full
            </div>
            <RecipientCard recipient={fullRecipient} />
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 3 — Color identity system
          All 13 nature colors in the redesigned card showing the full
          palette as populated cards.
          ────────────────────────────────────────────────────────────── */}
      <section className="mb-14">
        <h2 className="mb-2 font-display text-xl font-semibold text-nw-primary">
          3 · All 13 recipient identities
        </h2>
        <p className="mb-5 max-w-2xl text-sm text-nw-tertiary">
          Every recipient gets a nature color drawn from Wellthy's existing
          palette. Avatar, banner, and accent colors all derive from one named
          token.
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {allThirteenColors.map((color) => (
            <RecipientCard
              key={color}
              recipient={{
                id: color,
                name: color.charAt(0).toUpperCase() + color.slice(1),
                color,
                birthdate: "1970-01-01",
                careCircleCount: 3,
                activeServices: 1,
                recentActivity: "Updated recently",
              }}
            />
          ))}
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 4 — Intake flow vision (Layer 3)
          Four phone-sized frames showing the conversational intake
          redesign. Matches Slide 13 in the deck. Mobile-first,
          warm editorial tone, no forced disclosure.
          ────────────────────────────────────────────────────────────── */}
      <section className="mb-14">
        <h2 className="mb-2 font-display text-xl font-semibold text-nw-primary">
          4 · Intake flow redesign — conversational pattern
        </h2>
        <p className="mb-5 max-w-2xl text-sm text-nw-tertiary">
          Replace the legacy form with a four-step conversation. No forced
          medical disclosure, no hidden buttons, no silent validation failures.
          Every step has a visible CTA and an explicit skip option.
        </p>
        <IntakeFlow />
      </section>

      <footer className="mt-16 border-t border-nw-border pt-8 text-sm text-nw-quaternary">
        {mockRecipients.length} mock recipients · Fraunces + Inter · React 19 ·
        Tailwind 4 · Vite 8
      </footer>
    </main>
  );
}

export default App;
