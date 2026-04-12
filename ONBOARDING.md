# Project Onboarding

A walkthrough of everything that exists in this repo, in the order you'd want to read it. Written so you can rebuild your mental model of the project from zero in about 15 minutes.

---

## 60-second version

You built a Wellthy Senior Design Engineer case study. It has three live deliverables:

1. **A presentation deck** — 14 slides, keyboard-navigated, runs in a browser
2. **A working prototype** — the Care Recipient card redesigned in React + Tailwind, plus an intake flow
3. **A design system package** — three files an engineer could drop into Wellthy's codebase on day one

Everything is deployed to GitHub Pages. The repo is the artifact. The interview is **April 17, 2026**.

---

## The three things that matter most

| If you only look at one thing... | Read this |
|---|---|
| **What you're presenting** | `QUICK-SHEET.md` — the interview-day reference |
| **How the presentation is structured** | `src/components/Presentation.tsx` — all 14 slides in one file |
| **Why things are built this way** | This document, plus the parent `/wellthy-cs/CLAUDE.md` |

---

## Live URLs (bookmark these)

| What | URL |
|---|---|
| Prototype | https://thekevinboyle.github.io/cs-intake-flow/ |
| Presentation | https://thekevinboyle.github.io/cs-intake-flow/presentation.html |
| Repo | https://github.com/thekevinboyle/cs-intake-flow |
| Figma file | https://www.figma.com/design/W6QnjqTllUcH57o0qUq2JI |

---

## Run it locally (30 seconds)

```bash
cd /Users/kevin/Documents/web/wellthy-cs/prototype
npm run dev
```

Opens on `http://localhost:5174/` (port 5173 is usually taken). Two pages:

- `/` — the prototype showcase (4 sections: before card, redesign states, 13-color grid, intake flow)
- `/presentation.html` — the 14-slide presentation

Any edit auto-reloads via Vite HMR.

---

## File inventory — what's where

```
prototype/
├── index.html                    # Entry for the prototype showcase
├── presentation.html             # Entry for the slide deck
├── QUICK-SHEET.md                # Interview-day reference
├── quick-sheet.pdf               # Printable version of the above
├── ONBOARDING.md                 # This file
├── README.md                     # Minimal — onboard from here instead
│
├── src/
│   ├── main.tsx                  # React root for showcase
│   ├── presentation.tsx          # React root for presentation
│   ├── index.css                 # Tailwind v4 @theme with all nw-* tokens
│   ├── App.tsx                   # The 4-section showcase page
│   ├── lib/
│   │   └── recipients.ts         # Types + mock data (empty/partial/full)
│   └── components/
│       ├── RecipientCard.tsx     # The REDESIGN (empty/partial/full states)
│       ├── RecipientCardLive.tsx # Faithful reproduction of TODAY's card
│       ├── IntakeFlow.tsx        # 4-frame intake redesign (phone-sized)
│       └── Presentation.tsx      # All 14 slides, keyboard nav, live components
│
├── design-system/                # DROP-IN PACKAGE for day one at Wellthy
│   ├── CLAUDE.md                 # AI context file with token rules
│   ├── tokens.json               # W3C Design Tokens format
│   └── migration-runbook.md      # BEM → nw-* step-by-step guide
│
├── public/
│   └── screenshots/              # Audit screenshots used on slides 3, 5, 6
│
├── .github/workflows/
│   └── deploy.yml                # Auto-deploys to GitHub Pages on push to main
│
└── vite.config.ts                # Multi-page build config
```

---

## Understanding the design system (start here)

The whole prototype is built on Wellthy's **real `nw-*` token hierarchy**, pulled from their live app during the audit. You don't invent colors — you reference tokens.

Key files in order:

1. **`src/index.css`** — The Tailwind v4 `@theme` block. Every color, shadow, radius, and typography token lives here. Look at it once to see the whole design system in ~90 lines.

2. **`design-system/CLAUDE.md`** — The same system documented as rules for an engineer. "Don't use stone-900, use nw-primary." Built to be dropped into any codebase and immediately enforceable via AI tooling.

3. **`design-system/tokens.json`** — The same system in machine-readable W3C format. Can be consumed by Figma plugins, Tailwind configs, or code generators.

### The 4 things to remember about the tokens

