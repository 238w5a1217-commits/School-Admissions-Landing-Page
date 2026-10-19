"use client";

import { useState } from "react";
import { ChevronDown, PhoneCall } from "lucide-react";

export default function FaqSection({ onOpenModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is the age criteria for admission to Grade 1?",
      a: "For Grade 1 admission in Academic Session 2027–28, the child must be between 5.5 to 6.5 years old as of June 1, 2027, in alignment with NEP 2020 regulatory norms."
    },
    {
      q: "What is the student-teacher ratio at EAK International School?",
      a: "We maintain an average 1:12 student-teacher mentorship ratio across all levels. Primary classrooms are capped at 24 students with a lead educator and co-educator to ensure individual attention."
    },
    {
      q: "Does the school provide air-conditioned transportation across the city?",
      a: "Yes. Our fleet of air-conditioned buses covers 38 radial routes across the city. Every bus features live GPS tracking on the Parent Mobile App, CCTV surveillance, speed governors, and a verified lady attendant on every trip."
    },
    {
      q: "Which boards does EAK offer for Secondary & Senior Secondary?",
      a: "We offer dual-track curricula: the Central Board of Secondary Education (CBSE) from Grade 1 to 12, alongside the Cambridge International Pathway (IGCSE in Grades 9–10 and AS/A Levels in Grades 11–12)."
    },
    {
      q: "Are there scholarships available for academic excellence or sports talents?",
      a: "Yes. EAK International School offers merit-based scholarships providing up to a 40% waiver on annual tuition fees for students demonstrating outstanding achievements in state/national sports tournaments or academic olympiads. A 10% sibling concession is also extended automatically to younger siblings."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="project-tag-pill tag-blue mb-3">
            11 &bull; PARENT QUERIES
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-5xl tracking-tight text-slate-900 leading-tight mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-sm sm:text-lg text-slate-600">
            Clear, transparent answers to help you navigate admissions, assessments, curriculum, and student life.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-blue-50/50 border-blue-400 shadow-xs"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 select-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-extrabold text-sm sm:text-lg text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-blue-700 text-white rotate-180"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-blue-100/70 text-xs sm:text-base text-slate-700 font-normal leading-relaxed">
                    <p className="mt-3 sm:mt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Help Card */}
        <div className="bg-[#f8fafc] rounded-3xl border border-slate-200 p-5 sm:p-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 shadow-sm">
          <div>
            <h4 className="font-heading font-black text-lg sm:text-xl text-slate-900 mb-0.5 sm:mb-1">
              Have a question not answered here?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-slate-600">
              Our Admissions Counselors are available to assist you one-on-one.
            </p>
          </div>
          <button
            onClick={() => onOpenModal("callback")}
            className="btn-outline shrink-0 text-xs sm:text-sm justify-center cursor-pointer py-3 px-5"
          >
            <PhoneCall className="w-4 h-4 text-slate-700" />
            <span>Request a Callback</span>
          </button>
        </div>
      </div>
    </section>
  );
}
