"use client";

import { useState } from "react";
import { Send2 } from "iconsax-reactjs";
import { SUPPORT_EMAIL } from "@/lib/support";

const topics = [
  "Getting started",
  "Billing & plans",
  "Credits",
  "Brand Brain",
  "Something is broken",
  "Feature request",
];

const field =
  "hairline w-full rounded-2xl bg-fg/4 px-4 py-3 text-sm text-fg placeholder:text-fg/35 focus:border-brand-400/50 focus:bg-fg/6";
const label =
  "text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg/45";

/**
 * There is no backend behind the site yet, so instead of pretending to submit,
 * the form composes a pre-filled email in the visitor's own mail client. It
 * works offline, keeps their copy of the message, and needs no API key.
 */
export function SupportForm() {
  const [topic, setTopic] = useState(topics[0]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const body = `${message}\n\n—\nReply to: ${email}`;
        window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
          `[${topic}] ShotScript support`,
        )}&body=${encodeURIComponent(body)}`;
      }}
      className="surface flex flex-col gap-5 rounded-3xl p-6 sm:p-8"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="support-topic" className={label}>
          What&apos;s it about?
        </label>
        <select
          id="support-topic"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          className={field}
        >
          {topics.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="support-email" className={label}>
          Your email
        </label>
        <input
          id="support-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@studio.com"
          className={field}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="support-message" className={label}>
          Details
        </label>
        <textarea
          id="support-message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell us what happened, and what you expected instead. Screenshots help."
          className={`${field} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-b from-brand-400 to-brand-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:from-brand-300 hover:to-brand-500"
      >
        Open in my email app
        <Send2 size={16} color="currentColor" variant="Bold" />
      </button>

      <p className="text-xs leading-relaxed text-fg/40">
        This opens your own mail app with the message ready to send, so you keep
        a copy. Prefer to write it yourself? Email{" "}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="font-semibold text-accent underline underline-offset-4"
        >
          {SUPPORT_EMAIL}
        </a>
        .
      </p>
    </form>
  );
}
