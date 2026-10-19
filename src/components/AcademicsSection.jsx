"use client";

import { useState, useEffect } from "react";
import { Clock, BookOpen, Users, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export default function AcademicsSection({ onOpenModal }) {
  const tabKeys = ["primary", "middle", "secondary", "senior"];
  const [activeTab, setActiveTab] = useState("primary");
  const [isPaused, setIsPaused] = useState(false);

  const programs = {
    primary: {
      id: "primary",
      level: "PRIMARY SCHOOL",
      grades: "Grades 1 – 5",
      ageRange: "Ages 6 to 10 Years",
      classSize: "Max 20 Students / Section",
      title: "Foundations of Wonder & Lifelong Curiosity",
      description:
        "Our primary years program creates a joyful, inquiry-based atmosphere. Children develop phonics mastery, foundational numeracy logic, bilingual fluency, and positive social empathy through structured discovery rather than rote learning.",
      features: [
        {
          title: "Inquiry & Thematic Integration",
          desc: "Science, geography, and literature taught through unified discovery themes and tactile manipulatives."
        },
        {
          title: "Language Fluency & Speech",
          desc: "Dedicated reading circles, creative writing workshops, and early confidence in public presentation."
        },
        {
          title: "Junior STEAM & Nature Explorations",
          desc: "Early coding concepts, hands-on science discovery gardens, and tactile visual arts."
        }
      ],
      highlight: "Diagnostic holistic progress tracking without high-stakes testing anxiety.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
    },
    middle: {
      id: "middle",
      level: "MIDDLE SCHOOL",
      grades: "Grades 6 – 8",
      ageRange: "Ages 11 to 13 Years",
      classSize: "Max 22 Students / Section",
      title: "Analytical Inquiry & Creative Problem Solving",
      description:
        "During these pivotal transition years, students move from guided observation to rigorous analytical thinking. Specialized subject mentors introduce formal laboratory experimentation, debating societies, and digital literacy.",
      features: [
        {
          title: "Advanced STEM & Algorithmic Logic",
          desc: "Introduction to Python programming, robotics tournaments, and empirical science lab methods."
        },
        {
          title: "Critical Social Humanities",
          desc: "Mock parliamentary debates, historical research projects, and foreign language options (French / German)."
        },
        {
          title: "Competitive Athletic Conditioning",
          desc: "Structured daily sports coaching tracks in swimming, football, basketball, and track athletics."
        }
      ],
      highlight: "Inter-school research symposiums & regional science olympiad honors.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80"
    },
    secondary: {
      id: "secondary",
      level: "SECONDARY SCHOOL",
      grades: "Grades 9 – 10",
      ageRange: "Ages 14 to 15 Years",
      classSize: "Max 24 Students / Section",
      title: "Academic Rigor & Board Examination Mastery",
      description:
        "Building exceptional conceptual clarity for CBSE and Cambridge board milestones. We balance exam preparation with career discovery, student leadership councils, and community social impact projects.",
      features: [
        {
          title: "Board Examination Excellence",
          desc: "Structured concept revisions, personalized mentor clinics, and diagnostic mock assessment series."
        },
        {
          title: "Career & Stream Guidance",
          desc: "Psychometric profiling and individual counselor sessions to identify optimal senior secondary streams."
        },
        {
          title: "Student Leadership & Responsibility",
          desc: "Prefect council duties, Model United Nations delegations, and student-led campus publications."
        }
      ],
      highlight: "Over 82% of students consistently secure above 90% aggregate in 10th Board examinations.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
    },
    senior: {
      id: "senior",
      level: "SENIOR SECONDARY",
      grades: "Grades 11 – 12",
      ageRange: "Ages 16 to 18 Years",
      classSize: "Stream Specialized Cohorts",
      title: "Pre-University Specialization & Career Launchpads",
      description:
        "Offering focused academic streams in Science (PCM/PCB), Commerce, and Humanities. Rigorous preparation for national competitive exams (JEE, NEET, CLAT, CUET) and international university profile building.",
      features: [
        {
          title: "Science Stream (PCM / PCB)",
          desc: "Advanced laboratories, computer science, and integrated preparation for premier technical & medical entrance exams."
        },
        {
          title: "Commerce & Economics Stream",
          desc: "Applied accountancy, corporate financial management, business entrepreneurship, and commercial incubators."
        },
        {
          title: "Humanities & Liberal Arts",
          desc: "Psychology, political science, legal studies, and guided academic research dissertations."
        }
      ],
      highlight: "100% university admissions across Ivy League, Tier-1 Indian, and global colleges.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
    }
  };

  // Auto-switch academic programs every 5 seconds (5000ms)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const nextIndex = (tabKeys.indexOf(prev) + 1) % tabKeys.length;
        return tabKeys[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, tabKeys.length]);

  const current = programs[activeTab];

  return (
    <section id="academics" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="project-tag-pill tag-blue">
              03 &bull; CURRICULAR CONTINUUM
            </span>
            <span className="font-mono text-[11px] font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
              Auto-Cycles Every 5s
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-slate-900 leading-tight mb-4">
            Academic Programs for Every Developmental Stage
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600">
            From early inquiry in primary grades to pre-university specializations in senior secondary, our curriculum delivers depth, rigor, and individual mentoring.
          </p>
        </div>

        {/* Tab Controls Bar with Hover Pause: 2x2 on mobile, row on desktop */}
        <div
          className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-14 max-w-xl sm:max-w-none mx-auto"
          role="tablist"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {tabKeys.map((key) => {
            const prog = programs[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(key)}
                className={`p-3 sm:px-5 sm:py-3 rounded-2xl font-sans text-xs sm:text-sm font-bold transition-all duration-300 border text-center flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 cursor-pointer ${
                  isActive
                    ? "bg-[#0f2942] text-white border-[#0f2942] shadow-md shadow-slate-900/25 sm:scale-105"
                    : "bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-slate-50"
                }`}
              >
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider">{prog.level}</span>
                <span className="text-[11px] sm:text-xs opacity-75">({prog.grades})</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel with Smooth Transition & Hover Pause */}
        <div
          className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-10 lg:p-12 shadow-sm transition-all duration-500"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Meta Tags */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold bg-blue-50 text-blue-800 px-2.5 py-1 rounded-full border border-blue-200">
                    <Clock className="w-3 h-3 text-blue-700" />
                    <span>{current.ageRange}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold bg-blue-50 text-blue-800 px-2.5 py-1 rounded-full border border-blue-200">
                    <BookOpen className="w-3 h-3 text-blue-700" />
                    <span>{current.grades}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200">
                    <Users className="w-3 h-3 text-slate-600" />
                    <span>{current.classSize}</span>
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl sm:text-3xl text-slate-900 mb-3 sm:mb-4 leading-tight">
                  {current.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed mb-5 sm:mb-6 font-normal">
                  {current.description}
                </p>

                {/* 3 Key Features */}
                <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  {current.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 bg-[#f8fafc] p-3.5 sm:p-4 rounded-2xl border border-slate-200">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                      </div>
                      <div>
                        <strong className="block font-heading font-bold text-xs sm:text-sm text-slate-900">
                          {feat.title}
                        </strong>
                        <p className="font-sans text-xs text-slate-600 font-normal leading-relaxed mt-0.5">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenModal("enquiry")}
                  className="btn-outline px-5 py-3 text-sm justify-center cursor-pointer"
                >
                  <span>Enquire for {current.level}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenModal("tour")}
                  className="btn-outline btn-white px-5 py-3 text-sm bg-white justify-center cursor-pointer"
                >
                  <span>Tour Classrooms</span>
                </button>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                <div className="aspect-[4/3] w-full bg-slate-100">
                  <img
                    src={current.image}
                    alt={`${current.level} classroom learning environment`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating Highlight Banner */}
                <div className="p-4 bg-white border-t border-slate-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span className="font-mono text-[10px] font-bold text-slate-900 uppercase tracking-wider">
                      KEY DISTINCTION
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                    {current.highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicator Dots for the 4 Academic Levels */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-4 border-t border-slate-100">
            {tabKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                aria-label={`Switch to ${programs[key].level}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeTab === key
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
