"use client";

import { useState } from "react";
import { Crown1, TickCircle } from "iconsax-reactjs";
import { Accent, Section, SectionHeading } from "@/components/ui/section";
import { plans } from "@/lib/pricing";

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <Section id="pricing">
      <SectionHeading
        title={
          <>
            Start free. Upgrade when it <Accent>pays for itself</Accent>
          </>
        }
        subtitle="No contracts and no surprises. Cancel from your phone whenever you like."
      />

      <div className="mt-10 flex justify-center">
        <div
          role="group"
          aria-label="Billing period"
          className="hairline inline-flex items-center gap-1 rounded-full bg-fg/4 p-1"
        >
          {[
            { label: "Monthly", value: false },
            { label: "Yearly", value: true },
          ].map((option) => (
            <button
              key={option.label}
              type="button"
              aria-pressed={yearly === option.value}
              onClick={() => setYearly(option.value)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                yearly === option.value
                  ? "bg-fg text-canvas"
                  : "text-fg/60 hover:text-fg"
              }`}
            >
              {option.label}
              {option.value && (
                <span
                  className={`ml-2 text-[0.65rem] font-bold uppercase tracking-wider ${
                    yearly ? "text-brand-600" : "text-gold-ink"
                  }`}
                >
                  −20%
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
        {plans.map((plan) => {
          const price = yearly ? plan.yearly : plan.monthly;

          return (
            <article
              key={plan.name}
              className={`relative flex flex-col gap-6 rounded-3xl p-7 ${
                plan.highlight
                  ? "border border-brand-400/45 bg-linear-to-b from-brand-600/25 to-canvas shadow-[0_30px_70px_-40px_rgba(123,58,236,0.9)] lg:-mt-4 lg:pb-9"
                  : "surface"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-gold-400 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink-950">
                  <Crown1 size={13} color="currentColor" variant="Bold" />
                  {plan.badge}
                </span>
              )}

              <div className="flex flex-col gap-2">
                <h3 className="font-display text-2xl font-bold text-fg">
                  {plan.name}
                </h3>
                <p className="text-sm leading-relaxed text-fg/55">
                  {plan.blurb}
                </p>
              </div>

              <div className="flex items-end gap-2">
                <span className="font-display text-5xl font-extrabold text-fg">
                  {price === 0 ? "Free" : `$${price}`}
                </span>
                {price !== 0 && (
                  <span className="pb-2 text-sm text-fg/50">
                    /mo{yearly ? ", billed yearly" : ""}
                  </span>
                )}
              </div>

              <a
                href="#get"
                className={`rounded-2xl px-5 py-3.5 text-center text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-linear-to-b from-brand-400 to-brand-600 text-white hover:from-brand-300 hover:to-brand-500"
                    : "hairline bg-fg/6 text-fg hover:bg-fg/12"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="flex flex-col gap-3 border-t border-line pt-6">
                {plan.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-fg/70"
                  >
                    <TickCircle
                      size={17}
                      color="currentColor"
                      variant="Bold"
                      className="mt-0.5 shrink-0 text-mint-ink"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
