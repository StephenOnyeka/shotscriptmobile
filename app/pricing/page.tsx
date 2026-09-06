import type { Metadata } from "next";
import { CreditPacks } from "@/components/credit-packs";
import { FinalCta } from "@/components/final-cta";
import { Pricing } from "@/components/pricing";
import { Accent } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Plans & credits",
  description:
    "ShotScript pricing — start free with 3 campaigns, upgrade for unlimited writing, and top up with credit packs that never expire.",
};

export default function PricingPage() {
  return (
    <main>
      {/* <div className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-48 left-1/2 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full bg-brand-600/22 blur-[140px]" />
          <div className="blueprint absolute inset-0" />
        </div>

        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-5 pb-4 pt-16 text-center sm:px-8 sm:pt-20">
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] text-fg sm:text-5xl">
            Pay for the <Accent>output</Accent>, not the seat
          </h1>
          <p className="text-pretty text-base leading-relaxed text-fg/60 sm:text-lg">
            Writing is unlimited on every paid plan. Credits only ever go
            towards AI images and video, so a quiet month costs you nothing
            extra.
          </p>
        </div>
      </div> */}

      <Pricing />
      <CreditPacks />
      <FinalCta />
    </main>
  );
}
