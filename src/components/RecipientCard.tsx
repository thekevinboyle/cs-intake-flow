import type { Recipient, RecipientColor } from "../lib/recipients";

type Props = {
  recipient: Recipient;
  onClick?: () => void;
};

const colorClasses: Record<
  RecipientColor,
  { banner: string; avatar: string; accent: string }
> = {
  lavender: {
    banner: "bg-recipient-lavender-bg",
    avatar: "bg-recipient-lavender",
    accent: "text-recipient-lavender",
  },
  evergreen: {
    banner: "bg-recipient-evergreen-bg",
    avatar: "bg-recipient-evergreen",
    accent: "text-recipient-evergreen",
  },
  herb: {
    banner: "bg-recipient-herb-bg",
    avatar: "bg-recipient-herb",
    accent: "text-recipient-herb",
  },
  sage: {
    banner: "bg-recipient-sage-bg",
    avatar: "bg-recipient-sage",
    accent: "text-recipient-sage",
  },
  sandalwood: {
    banner: "bg-recipient-sandalwood-bg",
    avatar: "bg-recipient-sandalwood",
    accent: "text-recipient-sandalwood",
  },
  berry: {
    banner: "bg-recipient-berry-bg",
    avatar: "bg-recipient-berry",
    accent: "text-recipient-berry",
  },
  plum: {
    banner: "bg-recipient-plum-bg",
    avatar: "bg-recipient-plum",
    accent: "text-recipient-plum",
  },
  peach: {
    banner: "bg-recipient-peach-bg",
    avatar: "bg-recipient-peach",
    accent: "text-recipient-peach",
  },
  honey: {
    banner: "bg-recipient-honey-bg",
    avatar: "bg-recipient-honey",
    accent: "text-recipient-honey",
  },
  aqua: {
    banner: "bg-recipient-aqua-bg",
    avatar: "bg-recipient-aqua",
    accent: "text-recipient-aqua",
  },
  wildflower: {
    banner: "bg-recipient-wildflower-bg",
    avatar: "bg-recipient-wildflower",
    accent: "text-recipient-wildflower",
  },
  mist: {
    banner: "bg-recipient-mist-bg",
    avatar: "bg-recipient-mist",
    accent: "text-recipient-mist",
  },
  periwinkle: {
    banner: "bg-recipient-periwinkle-bg",
    avatar: "bg-recipient-periwinkle",
    accent: "text-recipient-periwinkle",
  },
};

function formatBirthdate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function AddChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-dashed border-nw-border px-3 py-1.5 text-xs text-nw-quaternary transition-colors group-hover:border-periwinkle-300 group-hover:text-periwinkle-600">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="opacity-60"
        aria-hidden="true"
      >
        <path
          d="M6 2.5v7M2.5 6h7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      {label}
    </span>
  );
}

function FilledPill({ value }: { value: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-nw-bg-subtle px-3 py-1.5 text-xs font-medium text-nw-secondary">
      {value}
    </span>
  );
}

function ProgressDots({
  fields,
}: {
  fields: [boolean, boolean, boolean];
}) {
  return (
    <div className="flex items-center gap-1.5">
      {fields.map((filled, i) => (
        <div
          key={i}
          className={`h-1.5 w-1.5 rounded-full transition-colors ${
            filled ? "bg-periwinkle-500" : "bg-nw-border"
          }`}
        />
      ))}
    </div>
  );
}

export function RecipientCard({ recipient, onClick }: Props) {
  const c = colorClasses[recipient.color];
  const initial = recipient.name.charAt(0).toUpperCase();
  const colorName =
    recipient.color.charAt(0).toUpperCase() + recipient.color.slice(1);

  const hasBirthdate = !!recipient.birthdate;
  const hasCareCircle = recipient.careCircleCount > 0;
  const hasServices = recipient.activeServices > 0;
  const fields: [boolean, boolean, boolean] = [
    hasBirthdate,
    hasCareCircle,
    hasServices,
  ];
  const filledCount = fields.filter(Boolean).length;
  const state: "empty" | "partial" | "full" =
    filledCount === 0 ? "empty" : filledCount === 3 ? "full" : "partial";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={recipient.name}
      className="group relative block w-[432px] overflow-hidden rounded-nw-lg border border-nw-border bg-nw-bg-card text-left shadow-nw-xs transition duration-300 hover:-translate-y-1 hover:shadow-nw-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-periwinkle-500"
    >
      {/* Banner */}
      <div
        className={`${c.banner} flex h-12 items-center justify-end gap-2 px-4`}
      >
        {state === "full" && recipient.recentActivity && (
          <span className="mr-auto text-[11px] font-medium text-nw-primary/40">
            {recipient.recentActivity}
          </span>
        )}
        <span className={`text-[11px] font-medium tracking-wide ${c.accent} opacity-60`}>
          {colorName}
        </span>
        {state === "full" && (
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            className="text-nw-primary/40"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              d="M5 12h14m0 0-7-7m7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="px-6 pb-5 pt-9">
        {/* Name row */}
        <div className="flex items-center gap-1.5">
          <h3 className="font-display text-xl font-semibold leading-7 text-nw-primary">
            {recipient.name}
          </h3>
          {recipient.isYou && (
            <span className="text-sm text-nw-tertiary">(You)</span>
          )}
        </div>

        {/* Empty-state invitation */}
        {state === "empty" && (
          <p className="mt-2.5 text-[13px] leading-relaxed text-nw-tertiary">
            Tell us about {recipient.name} in a sentence — your Care
            Coordinator will use it to get started.
          </p>
        )}

        {/* Partial-state encouragement */}
        {state === "partial" && (
          <p className="mt-2 text-[13px] text-nw-quaternary">
            Keep going — a few more details help your Care Team.
          </p>
        )}

        {/* Full-state activity (if not shown in banner) */}
        {state === "full" && !recipient.recentActivity && (
          <p className="mt-2 text-[13px] text-nw-quaternary">
            Profile complete
          </p>
        )}

        {/* Field chips — always show all 3 slots */}
        <div className="mt-3 flex flex-wrap gap-2">
          {hasBirthdate ? (
            <FilledPill value={formatBirthdate(recipient.birthdate!)} />
          ) : (
            <AddChip label="Birthdate" />
          )}
          {hasCareCircle ? (
            <FilledPill
              value={`${recipient.careCircleCount} in Care Circle`}
            />
          ) : (
            <AddChip label="Care Circle" />
          )}
          {hasServices ? (
            <FilledPill
              value={`${recipient.activeServices} active ${recipient.activeServices === 1 ? "service" : "services"}`}
            />
          ) : (
            <AddChip label="Services" />
          )}
        </div>

        {/* Progress dots */}
        <div className="mt-4">
          <ProgressDots fields={fields} />
        </div>
      </div>

      {/* Avatar */}
      <div className="absolute left-6 top-5 rounded-full shadow-nw-sm">
        <div
          className={`${c.avatar} relative flex h-14 w-14 items-center justify-center rounded-full ring-[3px] ring-white/90`}
          aria-hidden="true"
        >
          <span className="font-display text-2xl font-semibold text-white">
            {initial}
          </span>
        </div>
      </div>
    </button>
  );
}
