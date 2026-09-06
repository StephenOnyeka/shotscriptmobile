import { Coin1, Gallery, VideoPlay } from "iconsax-reactjs";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  CREDITS_PER_IMAGE,
  CREDITS_PER_VIDEO,
  creditPacks,
} from "@/lib/pricing";

export function CreditPacks() {
  return (
    <Section id="credits" className="pt-0! sm:pt-0!">
      <SectionHeading
        title="Buy credit packs anytime"
        subtitle="One-time purchases. Credits never expire, and they only get spent on AI images and videos — the writing stays unlimited."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {creditPacks.map((pack) => (
          <article
            key={pack.credits}
            className="surface relative flex flex-col gap-5 rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-400/30"
          >
            {pack.badge && (
              <span className="absolute right-6 top-6 rounded-full border border-gold-400/35 bg-gold-400/10 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-gold-ink">
                {pack.badge}
              </span>
            )}

            <span className="grid size-11 place-items-center rounded-2xl bg-gold-400/12 text-gold-ink">
              <Coin1 size={22} color="currentColor" variant="Bulk" />
            </span>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-extrabold text-fg">
                  {pack.credits.toLocaleString("en-US")}
                </span>
                <span className="text-sm font-medium uppercase tracking-[0.16em] text-fg/40">
                  credits
                </span>
              </div>
              <p className="mt-1 font-display text-lg font-bold text-accent">
                ${pack.price}
              </p>
            </div>

            <ul className="flex flex-col gap-2 border-t border-line pt-5 text-sm text-fg/60">
              <li className="flex items-center gap-2.5">
                <Gallery
                  size={16}
                  color="currentColor"
                  className="shrink-0 text-accent"
                />
                ~{Math.floor(pack.credits / CREDITS_PER_IMAGE)} AI images
              </li>
              <li className="flex items-center gap-2.5">
                <VideoPlay
                  size={16}
                  color="currentColor"
                  className="shrink-0 text-accent"
                />
                or ~{Math.floor(pack.credits / CREDITS_PER_VIDEO)} AI videos
              </li>
            </ul>

            <a
              href="#get"
              className="hairline mt-1 rounded-2xl bg-fg/6 px-5 py-3 text-center text-sm font-semibold text-fg transition hover:bg-fg/12"
            >
              Buy pack
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
