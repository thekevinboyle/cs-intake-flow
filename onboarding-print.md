---
pdf_options:
  format: Letter
  margin:
    top: 36px
    bottom: 36px
    left: 48px
    right: 48px
  printBackground: true
stylesheet:
  - https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:wght@600;700&display=swap
body_class: ob
css: |-
  body.ob {
    font-family: 'Inter', -apple-system, sans-serif;
    color: #1c1917;
    font-size: 11px;
    line-height: 1.55;
  }
  h1 {
    font-family: 'Fraunces', Georgia, serif;
    font-size: 26px;
    font-weight: 700;
    margin: 0 0 6px 0;
    letter-spacing: -0.02em;
    color: #1c1917;
  }
  h2 {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #6079f6;
    margin: 20px 0 8px 0;
    padding-bottom: 4px;
    border-bottom: 1.5px solid #e7e5e4;
  }
  h3 {
    font-size: 12px;
    font-weight: 600;
    color: #44403c;
    margin: 12px 0 4px 0;
  }
  p, li {
    margin: 3px 0;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10.5px;
    margin: 6px 0;
  }
  th {
    text-align: left;
    font-weight: 600;
    padding: 5px 8px;
    background: #f5f5f4;
    border: 1px solid #e7e5e4;
    font-size: 10px;
  }
  td {
    padding: 4px 8px;
    border: 1px solid #e7e5e4;
    vertical-align: top;
  }
  code {
    background: #f5f5f4;
    padding: 1px 4px;
    border-radius: 3px;
    font-size: 10px;
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    color: #56524e;
  }
  pre {
    background: #1c1917;
    color: #e7e5e4;
    padding: 10px 14px;
    border-radius: 6px;
    font-size: 10px;
    line-height: 1.5;
    overflow-x: auto;
    margin: 8px 0;
  }
  pre code {
    background: transparent;
    color: inherit;
    padding: 0;
  }
  hr {
    border: none;
    border-top: 1px solid #e7e5e4;
    margin: 14px 0;
  }
  ul, ol {
    padding-left: 18px;
    margin: 4px 0;
  }
  li {
    margin: 2px 0;
  }
  strong {
    font-weight: 600;
    color: #1c1917;
  }
  blockquote {
    margin: 6px 0;
    padding: 6px 12px;
    border-left: 3px solid #6079f6;
    background: #f8f8ff;
    font-style: italic;
  }
  .meta {
    color: #56524e;
    font-size: 10.5px;
  }
  .callout {
    background: #f8f8ff;
    border-left: 3px solid #6079f6;
    padding: 8px 12px;
    margin: 8px 0;
    border-radius: 2px;
  }
---

# Project Onboarding

<p class="meta">A 15-minute walkthrough to rebuild your mental model of the Wellthy case study from zero.</p>

---

## 60-second version

You built a Wellthy Senior Design Engineer case study. It has three live deliverables:

1. **A presentation deck** — 14 slides, keyboard-navigated, runs in a browser
2. **A working prototype** — the Care Recipient card redesigned in React + Tailwind, plus an intake flow
3. **A design system package** — three files an engineer could drop into Wellthy's codebase on day one

Everything is deployed to GitHub Pages. The repo is the artifact. Interview: **April 17, 2026**.

---

## The three things that matter most

| If you only look at one thing... | Read this |
|---|---|
| What you're presenting | `QUICK-SHEET.md` — the interview-day reference |
| How the presentation is structured | `src/components/Presentation.tsx` — all 14 slides in one file |
| Why things are built this way | This document + the parent `/wellthy-cs/CLAUDE.md` |

---

## Live URLs

| What | URL |
|---|---|
| Prototype | thekevinboyle.github.io/cs-intake-flow/ |
| Presentation | thekevinboyle.github.io/cs-intake-flow/presentation.html |
| Repo | github.com/thekevinboyle/cs-intake-flow |
| Figma | figma.com/design/W6QnjqTllUcH57o0qUq2JI |

---

## Run it locally (30 seconds)

```
cd /Users/kevin/Documents/web/wellthy-cs/prototype
npm run dev
```

