import type { Icon } from "iconsax-reactjs";
import {
  Cpu,
  Gallery,
  MagicStar,
  Profile2User,
  SearchNormal1,
  VideoPlay,
} from "iconsax-reactjs";

export type Feature = {
  icon: Icon;
  tagline: string;
  title: string;
  description: string;
};

/** The six tools that ship inside the app, in the order they appear on the home screen. */
export const features: Feature[] = [
  {
    icon: MagicStar,
    tagline: "One idea in, a campaign out",
    title: "Campaign AI",
    description:
      "Pick a goal and a platform, type a sentence about what you're promoting, and get strategy, hooks, captions, scripts and CTAs in a single pass.",
  },
  {
    icon: Cpu,
    tagline: "AI shaped by your brand",
    title: "Brand Brain",
    description:
      "Add your name, tagline, industry, audience and tone once. Every output after that sounds like your brand instead of a generic assistant.",
  },
  {
    icon: Gallery,
    tagline: "Branded photos & ad creatives",
    title: "AI Images",
    description:
      "Turn any line of your campaign into a scroll-stopping visual. Five credits an image, no design tool and no stock-photo licence to worry about.",
  },
  {
    icon: VideoPlay,
    tagline: "Short-form, ready to post",
    title: "AI Videos",
    description:
      "Generate hook-led cuts sized for Reels, TikTok and Shorts straight from the script ShotScript just wrote for you.",
  },
  {
    icon: Profile2User,
    tagline: "Know who you're talking to",
    title: "Audience Personas",
    description:
      "Describe your ideal customer once — \"skincare brand for women 40+\" is enough — and every hook is written for their pain points and objections.",
  },
  {
    icon: SearchNormal1,
    tagline: "Never start from a blank page",
    title: "Trend Research",
    description:
      "See the angles working in your niche right now and fold the ones that fit into your next campaign without leaving the app.",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Tell us about your brand",
    description:
      "Business name, what you sell, who you sell to and the industry you're in. Two minutes, once.",
    bullets: ["Brand & tagline", "Ideal customer", "Industry & tone"],
  },
  {
    number: "02",
    title: "Pick a goal and a platform",
    description:
      "Sale, launch, awareness, event, leads or social proof — then choose where it's going.",
    bullets: ["6 campaign goals", "Instagram, TikTok, more", "Quick or Brand Mode"],
  },
  {
    number: "03",
    title: "Build my campaign",
    description:
      "One tap and the whole set lands: strategy, hooks, captions, scripts, CTAs, images and video.",
    bullets: ["Copy or export", "Regenerate any part", "Saved to your library"],
  },
];
