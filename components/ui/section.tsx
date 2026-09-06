import type { ReactNode } from "react";

/** Small pill above a section heading — matches the chips used in the app. */
export function Eyebrow({
  children,
  tone = "violet",
}: {
  children: ReactNode;
  tone?: "violet" | "gold";
}) {
  const tones = {
    violet: "border-brand-400/30 bg-brand-500/12 text-accent",
    gold: "border-gold-400/30 bg-gold-400/10 text-gold-ink",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/** Italic serif emphasis, the way the brand name is set in headings. */
export function Accent({ children }: { children: ReactNode }) {
  return (
    <em className="font-accent font-normal italic text-accent">{children}</em>
  );
}

export function SectionHeading({
  eyebrow,
  eyebrowTone,
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  eyebrowTone?: "violet" | "gold";
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const alignment =
    align === "center" ? "mx-auto items-center text-center" : "items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignment} ${className}`}>
      {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
      <h2 className="text-balance text-4xl font-extrabold leading-[1.06] text-fg sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-pretty text-base leading-relaxed text-fg/60 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Section wrapper with consistent vertical rhythm and gutters. */
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
