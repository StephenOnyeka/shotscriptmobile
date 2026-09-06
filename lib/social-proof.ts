/**
 * Real photography from Unsplash; quotes are placeholder copy to swap for real
 * ones. Every id below was checked to resolve — Unsplash 404s on a bad slug, so
 * don't add one without loading it first.
 *
 * `crop` matters at portrait aspect ratios: the default centre crop cuts heads
 * off, `faces` keeps the subject framed.
 */
export function unsplash(
  id: string,
  w: number,
  h: number,
  crop?: "faces" | "entropy",
) {
  const cropParam = crop ? `&crop=${crop}` : "";
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80${cropParam}`;
}

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photoId: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Feels like having a strategist, copywriter and video editor on retainer — without the overhead.",
    name: "Devon Wright",
    role: "Creative Director, Northfold",
    photoId: "1573496359142-b8d87734a5a2",
  },
  {
    quote:
      "I used to lose a whole Sunday to captions. Now I tap Sale / Promo, type two lines about the drop, and the week is written before my coffee goes cold.",
    name: "Amara Nwosu",
    role: "Founder, Lumen Skincare",
    photoId: "1573497019940-1c28c88b4f3e",
  },
  {
    quote:
      "Brand Mode is the part that sold me. It stopped sounding like a chatbot and started sounding like my channel — same jokes, same rhythm.",
    name: "Daniel Ortega",
    role: "Creator, 180k followers",
    photoId: "1507003211169-0a1dd7228f2d",
  },
  {
    quote:
      "The scripts are actually shootable. My designer now only gets pulled in when we want something bespoke, and the ad creatives come out of the app.",
    name: "Priya Raman",
    role: "Marketing lead, Kova",
    photoId: "1580489944761-15a19d654956",
  },
  {
    quote:
      "Three brand profiles means three clients in one app. We bill roughly what we did last year and ship about four times the work.",
    name: "Tobi Adeyemi",
    role: "Agency owner, Ninth Floor",
    photoId: "1519085360753-af0119f7cbe7",
  },
];

/** Faces for the small "loved by creators" cluster under the hero headline. */
export const heroFaces = [
  { id: "1494790108377-be9c29b29330", alt: "ShotScript user" },
  { id: "1500648767791-00dcc994a43e", alt: "ShotScript user" },
  { id: "1534528741775-53994a69daeb", alt: "ShotScript user" },
  { id: "1552058544-f2b08422138a", alt: "ShotScript user" },
  { id: "1544005313-94ddf0286df2", alt: "ShotScript user" },
];

/**
 * Illustrative photography for the About and Support pages. These are
 * decorative — the caption or heading beside each one carries the meaning — so
 * they render with an empty alt rather than a description of a stock photo we
 * can't vouch for.
 */
export const photos = {
  mission: "1522202176988-66273c2fd55f",
  workshop: "1600880292203-757bb62b4baf",
  desk: "1552581234-26160f608093",
  support: "1553877522-43269d4ea984",
  contact: "1516321318423-f06f85e504b3",
};

/** Who ShotScript is built for — the trio of portraits on the About page. */
export const audience = [
  {
    label: "Founders",
    body: "Selling something you built, with nobody to hand the marketing to.",
    photoId: "1560250097-0b93528c311a",
  },
  {
    label: "Creators",
    body: "Posting constantly, and tired of the caption being the hard part.",
    photoId: "1524504388940-b1c1722653e1",
  },
  {
    label: "Small agencies",
    body: "Juggling several brands, each one needing its own voice every week.",
    photoId: "1521737604893-d14cc237f11d",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do I need marketing experience to use ShotScript?",
    a: "No. If you can describe what you're selling in a sentence, ShotScript handles the strategy. Quick Mode needs no setup at all — pick a goal, type what you're promoting, and tap Build My Campaign.",
  },
  {
    q: "What exactly is the Brand Brain?",
    a: "It's your brand's memory. You fill in your name, tagline, industry, target audience and tone once, and the app shows a completion percentage as you go. Every campaign generated afterwards is written from that profile, which is what makes Brand Mode sound like you rather than like generic AI.",
  },
  {
    q: "How do credits work?",
    a: "Credits are only spent on AI images and AI videos — text is unlimited on paid plans. An image costs 10 credits and a video costs 50. Paid plans include a monthly allowance, and one-time packs never expire.",
  },
  {
    q: "Which platforms does it write for?",
    a: "Original long-form plus per-platform rewrites for Instagram, TikTok, YouTube Shorts, Facebook, LinkedIn and X. Each one gets its own length, hook style and CTA rather than the same caption pasted everywhere.",
  },
  {
    q: "Can I edit what the AI gives me?",
    a: "Everything is editable, and any single piece can be regenerated on its own — swap just the hook or just the CTA without rebuilding the whole campaign. Finished assets stay in your library.",
  },
  // {
  //   q: "Is the free plan really free?",
  //   a: "Yes. Three campaigns, no credit card, no trial countdown. Upgrade when you outgrow it, and cancel any time without talking to anyone.",
  // },
  // {
  //   q: "Which devices is the app on?",
  //   a: "ShotScript is a mobile app for iOS and Android, built for phones first — the whole flow works one-handed. Your campaigns sync to your account, so signing in on a new device brings your library with you.",
  // },
];
