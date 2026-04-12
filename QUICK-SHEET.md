# Presentation Quick Sheet

**Interview:** Friday, April 17, 2026 — Zoom, ~60 min (30 presentation + 30 Q&A)
**Audience:** Likely engineering-heavy panel — you've already met recruiter, hiring manager, product designer, and design manager

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

## The narrative arc (30 min)

### Act 1 — What was found (slides 1–8, ~8 min)
The audit. Open with evidence, not credentials.

### Act 2 — What we'd do about it (slides 9–16, ~16 min)
The craft showcase + the plan. This is the longest section.

### Act 3 — Why this matters (slides 17–20, ~4 min)
Personal hook + close. Ultra-short, don't oversell.

---

## Slide-by-slide cheat sheet

| # | Title | Time | Key point to land |
|---|---|---|---|
| 1 | Cover | 15s | Don't linger. Advance immediately. |
| 2 | One component, three problems | 30s | Set the thesis: UX gap + design system migration + architectural seam |
| 3 | Starting with the product | 45s | Credibility: "this is from your live app, not guesswork" |
| 4 | Three eras at once | 90s | The red/blue/green code block IS the slide. Let them read it. |
| 5 | CTA takes users out | 90s | Side-by-side screenshots. Point at the URL bars. |
| 6 | Hidden Next button | 90s | "No button. No error. No feedback." Let that sentence land. |
| 7 | Empty-state ghost town | 75s | The live card component renders on this slide. |
| 8 | Every finding → same component | 60s | Convergence moment. Pause before advancing. |
| 9 | Three layers, three timelines | 45s | Set up the structure: 1 sprint / 2 sprints / 3 sprints |
| 10 | Layer 1: Before | 60s | Red annotations on the live card. Four specific losses. |
| 11 | Layer 1: After (triptych) | 120s | **Centerpiece slide.** Empty → Partial → Full. Walk through each. |
| 12 | Layer 2: Design system | 90s | Code diff left, component variants right. Both live. |
| 13 | Layer 3: Intake flow | 105s | Four phone frames. "Vision, not a spec." Say that line. |
| 14 | Switching to browser | 180s | **Demo time.** Switch to localhost or deployed URL. |
| 15 | Scoping table | 150s | "My best guess as an outside candidate" — own the uncertainty. |
| 16 | How AI shaped this | 90s | Workflow bands + 3 artifact cards. Mention they're in the repo. |
| 17 | Personal hook | 30s | Present tense: "is still navigating." Say "OK — back to the work." Move on. |
| 18 | Why this role | 60s | "The seam between Figma and production" — that's the line. |
| 19 | First month together | 45s | Week 1 is listening, not shipping. |
| 20 | Let's talk | 15s | Stop talking. Wait for questions. |

**Total scripted: ~24 min. Buffer: ~6 min for natural pacing.**

---

## Demo script (slide 14 → browser)

When you hit slide 14, switch to browser. Show these in order:

1. **Section 1** — "This is the card as it ships today. Faithful reproduction." (30s)
2. **Section 2** — "Here's the redesign. Empty, partial, full. Progressive completion." (60s)
3. **Section 3** — "All 13 colors from the real palette." (30s)
4. **Section 4** — "The intake flow — four conversational frames." (30s)
5. **(Optional)** Open `RecipientCard.tsx` in the repo — "The class list is 60% shorter." (30s)
6. Resize the browser window — "Still works." (10s)

Switch back to presentation. "OK, back to the deck."

---

## Reserve ammo (hold for Q&A, do NOT include in main deck)

Drop these ONLY if the interviewer specifically asks about the legacy tech stack:

- Django backend (`csrfmiddlewaretoken` hidden input)
- Knockout.js (`data-bind="checked: other"` on radio buttons)
- jQuery UI Autocomplete on the conditions field (`ui-autocomplete-input`)
- `data-bind="enable: !submitted(), visible: validForm"` on the hidden Next button
- Modernizr 2.8.3 still loading
- Two separate `csrfmiddlewaretoken` fields on the same page

**The trigger question:** "You mentioned a different tech stack. Tell us more."
**Your move:** Drop the full forensic list. Every detail is verifiable — they can pull up their own DOM and check.

---

## Likely Q&A questions (top 5)

1. **"How long did this take?"** → "About a week, focused. Claude Code compressed the audit from two days to three hours."

2. **"What did you get wrong?"** → Three things: Care Coordinator workflow, engineering effort numbers, whether a previous migration attempt exists.

3. **"Why six sprints?"** → "The card alone is one sprint. The rest is making it stick."

4. **"What if we only have one sprint?"** → "Ship just the card + token migration. Flag the debt in the retro."

5. **"Walk us through the code."** → Open RecipientCard.tsx. Point at: props interface, color lookup, isEmpty computation, clean class list, focus-visible ring.

---

## Questions to ask THEM

Have 3 ready. Pick based on energy in the room:

1. "What's the single hardest open problem the design system is dealing with right now?"
2. "How does design-engineering collaboration work here when a spec is incomplete?"
3. "What would the first three months look like for this role?"
4. (Bold, only if vibe is good) "Is there anything about this case study that surprised you?"

---

## Pre-interview checklist

- [ ] Browser tab: prototype at deployed URL (backup) — https://thekevinboyle.github.io/cs-intake-flow/
- [ ] Browser tab: presentation — https://thekevinboyle.github.io/cs-intake-flow/presentation.html
- [ ] Browser tab: local dev server running at localhost:5174 (primary demo)
- [ ] Browser tab: RecipientCard.tsx source on GitHub (for code walkthrough)
- [ ] Figma file open in a hidden tab
- [ ] This quick sheet on second monitor or printed
- [ ] `deck/qa-prep.md` open in a hidden tab
- [ ] Camera on, mic tested, notifications silenced
- [ ] Water nearby
- [ ] Close all other apps, Slack, email
- [ ] Test screen share — make sure Zoom shares the right window

---

## If the prototype breaks during the demo

Don't panic. You have three fallbacks:
1. **Deployed URL** — https://thekevinboyle.github.io/cs-intake-flow/ (always live)
2. **Figma file** — https://www.figma.com/design/W6QnjqTllUcH57o0qUq2JI (the captured page)
3. **Keep talking** — "The prototype is in the repo, let me show you the code instead." Open GitHub.

---

## The one thing to remember

The thesis is: *"One component sits at the intersection of three real problems. Here's the evidence, the redesign, and the plan."*

If you lose your place, come back to that sentence. Everything in the deck connects to it.
