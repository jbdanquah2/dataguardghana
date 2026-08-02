"use client";

import { Check, MessageCircle, RotateCcw } from "lucide-react";
import { useState } from "react";
import { quizQuestions } from "@/data/content";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function ReadinessQuiz() {
  const [answers, setAnswers] = useState<(boolean | null)[]>(quizQuestions.map(() => null));
  const complete = answers.every(answer => answer !== null);
  const risks = answers.filter(Boolean).length;
  const result = risks <= 1
    ? ["Good foundations", "You appear to have some important foundations in place. Regular reviews can help keep them effective."]
    : risks <= 3
      ? ["Some areas need attention", "A focused review can help you prioritise the gaps and take practical next steps."]
      : ["A structured review is recommended", "Several important areas may need attention. A readiness assessment can give you a clear action plan."];

  const whatsappMessage = `Hello DataGuard, I completed your data protection readiness quiz. My result was: "${result[0]}" (${risks}/5 risks flagged). I would like to discuss next steps for my organisation.`;
  const whatsappUrl = createWhatsAppUrl(whatsappMessage);

  return (
    <div className="quiz-card">
      <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-7">
        <p className="text-sm font-bold text-[#0b1f33]">Select “Yes” where the statement applies</p>
        <span className="text-xs font-bold text-slate-400">{answers.filter(a => a !== null).length}/5</span>
      </div>
      <div className="divide-y divide-slate-100 px-5 sm:px-7">
        {quizQuestions.map((question, index) => (
          <fieldset className="py-5" key={question}>
            <legend className="text-sm font-semibold leading-6 text-slate-700">
              <span className="mr-2 text-[#0f766e]">0{index + 1}</span>
              {question}
            </legend>
            <div className="mt-3 flex gap-2">
              {[true, false].map(value => (
                <button
                  key={String(value)}
                  type="button"
                  onClick={() => setAnswers(current => current.map((answer, i) => i === index ? value : answer))}
                  className={`quiz-option cursor-pointer ${answers[index] === value ? "quiz-option-active" : ""}`}
                  aria-pressed={answers[index] === value}
                >
                  {answers[index] === value && <Check size={14} />}
                  {value ? "Yes" : "No"}
                </button>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      <div className="border-t border-slate-200 bg-slate-50 p-5 sm:p-7" aria-live="polite">
        {complete ? (
          <div>
            <p className="eyebrow">Your result</p>
            <h3 className="mt-2 text-2xl font-bold text-[#0b1f33]">{result[0]}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{result[1]}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Discuss result on WhatsApp
              </a>
              <button
                type="button"
                onClick={() => setAnswers(quizQuestions.map(() => null))}
                className="btn btn-secondary cursor-pointer"
              >
                <RotateCcw size={16} />
                Reset Quiz
              </button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-slate-500">Answer all five questions to see your readiness guidance.</p>
        )}
        <p className="mt-4 text-xs leading-5 text-slate-400">
          This quick check is general guidance, not legal advice or a compliance determination.
        </p>
      </div>
    </div>
  );
}
