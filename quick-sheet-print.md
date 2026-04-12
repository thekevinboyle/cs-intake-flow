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
  - https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap
body_class: qs
css: |-
  body.qs {
    font-family: 'Inter', -apple-system, sans-serif;
    color: #1c1917;
    font-size: 11px;
    line-height: 1.55;
  }
  h1 {
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 4px 0;
    letter-spacing: -0.02em;
  }
  h2 {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #6079f6;
    margin: 18px 0 6px 0;
    padding-bottom: 4px;
    border-bottom: 1.5px solid #e7e5e4;
  }
  h3 {
    font-size: 11.5px;
    font-weight: 600;
    color: #44403c;
    margin: 10px 0 3px 0;
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
  }
  hr {
    border: none;
    border-top: 1px solid #e7e5e4;
    margin: 12px 0;
  }
  ul {
    padding-left: 16px;
    margin: 4px 0;
  }
  li {
    margin: 2px 0;
  }
  strong {
    font-weight: 600;
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
---

# Wellthy Case Study — Quick Sheet

<p class="meta"><strong>Interview:</strong> Friday, April 17, 2026 — Zoom, ~60 min &nbsp;|&nbsp; <strong>Slides:</strong> 14 &nbsp;|&nbsp; <strong>Audience:</strong> Engineering-heavy panel</p>

---

## Live links

| What | URL |
|---|---|
| Prototype | thekevinboyle.github.io/cs-intake-flow/ |
| Presentation | thekevinboyle.github.io/cs-intake-flow/presentation.html |
| Repo | github.com/thekevinboyle/cs-intake-flow |
| Design system | github.com/thekevinboyle/cs-intake-flow/tree/main/design-system |
| Figma | figma.com/design/W6QnjqTllUcH57o0qUq2JI |

---

## Narrative arc (~18 min scripted → ~40 min Q&A)

### Act 1 — The discovery journey (slides 1–7, ~9 min)
AI-assisted auditing found a real problem in the live product. Open with method, not credentials. Frame findings as **opportunities**, not critiques.

### Act 2 — A starting direction (slides 8–11, ~8 min)
60% of a solution: empty-state redesign (polished), one intake frame (sketch), open questions. **Invitation to collaborate, not a finished deliverable.**

### Act 3 — Why this matters (slides 12–14, ~3 min)
Personal hook, why the role, close. The Q&A is where this deck is designed to shine.

---

## Slide-by-slide

| # | Slide | Time | Land this |
|---|---|---|---|
| 1 | Cover | 15s | Advance immediately |
| 2 | Started with the product | 45s | Discover → Decide → Design |
| 3 | Logged into the product | 60s | "From the live app, not guesswork" |
| 4 | Three eras at once | 90s | Let them read the code block |
| 5 | CTA takes users off-app | 90s | Point at the URL bars |
| 6 | First minute breaks twice | 90s | Hidden button + empty card, side by side |
| 7 | Same opportunity | 60s | Reframed as opportunity. **Pause.** |
| 8 | Before → After | 120s | **Craft moment.** Walk through changes. |
| 9 | Intake as conversation | 90s | "A direction, not a spec" |
| 10 | Explore together | 90s | **Collaborative slide.** "Hypothesis, not a plan." |
| 11 | How AI shaped this | 90s | "These files are in the repo" |
| 12 | Personal hook | 30s | Present tense. "OK — back to the work." |
| 13 | Why this role | 45s | "How I'd operate, not just what I'd ship" |
| 14 | Let's talk | 15s | "The questions on slide 10 are real." **Wait.** |

---

## Reserve ammo for Q&A

### "Show me the other card states"
Open prototype → Section 2. "Built all three. Showed one on purpose."

### "What about the full intake flow?"
Prototype → Section 4. All four frames built. "Showed one — the rest needs Care Coordinator input."

### "How long would this take?"
Card: ~1 sprint. Token migration: 2 more. Intake rewrite: 3–5 sprints. "Outside guesses. Week one is validating them."

### "Tell me about the legacy tech stack"
- Django (`csrfmiddlewaretoken`), Knockout.js (`data-bind`), jQuery UI Autocomplete
- Hidden Next button: `data-bind="enable: !submitted(), visible: validForm"`
- Modernizr 2.8.3 still loading

### "Walk me through the code"
Open `RecipientCard.tsx` — props, color lookup, state computation, clean class list, focus-visible ring. "60% shorter than the live version."

### "Tell me about the migration approach"
Open `design-system/migration-runbook.md`. "One command per component. Engineer reviews and ships."

---

## Top 5 Q&A answers

1. **"How long?"** → "A week. AI compressed the audit from 2 days to 3 hours. Design decisions were mine."
2. **"What did you get wrong?"** → Care Coordinator workflow, effort numbers, whether a previous attempt exists.
3. **"Why only the empty state?"** → "Highest leverage. Others are built. Showed one — the rest needs the team."
4. **"First week?"** → "Listening. Validate with the EM, ride along with a coordinator, find what's been tried."
5. **"AI code in production?"** → "Human reviews, human takes responsibility at merge. Origin matters less than ownership."

---

## Questions to ask them

1. "Hardest open problem in the design system right now?"
2. "How does design-eng collaboration work when specs are incomplete?"
3. "What would the first three months look like?"
4. *(If vibe is good)* "Anything about this case study that surprised you?"

---

## Pre-interview checklist

- [ ] Presentation tab open
- [ ] Prototype tab open (deployed URL)
- [ ] Local dev server running (backup)
- [ ] RecipientCard.tsx on GitHub (code walkthrough)
- [ ] design-system/ on GitHub (artifact walkthrough)
- [ ] This sheet on second monitor
- [ ] qa-prep.md in hidden tab
- [ ] Camera, mic tested, notifications off, water nearby

---

## If the prototype breaks

1. **Deployed URL** — always live
2. **Figma file** — captured page
3. **"Let me show the code instead"** — open GitHub

---

> **The thesis:** *Started with the product, found a real problem, built a starting direction, and brought questions for the team.*
