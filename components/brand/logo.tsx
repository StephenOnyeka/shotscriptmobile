import Image from "next/image";
import { screens } from "@/lib/site";

/**
 * Brand lockup: the app badge plus the ShotScript / STUDIO PRO wordmark,
 * matching the header used inside the app.
 */
export function Logo({
  size = "md",
  kicker = true,
}: {
  size?: "sm" | "md" | "lg";
  kicker?: boolean;
}) {
  const badge = size === "lg" ? 44 : size === "md" ? 36 : 30;
  const word =
    size === "lg" ? "text-3xl" : size === "md" ? "text-[1.35rem]" : "text-lg";

  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src={screens.badge}
        alt=""
        width={badge}
        height={badge}
        className="rounded-[28%] shadow-[0_6px_20px_-6px_rgba(123,58,236,0.9)]"
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-[-0.03em] text-fg ${word}`}
        >
          ShotScript
        </span>
        {kicker && (
          <span className="mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.42em] text-accent/55">
            Studio Pro
          </span>
        )}
      </span>
    </span>
  );
}
