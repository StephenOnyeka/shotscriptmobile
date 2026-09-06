import { stats } from "@/lib/site";

/**
 * Stays dark in both themes — the violet→gold wash and the `text-shine`
 * numerals only read on a night background, so the band carries its own.
 */
export function Stats() {
  return (
    <div className="relative overflow-hidden border-y border-white/8 bg-ink-975">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-brand-900/40 via-brand-700/20 to-gold-600/10"
      />

      <dl className="relative mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-10 px-5 py-14 sm:px-8 lg:grid-cols-4 lg:divide-x lg:divide-white/8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-2 px-4 text-center"
          >
            <dt className="text-shine font-display text-4xl font-extrabold sm:text-5xl">
              {stat.value}
            </dt>
            <dd className="max-w-40 text-pretty text-sm leading-snug text-white/55">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
