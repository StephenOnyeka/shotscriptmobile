export type Plan = {
  name: string;
  blurb: string;
  monthly: number;
  yearly: number;
  badge?: string;
  cta: string;
  highlight?: boolean;
  includes: string[];
};

export const plans: Plan[] = [
  {
    name: "Free",
    blurb: "Enough to see whether the AI actually sounds like you.",
    monthly: 0,
    yearly: 0,
    cta: "Start free",
    includes: [
      "3 campaigns",
      "Campaign AI in Quick Mode",
      "Strategy, hooks, captions & CTAs",
      "1 brand profile",
      "Copy and share anywhere",
    ],
  },
  {
    name: "Pro",
    blurb: "For creators and founders shipping content every week.",
    monthly: 19,
    yearly: 15,
    badge: "Most popular",
    cta: "Upgrade to Pro",
    highlight: true,
    includes: [
      "Unlimited campaigns",
      "Brand Brain & Brand Mode",
      "AI images and AI videos",
      "Every platform preset",
      "200 credits every month",
      "Priority generation",
    ],
  },
  {
    name: "Studio",
    blurb: "For lean agencies running more than one brand at a time.",
    monthly: 49,
    yearly: 39,
    cta: "Talk to sales",
    includes: [
      "Everything in Pro",
      "3 brand profiles",
      "800 credits every month",
      "Shared campaign library",
      "Early access to new tools",
    ],
  },
];

export type CreditPack = {
  credits: number;
  price: number;
  badge?: string;
};

/** One-time top-ups. 10 credits per AI image, 50 per AI video. */
export const creditPacks: CreditPack[] = [
  { credits: 200, price: 9 },
  { credits: 500, price: 19, badge: "Best value" },
  { credits: 1200, price: 39, badge: "Studio" },
];

export const CREDITS_PER_IMAGE = 10;
export const CREDITS_PER_VIDEO = 50;
