"use client";

import { ArrowRight, ChevronRight } from "lucide-react";

export default function AdmissionProcessSection({ onOpenModal }) {
  const steps = [
    {
      num: "01",
      title: "Enquiry",
      desc: "Get in touch with our admissions team.",
      circleColor: "bg-emerald-600 text-white shadow-emerald-600/30",
    },
    {
      num: "02",
      title: "Application",
      desc: "Submit the application form with required details.",
      circleColor: "bg-amber-500 text-white shadow-amber-500/30",
    },
    {
      num: "03",
      title: "Assessment",
      desc: "Age-appropriate assessment / interaction.",
      circleColor: "bg-blue-600 text-white shadow-blue-600/30",
    },
    {
      num: "04",
      title: "Selection",
      desc: "Receive the admission decision.",
      circleColor: "bg-rose-500 text-white shadow-rose-500/30",
    },
    {
      num: "05",
      title: "Enrollment",
      desc: "Complete the formalities and secure your child's seat.",
      circleColor: "bg-indigo-600 text-white shadow-indigo-600/30",
    }
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="project-tag-pill tag-blue mb-4">
            06 &bull; ADMISSION ROADMAP
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-slate-900 leading-tight mb-4">
            Simple and Transparent Process
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600">
            A seamless, stress-free 5-step admissions journey designed to guide your family into Academic Session 2027–28.
          </p>
        </div>

        {/* 5-Step Clean Stepper: Responsive cards on mobile, horizontal stepper on desktop */}
        <div className="mb-14 sm:mb-16">
          {/* Mobile View: Vertical Clean Process Cards with Stacking Effect */}
          <div className="md:hidden flex flex-col gap-3.5 relative">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                style={{
                  top: `calc(105px + ${idx * 12}px)`,
                  zIndex: 10 + idx,
                }}
                className="sticky md:static bg-white rounded-2xl p-4 border border-slate-200 flex items-start gap-3.5 shadow-md transition-all"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${step.circleColor} flex items-center justify-center font-heading font-black text-base shadow-sm shrink-0`}
                >
                  {step.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-heading font-bold text-base text-slate-900 leading-snug">
                      {step.title}
                    </h3>
                    <span className="font-mono text-[10px] text-slate-400 font-bold uppercase shrink-0 ml-2">
                      Stage 0{idx + 1}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: 5-Step Horizontal Stepper with Arrows */}
          <div className="hidden md:grid md:grid-cols-5 gap-4 items-start relative">
            {steps.map((step, idx) => (
              <div key={step.num} className="flex flex-col items-center text-center relative group">
                {/* Circle and connector row */}
                <div className="flex items-center justify-center w-full relative mb-5">
                  {/* Step Number Circle */}
                  <div
                    className={`w-16 h-16 rounded-full ${step.circleColor} flex items-center justify-center font-heading font-black text-xl shadow-lg transition-transform duration-300 group-hover:scale-110 z-10`}
                  >
                    {step.num}
                  </div>

                  {/* Desktop Connecting Arrow between steps */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-0 text-slate-300">
                      <ArrowRight className="w-6 h-6 stroke-[2]" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-slate-600 leading-relaxed max-w-[210px] font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Banner Below Process */}
        <div className="bg-[#0f2942] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
          <div className="max-w-xl text-center md:text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
              READY TO COMMENCE?
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
              Start Step 1: Submit Your Online Enquiry Today
            </h3>
            <p className="font-sans text-sm text-slate-300">
              Our Admissions Counseling Office is open Monday to Saturday (8:30 AM – 4:30 PM). No prior appointment needed for prospectus pickup.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenModal("enquiry")}
              className="btn-outline btn-gold px-6 py-3 font-bold"
            >
              <span>Begin Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenModal("tour")}
              className="btn-outline btn-white px-5 py-3 text-sm"
            >
              <span>Schedule Tour First</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
