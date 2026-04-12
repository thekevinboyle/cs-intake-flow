export type RecipientColor =
  | "lavender"
  | "evergreen"
  | "herb"
  | "sage"
  | "sandalwood"
  | "berry"
  | "plum"
  | "peach"
  | "honey"
  | "aqua"
  | "wildflower"
  | "mist"
  | "periwinkle";

export type Recipient = {
  id: string;
  name: string;
  isYou?: boolean;
  color: RecipientColor;
  birthdate?: string;
  careCircleCount: number;
  activeServices: number;
  recentActivity?: string;
};

export const mockRecipients: Recipient[] = [
  {
    id: "1",
    name: "Pietr",
    isYou: true,
    color: "lavender",
    careCircleCount: 0,
    activeServices: 0,
  },
  {
    id: "2",
    name: "Evelyn",
    color: "evergreen",
    birthdate: "1942-03-18",
    careCircleCount: 4,
    activeServices: 2,
    recentActivity: "Jennifer added a note 2h ago",
  },
  {
    id: "3",
    name: "Marcus",
    color: "honey",
    birthdate: "2014-07-02",
    careCircleCount: 2,
    activeServices: 1,
    recentActivity: "Care plan updated yesterday",
  },
  {
    id: "4",
    name: "Sofia",
    color: "periwinkle",
    birthdate: "1955-11-03",
    careCircleCount: 0,
    activeServices: 0,
  },
];

export const emptyRecipient = mockRecipients[0];
export const partialRecipient = mockRecipients[3];
export const fullRecipient = mockRecipients[1];
