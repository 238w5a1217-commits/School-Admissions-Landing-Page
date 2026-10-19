"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function ParentTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      quote:
        "EAK has transformed our daughter's confidence. In her previous school, she was hesitant to speak in groups. Within six months of the primary inquiry curriculum and speech workshops, she was anchoring the school annual cultural fest! The teachers truly observe every child's unique spark.",
      parentName: "Dr. Arvind & Sunita Sharma",
      role: "Parents of Ananya Sharma (Grade 4) • Pediatric Specialist",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      quote:
        "The balance of rigorous academics and Olympic-level sports coaching is unmatched. My son Kabir is a regional swimmer while maintaining a 94% average in his Grade 10 mock exams. The flexible remediation and compassionate mentoring here are truly remarkable.",
      parentName: "Vikram Singhania",
      role: "Father of Kabir Singhania (Grade 10) • Technology Director",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      quote:
        "We relocated from London last summer and were anxious about school transitions. EAK’s admission team handled our documentation with incredible warmth and clarity. The international standard curriculum and caring environment made my children feel at home on day one.",
      parentName: "David & Meera Chen",
      role: "Parents of Maya (Grade 2) & Lucas (Grade 7) • Financial Analysts",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      quote:
        "The STEM labs and coding programs are leagues ahead of other schools in the city. My daughter Rhea built an IoT plant moisture sensor in Grade 8! EAK teaches children to innovate, question, and care for society.",
      parentName: "Rajesh & Deepa Iyer",
      role: "Parents of Rhea (Grade 8) • Biotech Scientist",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ];

  // Automatic slide every 4 seconds (4000ms) with smooth normal slide
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const active = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="project-tag-pill tag-blue">
              10 &bull; COMMUNITY VOICES
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-slate-900 leading-tight mb-4">
            What Parents Say About EAK
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600">
            Authentic experiences from families whose children thrive academically, socially, and emotionally in our school.
          </p>
        </div>

        {/* Carousel Presentation with Normal Smooth Slide Transition */}
        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card with Smooth Fade / Slide */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-10 lg:p-14 shadow-xl relative overflow-hidden transition-all duration-500">
            {/* Background Decorative Quote Mark */}
            <Quote className="absolute right-4 sm:right-8 bottom-4 sm:bottom-8 w-24 h-24 sm:w-32 sm:h-32 text-slate-100 stroke-[1] pointer-events-none -z-0" />

            <div className="relative z-10">
              {/* Star Rating Strip */}
              <div className="flex items-center gap-1.5 mb-5 sm:mb-6">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="font-mono text-[11px] sm:text-xs font-bold text-slate-500 ml-2">
                  5.0 Verified Review
                </span>
              </div>

              {/* Testimonial Quote */}
              <blockquote className="font-sans text-sm sm:text-xl lg:text-2xl text-slate-800 leading-relaxed font-medium mb-6 sm:mb-8 italic min-h-[90px] sm:min-h-[120px] transition-opacity duration-300">
                "{active.quote}"
              </blockquote>

              {/* Parent Info & Avatar + Arrow Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 sm:pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3.5">
                  <img
                    src={active.avatar}
                    alt={active.parentName}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover border-2 border-slate-200 shadow-sm shrink-0"
                  />
                  <div>
                    <h4 className="font-heading font-extrabold text-sm sm:text-lg text-slate-900 leading-snug">
                      {active.parentName}
                    </h4>
                    <p className="font-sans text-[11px] sm:text-sm text-slate-500 font-normal mt-0.5">
                      {active.role}
                    </p>
                  </div>
                </div>

                {/* Left/Right Arrow Buttons */}
                <div className="flex items-center justify-end gap-2 shrink-0">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous parent review"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 hover:border-blue-600 hover:bg-blue-50 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-xs"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next parent review"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 hover:border-blue-600 hover:bg-blue-50 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-xs"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Neat Slide Indicators (Dots) */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
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
