"use client";

import { ArrowRight, Calendar, Phone, Mail, Clock, Sparkles } from "lucide-react";

export default function FinalCtaSection({ onOpenModal }) {
  return (
    <section
      id="apply"
      className="py-16 sm:py-24 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0f2942] text-white rounded-3xl p-6 sm:p-12 lg:p-16 border border-slate-700 shadow-2xl relative overflow-hidden">
          {/* Subtle radial glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Decorative tag */}
          <div className="flex flex-wrap items-center gap-2 mb-6 relative z-10">
            <span className="bg-amber-400 text-slate-950 font-mono font-bold text-xs px-3 py-1 rounded-full inline-flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>ACADEMIC SESSION 2027–28</span>
            </span>
            <span className="bg-white/10 text-white border border-white/20 font-mono text-xs px-3 py-1 rounded-full hidden sm:inline-flex">
              LIMITED INTAKE PER GRADE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              <h2 className="font-heading font-black text-2xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] sm:leading-[1.08] mb-4 sm:mb-6">
                Give Your Child a <span className="text-amber-400">Future-Ready</span> Education.
              </h2>
              <p className="font-sans text-sm sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10">
                Join an inclusive, internationally-minded community that empowers students with intellectual curiosity, emotional strength, and global opportunities. Seats for Session 2027–28 are allocated on rolling merit.
              </p>

              {/* Three Primary CTAs - Stacks nicely on mobile, row on desktop */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 mb-8 sm:mb-10">
                <button
                  onClick={() => onOpenModal("enquiry")}
                  className="btn-outline btn-amber w-full sm:w-auto shadow-md"
                >
                  <span>Apply Now for 2027–28</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <button
                  onClick={() => onOpenModal("tour")}
                  className="btn-outline btn-white w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4 text-slate-700" />
                  <span>Book a Campus Visit</span>
                </button>

                <button
                  onClick={() => onOpenModal("callback")}
                  className="btn-outline btn-white w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 text-slate-700" />
                  <span>Talk to Admissions Team</span>
                </button>
              </div>

              {/* Quick Contact Info Chips */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2.5 pt-6 border-t border-white/15 text-xs font-mono text-slate-300">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+91 98765 43210</span>
                </a>

                <a
                  href="mailto:admissions@eakschool.edu"
                  className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>admissions@eakschool.edu</span>
                </a>

                <div className="inline-flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Mon – Sat: 8:30 AM – 4:30 PM</span>
                </div>
              </div>
            </div>

            {/* Right Card / Visual Column */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/5 p-3">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80"
                  alt="Students collaborating outside modern school building"
                  className="w-full h-48 sm:h-64 object-cover rounded-xl mb-3"
                />
                <div className="p-4 bg-white text-slate-900 rounded-xl text-center shadow-md">
                  <strong className="block font-heading font-black text-sm text-slate-900 mb-0.5">
                    Admissions Helpdesk Direct
                  </strong>
                  <span className="font-mono text-xs text-slate-600 block">
                    Speak directly with our Admissions Officer
                  </span>
                  <span className="font-heading font-black text-lg text-blue-700 mt-1 block">
                    +91 (80) 4123 9900
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
