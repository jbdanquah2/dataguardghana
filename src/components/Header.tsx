"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { Container } from "./Container";
import { navItems } from "@/data/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const sections = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-20% 0px -65%", threshold: [0, .2, .6] });
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container className="flex h-[4.6rem] items-center justify-between gap-5">
        <Brand />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, id]) => <Link key={id} href={`/#${id}`} className={`text-sm font-semibold transition-colors hover:text-[#0f766e] ${active === id ? "text-[#0f766e]" : "text-slate-600"}`}>{label}</Link>)}
        </nav>
        <Link href="/#contact" className="btn btn-primary desktop-cta text-sm">Request an Assessment</Link>
        <button type="button" className="grid size-11 place-items-center rounded-md text-[#0b1f33] lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      </Container>
      {open && <nav id="mobile-menu" className="absolute inset-x-0 top-full border-b border-slate-200 bg-white p-4 shadow-xl lg:hidden" aria-label="Mobile navigation">
        <div className="container-page grid gap-1">{navItems.map(([label, id]) => <Link key={id} href={`/#${id}`} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0f766e]">{label}</Link>)}<Link href="/#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-2 sm:hidden">Request an Assessment</Link></div>
      </nav>}
    </header>
  );
}
