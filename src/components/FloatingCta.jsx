"use client";

import { Sparkles, ArrowRight } from "lucide-react";

export default function FloatingCta({ onOpenModal }) {
  return (
    <>
      {/* Vertical Fixed Side Ribbon on Right Edge (Inspired by Siddhartha Academy Portal) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:block">
        <button
          onClick={() => onOpenModal("enquiry")}
          className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-mono text-xs font-bold py-4 px-2.5 rounded-l-2xl shadow-2xl flex items-center gap-2 cursor-pointer transition-all duration-200 border-l border-y border-blue-400 group hover:pr-4"
          style={{ writingMode: "vertical-rl" }}
          aria-label="Admissions Open 2027–28 Quick Form"
        >
          <span className="rotate-180 tracking-widest uppercase flex items-center gap-2 text-[11px]">
            Admissions Open 2027–28
          </span>
        </button>
      </div>

      {/* Floating Action Button (Bottom Right) - Sleek on mobile, full pill on desktop */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30">
        <button
          onClick={() => onOpenModal("enquiry")}
          className="btn-outline shadow-2xl px-4 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm flex items-center gap-2 hover:scale-105 active:scale-95 transition-all bg-[#0f2942] text-white border-[#0f2942] hover:bg-[#1e3a8a] hover:border-[#1e3a8a] rounded-full cursor-pointer"
          aria-label="Quick Admission Enquiry"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-pulse shrink-0" />
          <span className="font-heading font-bold text-white tracking-wide">
            <span className="sm:hidden">Enquire</span>
            <span className="hidden sm:inline">Enquire 2027–28</span>
          </span>
        </button>
      </div>
    </>
  );
}
