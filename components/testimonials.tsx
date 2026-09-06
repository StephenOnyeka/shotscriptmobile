"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";
import { testimonials, unsplash } from "@/lib/social-proof";

/**
 * One testimonial at a time: portrait left, quote right. Prev/next step through
 * the list and the slide animation follows the direction of travel — the
 * animated wrapper is keyed on the index so React remounts it and the
 * keyframes replay. `prefers-reduced-motion` flattens it in globals.css.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const total = testimonials.length;
  const active = testimonials[index];

  const go = (step: number) => {
    setForward(step > 0);
    setIndex((current) => (current + step + total) % total);
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="What people say about ShotScript"
      className="relative overflow-hidden border-y border-line bg-canvas-3"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 size-[30rem] rounded-full bg-brand-500/12 blur-[130px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div
          key={index}
          className={`grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 ${
            forward ? "animate-slide-in-right" : "animate-slide-in-left"
          }`}
        >
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <Image
              src={unsplash(active.photoId, 880, 1100, "faces")}
              alt={active.name}
              width={440}
              height={550}
              priority={index === 0}
              className="hairline aspect-4/5 w-full rounded-3xl bg-fg/5 object-cover"
            />
          </div>

          <figure className="flex flex-col gap-7">
            <span
              aria-hidden
              className="font-accent text-6xl leading-none text-accent"
            >
              &ldquo;
            </span>

            <blockquote className="text-balance font-display text-3xl font-extrabold leading-[1.15] tracking-[-0.02em] text-fg sm:text-4xl lg:text-[2.75rem]">
              {active.quote}
            </blockquote>

            <figcaption className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-line pt-6 text-sm">
              <span className="font-semibold text-fg">{active.name}</span>
              <span className="text-fg/50">{active.role}</span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 flex items-center justify-between gap-6 lg:mt-12">
          <div className="flex items-center gap-2.5" aria-hidden>
            {testimonials.map((t, i) => (
              <span
                key={t.name}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-accent" : "w-1.5 bg-fg/20"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <p aria-live="polite" className="sr-only">
              Testimonial {index + 1} of {total}: {active.name}
            </p>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="hairline grid size-11 place-items-center rounded-full bg-fg/4 text-fg/70 transition hover:bg-fg/10 hover:text-fg active:scale-95"
            >
              <ArrowLeft2 size={18} color="currentColor" variant="Bold" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="hairline grid size-11 place-items-center rounded-full bg-fg/4 text-fg/70 transition hover:bg-fg/10 hover:text-fg active:scale-95"
            >
              <ArrowRight2 size={18} color="currentColor" variant="Bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
