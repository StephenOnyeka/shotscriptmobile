import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Serif, Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { THEME_KEY } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const title = "ShotScript — Your AI campaign engine, in your pocket";
const description =
  "ShotScript turns one idea into a complete campaign — strategy, hooks, captions, scripts, CTAs, AI images and video. Train it on your brand once, then create from your phone.";

export const metadata: Metadata = {
  // Swap this for the production domain before launch.
  metadataBase: new URL("https://shotscript.app"),
  title: {
    default: title,
    template: "%s · ShotScript",
  },
  description,
  applicationName: "ShotScript",
  keywords: [
    "AI marketing app",
    "campaign generator",
    "AI captions",
    "AI ad scripts",
    "social media content app",
    "ShotScript",
  ],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "ShotScript",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050409" },
  ],
  colorScheme: "dark light",
};

/* Runs before first paint so the stored choice — or the OS preference on a
   first visit — is on <html> by the time any pixel is drawn. Server-rendered
   markup ships `dark`, so a no-JS visit still gets the signature look. */
const themeScript = `(function(){try{var s=localStorage.getItem("${THEME_KEY}");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");var r=document.documentElement;r.classList.remove("light","dark");r.classList.add(t);}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${bricolage.variable} ${instrument.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {/* `id="top"` lives here rather than on the hero so the footer's
          back-to-top link works on every route. */}
      <body
        id="top"
        className="flex min-h-full flex-col overflow-x-hidden bg-canvas text-body"
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
