import { Accent, Section, SectionHeading } from "@/components/ui/section";
import { features } from "@/lib/features";

export function Features() {
  return (
    <Section id="features">
      <SectionHeading
        title={
          <>
            What <Accent>ShotScript</Accent> creates for you
          </>
        }
        subtitle="Six studio-grade tools stitched into one workflow — built for founders, creators and lean agencies who don't have a marketing department."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, tagline, title, description }) => (
          <article
            key={title}
            className="surface group relative flex flex-col gap-4 overflow-hidden rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-400/30"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand-500/0 blur-3xl transition-colors duration-500 group-hover:bg-brand-500/25"
            />

            <span className="relative grid size-12 place-items-center rounded-2xl bg-linear-to-b from-brand-400/25 to-brand-600/15 text-accent ring-1 ring-inset ring-fg/10">
              <Icon size={24} color="currentColor" variant="Bulk" />
            </span>

            <div className="relative flex flex-col gap-2">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-ink/85">
                {tagline}
              </p>
              <h3 className="font-display text-xl font-bold text-fg">
                {title}
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-fg/60">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
