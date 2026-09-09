import Image from "next/image";
import { Flash, Star1 } from "iconsax-reactjs";
import { StoreButtons } from "@/components/brand/store-buttons";
import { Accent } from "@/components/ui/section";
import { heroFaces, unsplash } from "@/lib/social-proof";
import { screens } from "@/lib/site";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-56 left-1/2 h-[40rem] w-[76rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[140px]" />
        <div className="absolute -right-40 top-28 size-[26rem] rounded-full bg-brand-500/20 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 size-[22rem] rounded-full bg-gold-500/10 blur-[130px]" />
        <div className="blueprint absolute inset-0" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 pb-24 pt-12 sm:px-8 sm:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-16">
        <div className="flex flex-col items-start gap-7">
          <h1 className="text-balance text-[2.75rem] font-extrabold leading-[1.02] text-fg sm:text-6xl xl:text-[4.25rem]">
            One idea in.
            <br />
            A whole <Accent>campaign</Accent> out.
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-fg/65">
            ShotScript writes the strategy, hooks, captions, scripts and CTAs —
            then generates the images and video to go with them. Trained on your
            brand once, so everything sounds like you. All from your phone.
          </p>

          <StoreButtons className="pt-1" />

          {/* <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {heroFaces.map((face) => (
                  <Image
                    key={face.id}
                    src={unsplash(face.id, 96, 96)}
                    alt={face.alt}
                    width={38}
                    height={38}
                    className="size-9.5 rounded-full border-2 border-canvas object-cover"
                  />
                ))}
              </div>
              <div className="text-sm leading-tight">
                <div className="flex items-center gap-1 text-gold-ink">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star1
                      key={i}
                      size={13}
                      color="currentColor"
                      variant="Bold"
                    />
                  ))}
                  <span className="ml-1 font-semibold text-fg">4.9</span>
                </div>
                <span className="text-fg/50">from 1,200+ reviews</span>
              </div>
            </div>
            <p className="text-sm text-fg/45">
              Free plan forever · No credit card
            </p>
          </div> */}
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 size-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/30 blur-[100px]"
          />

          <Image
            src={screens.home}
            alt="The ShotScript home screen on a phone, showing the New Campaign button, Brand Brain progress and campaign stats"
            // sizes="(min-width: 1024px) 26rem, (min-width: 640px) 24rem, 88vw"
            priority
            placeholder="blur"
            // className="relative mx-auto h-auto w-full max-w-[22rem] drop-shadow-[0_40px_80px_rgba(0,0,0,0.65)] light:drop-shadow-[0_40px_80px_rgba(21,17,31,0.2)] lg:animate-float"
            className="relative mx-auto h-auto w-full max-w-[42rem] drop-shadow-[0_40px_80px_rgba(0,0,0,0.65)] light:drop-shadow-[0_40px_80px_rgba(21,17,31,0.2)] lg:animate-float"
          />

          <div className="surface absolute -left-2 top-24 hidden rounded-2xl px-4 py-3 backdrop-blur-md sm:block lg:-left-10">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl bg-gold-400/15 text-gold-ink">
                <Flash size={18} color="currentColor" variant="Bold" />
              </span>
              <span className="text-sm leading-tight">
                <span className="block font-semibold text-fg">
                  Campaign built
                </span>
                <span className="text-fg/50">in 38 seconds</span>
              </span>
            </div>
          </div>

          <div className="surface absolute -right-2 bottom-24 hidden rounded-2xl px-4 py-3 backdrop-blur-md sm:block lg:-right-8">
            <span className="text-sm leading-tight">
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-fg/45">
                Brand Brain
              </span>
              <span className="font-display text-lg font-bold text-fg">
                47% trained
              </span>
            </span>
            <span
              aria-hidden
              className="mt-2 block h-1.5 w-32 overflow-hidden rounded-full bg-fg/10"
            >
              <span className="block h-full w-[47%] rounded-full bg-gold-500" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
