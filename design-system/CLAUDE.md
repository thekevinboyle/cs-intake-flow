# Wellthy Design System — AI Context

Drop this file into the repo root as `CLAUDE.md` so any engineer using Claude Code gets design system rules automatically.

## Token hierarchy

All semantic tokens use the `nw-*` prefix. Do not use raw Tailwind color names (stone-900, gray-200) — always use the semantic token.

| Token | Value | Use |
|---|---|---|
| `text-nw-primary` | #1C1917 | Headlines, names, strong labels |
| `text-nw-secondary` | #44403C | Body text, field values |
| `text-nw-tertiary` | #56524E | Supporting text, subtitles |
| `text-nw-quaternary` | #7A726C | Labels, captions, placeholders |
| `bg-nw-bg-app` | #F5F5F4 | Page background |
| `bg-nw-bg-card` | #FFFFFF | Card surfaces |
| `bg-nw-bg-subtle` | #F8F8F8 | Secondary surfaces, filled pills |
| `border-nw-border` | #E7E5E4 | Card borders, dividers |
| `shadow-nw-xs` | layered warm alpha | Default card elevation |
| `shadow-nw-lg` | layered warm alpha | Hover/focus card elevation |
| `rounded-nw-lg` | 16px | Card corners |
| `rounded-nw-md` | 12px | Input fields, buttons |
| `rounded-nw-sm` | 8px | Pills, chips, tags |

## 13 recipient identity colors

Each recipient gets one named color. Use the name, not the hex value.

Colors: lavender, evergreen, herb, sage, sandalwood, berry, plum, peach, honey, aqua, wildflower, mist, periwinkle

Each has two variants:
- `bg-recipient-{name}` — solid, for avatars
- `bg-recipient-{name}-bg` — pastel, for banners and backgrounds

## Component rules

### RecipientCard
- Always 432px wide, rounded-nw-lg
- Avatar: 56x56, overlaps banner and content, ring-[3px] ring-white/90
- Banner: 48px tall, pastel bg, content starts at pl-20 to clear avatar
- Three field slots always visible: birthdate, care circle, services
- Empty fields render as dashed AddChip, filled fields as solid FilledPill
- Progress dots at bottom: 3 dots, periwinkle-500 when filled

### Class naming
- **Do:** Use Tailwind utilities + `nw-*` semantic tokens
- **Do not:** Add BEM class names (care-recipient-card, etc.)
- **Do not:** Use raw color values or inline styles
- **Do not:** Mix `w-*` (old prefix) with `nw-*` (current prefix)

### When editing a component
1. Check if a Figma component with variants exists — update both
2. Use the token hierarchy for all text colors (primary/secondary/tertiary/quaternary)
3. Hover states use shadow-nw-lg + translateY(-4px)
4. Focus states use outline-periwinkle-500 with focus-visible

## Migration pattern: BEM → nw-* tokens

When touching a component that has BEM classes:
1. List all BEM classes on the element
2. Map each to the equivalent nw-* token or Tailwind utility
3. Replace in one commit, remove the BEM class entirely
4. Do not create a "compatibility" layer — clean cut only
5. Update the Figma component in the same PR

## Typography

| Style | Font | Size/Line | Weight |
|---|---|---|---|
| Display | Fraunces | varies | 600 |
| Body | Inter | 16/24 default | 400 |
| Label | Inter | 14/20 or 12/16 | 500 |
| Code | JetBrains Mono | 14/20 | 400 |

## Spacing

8-pt grid. Common values: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64.
