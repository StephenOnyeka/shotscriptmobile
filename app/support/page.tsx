import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Coin1,
  Cpu,
  Danger,
  Devices,
  Lock1,
  MessageQuestion,
  Sms,
  Timer1,
  Wallet3,
} from "iconsax-reactjs";
import { FinalCta } from "@/components/final-cta";
import { SupportForm } from "@/components/support-form";
import { Accent, Section, SectionHeading } from "@/components/ui/section";
import { heroFaces, photos, unsplash } from "@/lib/social-proof";
import { SUPPORT_EMAIL } from "@/lib/support";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with ShotScript — answers on plans, credits, the Brand Brain and your account, plus a direct line to the team.",
};

const topics = [
  {
    icon: Cpu,
    title: "Brand Brain & Brand Mode",
    body: "Your completion ring climbs as you fill in identity, audience and tone. If Brand Mode is greyed out, the profile needs a name and at least one audience before it can write from it.",
  },
  {
    icon: Coin1,
    title: "Credits ran out mid-campaign",
    body: "Text generation is never blocked on paid plans — only AI images (10 credits) and video (50) draw down. Buy a pack from Plans & credits and the balance is available straight away.",
  },
  {
    icon: Wallet3,
    title: "Plans, billing & cancelling",
    body: "Subscriptions are handled by the App Store or Google Play, so upgrades, receipts and cancellations all live in your store account. Cancelling keeps your library and drops you to the free plan.",
  },
  {
    icon: Devices,
    title: "New phone, same library",
    body: "Sign in with the same account and your brands and campaigns come with you. Store subscriptions restore from the same account you bought them on.",
  },
  {
    icon: Danger,
    title: "A generation failed",
    body: "Failed generations don't spend credits. If one hangs, close the campaign and reopen it — anything already written is saved. Still stuck? Send us the campaign name below.",
  },
  {
    icon: Lock1,
    title: "Your content & data",
    body: "Campaigns belong to you, and everything the app produces is yours to edit, export and publish. Deleting a brand removes its profile and the campaigns generated from it.",
  },
];

export default function SupportPage() {
  return (
    <main>
      <div className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-48 left-1/2 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full bg-brand-600/22 blur-[140px]" />
          <div className="blueprint absolute inset-0" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-6 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-balance text-[2.6rem] font-extrabold leading-[1.04] text-fg sm:text-5xl">
              Stuck on something? <Accent>We&apos;re on it</Accent>
            </h1>

            <p className="max-w-xl text-pretty text-base leading-relaxed text-fg/60 sm:text-lg">
              Most answers are below. If yours isn&apos;t, write to us — a
              person reads every message, usually within one working day.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-canvas transition hover:bg-fg/85"
              >
                <MessageQuestion
                  size={16}
                  color="currentColor"
                  variant="Bold"
                />
                Contact us
              </Link>
              <Link
                href="/#faq"
                className="hairline inline-flex items-center gap-2 rounded-full bg-fg/4 px-5 py-2.5 text-sm font-semibold text-fg/70 transition hover:bg-fg/10 hover:text-fg"
              >
                Read the FAQ
              </Link>
            </div>

            <p className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs text-fg/45">
              <span className="inline-flex items-center gap-1.5">
                <Timer1 size={14} color="currentColor" variant="Bold" />
                Replies within 1 working day
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sms size={14} color="currentColor" variant="Bold" />
                {SUPPORT_EMAIL}
              </span>
            </p>
          </div>

          {/* Illustrative photography — the card beside it carries the
              meaning, so the image itself gets an empty alt. */}
          <div className="animate-rise group relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="hairline relative overflow-hidden rounded-4xl bg-fg/5">
              <Image
                src={unsplash(photos.support, 900, 760)}
                alt=""
                width={450}
                height={380}
                priority
                className="aspect-6/5 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/25 to-transparent"
              />
            </div>

            <div className="surface absolute -bottom-5 left-4 right-4 rounded-2xl px-5 py-4 backdrop-blur-md sm:left-6 sm:right-auto">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {heroFaces.slice(0, 3).map((face) => (
                    <Image
                      key={face.id}
                      src={unsplash(face.id, 96, 96, "faces")}
                      alt=""
                      width={34}
                      height={34}
                      className="size-8.5 rounded-full border-2 border-canvas object-cover"
                    />
                  ))}
                </div>
                <span className="text-sm leading-tight">
                  <span className="block font-semibold text-fg">
                    Answered by people
                  </span>
                  <span className="text-fg/50">No ticket-bot in between</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section>
        <SectionHeading
          title={
            <>
              The six things people ask <Accent>most</Accent>
            </>
          }
          subtitle="Quick answers for the situations that come up again and again."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="surface flex flex-col gap-4 rounded-3xl p-7"
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

        <p className="mt-10 text-center text-sm text-fg/45">
          Looking for pricing detail?{" "}
          <Link
            href="/pricing"
            className="font-semibold text-accent underline decoration-brand-400/40 underline-offset-4 hover:decoration-brand-400"
          >
            Plans &amp; credits
          </Link>{" "}
          has the full breakdown.
        </p>
      </Section>

      <Section id="contact" className="pt-0! sm:pt-0!">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <div className="group hairline relative overflow-hidden rounded-3xl bg-fg/5">
              <Image
                src={unsplash(photos.contact, 900, 620)}
                alt=""
                width={450}
                height={310}
                className="aspect-16/10 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/30 to-transparent"
              />
              <p className="absolute inset-x-0 bottom-0 p-6 font-display text-lg font-bold leading-snug text-white sm:text-xl">
                One inbox, read every morning.
              </p>
            </div>

            <h2 className="mt-2 text-balance text-3xl font-extrabold leading-[1.1] text-fg sm:text-4xl">
              Tell us what went wrong
            </h2>
            <p className="text-pretty text-base leading-relaxed text-fg/60">
              The more specific, the faster we can fix it. Useful details: which
              screen you were on, what you tapped, what you expected, and the
              name of the campaign or brand involved.
            </p>
            <ul className="flex flex-col gap-3 border-t border-line pt-6 text-sm text-fg/60">
              <li className="flex items-start gap-2.5">
                <Danger
                  size={17}
                  color="currentColor"
                  variant="Bold"
                  className="mt-0.5 shrink-0 text-gold-ink"
                />
                Bugs get triaged first — mention your phone model if the app
                crashed.
              </li>
              <li className="flex items-start gap-2.5">
                <Wallet3
                  size={17}
                  color="currentColor"
                  variant="Bold"
                  className="mt-0.5 shrink-0 text-mint-ink"
                />
                For refunds and receipts, start in the App Store or Google Play
                — they hold the transaction.
              </li>
              <li className="flex items-start gap-2.5">
                <MessageQuestion
                  size={17}
                  color="currentColor"
                  variant="Bold"
                  className="mt-0.5 shrink-0 text-accent"
                />
                Feature requests are read and kept. Tell us the outcome you
                want, not the button.
              </li>
            </ul>
          </div>

          <SupportForm />
        </div>
      </Section>

      <FinalCta />
    </main>
  );
}