Opens on `http://localhost:5174/`. Two pages:

- `/` — the prototype showcase (4 sections)
- `/presentation.html` — the 14-slide presentation

Any edit auto-reloads via Vite HMR.

---

## File inventory

```
prototype/
├── index.html                    Entry for prototype showcase
├── presentation.html             Entry for slide deck
├── QUICK-SHEET.md                Interview-day reference
├── quick-sheet.pdf               Printable version
├── ONBOARDING.md                 This file
│
├── src/
│   ├── main.tsx                  React root for showcase
│   ├── presentation.tsx          React root for presentation
│   ├── index.css                 Tailwind v4 @theme with nw-* tokens
│   ├── App.tsx                   4-section showcase page
│   ├── lib/recipients.ts         Types + mock data
│   └── components/
│       ├── RecipientCard.tsx     The REDESIGN (empty/partial/full)
│       ├── RecipientCardLive.tsx Faithful reproduction of TODAY's card
│       ├── IntakeFlow.tsx        4-frame intake redesign
│       └── Presentation.tsx      All 14 slides in one file
│
├── design-system/                DROP-IN PACKAGE for Wellthy day one
│   ├── CLAUDE.md                 AI context file with token rules
│   ├── tokens.json               W3C Design Tokens format
│   └── migration-runbook.md      BEM → nw-* step-by-step guide
│
├── public/screenshots/           Audit screenshots for slides 3, 5, 6
└── .github/workflows/deploy.yml  Auto-deploys on push to main
```

---

## Understanding the design system

The whole prototype uses **Wellthy's real `nw-*` token hierarchy** from the live app. You reference tokens — never invent colors.

**Read in this order:**

1. **`src/index.css`** — Tailwind v4 `@theme` block. Every color, shadow, radius, typography token in ~90 lines.
2. **`design-system/CLAUDE.md`** — The system documented as AI-enforceable rules.
3. **`design-system/tokens.json`** — Machine-readable W3C format.

### The 4 things to remember

