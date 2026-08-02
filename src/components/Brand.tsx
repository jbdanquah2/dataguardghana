"use client";

import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3 focus:outline-none group" aria-label="DataGuard home">
      {/* Crisp 100% Vector SVG Logo Icon */}
      <div className="shrink-0">
        <svg
          width="42"
          height="42"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Main Shield Outer Contour */}
          <path
            d="M 50,5 C 68,15 88,15 95,28 C 95,55 80,82 50,95 C 20,82 5,55 5,28 C 12,15 32,15 50,5 Z"
            fill={inverse ? "#0e1e2f" : "#f0fdfa"}
            stroke={inverse ? "#2dd4bf" : "#0f766e"}
            strokeWidth="6"
            strokeLinejoin="round"
          />
          {/* Inner Accent Protective Shield */}
          <path
            d="M 50,18 C 62,25 76,25 80,34 C 80,53 70,72 50,81 C 30,72 20,53 20,34 C 24,25 38,25 50,18 Z"
            fill={inverse ? "#0f766e" : "#0b1f33"}
            stroke="#e4bd51"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          {/* Central Secure Data Node (Star & Diamond Grid) */}
          <circle cx="50" cy="50" r="10" fill="#e4bd51" />
          <path d="M 44,50 L 50,42 L 56,50 L 50,58 Z" fill={inverse ? "#0f766e" : "#ffffff"} />
          <line x1="50" y1="36" x2="50" y2="64" stroke="#ffffff" strokeWidth="2.5" opacity="0.3" />
          <line x1="36" y1="50" x2="64" y2="50" stroke="#ffffff" strokeWidth="2.5" opacity="0.3" />
        </svg>
      </div>

      {/* Structured Modern Typography */}
      <div className="leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`text-xl font-extrabold tracking-tight font-[var(--font-manrope)] ${inverse ? "text-white" : "text-[#0b1f33]"}`}>
            Data<span className="text-[#0f766e]">Guard</span>
          </span>
          <span className="text-[9px] font-bold tracking-widest text-[#e4bd51] bg-[#e4bd51]/10 px-1.5 py-0.5 rounded uppercase">
            GHANA
          </span>
        </div>
        <span className={`mt-1 block text-[7.5px] font-extrabold tracking-[0.15em] uppercase ${inverse ? "text-slate-400" : "text-slate-500"}`}>
          Assess • Educate • Implement
        </span>
      </div>
    </Link>
  );
}
