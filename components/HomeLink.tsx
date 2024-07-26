"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import React, { CSSProperties } from "react";
import Link from "./Link";

export default function HomeLink() {
  const pathname = usePathname();
  const isActive = pathname === "/";

  return (
    <Link
      href="/"
      className={clsx(
        "inline-block text-2xl font-black",
        isActive ? "" : "hover:scale-[1.02]"
      )}
    >
      <span
        style={
          {
            "--dynamic-color-1": isActive
              ? "var(--text)"
              : "var(--charcoal-grey)",
            "--dynamic-color-2": isActive
              ? "var(--text)"
              : "var(--charcoal-grey)",
            backgroundImage:
              "linear-gradient(45deg, var(--dynamic-color-1), var(--dynamic-color-2))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            transition:
              "--dynamic-color-1 0.2s ease-out, --dynamic-color-2 0.2s ease-in-out",
          } as CSSProperties
        }
      >
        NoMoreViolence
      </span>
    </Link>
  );
}