- **4-level text hierarchy:** `nw-primary` (headlines) → `nw-secondary` (body) → `nw-tertiary` (supporting) → `nw-quaternary` (labels)
- **Periwinkle (#6079F6) is the CTA color** — Wellthy's real signature
- **13 recipient colors** — each has solid + bg variant (e.g., `bg-recipient-lavender` + `bg-recipient-lavender-bg`)
- **Nothing is arbitrary** — update the CSS variable in `index.css` and it propagates everywhere

---

## Understanding the components

### `RecipientCard.tsx` — the redesign
Centerpiece. 3 states auto-derived from data:

- **Empty:** no fields → invitation prompt + 3 dashed "add" chips
- **Partial:** some fields → mix of filled pills + add chips
- **Full:** all fields → solid pills + activity strip in banner

All states share height via `min-h-[188px]` + `flex-1` spacer.

### `RecipientCardLive.tsx` — the "before"
Faithful reproduction of Wellthy's production card. Dead dashes and all. Used on slides 6, 8, and Section 1 of the showcase. **Don't "improve" this — it's supposed to match what ships today.**

### `IntakeFlow.tsx` — the intake redesign
4 phone-sized frames: Who are you caring for? → Tell us in a sentence → Anything we should know? → We're on it.

Only **frame 1** appears on Slide 9 (the 60% principle — intentionally incomplete). All 4 render in Section 4 as reserve ammo.

---

## Understanding the presentation (14 slides)

All slides live in `src/components/Presentation.tsx`. Each is a component `S01`–`S14`. Shared primitives at the top (`Slide`, `H1`, `Body`, `Label`, `Bullets`, `Img`, `Code`).

### Three-act structure

- **Act 1 (1–7)** — Discovery journey. How AI-assisted auditing found a real problem. Findings as opportunities, not critiques.
- **Act 2 (8–11)** — A starting direction. 60% of a solution: polished empty-state redesign, one intake frame, open questions.
- **Act 3 (12–14)** — Why this matters. Personal hook, why the role, close.

### Slides that embed live React components

- **Slide 6** — `RecipientCardLive` (the empty Pietr card)
- **Slide 8** — Both `RecipientCardLive` AND `RecipientCard` side by side (the craft moment)

### Keyboard controls

- `→` / `Space` — next
- `←` — previous
- `Home` / `End` — first/last
- Click left/right third — navigates

---

## Making common edits

### Change slide copy
Edit `src/components/Presentation.tsx`. Find the slide component (`S08` etc.), change the text. HMR reloads instantly.

### Add or cut a slide
Bottom of `Presentation.tsx`:
```
const slides = [S01, S02, ..., S14];
```
Add or remove from this array. Counter updates automatically.

### Change a design token
Edit `src/index.css` (the `@theme` block). Everything using that token updates everywhere.

### Change the empty-state invitation copy
`src/components/RecipientCard.tsx` — find the `subtitles` object near the top.

### Add a new recipient to mock data
`src/lib/recipients.ts` — add an entry to `mockRecipients`. Card auto-detects state.

### Swap a screenshot on slides 3/5/6
Drop the PNG into `public/screenshots/`, update the `src` in the `<Img>` tag in `Presentation.tsx`.

---

## Deploy a change

Every `git push` to `main` triggers GitHub Actions. Takes ~30 seconds.

```
git add -A
git commit -m "your message"
git push
```

Check deployment status:
```
gh run list --repo thekevinboyle/cs-intake-flow --limit 1
```

---

## The narrative in one paragraph

You logged into Wellthy's product, used Claude Code to audit the live DOM, and found that the Recipient card — their most visible component — has BEM + Tailwind + `nw-*` tokens layered on the same element. You also found that the intake flow that creates that card runs on a completely different tech stack (Django + Knockout + jQuery UI) one click away from the React app. You redesigned the card's empty state (the one a new member sees in their first 90 seconds) as a starting direction, sketched a more conversational intake flow, and built three drop-in artifacts that would let a team run the migration AI-assisted. You're presenting this not as a finished plan, but as a hypothesis and a starting conversation.

---

## The 5 things you need to say confidently

1. **"I audited the live product using Claude Code — three hours of AI-assisted extraction instead of two days of manual work."**
2. **"The Recipient card sits at the intersection of three real problems: a UX gap, a half-finished design system migration, and an architectural seam."**
3. **"I showed one card state on purpose. The other two are built in the prototype. Picking what to surface was a design decision."**
4. **"This case study is a hypothesis, not a plan. The questions on slide 10 are real."**
5. **"Every design decision was a human call. Claude Code handled the work that was mechanical and repeatable."**

---

## If you forget anything else

- **Interview date:** Friday, April 17, 2026
- **Thesis:** *"Started with the product, found a real problem, built a starting direction, and brought questions for the team."*
- **Fallback if prototype breaks:** deployed URL (always live), Figma file (captured page), or open GitHub and show the code.
- **The quick sheet** (`QUICK-SHEET.md`) has every answer, every trigger, every URL on one reference.

---

## Gotchas

- **Port 5173 is usually taken** — Vite auto-picks 5174. Check terminal output.
- **The base path is `/cs-intake-flow/`** — don't remove it from `vite.config.ts`.
- **Node 22+ required** for CI builds.
- **Screenshots must live in `public/screenshots/`** — not `src/` — or they won't serve from the deployed URL.
- **Slide 12** (personal hook) uses **present tense** ("is still navigating") — load-bearing.
- **Two CLAUDE.md files exist** — one at `design-system/` (for future Wellthy engineers), one at `/wellthy-cs/` (project-level). Different purposes.

---

## 15-minute reading order

1. This file (ONBOARDING) — 3 min
2. `QUICK-SHEET.md` — 4 min
3. Open the prototype at localhost — 2 min clicking through
4. Open the presentation at localhost — 3 min clicking through
5. Skim `src/components/Presentation.tsx` — 3 min

After that, you've got the whole thing in your head.

---

> **Thesis:** *Started with the product, found a real problem, built a starting direction, and brought questions for the team.*
