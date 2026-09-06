import { TickCircle } from "iconsax-reactjs";
import { Accent, Section, SectionHeading } from "@/components/ui/section";
import { steps } from "@/lib/features";

export function HowItWorks() {
  return (
    <Section id="how">
      <SectionHeading
        title={
          <>
            Three taps from blank page to <Accent>ready to post</Accent>
          </>
        }
        subtitle="No prompt engineering, no templates to fill in. Answer what the app asks and it does the rest."
      />

      <div className="relative mt-16">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-9 hidden h-px bg-linear-to-r from-transparent via-brand-400/35 to-transparent lg:block"
        />

        <ol className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {steps.map((step) => (
            <li
              key={step.number}
              className="surface relative flex flex-col gap-4 rounded-3xl p-7"
            >
              <div className="flex items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-linear-to-b from-brand-500 to-brand-700 font-accent text-2xl italic text-white shadow-[0_14px_30px_-14px_rgba(123,58,236,0.9)]">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-bold leading-tight text-fg">
                  {step.title}
                </h3>
              </div>

              <p className="text-pretty text-sm leading-relaxed text-fg/60">
                {step.description}
              </p>

              <ul className="mt-1 flex flex-col gap-2 border-t border-line pt-4">
                {step.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2.5 text-sm text-fg/70"
                  >
                    <TickCircle
                      size={17}
                      color="currentColor"
                      variant="Bold"
                      className="shrink-0 text-mint-ink"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
