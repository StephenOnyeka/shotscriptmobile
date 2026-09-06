"use client";

import { useState } from "react";
import { Add, Minus } from "iconsax-reactjs";
import { Accent, Section, SectionHeading } from "@/components/ui/section";
import { faqs } from "@/lib/social-proof";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading
          align="left"
          title={
            <>
              Common <Accent>questions</Accent>
            </>
          }
          subtitle="Everything worth knowing before you download it. Still curious? Ask the in-app chat — it answers."
          className="lg:sticky lg:top-28"
        />

        <ul className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;

            return (
              <li
                key={faq.q}
                className={`surface overflow-hidden rounded-2xl transition-colors ${
                  isOpen ? "border-brand-400/30" : ""
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-bold text-fg sm:text-lg">
                      {faq.q}
                    </span>
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-brand-500 text-white"
                          : "bg-fg/8 text-fg/60"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={16} color="currentColor" />
                      ) : (
                        <Add size={16} color="currentColor" />
                      )}
                    </span>
                  </button>
                </h3>

                <div id={panelId} hidden={!isOpen}>
                  <p className="text-pretty px-6 pb-6 text-sm leading-relaxed text-fg/60 sm:text-base">
                    {faq.a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
