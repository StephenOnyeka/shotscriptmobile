import { platforms } from "@/lib/site";

/**
 * Seamless marquee: the list is rendered twice and shifted by -50%.
 *
 * Stays dark in both themes — it is one of the night bands that punctuate the
 * light page, so the background is opaque rather than a tint of the canvas.
 */
export function PlatformStrip() {
  const track = [...platforms, ...platforms];

  return (
    <div className="relative border-y border-white/8 bg-ink-950 py-7">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
          One campaign, rewritten for every platform
        </p>
      </div>

      <div className="fade-x overflow-hidden">
        <ul className="flex w-max animate-marquee items-center gap-12 pr-12">
          {track.map((name, i) => (
            <li
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-12"
            >
              <span className="font-display text-xl font-bold text-white/45 transition-colors hover:text-white/80 sm:text-2xl">
                {name}
              </span>
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-brand-400/50"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
