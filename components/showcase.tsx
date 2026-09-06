import Image from "next/image";
import { Accent, Section, SectionHeading } from "@/components/ui/section";
import { screens } from "@/lib/site";

const shots = [
  {
    image: screens.onboarding,
    label: "Onboarding",
    caption:
      "Tell us about your brand. Two fields now, better output for every campaign after.",
    alt: "ShotScript onboarding screen asking for a brand name and ideal customers",
  },
  {
    image: screens.campaign,
    label: "New Campaign",
    caption:
      "Choose a goal, describe what you're promoting, pick the platform. Then build.",
    alt: "ShotScript new campaign screen with campaign goals and platform options",
  },
  {
    image: screens.brandBrain,
    label: "Brand Brain",
    caption:
      "Identity, audience and tone in one place, with a completion score to chase.",
    alt: "ShotScript Brand Brain screen showing brand identity fields and industry chips",
  },
];

export function Showcase() {
  return (
    <Section id="screens">
      <SectionHeading
        eyebrow="Inside the app"
        title={
          <>
            A studio that fits in <Accent>one hand</Accent>
          </>
        }
        subtitle="Everything happens on the phone — no laptop, no dashboard, no browser tabs full of half-written captions."
      />

      <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-10">
        {shots.map((shot, i) => (
          <figure
            key={shot.label}
            className={`flex flex-col items-center gap-6 ${
              i === 1 ? "sm:-mt-8" : ""
            }`}
          >
            <div className="relative w-full max-w-[15rem] sm:max-w-none">
              <div
                aria-hidden
                className="absolute inset-x-4 bottom-6 top-16 rounded-[3rem] bg-brand-500/25 blur-3xl"
              />
              <Image
                src={shot.image}
                alt={shot.alt}
                sizes="(min-width: 1024px) 17rem, (min-width: 640px) 30vw, 60vw"
                placeholder="blur"
                className="relative h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] light:drop-shadow-[0_26px_50px_rgba(21,17,31,0.18)]"
              />
            </div>

            <figcaption className="flex max-w-xs flex-col items-center gap-2 text-center">
              <span className="rounded-full border border-line bg-fg/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
                {shot.label}
              </span>
              <p className="text-pretty text-sm leading-relaxed text-fg/55">
                {shot.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
