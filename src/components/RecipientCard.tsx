import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import type { Recipient, RecipientColor } from "../lib/recipients";

export type FieldKey = "birthdate" | "careCircle" | "services";

type Props = {
  recipient: Recipient;
  onClick?: () => void;
  onAddField?: (field: FieldKey) => void;
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
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function AddChip({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  const baseClasses =
    "inline-flex items-center gap-1 rounded-full border border-dashed border-nw-border px-3 py-1.5 text-xs text-nw-quaternary transition-colors";
  const interactiveClasses = onClick
    ? "cursor-pointer hover:border-periwinkle-400 hover:bg-periwinkle-50 hover:text-periwinkle-600"
    : "group-hover:border-periwinkle-300 group-hover:text-periwinkle-600";

  const content = (
    <>
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
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        className={`${baseClasses} ${interactiveClasses}`}
      >
        {content}
      </button>
    );
  }

  return <span className={`${baseClasses} ${interactiveClasses}`}>{content}</span>;
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
        <motion.div
          key={i}
          className="h-1.5 w-1.5 rounded-full"
          animate={{
            backgroundColor: filled
              ? "rgb(96, 121, 246)"
              : "rgb(231, 229, 228)",
            scale: filled ? 1.1 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
      ))}
    </div>
  );
}

function ActivityPopover({
  anchorName,
  activity,
}: {
  anchorName: string;
  activity: string;
}) {
  return (
    <div
      role="tooltip"
      className="activity-popover pointer-events-none absolute z-10 hidden w-56 rounded-nw-md border border-nw-border bg-white p-3 text-left shadow-nw-lg"
      style={
        {
          positionAnchor: anchorName,
          top: "anchor(bottom)",
          left: "anchor(left)",
          translate: "0 8px",
        } as React.CSSProperties
      }
    >
      <p className="text-[11px] font-semibold uppercase tracking-wider text-nw-quaternary">
        Recent activity
      </p>
      <ul className="mt-2 space-y-1.5 text-[12px] text-nw-tertiary">
        <li>&middot; {activity}</li>
        <li>&middot; Care plan updated yesterday</li>
        <li>&middot; Introduction call scheduled</li>
      </ul>
    </div>
  );
}

const subtitles: Record<string, (name: string, activity?: string) => string> = {
  empty: (name) =>
    `Tell us about ${name} in a sentence. Your Care Coordinator will use it to get started.`,
  partial: () => "A few more details help your Care Team.",
  full: (_name, activity) => activity ?? "Profile complete",
};

export function RecipientCard({ recipient, onClick, onAddField }: Props) {
  const c = colorClasses[recipient.color];
  const initial = recipient.name.charAt(0).toUpperCase();
  const colorName =
    recipient.color.charAt(0).toUpperCase() + recipient.color.slice(1);
  const anchorName = `--recipient-${recipient.id}`;

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

  const cardClassName =
    "group relative block w-[432px] overflow-hidden rounded-nw-lg border border-nw-border bg-nw-bg-card text-left shadow-nw-xs transition duration-300 hover:-translate-y-1 hover:shadow-nw-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-periwinkle-500";

  const isInteractive = !!onAddField;

  const inner = (
    <LayoutGroup id={`card-${recipient.id}`}>
      {/* Banner — pl-20 clears the avatar overlap zone */}
      <div
        className={`${c.banner} flex h-12 items-center justify-end gap-2 pl-20 pr-4`}
      >
        {state === "full" && recipient.recentActivity && (
          <span
            className="mr-auto truncate text-[11px] font-medium text-nw-primary/50"
            style={{ anchorName } as React.CSSProperties}
          >
            {recipient.recentActivity}
          </span>
        )}
        <span
          className={`shrink-0 text-[11px] font-medium tracking-wide ${c.accent} opacity-60`}
        >
          {colorName}
        </span>
        {state === "full" && (
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            className="shrink-0 text-nw-primary/40"
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

      {state === "full" && recipient.recentActivity && (
        <ActivityPopover
          anchorName={anchorName}
          activity={recipient.recentActivity}
        />
      )}

      {/* Content — min-h keeps all 3 states the same card height */}
      <motion.div
        layout
        className="flex min-h-[188px] flex-col px-6 pb-5 pt-9"
      >
        {/* Name row */}
        <div className="flex items-center gap-1.5">
          <h3 className="font-display text-xl font-semibold leading-7 text-nw-primary">
            {recipient.name}
          </h3>
          {recipient.isYou && (
            <span className="text-sm text-nw-tertiary">(You)</span>
          )}
        </div>

        {/* Subtitle */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={state}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 text-[13px] leading-relaxed text-nw-tertiary"
          >
            {subtitles[state](recipient.name, recipient.recentActivity)}
          </motion.p>
        </AnimatePresence>

        <motion.div layout className="flex-1" />

        {/* Field chips */}
        <motion.div layout className="mt-3 flex flex-wrap gap-2">
          <AnimatePresence initial={false}>
            <motion.span
              key={`birthdate-${hasBirthdate}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="fresh-pill inline-flex"
            >
              {hasBirthdate ? (
                <FilledPill value={formatBirthdate(recipient.birthdate!)} />
              ) : (
                <AddChip
                  label="Birthdate"
                  onClick={
                    isInteractive
                      ? () => onAddField!("birthdate")
                      : undefined
                  }
                />
              )}
            </motion.span>
            <motion.span
              key={`careCircle-${hasCareCircle}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="fresh-pill inline-flex"
            >
              {hasCareCircle ? (
                <FilledPill
                  value={`${recipient.careCircleCount} in Care Circle`}
                />
              ) : (
                <AddChip
                  label="Care Circle"
                  onClick={
                    isInteractive
                      ? () => onAddField!("careCircle")
                      : undefined
                  }
                />
              )}
            </motion.span>
            <motion.span
              key={`services-${hasServices}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="fresh-pill inline-flex"
            >
              {hasServices ? (
                <FilledPill
                  value={`${recipient.activeServices} active ${recipient.activeServices === 1 ? "service" : "services"}`}
                />
              ) : (
                <AddChip
                  label="Services"
                  onClick={
                    isInteractive
                      ? () => onAddField!("services")
                      : undefined
                  }
                />
              )}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Progress dots */}
        <motion.div layout className="mt-4">
          <ProgressDots fields={fields} />
        </motion.div>
      </motion.div>

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
    </LayoutGroup>
  );

  if (isInteractive) {
    return (
      <article
        aria-label={recipient.name}
        className={`${cardClassName} cursor-default`}
      >
        {inner}
      </article>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={recipient.name}
      className={cardClassName}
    >
      {inner}
    </button>
  );
}
