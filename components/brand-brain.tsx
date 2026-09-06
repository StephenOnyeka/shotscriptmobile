import Image from "next/image";
import { Cpu, Flash } from "iconsax-reactjs";
import { Accent, Eyebrow } from "@/components/ui/section";
import { screens } from "@/lib/site";

const goals = [
  "Sale / Promo",
  "Product Launch",
  "Brand Awareness",
  "Event",
  "Lead Generation",
  "Social Proof",
];

export function BrandBrain() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-canvas-2">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 size-[30rem] rounded-full bg-brand-600/20 blur-[130px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <Image
            src={screens.brandBrainAngled}
            alt="An angled phone showing the ShotScript Brand Brain screen: the completion ring at 47% and the Content Creator audience preset selected"
            sizes="(min-width: 1024px) 36rem, 94vw"
            placeholder="blur"
            className="h-auto w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)] light:drop-shadow-[0_36px_70px_rgba(21,17,31,0.18)]"
          />
        </div>

        <div className="order-1 flex flex-col items-start gap-7 lg:order-2">
          <Eyebrow tone="gold">The difference</Eyebrow>

          <h2 className="text-balance text-4xl font-extrabold leading-[1.05] text-fg sm:text-5xl">
            Quick Mode is fast.
            <br />
            <Accent>Brand Mode</Accent> is yours.
          </h2>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-fg/65 sm:text-lg">
            Any AI can write a caption. ShotScript keeps a Brand Brain — your
            name, tagline, industry, audience and tone of voice — and writes
            every campaign from it. Fill it in once and watch the completion ring
            climb. The higher it gets, the less your content sounds like a
            template.
          </p>

          <div className="grid w-full gap-3 sm:grid-cols-2">
            <div className="surface flex items-start gap-3 rounded-2xl p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-fg/8 text-gold-ink">
                <Flash size={20} color="currentColor" variant="Bold" />
              </span>
              <span className="leading-tight">
                <span className="block font-display font-bold text-fg">
                  Quick Mode
                </span>
                <span className="text-sm text-fg/55">
                  Fast, no setup needed
                </span>
              </span>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-brand-400/40 bg-linear-to-b from-brand-500/25 to-brand-700/15 p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-500 text-white">
                <Cpu size={20} color="currentColor" variant="Bold" />
              </span>
              <span className="leading-tight">
                <span className="block font-display font-bold text-fg">
                  Brand Mode
                </span>
                <span className="text-sm text-accent/75">
                  AI shaped by your brand
                </span>
              </span>
            </div>
          </div>

          <div className="w-full">
            <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-fg/40">
              Campaign goal
            </p>
            <ul className="flex flex-wrap gap-2">
              {goals.map((goal, i) => (
                <li
                  key={goal}
                  className={
                    i === 0
                      ? "rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
                      : "hairline rounded-full px-4 py-2 text-sm text-fg/60"
                  }
                >
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
