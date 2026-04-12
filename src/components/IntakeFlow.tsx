type FrameProps = {
  step: number;
  children: React.ReactNode;
};

function PhoneFrame({ step, children }: FrameProps) {
  return (
    <div className="flex w-[320px] shrink-0 flex-col overflow-hidden rounded-[32px] border border-nw-border bg-white shadow-nw-md">
      {/* Status bar */}
      <div className="flex h-12 items-center justify-center bg-white px-6">
        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-colors ${
                i < step
                  ? "bg-periwinkle-500"
                  : i === step
                    ? "bg-periwinkle-500"
                    : "bg-nw-border"
              }`}
            />
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col px-6 pb-8">{children}</div>
    </div>
  );
}

function OptionCard({
  label,
  color,
  selected,
}: {
  label: string;
  color: string;
  selected?: boolean;
}) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-3 rounded-nw-md border-2 px-4 py-3.5 transition-all ${
        selected
          ? `border-periwinkle-500 bg-periwinkle-50 shadow-nw-sm`
          : "border-nw-border hover:border-periwinkle-300"
      }`}
    >
      <div
        className={`h-3 w-3 rounded-full`}
        style={{ backgroundColor: color }}
      />
      <span className="text-sm font-medium text-nw-primary">{label}</span>
    </div>
  );
}

function PrimaryCTA({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-auto pt-6">
      <button
        type="button"
        className="w-full rounded-nw-md bg-periwinkle-500 py-3.5 text-sm font-semibold text-white shadow-nw-sm transition hover:bg-periwinkle-600"
      >
        {children}
      </button>
    </div>
  );
}

function SecondaryCTA({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="mt-3 w-full py-2 text-center text-sm text-nw-quaternary transition hover:text-periwinkle-600"
    >
      {children}
    </button>
  );
}

function Frame1() {
  return (
    <PhoneFrame step={1}>
      <h2 className="font-display text-2xl font-semibold leading-tight text-nw-primary">
        Who are you caring&nbsp;for?
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-nw-tertiary">
        Take your time. You can change or add more later.
      </p>
      <div className="mt-6 space-y-3">
        <OptionCard label="Myself" color="hsl(230 89% 67%)" selected />
        <OptionCard label="A family member" color="hsl(147 22% 39%)" />
        <OptionCard label="Both" color="hsl(240 37% 66%)" />
        <OptionCard
          label="It's complicated"
          color="hsl(8 53% 60%)"
        />
      </div>
      <PrimaryCTA>Continue</PrimaryCTA>
      <SecondaryCTA>I need help getting started</SecondaryCTA>
    </PhoneFrame>
  );
}

function Frame2() {
  return (
    <PhoneFrame step={2}>
      <h2 className="font-display text-2xl font-semibold leading-tight text-nw-primary">
        Tell us what's going on — in your&nbsp;words
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-nw-tertiary">
        One sentence is fine. A paragraph is fine. We're not looking for a
        diagnosis — just where you are today.
      </p>
      <div className="mt-5">
        <div className="min-h-[120px] rounded-nw-md border border-nw-border bg-nw-bg-subtle px-4 py-3">
          <span className="text-sm italic text-nw-quaternary">
            For example: "My mom was diagnosed with early-stage Alzheimer's last
            month and we're trying to figure out what's next."
          </span>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-nw-border px-3 py-1.5 text-xs text-nw-quaternary transition hover:border-periwinkle-300 hover:text-periwinkle-600">
          + Add a diagnosis
        </span>
        <span className="rounded-full border border-nw-border px-3 py-1.5 text-xs text-nw-quaternary transition hover:border-periwinkle-300 hover:text-periwinkle-600">
          + Add a medication
        </span>
        <span className="rounded-full border border-nw-border px-3 py-1.5 text-xs text-nw-quaternary transition hover:border-periwinkle-300 hover:text-periwinkle-600">
          + Add a location
        </span>
      </div>
      <PrimaryCTA>Continue</PrimaryCTA>
      <SecondaryCTA>Skip for now</SecondaryCTA>
    </PhoneFrame>
  );
}

function Frame3() {
  return (
    <PhoneFrame step={3}>
      <h2 className="font-display text-2xl font-semibold leading-tight text-nw-primary">
        Anything we should&nbsp;know?
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-nw-tertiary">
        Totally optional. You can tell us more later — or not at all.
      </p>
      <div className="mt-5 space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-nw-quaternary">
            Who's in your care circle?
          </label>
          <div className="rounded-nw-sm border border-nw-border bg-nw-bg-subtle px-3 py-2.5 text-sm text-nw-quaternary">
            Family, friends, professionals...
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-nw-quaternary">
            What's the hardest part right now?
          </label>
          <div className="rounded-nw-sm border border-nw-border bg-nw-bg-subtle px-3 py-2.5 text-sm text-nw-quaternary">
            In your own words...
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-nw-quaternary">
            What's already been tried?
          </label>
          <div className="rounded-nw-sm border border-nw-border bg-nw-bg-subtle px-3 py-2.5 text-sm text-nw-quaternary">
            Any treatments, services, or plans...
          </div>
        </div>
      </div>
      <PrimaryCTA>Skip — we have enough to start</PrimaryCTA>
      <SecondaryCTA>Add what I wrote</SecondaryCTA>
    </PhoneFrame>
  );
}

function Frame4() {
  return (
    <PhoneFrame step={4}>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-periwinkle-100">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className="text-periwinkle-600"
          >
            <path
              d="M20 6 9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-semibold text-nw-primary">
          We're on it, Pietr
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-nw-tertiary">
          We've created your project and your Care Team is getting up to
          speed.
        </p>
      </div>
      <div className="space-y-4 rounded-nw-md bg-nw-bg-subtle px-4 py-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-periwinkle-500 text-[10px] font-bold text-white">
            1
          </div>
          <div>
            <p className="text-sm font-medium text-nw-primary">
              Within 24 hours
            </p>
            <p className="text-xs text-nw-tertiary">
              Your Care Coordinator (Jennifer) will send a welcome message.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-periwinkle-500 text-[10px] font-bold text-white">
            2
          </div>
          <div>
            <p className="text-sm font-medium text-nw-primary">
              Within 3 days
            </p>
            <p className="text-xs text-nw-tertiary">
              You'll have your first short call scheduled (15 min, at your
              convenience).
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-periwinkle-500 text-[10px] font-bold text-white">
            3
          </div>
          <div>
            <p className="text-sm font-medium text-nw-primary">Ongoing</p>
            <p className="text-xs text-nw-tertiary">
              You'll always have one person to call or message when things
              change.
            </p>
          </div>
        </div>
      </div>
      <PrimaryCTA>Go to my Care Project</PrimaryCTA>
      <SecondaryCTA>Message Jennifer now</SecondaryCTA>
    </PhoneFrame>
  );
}

export function IntakeFlow() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}
