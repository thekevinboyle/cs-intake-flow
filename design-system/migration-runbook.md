# BEM → nw-* Token Migration Runbook

A step-by-step guide for migrating any component from the legacy BEM class system to the current nw-* semantic token system. Designed to be run by a human engineer or by Claude Code with the CLAUDE.md context file loaded.

## Before you start

- [ ] Identify the component to migrate (one at a time, never batch)
- [ ] Open the Figma component — if it exists, you'll update both
- [ ] Create a branch: `migrate/{component-name}`

## Step 1: Audit the class list

Pull the current class list from the component's outermost element.

Categorize each class:

| Category | Pattern | Action |
|---|---|---|
| BEM | `care-{name}`, `care-{name}__{element}`, `care-{name}--{modifier}` | Remove — map to nw-* equivalent |
| Old Tailwind prefix | `w-{utility}` | Replace with standard Tailwind utility |
| Tailwind utility | `rounded-2xl`, `relative`, `block` | Keep as-is |
| nw-* semantic token | `bg-nw-primary`, `shadow-nw-xs` | Keep as-is |
| Inline style | `style={{}}` | Replace with Tailwind class or nw-* token |

## Step 2: Map BEM → nw-*

For each BEM class, find the semantic equivalent:

```
care-recipient-card           → rounded-nw-lg border-nw-border bg-nw-bg-card shadow-nw-xs
care-recipient-card__banner   → (remove — use direct Tailwind on the element)
care-recipient-card__content  → (remove — use px-6 pb-5 pt-9 directly)
care-recipient-card--hover    → hover:shadow-nw-lg hover:-translate-y-1
```

If no nw-* token exists for a BEM class's visual purpose, propose a new token in the PR description.

## Step 3: Replace

Make the replacement in one commit. Do not leave both BEM and nw-* on the same element. The class list should shrink — if it grows, reconsider.

## Step 4: Verify

- [ ] Visual diff: screenshot before and after — pixel-match is the goal
- [ ] Hover/focus states preserved
- [ ] Responsive behavior unchanged
- [ ] No BEM classes remain on any element in the component
- [ ] Contrast ratios still meet WCAG 2.2 AA (especially nw-quaternary on white)

## Step 5: Update Figma

- [ ] Open the Figma component
- [ ] Verify variants match the code states
- [ ] Update any hardcoded hex values to use Figma variables
- [ ] Add a changelog note to the component description

## Step 6: PR

- Title: `migrate(design-system): {ComponentName} BEM → nw-* tokens`
- Body: include the before/after class list diff
- Tag: `design-system`, `migration`
- Reviewer: whoever owns the design system

## AI-assisted version

With the CLAUDE.md context file in the repo, an engineer can run:

```
claude "Migrate the CareCircleCard component from BEM to nw-* tokens following the migration runbook"
```

Claude Code will:
1. Read the component file
2. Audit the class list against the CLAUDE.md rules
3. Generate the replacement class list
4. Make the edit
5. Flag any classes that don't have a clear nw-* mapping

The engineer reviews the diff, verifies visually, updates Figma, and ships.
