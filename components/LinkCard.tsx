"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export default function LinkCard({ title, description, href, icon }: Props) {
  const [errored, setErrored] = useState(false);

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
