"use client";

import Image from "next/image";
import { useState } from "react";
import type { Link } from "@/lib/links";

const ORANGE = "#E8692A";

export default function LinkCard({
  title,
  description,
  href,
  icon,
  featured = false,
  kicker,
}: Link) {
  const [errored, setErrored] = useState(false);

  if (featured) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-4 p-4 rounded-2xl border transition-colors"
        style={{
          borderColor: "rgba(232, 105, 42, 0.65)",
          background:
            "linear-gradient(135deg, rgba(232, 105, 42, 0.20) 0%, rgba(232, 105, 42, 0.06) 55%, rgba(255, 255, 255, 0.03) 100%)",
          boxShadow: "0 0 48px -12px rgba(232, 105, 42, 0.55)",
        }}
      >
        <div
          className="relative shrink-0 w-20 h-20 rounded-2xl overflow-hidden bg-neutral-800"
          style={{ boxShadow: `0 0 0 1px rgba(232, 105, 42, 0.35)` }}
        >
          {!errored && (
            <Image
              src={icon}
              alt=""
              width={160}
              height={160}
              className="w-full h-full object-cover"
              onError={() => setErrored(true)}
            />
          )}
        </div>
        <div className="min-w-0">
          {kicker && (
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: ORANGE }}
            >
              {kicker}
            </div>
          )}
          <div className="mt-1 text-[19px] font-bold text-white leading-tight">
            {title}
          </div>
          <div className="mt-1.5 text-[14px] text-neutral-300 leading-snug">
            {description}
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-3 rounded-2xl border border-transparent transition-colors hover:bg-white/5 hover:border-white/10"
    >
      <div className="relative shrink-0 w-16 h-16 rounded-2xl overflow-hidden bg-neutral-800">
        {!errored && (
          <Image
            src={icon}
            alt=""
            width={128}
            height={128}
            className="w-full h-full object-cover"
            onError={() => setErrored(true)}
          />
        )}
      </div>
      <div className="min-w-0">
        <div className="text-[16px] font-semibold text-neutral-100 leading-tight">
          {title}
        </div>
        <div className="mt-1 text-[14px] text-neutral-400 leading-snug">
          {description}
        </div>
      </div>
    </a>
  );
}
