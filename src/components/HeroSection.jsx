"use client";

import { useState, useEffect } from "react";
import { Sparkles, Calendar, ArrowRight, ShieldCheck, ChevronRight, GraduationCap, BookOpen, Award } from "lucide-react";

export default function HeroSection({ onOpenModal }) {
  // 3 rotating background images (changes every 5 seconds)
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80",
      caption: "Collaborative Student Learning & Innovation",
    },
    {
      url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80",
      caption: "15-Acre Modern Sustainable Campus",
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=80",
      caption: "Interactive STEM & Smart Classrooms",
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // Rotate every 5 seconds (5000ms) with smooth normal slide/crossfade
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section id="hero" className="relative pt-12 pb-24 sm:pb-32 overflow-hidden border-b border-slate-200">
      {/* 3 Rotating Background Slides (Every 5 seconds with smooth 1s crossfade) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `url('${img.url}')`,
              transitionProperty: "opacity, transform",
            }}
          />
        ))}
        {/* Clear, balanced educational overlay so background image is clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/60 to-white/70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 sm:mb-8">
          <span className="project-tag-pill tag-blue shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>ADMISSIONS OPEN 2027–28</span>
          </span>
          <span className="project-tag-pill tag-slate shadow-xs">
            CBSE &bull; CAMBRIDGE ALIGNED &bull; NEP 2020
          </span>
          <span className="project-tag-pill tag-amber hidden sm:inline-flex shadow-xs">
            GRADES 1 TO 12
          </span>
        </div>

        {/* Hero Headings */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">
            EAK INTERNATIONAL SCHOOL &bull; BENGALURU
          </p>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#0f2942] leading-[1.08] mb-6 hero-title-shadow">
            Nurturing Tomorrow’s{" "}
            <span className="relative inline-block text-blue-700 px-1.5 isolate">
              Global Leaders
              <span className="absolute inset-x-0 bottom-1.5 h-3 sm:h-4 bg-amber-200 -z-10 rounded-full opacity-70"></span>
            </span>{" "}
            Today.
          </h1>
          <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-800 max-w-2xl mx-auto font-medium leading-relaxed hero-title-shadow">
            Welcome to a 15-acre premier campus where inquiry-driven academics, Olympic sports, robotics innovation, and compassionate character converge for <strong>Academic Session 2027–28</strong>.
          </p>
        </div>

        {/* Hero Action CTA Group */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-10 sm:mb-12">
          <button
            onClick={() => onOpenModal("enquiry")}
            className="btn-outline shadow-lg"
          >
            <span>Apply Now for 2027–28</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onOpenModal("tour")}
            className="btn-outline btn-white bg-white/90 backdrop-blur-md"
          >
            <Calendar className="w-4 h-4 text-slate-700" />
            <span>Schedule a Visit</span>
          </button>

          <a
            href="#process"
            className="btn-outline btn-white hidden md:inline-flex bg-white/90 backdrop-blur-md"
          >
            <span>Admission Flow</span>
            <ChevronRight className="w-4 h-4 text-slate-700" />
          </a>
        </div>

        {/* 4 Key Pillar Metric Chips Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto mb-10 sm:mb-16">
          <div className="p-3.5 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-center hover:border-blue-400 transition-all">
            <span className="font-heading font-black text-2xl sm:text-3xl text-[#0f2942] block mb-0.5 sm:mb-1">25+</span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase text-slate-500 font-bold tracking-wider">Years of Heritage</span>
          </div>
          <div className="p-3.5 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-center hover:border-blue-400 transition-all">
            <span className="font-heading font-black text-2xl sm:text-3xl text-[#0f2942] block mb-0.5 sm:mb-1">99.4%</span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase text-slate-500 font-bold tracking-wider">Board Distinctions</span>
          </div>
          <div className="p-3.5 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-center hover:border-blue-400 transition-all">
            <span className="font-heading font-black text-2xl sm:text-3xl text-[#0f2942] block mb-0.5 sm:mb-1">1:12</span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase text-slate-500 font-bold tracking-wider">Student Ratio</span>
          </div>
          <div className="p-3.5 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-center hover:border-blue-400 transition-all">
            <span className="font-heading font-black text-2xl sm:text-3xl text-[#0f2942] block mb-0.5 sm:mb-1">15-Acre</span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase text-slate-500 font-bold tracking-wider">Eco Campus</span>
          </div>
        </div>

        {/* 3 Floating Academic Level Cards (Inspired by Siddhartha screenshot 3: Under Graduate, Post Graduate, Ph.D) */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-500 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200">
              EXPLORE CURRICULAR PATHWAYS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="#academics"
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-500 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block">AGES 6 – 10</span>
                <strong className="font-heading font-bold text-base text-slate-900 group-hover:text-blue-700 transition-colors block">
                  Primary School
                </strong>
                <span className="font-sans text-xs text-slate-500">Grades 1 to 5</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </a>

            <a
              href="#academics"
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-emerald-500 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block">AGES 11 – 13</span>
                <strong className="font-heading font-bold text-base text-slate-900 group-hover:text-emerald-700 transition-colors block">
                  Middle School
                </strong>
                <span className="font-sans text-xs text-slate-500">Grades 6 to 8</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
            </a>

            <a
              href="#academics"
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-indigo-500 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block">AGES 14 – 18</span>
                <strong className="font-heading font-bold text-base text-slate-900 group-hover:text-indigo-700 transition-colors block">
                  Senior Secondary
                </strong>
                <span className="font-sans text-xs text-slate-500">Grades 9 to 12</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
            </a>
          </div>

          {/* Slide Dots Control (3 images rotating every 5s) */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  activeSlide === idx
                    ? "w-8 h-2.5 bg-blue-700"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
