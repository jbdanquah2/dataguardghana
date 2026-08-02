"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { Container } from "./Container";
import { navItems } from "@/data/content";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md transition-all duration-300">
      <Container className="flex h-[4.8rem] items-center justify-between gap-5">
        <Brand />
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, id]) => {
            const isActive = pathname === `/${id}`;
            return (
              <Link
                key={id}
                href={`/${id}`}
                className={`relative py-2 text-sm font-semibold transition-colors duration-200 hover:text-[#0f766e] group ${
                  isActive ? "text-[#0f766e]" : "text-slate-600"
                }`}
              >
                <span>{label}</span>
                {/* Modern Sliding Bottom Underline indicator */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#0f766e] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
        
        {/* Call to Action */}
        <div className="hidden sm:flex items-center">
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary text-sm flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-200"
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg text-[#0b1f33] border border-slate-200 hover:bg-slate-50 cursor-pointer lg:hidden transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* Mobile Drawer Navigation (Slide down glass panel) */}
      {open && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-slate-200 bg-white/95 backdrop-blur-lg p-5 shadow-xl lg:hidden animate-in fade-in slide-in-from-top-4 duration-250"
          aria-label="Mobile navigation"
        >
          <div className="container-page grid gap-2">
            {navItems.map(([label, id]) => {
              const isActive = pathname === `/${id}`;
              return (
                <Link
                  key={id}
                  href={`/${id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center rounded-xl px-4 py-3.5 font-bold hover:bg-slate-50 hover:text-[#0f766e] transition-all ${
                    isActive ? "text-[#0f766e] bg-[#f0fdfa]" : "text-slate-700"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-3 w-full flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
