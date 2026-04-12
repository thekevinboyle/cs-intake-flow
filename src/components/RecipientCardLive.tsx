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

function formatBirthdate(iso?: string): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function RecipientCardLive({ recipient, onClick }: Props) {
  const c = colorClasses[recipient.color];
  const initial = recipient.name.charAt(0).toUpperCase();
  const birthdate = formatBirthdate(recipient.birthdate);
  const isEmpty =
    !birthdate && recipient.careCircleCount === 0 && recipient.activeServices === 0;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={recipient.name}
      className="relative block w-[432px] overflow-hidden rounded-nw-lg border border-nw-border bg-nw-bg-card text-left shadow-nw-xs transition duration-300 hover:-translate-y-1 hover:shadow-nw-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-periwinkle-500"
    >
      {/* Banner */}
      <div
        className={`${c.banner} flex h-12 items-center justify-end px-3`}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="text-nw-primary/60"
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
      </div>

      {/* Content */}
      <div className="px-6 pb-6 pt-9">
        <div className="flex items-center gap-1 truncate">
          <div className="font-display text-xl font-semibold leading-7 text-nw-primary">
            {recipient.name}
          </div>
          {recipient.isYou && (
            <div className="text-nw-tertiary"> (You)</div>
          )}
        </div>

        <div className="mt-3 flex flex-row justify-between gap-2">
          <div className="flex flex-col gap-3 overflow-hidden">
            <div className="truncate text-sm font-medium text-nw-secondary">
              {birthdate ?? "Birthdate unknown"}
            </div>
            <div>
              <div className="pb-1 text-sm text-nw-quaternary">Care Circle</div>
              <div className="flex h-8 items-center text-nw-secondary">
                {recipient.careCircleCount > 0
                  ? `${recipient.careCircleCount} ${recipient.careCircleCount === 1 ? "person" : "people"}`
                  : "—"}
              </div>
            </div>
          </div>
          <div className="flex w-28 flex-col justify-end gap-3">
            <div>
              <div className="truncate pb-1 text-sm text-nw-quaternary">
                Services
              </div>
              <div className="flex h-8 items-center gap-1.5 text-nw-secondary">
                {recipient.activeServices > 0
                  ? `${recipient.activeServices} active`
                  : "—"}
              </div>
            </div>
          </div>
        </div>

        {/*
          Empty-state slot — today this is just the faithful reproduction
          of the live card's dead-dash pattern. On Sunday this is where
          Kevin's Figma redesign drops in (progressive completion + the
          conversation-starter invitation per intake-flow-rationale.md).
        */}
        {isEmpty && (
          <div className="mt-4 text-xs italic text-nw-quaternary">
            Empty state — awaiting Sunday Figma redesign drop-in.
          </div>
        )}
      </div>

      {/* Avatar — absolute positioned to overlap banner and content */}
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
