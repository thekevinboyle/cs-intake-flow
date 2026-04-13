import { useState } from "react";
import { RecipientCard, type FieldKey } from "./RecipientCard";
import type { Recipient } from "../lib/recipients";

const startingRecipient: Recipient = {
  id: "demo-pietr",
  name: "Pietr",
  isYou: true,
  color: "lavender",
  careCircleCount: 0,
  activeServices: 0,
};

const fieldPresets: Record<FieldKey, Partial<Recipient>> = {
  birthdate: { birthdate: "1958-06-12" },
  careCircle: { careCircleCount: 3 },
  services: { activeServices: 2, recentActivity: "Jennifer added a note 2h ago" },
};

export function InteractiveCardDemo() {
  const [recipient, setRecipient] = useState<Recipient>(startingRecipient);

  function addField(field: FieldKey) {
    setRecipient((prev) => ({ ...prev, ...fieldPresets[field] }));
  }

  function reset() {
    setRecipient(startingRecipient);
  }

  const hasAny =
    !!recipient.birthdate ||
    recipient.careCircleCount > 0 ||
    recipient.activeServices > 0;

  return (
    <div className="flex flex-col items-center gap-4">
      <RecipientCard recipient={recipient} onAddField={addField} />
      {hasAny && (
        <button
          type="button"
          onClick={reset}
          className="text-[12px] font-medium text-nw-quaternary underline-offset-4 transition hover:text-periwinkle-600 hover:underline"
        >
          Reset
        </button>
      )}
    </div>
  );
}
