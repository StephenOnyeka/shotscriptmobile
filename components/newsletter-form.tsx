"use client";

import { useState } from "react";
import { Send2, TickCircle } from "iconsax-reactjs";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p
        role="status"
        className="hairline flex items-center gap-2.5 rounded-2xl bg-mint-500/8 px-4 py-3.5 text-sm text-fg/75"
      >
        <TickCircle
          size={18}
          color="currentColor"
          variant="Bold"
          className="shrink-0 text-mint-ink"
        />
        You&apos;re on the list. Watch your inbox.
      </p>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className="flex flex-col gap-2.5 sm:flex-row"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@studio.com"
        className="hairline min-w-0 flex-1 rounded-2xl bg-fg/4 px-4 py-3 text-sm text-fg placeholder:text-fg/35 focus:border-brand-400/50 focus:bg-fg/6"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-b from-brand-400 to-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:from-brand-300 hover:to-brand-500"
      >
        Subscribe
        <Send2 size={16} color="currentColor" variant="Bold" />
      </button>
    </form>
  );
}
