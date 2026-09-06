import { ArrowUp2, Facebook, Instagram, Sms, Youtube } from "iconsax-reactjs";
import { Logo } from "@/components/brand/logo";
import { NewsletterForm } from "@/components/newsletter-form";
import { footerColumns } from "@/lib/site";

const socials = [
  { icon: Instagram, label: "ShotScript on Instagram", href: "#" },
  { icon: Youtube, label: "ShotScript on YouTube", href: "#" },
  { icon: Facebook, label: "ShotScript on Facebook", href: "#" },
  { icon: Sms, label: "Email ShotScript support", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-auto border-t border-line bg-canvas">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-700/18 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.6fr_1fr] lg:gap-10">
          <div className="flex max-w-sm flex-col gap-5">
            <Logo size="md" />
            <p className="text-pretty text-sm leading-relaxed text-fg/55">
              Your AI campaign engine, in your pocket. Strategy, hooks,
              captions, scripts, images and video — trained on your brand, ready
              in a tap.
            </p>
            <ul className="flex items-center gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="hairline grid size-10 place-items-center rounded-xl bg-fg/4 text-fg/60 transition hover:bg-brand-500/20 hover:text-fg"
                  >
                    <Icon size={18} color="currentColor" variant="Bold" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3"
          >
            {footerColumns.map((column) => (
              <div key={column.heading} className="flex flex-col gap-4">
                <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-fg/40">
                  {column.heading}
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-fg/60 transition hover:text-fg"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-fg/40">
              Get product updates
            </h2>
            <NewsletterForm />
            <p className="text-xs text-fg/40">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-5 border-t border-line pt-7 sm:flex-row">
          <p className="text-xs text-fg/40">
            © {new Date().getFullYear()} ShotScript. Built for people who would
            rather create than caption.
          </p>
          <a
            href="#top"
            className="hairline inline-flex items-center gap-2 rounded-full bg-fg/4 px-4 py-2 text-xs font-semibold text-fg/65 transition hover:bg-fg/10 hover:text-fg"
          >
            <ArrowUp2 size={14} color="currentColor" variant="Bold" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
