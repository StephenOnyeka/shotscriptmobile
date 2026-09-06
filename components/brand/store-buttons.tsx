import type { ComponentProps } from "react";

function AppleGlyph(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function PlayGlyph(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l10.155-10.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-1.017-.181l11.111 10.975zm0 2.067l-11 10.933c.325.076.665.02.94-.153l13.32-7.558-3.26-3.222z" />
    </svg>
  );
}

const shell =
  "group inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition duration-200 focus-visible:outline-offset-4";

/**
 * Store listings. Until the app is published these point at the download
 * section, so swapping in the real URLs here updates every badge on the page.
 */
export const PLAY_STORE_URL = "/#get";
export const APP_STORE_URL = "/#get";

/** Play Store badge — the primary call to action across the page. */
export function PlayStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={PLAY_STORE_URL}
      className={`${shell} bg-linear-to-b from-brand-400 to-brand-600 text-white shadow-[0_18px_40px_-18px_rgba(123,58,236,0.95)] hover:from-brand-300 hover:to-brand-500 hover:shadow-[0_22px_50px_-18px_rgba(123,58,236,1)] ${className}`}
    >
      <PlayGlyph className="size-6 shrink-0" />
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/75">
          Get it on
        </span>
        <span className="font-display text-base font-bold">Google Play</span>
      </span>
    </a>
  );
}

/** App Store badge — the quieter of the two store links. */
export function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`${shell} surface rounded-2xl text-fg backdrop-blur hover:border-fg/20 hover:bg-fg/10 ${className}`}
    >
      <AppleGlyph className="size-6 shrink-0" />
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-fg/55">
          Download on the
        </span>
        <span className="font-display text-base font-bold">App Store</span>
      </span>
    </a>
  );
}

export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <PlayStoreButton />
      <AppStoreButton />
    </div>
  );
}
