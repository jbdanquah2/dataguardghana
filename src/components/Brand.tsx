"use client";

import Link from "next/link";
import Image from "next/image";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center focus:outline-none group" aria-label="DataGuard home">
      {/* Real High-Resolution Official PNG Logo in both Header & Footer */}
      <div className={`relative transition-all duration-300 group-hover:scale-[1.02] ${
        inverse ? "bg-white p-2 px-3 rounded-xl shadow-md border border-white/10" : ""
      }`}>
        <Image
          src="/dataguard-ghana-logo.png"
          alt="DataGuard Ghana Logo"
          width={185}
          height={58}
          priority
          className="h-[3.2rem] w-auto object-contain"
        />
      </div>
    </Link>
  );
}
