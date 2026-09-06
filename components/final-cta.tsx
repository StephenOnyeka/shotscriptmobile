import Image from "next/image";
import { ShieldTick, Timer1, Verify } from "iconsax-reactjs";
import { StoreButtons } from "@/components/brand/store-buttons";
import { Accent } from "@/components/ui/section";
import { screens } from "@/lib/site";

const assurances = [
  { icon: ShieldTick, label: "No credit card" },
  { icon: Timer1, label: "Set up in 2 minutes" },
  { icon: Verify, label: "Cancel anytime" },
];

export function FinalCta() {
  return (
    <section id="get" className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
      {/* Stays dark in both themes: an opaque base under the gradient so the
          translucent top stop composites over night, not over the canvas. */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-400/25 bg-ink-975 bg-linear-to-b from-brand-800/50 via-ink-950 to-ink-975 px-6 py-16 text-center sm:px-14 sm:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-brand-500/35 blur-[110px]" />
          <div className="absolute -bottom-24 right-10 size-64 rounded-full bg-gold-500/12 blur-[100px]" />
          <div className="blueprint-dark absolute inset-0" />
        </div>

        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-7">
          <Image
            src={screens.badge}
            alt=""
            width={64}
            height={64}
            className="rounded-[28%] shadow-[0_18px_40px_-14px_rgba(123,58,236,1)]"
          />

          <h2 className="text-balance text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
            Ready to build campaigns that <Accent>convert</Accent>?
          </h2>

          <p className="text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
            Start free with 3 campaigns. Upgrade when you&apos;re ready. Your
            first one is written before you finish reading this page.
          </p>

          <StoreButtons className="justify-center" />

          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 pt-2">
            {assurances.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm text-white/55"
              >
                <Icon
                  size={17}
                  color="currentColor"
                  variant="Bold"
                  className="text-mint-500"
                />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
