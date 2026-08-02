"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Shield } from "lucide-react";
import { Brand } from "./Brand";
import { Container } from "./Container";
import { navItems } from "@/data/content";

export function Footer() {
  return (
    <footer className="relative bg-[#06121e] text-slate-300 overflow-hidden">
      {/* Premium Top Multi-Gradient Accent Bar (Teal to Gold) */}
      <div className="h-[4px] w-full bg-gradient-to-r from-[#0f766e] via-[#2dd4bf] to-[#e4bd51]" />

      <Container className="py-16">
        <div className="grid gap-12 border-b border-slate-800 pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr]">
          
          {/* Column 1: Brand & compliance reference */}
          <div className="space-y-6">
            <Brand inverse />
            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Clear guidance and practical support that helps your organisation handle personal data with confidence, aligning with the Data Protection Act, 2012 (Act 843).
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-500/90 bg-amber-500/5 border border-amber-500/15 rounded-lg px-3.5 py-2.5 max-w-xs">
              <Shield size={16} className="shrink-0 text-[#e4bd51]" />
              <span>Supporting Act 843 Compliance</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">Sitemap</h2>
            <nav className="mt-6 flex flex-col gap-4 text-sm" aria-label="Footer navigation">
              {navItems.map(([label, id]) => (
                <Link
                  href={`/${id}`}
                  key={id}
                  className="group flex items-center gap-1 hover:text-[#2dd4bf] transition-all duration-200 hover:translate-x-1"
                >
                  <span>{label}</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#2dd4bf]" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Resources & Governance */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">Resources</h2>
            <nav className="mt-6 flex flex-col gap-4 text-sm" aria-label="Resources links">
              <Link
                href="/faqs"
                className="group flex items-center gap-1 hover:text-[#2dd4bf] transition-all duration-200 hover:translate-x-1"
              >
                <span>Frequently Asked FAQs</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#2dd4bf]" />
              </Link>
              <Link
                href="/privacy"
                className="group flex items-center gap-1 hover:text-[#2dd4bf] transition-all duration-200 hover:translate-x-1"
              >
                <span>Privacy Notice</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#2dd4bf]" />
              </Link>
              <span className="text-[11px] text-slate-500 leading-relaxed block pt-2 border-t border-slate-800/60">
                Data protection guidelines are updated regularly as local standards evolve.
              </span>
            </nav>
          </div>

          {/* Column 4: Detailed Contact Block */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">Contact Us</h2>
            <address className="mt-6 space-y-4 text-sm not-italic">
              <a
                href="tel:+233245052539"
                className="flex items-center gap-3 hover:text-[#2dd4bf] transition-colors group"
              >
                <span className="grid size-8 place-items-center rounded-lg bg-slate-800/60 text-[#2dd4bf] group-hover:bg-[#0f766e]/30 transition-colors">
                  <Phone size={14} />
                </span>
                <span className="font-semibold">+233 24 505 2539</span>
              </a>

              <a
                href="mailto:enquiry@dataguardghana.com"
                className="flex items-center gap-3 hover:text-[#2dd4bf] transition-colors group"
              >
                <span className="grid size-8 place-items-center rounded-lg bg-slate-800/60 text-[#2dd4bf] group-hover:bg-[#0f766e]/30 transition-colors">
                  <Mail size={14} />
                </span>
                <span className="font-semibold overflow-wrap-anywhere">enquiry@dataguardghana.com</span>
              </a>

              <div className="flex items-start gap-3 text-slate-400">
                <span className="grid size-8 place-items-center rounded-lg bg-slate-800/60 text-slate-500 shrink-0">
                  <MapPin size={14} />
                </span>
                <div className="text-xs leading-5">
                  <strong className="block text-slate-300 font-semibold">Service Delivery</strong>
                  <span>On-site & Remote Support across Ghana</span>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Lower Legal Disclaimer Block */}
        <div className="mt-10 grid gap-6 text-xs leading-6 text-slate-500 md:grid-cols-[auto_1fr] md:items-start md:gap-12">
          <p>© 2026 DataGuard. All rights reserved.</p>
          <p className="md:text-right text-[11px] text-slate-500/80 max-w-4xl ml-auto">
            DataGuard provides specialized data protection consulting and implementation support. Information on this website does not constitute formal legal advice and does not create an attorney-client or official consultant-client relationship. All data practices should be reviewed against current regulatory standards.
          </p>
        </div>
      </Container>
    </footer>
  );
}
