# Presentation Quick Sheet

**Interview:** Friday, April 17, 2026 — Zoom, ~60 min (30 presentation + 30 Q&A)
**Audience:** Likely engineering-heavy panel — you've already met recruiter, hiring manager, product designer, and design manager
**Slides:** 14 (lean, collaborative, leaves room for conversation)

---

## Live links

| What | URL |
|---|---|
| **Prototype (showcase)** | https://thekevinboyle.github.io/cs-intake-flow/ |
| **Presentation (slides)** | https://thekevinboyle.github.io/cs-intake-flow/presentation.html |
| **Repo** | https://github.com/thekevinboyle/cs-intake-flow |
| **Design system artifacts** | https://github.com/thekevinboyle/cs-intake-flow/tree/main/design-system |
| **Figma file** | https://www.figma.com/design/W6QnjqTllUcH57o0qUq2JI |
| **Local dev server** | http://localhost:5174/ (run `npm run dev` in `/prototype`) |

---

## Presentation controls

- **Arrow keys** or **click left/right third** of screen to navigate
- **Space** advances forward
- **Home / End** jumps to first / last slide
- Slide counter is bottom-right corner

---

## The narrative arc (~20 min presentation, ~40 min Q&A)

### Act 1 — The discovery journey (slides 1–7, ~9 min)
How AI-assisted auditing found a real problem in the live product. Open with the method, not credentials. Frame findings as opportunities, not critiques.

### Act 2 — A starting direction (slides 8–11, ~8 min)
Show 60% of a solution: the empty-state redesign (fully polished), one intake frame (explicitly a sketch), open questions for the team. This is an invitation to collaborate, not a finished deliverable.

### Act 3 — Why this matters (slides 12–14, ~3 min)
Personal hook, why the role, close. Ultra-short. The Q&A is where this presentation is designed to shine.

---

## Slide-by-slide cheat sheet

| # | Title | Time | Key point to land |
|---|---|---|---|
| 1 | Cover | 15s | Don't linger. Advance immediately. |
| 2 | Started with the product, not the portfolio | 45s | Frame the method: Discover → Decide → Design. "AI accelerated discovery, judgment decided what matters." |
| 3 | The audit started by logging in | 60s | Credibility: "from the live app, not guesswork." Mention the 3-hour AI compression. |
| 4 | Three eras at once | 90s | The red/blue/green code block IS the slide. Let them read it. |
| 5 | CTA takes users off the app | 90s | Side-by-side screenshots. Point at the URL bars. "Different hostname, different stack." |
| 6 | First-minute experience breaks twice | 90s | Two problems side by side: hidden button + empty card. "Two breaks in one user journey." |
| 7 | Every finding → same opportunity | 60s | **Reframed as opportunity, not critique.** "A migration with a clear next surface." Pause before advancing. |
| 8 | Before → After (empty state) | 120s | **Craft moment.** Live cards side by side. Walk through what changed and why. |
| 9 | Intake as conversation (one frame) | 90s | Single phone frame + dashed "steps we'd design together." Say: "this is a direction, not a spec." |
| 10 | What we'd explore together | 90s | **The collaborative slide.** Four open questions. "This case study is a hypothesis, not a plan." |
| 11 | How AI shaped this | 90s | Workflow bands + 3 artifact cards. "These files are in the repo — ready for day one." |
| 12 | Personal hook | 30s | Present tense: "is still navigating." Say "OK — back to the work." Move on immediately. |
| 13 | Why this role | 45s | "This is a sample of how I'd operate, not just what I'd ship." |
| 14 | Let's talk | 15s | "The questions on slide 10 are real." Stop talking. Wait. |

**Total scripted: ~18 min. Buffer: ~12 min for natural pacing + early Q&A start.**

The short presentation is intentional — it leaves ~40 min for Q&A, which is where senior candidates differentiate. The deck is designed to provoke questions, not answer them all.

---

## Reserve ammo (material CUT from the deck, ready for Q&A)

These are strong slides that were intentionally removed to keep the deck collaborative. Pull them out when the right question lands:

