"use client";

import { useState, useEffect, useRef } from "react";
import { Calendar, ArrowRight, Menu, X, ArrowUpRight, ChevronRight, Phone } from "lucide-react";

export default function Header({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(105);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const h = headerRef.current.getBoundingClientRect().height;
        if (h > 0) setHeaderHeight(Math.round(h));
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    window.addEventListener("scroll", updateHeaderHeight, { passive: true });
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      window.removeEventListener("scroll", updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Measure current header height immediately on open
      if (headerRef.current) {
        const h = headerRef.current.getBoundingClientRect().height;
        if (h > 0) setHeaderHeight(Math.round(h));
      }
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: "#why-choose", num: "02", label: "Why Choose EAK School" },
    { href: "#academics", num: "03", label: "Academic Programs (Grades 1–12)" },
    { href: "#highlights", num: "04", label: "School Highlights & Stats" },
    { href: "#facilities", num: "05", label: "Campus Facilities (15-Acre)" },
    { href: "#process", num: "06", label: "5-Step Admission Process" },
    { href: "#dates", num: "07", label: "Important Dates & Deadlines" },
    { href: "#documents", num: "08", label: "Required Documents Checklist" },
    { href: "#fees", num: "09", label: "Fee Structure 2027–28" },
    { href: "#testimonials", num: "10", label: "Parent Testimonials" },
    { href: "#faq", num: "11", label: "Frequently Asked Questions" },
  ];

  return (
    <div ref={headerRef} className="sticky top-0 z-50 w-full shadow-sm">
      {/* Top Announcement Bar with Scrolling Marquee */}
      <div className="bg-[#0f172a] text-white py-2 px-3 sm:px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2.5 sm:gap-4 text-xs">
          {/* Badge & Marquee Scrolling Text */}
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 overflow-hidden">
            <span className="bg-amber-400 text-slate-950 font-mono font-bold text-[9.5px] sm:text-[10px] py-0.5 px-2 sm:px-2.5 rounded-full shrink-0 tracking-wider flex items-center gap-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="hidden xs:inline">SESSION </span>2027–28
            </span>
            <div
              className="flex-1 min-w-0 overflow-hidden relative"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 12px, black calc(100% - 12px), transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12px, black calc(100% - 12px), transparent 100%)",
              }}
            >
              <marquee
                behavior="scroll"
                direction="left"
                scrollamount="5"
                className="font-mono text-[11.5px] sm:text-xs text-slate-100 py-0.5 block cursor-pointer w-full leading-normal"
                onMouseEnter={(e) => e.target.stop && e.target.stop()}
                onMouseLeave={(e) => e.target.start && e.target.start()}
                onTouchStart={(e) => e.target.stop && e.target.stop()}
                onTouchEnd={(e) => e.target.start && e.target.start()}
                onClick={() => onOpenModal("enquiry")}
              >
                🎓 Admissions Open for Academic Session 2027–28 &bull; Applications Open for Grades 1 to 12 &bull; Early Bird Interaction Slots Open &bull; CBSE &amp; Cambridge Curriculum &bull; 1:12 Student-Teacher Mentorship Ratio &bull; Merit Scholarships Available up to 40% &bull; Limited Intake Per Grade
              </marquee>
            </div>
          </div>

          {/* Quick Action Links - hidden on small mobile screens to give marquee maximum display width */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-4 shrink-0 font-mono text-xs pl-3 border-l border-slate-700">
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
        className={`w-full relative transition-all duration-300 ${isScrolled
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

      </header>

      {/* Mobile Navigation Drawer: FIXED to viewport so it opens in ANY section */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop Dimming Overlay */}
          <div
            className="fixed inset-x-0 bottom-0 bg-slate-950/60 backdrop-blur-xs z-40 transition-opacity"
            style={{ top: `${headerHeight}px` }}
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Mobile Dropdown Menu Container */}
          <div
            className="fixed inset-x-0 bg-white border-b-2 border-slate-200 shadow-2xl z-50 overflow-y-auto overscroll-contain animate-in fade-in duration-200"
            style={{
              top: `${headerHeight}px`,
              maxHeight: `calc(100dvh - ${headerHeight}px)`,
            }}
          >
            <div className="p-4 sm:p-6 flex flex-col">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  EXPLORE SECTIONS
                </span>
                <span className="font-mono text-[9.5px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  ADMISSIONS 2027–28
                </span>
              </div>

              <nav className="flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between py-2 px-2.5 rounded-xl hover:bg-slate-50 active:bg-blue-50 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="font-mono text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-md shrink-0">
                        {link.num}
                      </span>
                      <span className="text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors truncate">
                        {link.label}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </a>
                ))}
              </nav>

              <div className="flex flex-col gap-2.5 mt-4 pt-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    closeMenu();
                    onOpenModal("enquiry");
                  }}
                  className="btn-outline w-full justify-center shadow-sm"
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

                <div className="mt-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium px-1">
                  <a href="tel:+919876543210" className="inline-flex items-center gap-1.5 hover:text-blue-700 font-semibold text-slate-800">
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>+91 98765 43210</span>
                  </a>
                  <span className="font-mono text-[9.5px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                    Limited Intake
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
