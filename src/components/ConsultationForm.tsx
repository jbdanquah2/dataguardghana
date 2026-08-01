"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { formOptions } from "@/data/content";
import { consultationSchema, type ConsultationInput } from "@/lib/validation";
import { createWhatsAppUrl } from "@/lib/whatsapp";

function FieldError({ message }: { message?: string }) { return message ? <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">{message}</p> : null; }

export function ConsultationForm() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ConsultationInput>({
    resolver: zodResolver(consultationSchema),
    defaultValues: { fullName: "", organisationName: "", email: "", phone: "", organisationType: "", employeeCount: "", service: "", message: "", consent: false },
  });
  const submit = (data: ConsultationInput) => {
    setSuccess(true);
    const url = createWhatsAppUrl(data);
    setTimeout(() => { window.location.assign(url); }, 650);
  };
  const inputClass = (error?: unknown) => `field ${error ? "field-error" : ""}`;
  return <form noValidate onSubmit={handleSubmit(submit)} className="card p-5 sm:p-7" aria-label="Consultation enquiry form">
    {success && <div role="status" className="mb-5 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"><CheckCircle2 className="mt-.5 shrink-0" size={20} /><span><strong className="block">Your enquiry is ready.</strong>Opening WhatsApp so you can review and send it.</span></div>}
    <fieldset>
      <legend className="mb-5 w-full border-b border-slate-200 pb-3 font-[var(--font-manrope)] text-base font-bold text-[#0b1f33]">Your details</legend>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Full name <span aria-hidden="true" className="text-red-700">*</span><input {...register("fullName")} autoComplete="name" className={inputClass(errors.fullName)} aria-invalid={!!errors.fullName} /><FieldError message={errors.fullName?.message} /></label>
        <label className="block text-sm font-semibold">Phone number <span aria-hidden="true" className="text-red-700">*</span><input {...register("phone")} type="tel" autoComplete="tel" className={inputClass(errors.phone)} aria-invalid={!!errors.phone} /><FieldError message={errors.phone?.message} /></label>
        <label className="block text-sm font-semibold sm:col-span-2">Work email <span className="font-normal text-slate-500">(optional)</span><input {...register("email")} type="email" autoComplete="email" className={inputClass(errors.email)} aria-invalid={!!errors.email} /><FieldError message={errors.email?.message} /></label>
      </div>
    </fieldset>
    <fieldset className="mt-8">
      <legend className="mb-5 w-full border-b border-slate-200 pb-3 font-[var(--font-manrope)] text-base font-bold text-[#0b1f33]">Your organisation and support needs</legend>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold sm:col-span-2">Organisation name <span aria-hidden="true" className="text-red-700">*</span><input {...register("organisationName")} autoComplete="organization" className={inputClass(errors.organisationName)} aria-invalid={!!errors.organisationName} /><FieldError message={errors.organisationName?.message} /></label>
        <label className="block text-sm font-semibold">Organisation type <span aria-hidden="true" className="text-red-700">*</span><select {...register("organisationType")} className={inputClass(errors.organisationType)} aria-invalid={!!errors.organisationType}><option value="">Select an option</option>{formOptions.organisations.map(o => <option key={o}>{o}</option>)}</select><FieldError message={errors.organisationType?.message} /></label>
        <label className="block text-sm font-semibold">Approximate employees <span className="font-normal text-slate-500">(optional)</span><select {...register("employeeCount")} className="field"><option value="">Select a range</option>{formOptions.employees.map(o => <option key={o}>{o}</option>)}</select></label>
        <label className="block text-sm font-semibold sm:col-span-2">Service required <span aria-hidden="true" className="text-red-700">*</span><select {...register("service")} className={inputClass(errors.service)} aria-invalid={!!errors.service}><option value="">Select a service</option>{formOptions.services.map(o => <option key={o}>{o}</option>)}</select><FieldError message={errors.service?.message} /></label>
        <label className="block text-sm font-semibold sm:col-span-2">Message <span aria-hidden="true" className="text-red-700">*</span><textarea {...register("message")} rows={5} className={`${inputClass(errors.message)} resize-y`} aria-invalid={!!errors.message} placeholder="Tell us briefly about your needs." /><FieldError message={errors.message?.message} /></label>
      </div>
    </fieldset>
    <div className="mt-5"><label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-600"><input {...register("consent")} type="checkbox" className="mt-1 size-4 shrink-0 accent-[#0f766e]" aria-invalid={!!errors.consent} /><span>I agree that DataGuard Ghana may use the information provided to respond to my enquiry.</span></label><FieldError message={errors.consent?.message} /></div>
    <button type="submit" disabled={isSubmitting || success} className="btn btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60">Send Enquiry via WhatsApp <ArrowUpRight size={18} /></button>
    <p className="mt-3 text-center text-xs leading-5 text-slate-500">Nothing is sent automatically. You can review and edit your enquiry in WhatsApp before sending.</p>
  </form>;
}
