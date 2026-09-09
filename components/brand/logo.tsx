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
    // size === "lg" ? "text-3xl" : size === "md" ? "text-[1.35rem]" : "text-lg";
    size === "lg" ? "text-4xl" : size === "md" ? "text-[1.50rem]" : "text-2xl";

  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src={screens.badge}
        alt=""
        width={badge}
        height={badge}
        // className="dark:hidden"
        priority
      />
      {/* <Image
        src={screens.badgeDark}
        alt=""
        width={badge}
        height={badge}
        className="light:hidden"
        priority
      /> */}
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold tracking-[-0.03em] text-fg ${word}`}
        >
          ShotScript
        </span>
        {/* {kicker && (
          <span className="mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.42em] text-accent/55">
            Studio Pro
          </span>
        )} */}
      </span>
    </span>
  );
}