- **Text hierarchy is 4 levels:** `nw-primary` (headlines) → `nw-secondary` (body) → `nw-tertiary` (supporting) → `nw-quaternary` (labels)
- **Periwinkle (#6079F6) is the CTA color** — Wellthy's real signature color
- **13 recipient colors** — each has a solid + bg variant (e.g., `bg-recipient-lavender` + `bg-recipient-lavender-bg`)
- **Nothing is arbitrary** — if you want to change a shadow, update the `--shadow-nw-*` variable in `index.css` and it propagates everywhere

---

## Understanding the components

### `RecipientCard.tsx` — the redesign
The centerpiece. Lives at `src/components/RecipientCard.tsx`. 3 states (empty / partial / full) derived from the recipient's data:

- **Empty:** no birthdate, no care circle, no services → shows invitation prompt + 3 dashed "add" chips
- **Partial:** some fields filled → mix of filled pills and add chips
- **Full:** all fields filled → solid pills + activity strip in the banner

State detection is automatic (count of filled fields). Each state has the same height thanks to `min-h-[188px]` + a `flex-1` spacer.

### `RecipientCardLive.tsx` — the "before"
A faithful reproduction of Wellthy's production card, dead dashes and all. Used on:
- Slide 6 (showing the first-minute breakage)
- Slide 8 (the before/after comparison)
- Section 1 of the prototype showcase

**Don't edit this to make it "better" — it's supposed to match what ships today.**

### `IntakeFlow.tsx` — the intake redesign
4 phone-sized frames showing a conversational intake pattern:
1. Who are you caring for?
2. Tell us in a sentence
3. Anything we should know?
4. We're on it

Only **frame 1** appears on Slide 9 (intentionally incomplete — the 60% principle). All 4 render in Section 4 of the prototype showcase as reserve ammo.

---

## Understanding the presentation (14 slides)

All slides live in `src/components/Presentation.tsx` in one file. Each slide is a React component `S01` through `S14`. They use shared primitives at the top of the file (`Slide`, `H1`, `Body`, `Label`, `Bullets`, `Img`, `Code`).

### The three-act structure

- **Act 1 (slides 1–7)** — The discovery journey. How AI-assisted auditing found a real problem. Frame everything as opportunities, not critiques.
- **Act 2 (slides 8–11)** — A starting direction. 60% of a solution: polished empty-state redesign, one intake frame, open questions.
- **Act 3 (slides 12–14)** — Why this matters. Personal hook, why the role, close.

### Slides that embed live components

- **Slide 6** — `RecipientCardLive` (the empty Pietr card, showing the "after intake" breakage)
- **Slide 8** — Both `RecipientCardLive` AND `RecipientCard` side by side (the craft moment)

### Keyboard navigation

- `→` or `Space` — next slide
- `←` — previous slide
- `Home` / `End` — jump to first/last
- Click left/right third of screen — also navigates

---

## Making common edits

### Change slide copy
Edit `src/components/Presentation.tsx`. Find the slide component (`S08` etc.) and change the text. HMR reloads instantly.

### Add or cut a slide
At the bottom of `Presentation.tsx`:
```tsx
const slides = [S01, S02, ..., S14];
```
Add/remove from this array. The slide counter updates automatically.

### Change a design token
Edit `src/index.css` (the `@theme` block). Every component using that token updates everywhere.

### Change the empty-state invitation copy
`src/components/RecipientCard.tsx` — look for `subtitles` object near the top. Currently:
```tsx
empty: (name) => `Tell us about ${name} in a sentence — your Care Coordinator...`
```

### Add a new recipient to the mock data
`src/lib/recipients.ts` — add an entry to `mockRecipients`. The card auto-computes which state to show.

### Swap a screenshot on slides 3/5/6
Drop the new PNG into `public/screenshots/` and update the `src` in the `<Img>` tag in `Presentation.tsx`.

---

## Deploy a change

Every `git push` to `main` triggers GitHub Actions to build and deploy. Takes ~30 seconds.

```bash
git add -A
git commit -m "your message"
git push
```

Check deployment status:
```bash
gh run list --repo thekevinboyle/cs-intake-flow --limit 1
```

---

## The narrative in one paragraph

You logged into Wellthy's product, used Claude Code to audit the live DOM, and found that the Recipient card — their most visible component — has BEM + Tailwind + `nw-*` tokens layered on the same element. You also found that the intake flow that creates that card runs on a completely different tech stack (Django + Knockout + jQuery UI) one click away from the React app. You redesigned the card's empty state (the one a new member sees in their first 90 seconds) as a starting direction, sketched a more conversational intake flow, and built three drop-in artifacts that would let a team run the migration AI-assisted. You're presenting this not as a finished plan, but as a hypothesis and a starting conversation.

---

## The 5 things you need to be able to say confidently

1. **"I audited the live product using Claude Code — three hours of AI-assisted extraction instead of two days of manual work."**
2. **"The Recipient card sits at the intersection of three real problems: a UX gap, a half-finished design system migration, and an architectural seam."**
3. **"I showed one card state on purpose. The other two are built in the prototype. Picking what to surface was a design decision."**
4. **"This case study is a hypothesis, not a plan. The questions on slide 10 are real."**
5. **"Every design decision was a human call. Claude Code handled the work that was mechanical and repeatable."**

---

## If you forget anything else

- **Interview date:** Friday, April 17, 2026
- **Thesis line:** *"Started with the product, found a real problem, built a starting direction, and brought questions for the team."*
- **Fallback if the prototype breaks:** the deployed URL (always live), the Figma file (captured page), or open the GitHub repo and show the code.
- **The quick sheet** (`QUICK-SHEET.md`) has every answer, every trigger, every URL on one reference.

---

## Gotchas

- **Port 5173 is usually taken** — Vite will auto-pick 5174. Check the terminal.
- **The base path is `/cs-intake-flow/`** — don't remove it from `vite.config.ts` or deployed links break.
- **Node 22+ required** for CI builds (the lock file format).
- **The screenshots must be in `public/screenshots/`** — not `src/`, or they won't serve from the deployed URL.
- **Slide 17 / now Slide 12** (personal hook) uses **present tense** ("is still navigating") — load-bearing per the parent `CLAUDE.md`.
- **Two CLAUDE.md files exist** — one at `prototype/design-system/CLAUDE.md` (for future Wellthy engineers), and one at `/wellthy-cs/CLAUDE.md` (project-level context). They serve different purposes.

---

## Recommended reading order (if you have 15 minutes)

1. This file (ONBOARDING.md) — 3 min
2. `QUICK-SHEET.md` — 4 min
3. Open the prototype at localhost — 2 min clicking through
4. Open the presentation at localhost — 3 min clicking through
5. Skim `src/components/Presentation.tsx` to see how slides are built — 3 min

After that, you've got the whole thing in your head.
