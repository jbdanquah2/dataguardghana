"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { useState } from "react";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  const [failed, setFailed] = useState(false);
  return (
    <Link href="/#top" className="inline-flex items-center gap-3" aria-label="DataGuard Ghana home">
      {!failed && <span className={inverse ? "inline-flex rounded-sm bg-white px-2 py-1" : "inline-flex"}><Image src="/dataguard-ghana-logo.png" width={220} height={87} alt="DataGuard Ghana" className="h-12 w-auto object-contain" onError={() => setFailed(true)} priority /></span>}
      {failed && <>
        <span className={`grid size-10 place-items-center rounded-lg ${inverse ? "bg-white/10 text-[#e4bd51]" : "bg-[#0f766e] text-white"}`}><ShieldCheck size={23} aria-hidden="true" /></span>
        <span className="leading-none">
          <strong className={`block font-[var(--font-manrope)] text-[1rem] ${inverse ? "text-white" : "text-[#0b1f33]"}`}>DataGuard Ghana</strong>
          <small className={`mt-1 block text-[.58rem] font-semibold tracking-[.06em] ${inverse ? "text-slate-400" : "text-slate-500"}`}>EDUCATE. ASSESS. IMPLEMENT. SUPPORT.</small>
        </span>
      </>}
    </Link>
  );
}
