"use client";

import {
  ArrowRight, Check, ChevronDown, Mail, MapPin,
  MessageCircle, Phone, ShieldCheck, Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { ReadinessQuiz } from "./ReadinessQuiz";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { industries, processSteps, serviceGroups, verifiedProof } from "@/data/content";

const whatsappUrl = createWhatsAppUrl();

export function Hero() {
  return (
    <section className="hero-section">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <p className="eyebrow flex items-center gap-2">
            <ShieldCheck size={15} />Data protection made practical
          </p>
          <h1 className="hero-title">Protect your organisation’s data—and the trust behind it.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Assessments, staff training and hands-on compliance support for organisations across Ghana.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
              Chat with us on WhatsApp <ArrowRight size={18} />
            </a>
            <Link href="/services" className="btn btn-secondary">
              Explore services
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-2">
              <Check size={16} className="text-[#0f766e]" />Plain-language guidance
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-[#0f766e]" />On-site & remote
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-[#0f766e]" />Confidential support
            </span>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50 aspect-[3/2]">
          <Image
            src="/images/consultation-hero.svg"
            alt="A practical data protection consultation in a modern Ghanaian office setting"
            fill
            priority
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

export function IndustriesChips() {
  return (
    <section className="bg-slate-50 py-10 border-y border-slate-200">
      <Container>
        <p className="text-center text-xs font-extrabold uppercase tracking-widest text-slate-500">
          Organisations We Support across Ghana
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {industries.map(({ title, icon: Icon, featured }) => (
            <div
              key={title}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold shadow-sm transition-all hover:scale-105 duration-200 ${
                featured
                  ? "bg-amber-50 text-amber-900 border border-amber-200/60"
                  : "bg-white text-slate-700 border border-slate-200"
              }`}
            >
              <Icon size={16} className={featured ? "text-[#d4a72c]" : "text-[#0f766e]"} />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ServicesSection({ preview = false }: { preview?: boolean }) {
  const [openDeliverable, setOpenDeliverable] = useState<string | null>(null);

  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeading
          label="Our Services"
          title={preview ? "Make data protection easier to act on" : "Support built around the outcome you need"}
          copy="Start with the challenge in front of you. We turn complex requirements into clear actions for your organisation."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {serviceGroups.map(({ title, kicker, description, icon: Icon, deliverables }) => (
            <article className="solution-card flex flex-col justify-between" key={title}>
              <div>
                <span className="solution-icon"><Icon size={24} /></span>
                <p className="mt-7 text-xs font-extrabold uppercase tracking-[.15em] text-[#0f766e]">{kicker}</p>
                <h3 className="mt-2 text-2xl font-bold text-[#0b1f33]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </div>

              {!preview && (
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Deliverables</p>
                  <div className="space-y-3">
                    {deliverables.map(({ title: delTitle, description: delDesc }) => {
                      const isOpen = openDeliverable === delTitle;
                      return (
                        <div key={delTitle} className="border-b border-slate-100 last:border-0 pb-2 last:pb-0">
                          <button
                            type="button"
                            onClick={() => setOpenDeliverable(isOpen ? null : delTitle)}
                            className="flex w-full items-center justify-between text-left text-sm font-bold text-[#0b1f33] hover:text-[#0f766e]"
                          >
                            <span>{delTitle}</span>
                            <ChevronDown size={16} className={`transform transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                          {isOpen && (
                            <p className="mt-2 text-xs leading-5 text-slate-600 transition-all">
                              {delDesc}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
        {preview && (
          <div className="mt-10 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-[#0f766e] hover:underline">
              See all service details and deliverables <ArrowRight size={17} />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}

export function ProcessSection({ compact = false }: { compact?: boolean }) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="section-pad bg-[#f6f9fb]">
      <Container>
        <SectionHeading
          label="Our process"
          title="A clear path from uncertainty to action"
          copy="No intimidating compliance exercise—just a structured process your team can follow."
        />
        <div className="process-grid mt-12">
          {processSteps.map(({ number, title, description, outcome, icon: Icon, deliverables }, index) => {
            const isExpanded = activeStep === index;
            return (
              <article
                key={title}
                className="process-card flex flex-col justify-between h-full cursor-pointer transition-all hover:border-[#0f766e] focus-within:ring-2 focus-within:ring-[#0f766e] relative overflow-hidden"
                onClick={() => setActiveStep(isExpanded ? null : index)}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-xl bg-[#0b1f33] text-white">
                      <Icon size={21} />
                    </span>
                    <span className="text-xs font-extrabold tracking-widest text-[#0f766e]">{number}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#0b1f33]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-xs font-bold text-[#0f766e]"
                  >
                    <span>{isExpanded ? "Hide deliverables" : "See deliverables"}</span>
                    <ChevronDown size={14} className={`transform transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                  
                  {isExpanded && (
                    <ul className="mt-3 space-y-2">
                      {deliverables.map((item) => (
                        <li key={item} className="flex gap-2 text-xs text-slate-600">
                          <Check size={12} className="mt-0.5 text-[#0f766e] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {!compact && (
                  <p className="mt-4 pt-4 border-t border-slate-100 text-xs font-bold leading-5 text-slate-500">
                    <span className="text-[#0b1f33] block mb-1 uppercase tracking-wider text-[10px]">Expected Outcome</span>
                    {outcome}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function VerifiedProofSection() {
  const hasTestimonials = verifiedProof.testimonials && verifiedProof.testimonials.length > 0;
  const hasStatistics = verifiedProof.statistics && verifiedProof.statistics.length > 0;

  if (!hasTestimonials && !hasStatistics) {
    return null; // Render absolutely nothing when verified proof data is absent
  }

  return (
    <section className="section-pad bg-white border-y border-slate-100">
      <Container>
        <SectionHeading
          label="Proven Results"
          title="Verified Trust & Impact"
          copy="Our client satisfaction and compliance track record, thoroughly verified and approved."
        />
        {/* Statistics Grid */}
        {hasStatistics && (
          <div className="grid gap-6 md:grid-cols-3 mt-10">
            {verifiedProof.statistics.map(({ value, label }) => (
              <div key={label} className="text-center p-6 border border-slate-100 rounded-xl bg-slate-50">
                <span className="text-4xl font-extrabold text-[#0f766e]">{value}</span>
                <p className="mt-2 text-sm text-slate-600 font-bold">{label}</p>
              </div>
            ))}
          </div>
        )}
        {/* Testimonials Grid */}
        {hasTestimonials && (
          <div className="grid gap-6 md:grid-cols-2 mt-10">
            {verifiedProof.testimonials.map(({ quote, author, role, organisation }) => (
              <blockquote key={author} className="p-6 border border-slate-100 rounded-xl bg-white shadow-sm">
                <p className="text-sm italic leading-7 text-slate-600">&quot;{quote}&quot;</p>
                <cite className="mt-4 block not-italic">
                  <strong className="text-sm font-bold text-[#0b1f33] block">{author}</strong>
                  <span className="text-xs text-slate-500">{role}, {organisation}</span>
                </cite>
              </blockquote>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export function IndustriesSection({ preview = false }: { preview?: boolean }) {
  const shown = preview ? industries.slice(0, 6) : industries;
  return (
    <section className="section-pad bg-[#0b1f33] text-white">
      <Container>
        <SectionHeading
          light
          label="Who we support"
          title="Built for organisations entrusted with people’s information"
          copy="Every sector handles different risks. Our guidance starts with how your organisation really works."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map(({ title, description, icon: Icon, featured }) => (
            <article className={`industry-card ${featured ? "industry-card-featured" : ""}`} key={title}>
              <Icon size={23} />
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          {preview && (
            <Link href="/industries" className="btn btn-light">
              Explore industries <ArrowRight size={18} />
            </Link>
          )}
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:underline">
            Not sure where you fit? Talk to us <ArrowRight size={17} />
          </a>
        </div>
      </Container>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section-pad bg-white">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-50 aspect-[3/2]">
          <Image
            src="/images/staff-training.svg"
            alt="DataGuard interactive staff training and data protection workshop"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading
            label="About DataGuard"
            title="Compliance should work in the real world"
            copy="We believe data protection is about more than ticking boxes. It is about building trust with customers, supporting your teams, and protecting the reputation of your organisation with practical, daily habits."
          />
          
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#0b1f33] flex items-center gap-2">
                <Sparkles size={18} className="text-[#0f766e]" /> Our Mission
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                To simplify data protection for Ghanaian organisations, transforming complex legal requirements into clear, practical guidelines that fit your everyday operations.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-[#0b1f33] flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#0f766e]" /> Our Approach
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We don&apos;t use intimidating jargon or sell one-size-fits-all templates. We assess your unique risks, educate your people, and help you implement routines that become second nature.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ReadinessChecklist() {
  return (
    <section className="section-pad bg-white">
      <Container className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <SectionHeading
            label="2-minute readiness check"
            title="Could important gaps be hiding in plain sight?"
            copy="Answer five quick questions to see which next step may suit your organisation."
          />
        </div>
        <ReadinessQuiz />
      </Container>
    </section>
  );
}

export function FinalWhatsAppCTA() {
  return (
    <section className="bg-[#0b1f33] py-16 text-white border-t border-slate-850">
      <Container className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Ready to make your organisation secure?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Skip the complex manuals. Start a direct, confidential conversation with us on WhatsApp today.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary bg-[#0f766e] hover:bg-[#0b615b] !text-white flex items-center gap-2 text-base px-6 py-3"
          >
            <MessageCircle size={20} />
            Chat with us on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section-pad bg-[#f5f8fa]">
      <Container className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionHeading
            label="Start a conversation"
            title="Tell us what your organisation needs"
            copy="No lengthy form. Start a private WhatsApp conversation and we’ll help you work out the right next step."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              <MessageCircle size={19} />Chat with us on WhatsApp
            </a>
            <a href="tel:+233245052539" className="btn btn-secondary">
              <Phone size={18} />Call us
            </a>
          </div>
        </div>
        <aside className="contact-panel">
          <p className="eyebrow !text-[#e4bd51]">Contact details</p>
          <div className="mt-7 grid gap-6">
            <a href="tel:+233245052539" className="contact-line">
              <Phone />
              <span>
                <small>Phone & WhatsApp</small>
                <strong>+233 24 505 2539</strong>
              </span>
            </a>
            <a href="mailto:enquiry@dataguardghana.com" className="contact-line">
              <Mail />
              <span>
                <small>Email</small>
                <strong>enquiry@dataguardghana.com</strong>
              </span>
            </a>
            <div className="contact-line">
              <MapPin />
              <span>
                <small>Delivery</small>
                <strong>On-site and remote support</strong>
              </span>
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
}
