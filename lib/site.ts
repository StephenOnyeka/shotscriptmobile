import homeScreen from "@/public/images/Free Transparent Samsung Galaxy S26 Mockup (Mockuuups Studio).png";
import onboardingScreen from "@/public/images/Free Transparent Samsung Galaxy S26 Mockup (Mockuuups Studio) (1).png";
import campaignScreen from "@/public/images/Free Transparent Samsung Galaxy S26 Mockup (Mockuuups Studio) (2).png";
import brandBrainScreen from "@/public/images/Free Transparent Samsung Galaxy S26 Mockup (Mockuuups Studio) (3).png";
import handMockup from "@/public/images/Free iPhone Hand Mockup (Mockuuups Studio).png";
import brandBrainAngled from "@/public/images/Realme 10.png";
import badge from "@/public/Logo2.png";
import badgeDark from "@/public/Logo.png";
import wordmarkGlyph from "@/public/Group 2.png";

export const screens = {
  home: homeScreen,
  onboarding: onboardingScreen,
  campaign: campaignScreen,
  brandBrain: brandBrainScreen,
  /** Angled 3D mockup of the Brand Brain screen — the widest asset we have. */
  brandBrainAngled,
  hand: handMockup,
  badge,
  badgeDark,
  glyph: wordmarkGlyph,
};

/* Anchors are absolute so the header works from /about and /support too. */
export const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how" },
  { label: "Inside the app", href: "/#screens" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
];

export const stats = [
  { value: "4,200+", label: "creators building with ShotScript" },
  { value: "45 min", label: "saved on an average campaign" },
  { value: "6", label: "studio tools in a single app" },
  { value: "0", label: "credits that ever expire" },
];

/** Platform presets the app rewrites for, used in the scrolling strip. */
export const platforms = [
  "Instagram",
  "TikTok",
  "YouTube Shorts",
  "Facebook",
  "LinkedIn",
  "X",
  "Threads",
  "Pinterest",
  "Email",
  "Google Ads",
];

export const footerColumns = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how" },
      { label: "Inside the app", href: "/#screens" },
      { label: "Plans & credits", href: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Support", href: "/support" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/support#contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Licences", href: "#" },
    ],
  },
];