### If they ask about the other card states:
Open the prototype at localhost or the deployed URL. Scroll to Section 2 — it shows empty, partial, and full side by side with the progressive completion pattern. "I built all three states. I showed you one on purpose — here are the others."

### If they ask about the full intake flow:
Scroll to Section 4 of the prototype — all four phone frames are built. "The full flow is there. I showed one frame because the rest should be designed with the Care Coordinator workflow in mind."

### If they ask about scoping / how long:
"The card redesign is roughly one sprint. Token migration across adjacent surfaces is two more. The intake flow rewrite is the big one — three to five sprints depending on backend dependencies. But those numbers are outside guesses. My first week would be validating them."

### If they ask about the legacy tech stack:
Drop the forensics:
- Django backend (`csrfmiddlewaretoken` hidden input)
- Knockout.js (`data-bind="checked: other"` on radio buttons)
- jQuery UI Autocomplete on the conditions field
- `data-bind="enable: !submitted(), visible: validForm"` on the hidden Next button
- Modernizr 2.8.3 still loading
- Two separate `csrfmiddlewaretoken` fields on the same page

Every detail is verifiable — they can pull up their own DOM and check.

### If they ask about the code:
Open `RecipientCard.tsx` in the repo or in VS Code. Point at: props interface, color lookup table, state computation, clean class list (no BEM), focus-visible ring. "The class list is about 60% shorter than the live version."

### If they ask about the design system migration:
Open `design-system/migration-runbook.md` in the repo. "This is a step-by-step guide. The AI-assisted version is one command per component — the engineer reviews and ships."

---

## Likely Q&A questions (top 5)

1. **"How long did this take?"** → "About a week, focused. Claude Code compressed the audit from two days to three hours. Every design decision was mine."

2. **"What did you get wrong?"** → Three things: Care Coordinator workflow (only see the member side), engineering effort numbers (outside guesses), whether a previous migration attempt exists (might change everything).

3. **"Why only show the empty state?"** → "It's the highest-leverage state — it's what every new member sees first. The other two states are built and running in the prototype. I showed one because the rest should be validated with the team."

4. **"What would your first week look like?"** → "Listening, not shipping. Validate the scoping hypothesis with the EM, ride along with a Care Coordinator, and find out what the team already tried."

5. **"How do you feel about AI-generated code in production?"** → "Anything committed to main needs a human who understands it and can defend it in review. Where the first draft came from matters less than who takes responsibility at merge time."

---

## Questions to ask THEM

Have 3 ready. Pick based on energy in the room:

1. "What's the single hardest open problem the design system is dealing with right now?"
2. "How does design-engineering collaboration work here when a spec is incomplete?"
3. "What would the first three months look like for this role?"
4. (Bold, only if vibe is good) "Is there anything about this case study that surprised you?"

---

## Pre-interview checklist

- [ ] Browser tab: presentation — https://thekevinboyle.github.io/cs-intake-flow/presentation.html
- [ ] Browser tab: prototype at deployed URL — https://thekevinboyle.github.io/cs-intake-flow/
- [ ] Browser tab: local dev server running at localhost:5174 (backup demo)
- [ ] Browser tab: RecipientCard.tsx on GitHub (for code walkthrough)
- [ ] Browser tab: design-system/ directory on GitHub (for artifact walkthrough)
- [ ] This quick sheet on second monitor or printed
- [ ] `deck/qa-prep.md` open in a hidden tab
- [ ] Camera on, mic tested, notifications silenced
- [ ] Water nearby
- [ ] Close all other apps, Slack, email
- [ ] Test screen share — confirm Zoom shares the right window

---

## If the prototype breaks during the demo

Don't panic. You have three fallbacks:
1. **Deployed URL** — https://thekevinboyle.github.io/cs-intake-flow/ (always live)
2. **Figma file** — https://www.figma.com/design/W6QnjqTllUcH57o0qUq2JI
3. **Keep talking** — "The prototype is in the repo, let me show you the code instead." Open GitHub.

---

## The one thing to remember

The thesis is: *"Started with the product, found a real problem, built a starting direction, and brought questions for the team."*

This is a case study about how you'd operate — discovery-driven, AI-assisted, collaborative by design. If you lose your place, come back to that.
