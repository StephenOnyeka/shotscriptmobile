"use client";

import { Moon, Sun1 } from "iconsax-reactjs";
import { THEME_KEY } from "@/lib/theme";

/**
 * Flips the `light`/`dark` class on <html>. Which icon shows is decided by CSS
 * variants rather than React state, so the button renders identically on the
 * server and works before hydration — no flash, no mismatch.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        const root = document.documentElement;
        const next = root.classList.contains("light") ? "dark" : "light";
        root.classList.remove("light", "dark");
        root.classList.add(next);
        try {
          localStorage.setItem(THEME_KEY, next);
        } catch {
          /* private mode — the choice just won't persist */
        }
      }}
      className={`hairline grid size-9.5 place-items-center rounded-full bg-fg/4 text-fg/70 transition hover:bg-fg/10 hover:text-fg ${className}`}
    >
      <Sun1 size={17} color="currentColor" variant="Bold" className="light:hidden" />
      <Moon size={17} color="currentColor" variant="Bold" className="dark:hidden" />
      <span className="sr-only">
        <span className="light:hidden">Switch to light theme</span>
        <span className="dark:hidden">Switch to dark theme</span>
      </span>
    </button>
  );
}
