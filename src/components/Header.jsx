"use client";

import { useState, useEffect } from "react";
import { Calendar, ArrowRight, Menu, X, ArrowUpRight } from "lucide-react";

export default function Header({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="sticky top-0 z-50 w-full shadow-sm">
      {/* Top Announcement Bar with Scrolling Marquee */}
      <div className="bg-[#0f172a] text-white py-2 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs">
          {/* Badge & Marquee Scrolling Text */}
          <div className="flex items-center gap-3 flex-1 overflow-hidden">
            <span className="bg-amber-400 text-slate-950 font-mono font-bold text-[10px] py-0.5 px-2.5 rounded-full shrink-0 tracking-wider">
              SESSION 2027–28
            </span>
            <div className="flex-1 overflow-hidden">
              <marquee
                behavior="scroll"
                direction="left"
                scrollamount="6"
                className="font-mono text-xs text-slate-200 py-0.5 block cursor-pointer"
                onMouseEnter={(e) => e.target.stop && e.target.stop()}
                onMouseLeave={(e) => e.target.start && e.target.start()}
              >
                🎓 Admissions Open for Academic Session 2027–28 &bull; Applications Open for Grades 1 to 12 &bull; Early Bird Interaction Slots Open &bull; CBSE &amp; Cambridge Curriculum &bull; 1:12 Student-Teacher Mentorship Ratio &bull; Merit Scholarships Available up to 40% &bull; Limited Intake Per Grade
              </marquee>
            </div>
          </div>

          {/* Quick Action Links */}
          <div className="flex items-center gap-4 shrink-0 font-mono text-xs pl-3 border-l border-slate-700">
            <button
              onClick={() => onOpenModal("enquiry")}
              className="inline-flex items-center gap-1 text-amber-400 hover:text-white transition-colors underline-offset-4 hover:underline font-bold"
            >
              <span>Apply Online</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300 font-semibold">+91 98765 43210</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`w-full transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200"
          : "bg-white py-3.5 border-b border-slate-100"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* School Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group" aria-label="EAK International School">
            <div className="w-11 h-11 rounded-2xl bg-[#0f2942] text-amber-400 flex items-center justify-center font-heading font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              EAK
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl tracking-tight text-slate-900 leading-none">
                EAK INTERNATIONAL
              </span>
              <span className="font-mono text-[9.5px] font-bold text-slate-500 tracking-widest uppercase mt-0.5">
                SCHOOL &bull; ESTD 2002
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a href="#why-choose" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">
              Why EAK
            </a>
            <a href="#academics" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">
              Academics
            </a>
            <a href="#highlights" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">
              Highlights
            </a>
            <a href="#facilities" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">
              Facilities
            </a>
            <a href="#process" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">
              Admissions
            </a>
            <a href="#fees" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">
              Fees
            </a>
            <a href="#faq" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenModal("tour")}
              className="btn-outline btn-white btn-sm"
              aria-label="Schedule a Campus Visit"
            >
              <Calendar className="w-4 h-4 text-slate-700" />
              <span>Campus Visit</span>
            </button>
            <button
              onClick={() => onOpenModal("enquiry")}
              className="btn-outline btn-sm"
              aria-label="Apply Now for Admissions"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenModal("enquiry")}
              className="btn-outline btn-xs sm:hidden"
            >
              <span>Apply</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-300 text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[108px] bg-white border-b-2 border-slate-200 shadow-2xl p-6 z-50">
            <nav className="flex flex-col gap-3 font-medium">
              <a href="#why-choose" onClick={closeMenu} className="py-2 border-b border-slate-100 text-sm font-bold text-slate-800">
                02. Why Choose EAK School
              </a>
              <a href="#academics" onClick={closeMenu} className="py-2 border-b border-slate-100 text-sm font-bold text-slate-800">
                03. Academic Programs (Grades 1–12)
              </a>
              <a href="#highlights" onClick={closeMenu} className="py-2 border-b border-slate-100 text-sm font-bold text-slate-800">
                04. School Highlights &amp; Stats
              </a>
              <a href="#facilities" onClick={closeMenu} className="py-2 border-b border-slate-100 text-sm font-bold text-slate-800">
                05. Campus Facilities (15-Acre)
              </a>
              <a href="#process" onClick={closeMenu} className="py-2 border-b border-slate-100 text-sm font-bold text-slate-800">
                06. 5-Step Admission Process
              </a>
              <a href="#dates" onClick={closeMenu} className="py-2 border-b border-slate-100 text-sm font-bold text-slate-800">
                07. Important Dates &amp; Deadlines
              </a>
              <a href="#documents" onClick={closeMenu} className="py-2 border-b border-slate-100 text-sm font-bold text-slate-800">
                08. Required Documents Checklist
              </a>
              <a href="#fees" onClick={closeMenu} className="py-2 border-b border-slate-100 text-sm font-bold text-slate-800">
                09. Fee Structure 2027–28
              </a>
              <a href="#testimonials" onClick={closeMenu} className="py-2 border-b border-slate-100 text-sm font-bold text-slate-800">
                10. Parent Testimonials
              </a>
              <a href="#faq" onClick={closeMenu} className="py-2 text-sm font-bold text-slate-800">
                11. Frequently Asked Questions
              </a>
            </nav>

            <div className="flex flex-col gap-3 mt-6 pt-5 border-t border-slate-200">
              <button
                onClick={() => {
                  closeMenu();
                  onOpenModal("enquiry");
                }}
                className="btn-outline w-full justify-center"
              >
                <span>Apply Now (Session 2027–28)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  closeMenu();
                  onOpenModal("tour");
                }}
                className="btn-outline btn-white w-full justify-center"
              >
                <Calendar className="w-4 h-4 text-slate-700" />
                <span>Schedule Campus Tour</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
