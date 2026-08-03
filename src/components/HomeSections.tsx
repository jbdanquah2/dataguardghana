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
            <ShieldCheck size={15} />Data protection support for Ghanaian organisations
          </p>
          <h1 className="hero-title">Put better data-protection habits into daily work.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            We review how you handle personal data, train the people responsible for it, and help turn gaps into workable routines.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
              Chat with us on WhatsApp <ArrowRight size={18} />
            </a>
            <Link href="/services" className="btn btn-secondary">
              Explore services
            </Link>
          </div>
          <div className="hero-facts mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-2">
              <Check size={16} className="text-[#0f766e]" />Plain-language advice
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-[#0f766e]" />On-site or remote delivery
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-[#0f766e]" />Confidential from first contact
            </span>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50 aspect-[3/2]">
          <Image
            src="/images/consultation-hero.svg"
            alt="A data-protection professional reviewing a practical privacy action plan"
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
          title={preview ? "Start with the work that matters most" : "Practical support for the work in front of you"}
          copy="Choose the point where you need help. We will focus on your records, your people, or the routines that need to change."
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

export function ServicesPageContent() {
  return (
    <>
      <section className="page-intro section-pad bg-[#fbfcfc]">
        <Container>
          <p className="eyebrow">Services</p>
          <h1 className="page-title">Support that starts with how your organisation actually works.</h1>
          <p className="page-intro-copy">
            Whether you need to understand your records, prepare staff, or put essential procedures in place, we help you deal with the work in front of you.
          </p>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <div className="service-detail-list">
            {serviceGroups.map(({ title, kicker, description, icon: Icon, deliverables }, index) => (
              <article className="service-detail" key={title}>
                <div className="service-detail-marker" aria-hidden="true">0{index + 1}</div>
                <div>
                  <div className="flex items-center gap-3">
                    <Icon size={21} className="text-[#0f766e]" strokeWidth={1.8} />
                    <p className="eyebrow">{kicker}</p>
                  </div>
                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0b1f33]">{title}</h2>
                  <p className="mt-4 max-w-xl text-[1.05rem] leading-8 text-slate-600">{description}</p>
                </div>
                <div className="service-deliverables">
                  <p className="service-detail-label">What you receive</p>
                  <ul className="mt-5 space-y-4">
                    {deliverables.map(({ title: deliverable, description: detail }) => (
                      <li key={deliverable}>
                        <p className="font-bold text-[#0b1f33]">{deliverable}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-[#f6f9fb]">
        <Container className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <SectionHeading
            label="A practical starting point"
            title="We work from your records, people, and processes—not a generic template."
          />
          <div className="border-l-2 border-[#0f766e] pl-6">
            <p className="text-lg leading-8 text-slate-700">
              Start by describing what needs attention. We will help you identify a sensible first step, whether that is a review, staff session, document update, or ongoing advice.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary mt-7">
              Start a confidential conversation <ArrowRight size={18} />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

export function ProcessSection() {
  return (
    <section className="section-pad bg-[#f6f9fb]">
      <Container>
        <SectionHeading
          label="How an engagement works"
          title="A measured route from review to routine"
          copy="We begin with what is happening now, agree the priorities, and leave your team with practical next steps."
        />
        <div className="process-grid process-grid-editorial mt-12">
          {processSteps.map(({ number, title, description, outcome, icon: Icon }) => (
            <article key={title} className="process-card">
              <div className="flex items-center gap-4">
                <span className="process-number">{number}</span>
                <Icon size={20} className="text-[#0f766e]" strokeWidth={1.8} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#0b1f33]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              <p className="process-outcome mt-5 text-sm leading-6 text-slate-700">
                <span>You leave with</span>{outcome}
              </p>
            </article>
          ))}
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
            title="See where a review may be useful"
            copy="Five quick questions to help you identify whether records, staff habits, or internal procedures need attention."
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
          Talk through the data-protection work in front of you.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Share the situation in confidence. We will help you identify a sensible first step.
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
