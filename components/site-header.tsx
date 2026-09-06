"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CloseSquare, Menu } from "iconsax-reactjs";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-canvas/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" aria-label="ShotScript home" className="shrink-0">
          <Logo size="sm" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-fg/65 transition-colors hover:bg-fg/6 hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#get"
            className="hidden rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-canvas transition hover:bg-fg/85 sm:inline-flex"
          >
            Get the app
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="surface inline-flex size-10 items-center justify-center rounded-xl text-fg lg:hidden"
          >
            {open ? (
              <CloseSquare size={20} color="currentColor" variant="Bold" />
            ) : (
              <Menu size={20} color="currentColor" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-canvas-2/95 backdrop-blur-xl lg:hidden"
      >
        <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-fg/75 transition-colors hover:bg-fg/6 hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#get"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-fg px-4 py-3 text-center text-base font-semibold text-canvas"
          >
            Get the app
          </Link>
        </nav>
      </div>
    </header>
  );
}
