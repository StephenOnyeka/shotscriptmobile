import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Key,
  Magicpen,
  Mobile,
  Repeat,
  TickCircle,
  Timer1,
} from "iconsax-reactjs";
import { FinalCta } from "@/components/final-cta";
import { Stats } from "@/components/stats";
import { Accent, Section, SectionHeading } from "@/components/ui/section";
import { audience, photos, unsplash } from "@/lib/social-proof";
import { screens } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why ShotScript exists: a phone-first AI campaign engine that learns your brand once, then writes strategy, copy, scripts and visuals that sound like you.",
};

/**
 * What the mission commits us to in the product itself — outcomes, not
 * opinions. The opinions live in `beliefs` below.
 */
const commitments = [
  "An idea in the morning is a finished campaign by lunch, not next week.",
  "One message, rewritten in the shape each platform actually rewards.",
  "Your voice on file, so the output sounds like you and not like a model.",
];

const beliefs = [
  {
    icon: Mobile,
    title: "The phone is the studio",
    body: "Most content gets made in the gaps — a queue, a green room, the ten minutes before a shoot. So the whole flow is one-handed, and nothing waits on a laptop.",
  },
  {
    icon: Cpu,
    title: "A brand is context, not a prompt",
    body: "Generic AI writes generic copy because it starts from nothing every time. The Brand Brain keeps your name, audience and tone on file so every campaign starts from you.",
  },
  {
    icon: Timer1,
    title: "Finished beats clever",
    body: "A campaign you can post today is worth more than a perfect one you never publish. Every screen is built to get you to something usable in a single sitting.",
  },
  {
    icon: Repeat,
    title: "One idea, every platform",
    body: "The same message needs a different shape on TikTok than on LinkedIn. Rewriting for each platform is the app's job, not yours.",
  },
  {
    icon: Key,
    title: "The output is yours",
    body: "Copy, scripts, images and video come out of the app ready to use, edit and own. Nothing is watermarked and nothing is locked behind an export upsell.",
  },
  {
    icon: Magicpen,
    title: "AI drafts, you decide",
    body: "Every piece is editable and any single piece can be regenerated on its own — swap just the hook or just the CTA without rebuilding the campaign.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <div className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-52 left-1/2 h-[36rem] w-[70rem] -translate-x-1/2 rounded-full bg-brand-600/22 blur-[140px]" />
          <div className="absolute -left-32 top-1/2 size-[22rem] rounded-full bg-gold-500/10 blur-[130px]" />
          <div className="blueprint absolute inset-0" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-8 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-balance text-[2.6rem] font-extrabold leading-[1.04] text-fg sm:text-6xl">
              Small teams shouldn&apos;t have to{" "}
              <Accent>sound small</Accent>
            </h1>

            <p className="max-w-xl text-pretty text-lg leading-relaxed text-fg/65">
              ShotScript started from a frustration most creators share: the
              idea takes a minute, and the marketing around it takes the rest of
              the week. Strategy, hooks, captions per platform, a script, a
              thumbnail, an ad variant — all of it standing between a good idea
              and anyone seeing it.
            </p>

            <p className="max-w-xl text-pretty text-base leading-relaxed text-fg/55">
              So we built the campaign engine we kept wishing existed: one that
              lives on your phone, learns your brand once, and turns a single
              sentence into everything you need to publish.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/25 blur-[100px]"
            />
            <Image
              src={screens.hand}
              alt="A hand holding a phone showing the ShotScript brand onboarding screen, asking for a brand name and ideal customer"
              sizes="(min-width: 1024px) 28rem, 88vw"
              placeholder="blur"
              className="relative h-auto w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] light:drop-shadow-[0_36px_70px_rgba(21,17,31,0.18)]"
            />
          </div>
        </div>
      </div>

      {/* Mission. The photography is illustrative — the copy beside it carries
          the meaning — so it renders with an empty alt. */}
      <div className="relative overflow-hidden border-y border-line bg-canvas-2">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-8 size-[30rem] rounded-full bg-brand-600/18 blur-[130px]"
        />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* 3:2 columns so the tall tile lands on a portrait ratio: two square
              tiles set the row heights, the spanning tile stretches over both. */}
          {/* <div className="animate-rise mx-auto grid w-full max-w-md grid-cols-5 gap-4 lg:max-w-none">
            <div className="hairline relative col-span-3 row-span-2 overflow-hidden rounded-3xl bg-fg/5">
              <Image
                src={unsplash(photos.mission, 720, 1000, "faces")}
                alt=""
                fill
                sizes="(min-width: 1024px) 21rem, 52vw"
                className="object-cover"
              />
            </div>
            <div className="hairline relative col-span-2 aspect-square overflow-hidden rounded-3xl bg-fg/5">
              <Image
                src={unsplash(photos.workshop, 560, 560)}
                alt=""
                fill
                sizes="(min-width: 1024px) 14rem, 35vw"
                className="object-cover"
              />
            </div>
            <div className="hairline relative col-span-2 aspect-square overflow-hidden rounded-3xl bg-fg/5">
              <Image
                src={unsplash(photos.desk, 560, 560)}
                alt=""
                fill
                sizes="(min-width: 1024px) 14rem, 35vw"
                className="object-cover"
              />
            </div>
          </div> */}
          <div className="animate-rise mx-auto w-full max-w-md gap-4 lg:max-w-none">
            <div className=" relative overflow-hidden rounded-4xl">
                          <Image
                            // src={unsplash(photos.support, 900, 760)}
                            // src="/social-media-marketing-concept-marketing-with-applications.jpg"
                            src="/portrait-overjoyed-women-friends-holding-mobile-phone-shopping-online-with-sales_695242-10022-removebg-preview.png"
                            alt=""
                            width={450}
                            height={380}
                            priority
                            // className="aspect-6/5 w-full object-cover transition duration-700 group-hover:scale-105"
                            className="aspect-6/5 w-full object-cover transition duration-700 group-hover:scale-105"
                          />
                          <div
                            aria-hidden
                            className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/25 to-transparent"
                          />
                        </div>
          </div>

          <div className="flex flex-col items-start gap-7">
            <h2 className="text-balance text-4xl font-extrabold leading-[1.05] text-fg sm:text-5xl">
              Our <Accent>mission</Accent>
            </h2>

            <p className="max-w-xl text-balance font-display text-2xl font-bold leading-snug text-fg sm:text-[1.75rem]">
              Put a full marketing team in the pocket of anyone with something
              worth selling.
            </p>

            <p className="max-w-xl text-pretty text-base leading-relaxed text-fg/65 sm:text-lg">
              The gap between brands that market well and brands that
              don&apos;t is rarely talent — it&apos;s headcount. A studio has a
              strategist, a copywriter, a designer and an editor. Everyone else
              has a phone and a Sunday evening. ShotScript exists to close that
              gap.
            </p>

            <ul className="flex flex-col gap-3">
              {commitments.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-sm leading-relaxed text-fg/70 sm:text-base"
                >
                  <span className="mt-0.5 shrink-0 text-accent">
                    <TickCircle size={20} color="currentColor" variant="Bold" />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Section>
        <SectionHeading
          title={
            <>
              Built for the people doing <Accent>all of it</Accent>
            </>
          }
          subtitle="One idea, one person, and a list of things that all need writing before anyone sees it. If that's the week, the app is aimed at you."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {audience.map(({ label, body, photoId }) => (
            <article
              key={label}
              className="group hairline relative overflow-hidden rounded-3xl bg-fg/5"
            >
              <Image
                src={unsplash(photoId, 640, 800, "faces")}
                alt=""
                width={320}
                height={400}
                className="aspect-4/5 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-6">
                <h3 className="font-display text-xl font-bold text-white">
                  {label}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-white/70">
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title={
            <>
              Six opinions baked into <Accent>every screen</Accent>
            </>
          }
          subtitle="These are the calls we keep making when there's a trade-off between doing something impressive and doing something useful."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beliefs.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="surface flex flex-col gap-4 rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-400/35"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-brand-500/12 text-accent">
                <Icon size={22} color="currentColor" variant="Bulk" />
              </span>
              <h3 className="font-display text-lg font-bold text-fg">
                {title}
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-fg/60">
                {body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Stats />

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl font-extrabold leading-[1.1] text-fg sm:text-4xl">
            What ShotScript is not
          </h2>
          <p className="text-pretty text-base leading-relaxed text-fg/60 sm:text-lg">
            It isn&apos;t a scheduler, an analytics suite or a social inbox —
            there are good tools for those and we don&apos;t try to replace
            them. It won&apos;t post on your behalf, and it isn&apos;t a
            chatbot you have to coax. ShotScript does one job: turning an idea
            into a finished, on-brand campaign you can publish wherever you
            already publish.
          </p>
          <p className="text-sm text-fg/45">
            Questions we haven&apos;t answered here?{" "}
            <Link
              href="/support"
              className="font-semibold text-accent underline decoration-brand-400/40 underline-offset-4 hover:decoration-brand-400"
            >
              Talk to support
            </Link>
            .
          </p>
        </div>
      </Section>

      <FinalCta />
    </main>
  );
}
