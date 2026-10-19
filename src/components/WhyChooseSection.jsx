"use client";

import {
  Award,
  TrendingUp,
  Cpu,
  Building2,
  Trophy,
  Shield,
  Palette,
  HeartHandshake,
  CheckCircle2,
  ShieldCheck,
  Check
} from "lucide-react";

export default function WhyChooseSection() {
  const differentiators = [
    {
      id: "fac",
      title: "Master Certified Faculty",
      tag: "FACULTY EXCELLENCE",
      icon: Award,
      accentColor: "border-t-blue-600",
      iconBg: "bg-blue-50 text-blue-700 border-blue-100",
      pillBg: "bg-blue-50 text-blue-800 border-blue-200",
      badge: "1:12 Mentorship Ratio",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=700&q=80",
      description:
        "100% postgraduate certified educators with an average of 11+ years of pedagogical experience, committed to personalized child mentorship."
    },
    {
      id: "res",
      title: "Consistent 99.4% Distinctions",
      tag: "ACADEMIC HONORS",
      icon: TrendingUp,
      accentColor: "border-t-emerald-600",
      iconBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
      pillBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      badge: "Ivy & Tier-1 Placements",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80",
      description:
        "Proven academic track record with top percentile ranks in board examinations and successful admissions to premier global universities."
    },
    {
      id: "stem",
      title: "STEM & Robotics Innovation",
      tag: "FUTURE READY",
      icon: Cpu,
      accentColor: "border-t-indigo-600",
      iconBg: "bg-indigo-50 text-indigo-700 border-indigo-100",
      pillBg: "bg-indigo-50 text-indigo-800 border-indigo-200",
      badge: "AI & IoT Maker Labs",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80",
      description:
        "Hands-on coding, algorithmic thinking, robotics, and 3D prototyping integrated into the school continuum starting from Grade 3."
    },
    {
      id: "infra",
      title: "15-Acre Eco Smart Campus",
      tag: "SUSTAINABILITY",
      icon: Building2,
      accentColor: "border-t-teal-600",
      iconBg: "bg-teal-50 text-teal-700 border-teal-100",
      pillBg: "bg-teal-50 text-teal-800 border-teal-200",
      badge: "IGBC Green Certified",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80",
      description:
        "Digitally equipped smart classrooms with 4K interactive panels, acoustic insulation, zero-carbon botanical gardens, and solar power."
    },
    {
      id: "sports",
      title: "Championship Sports Complex",
      tag: "ATHLETICS",
      icon: Trophy,
      accentColor: "border-t-amber-600",
      iconBg: "bg-amber-50 text-amber-700 border-amber-100",
      pillBg: "bg-amber-50 text-amber-800 border-amber-200",
      badge: "14+ Sports Disciplines",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=700&q=80",
      description:
        "Olympic-standard 25m swimming pool, synthetic athletic track, FIFA-standard artificial football turf, and certified NIS trainers."
    },
    {
      id: "safe",
      title: "360° Secure & Monitored Campus",
      tag: "STUDENT SAFETY",
      icon: Shield,
      accentColor: "border-t-cyan-600",
      iconBg: "bg-cyan-50 text-cyan-700 border-cyan-100",
      pillBg: "bg-cyan-50 text-cyan-800 border-cyan-200",
      badge: "Zero Compromise Security",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=700&q=80",
      description:
        "AI-assisted CCTV surveillance, RFID smart gate passes, live GPS fleet tracking for parents, and an on-site pediatric clinic."
    },
    {
      id: "arts",
      title: "Fine Arts, Music & Theatre",
      tag: "CREATIVE ARTS",
      icon: Palette,
      accentColor: "border-t-blue-700",
      iconBg: "bg-blue-50 text-blue-700 border-blue-100",
      pillBg: "bg-blue-50 text-blue-800 border-blue-200",
      badge: "Trinity Guildhall Partner",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=700&q=80",
      description:
        "Comprehensive exposure to classical and western music, theatre production, public debate, and international Model UN conferences."
    },
    {
      id: "values",
      title: "Values & Compassionate Ethics",
      tag: "CHARACTER",
      icon: HeartHandshake,
      accentColor: "border-t-emerald-600",
      iconBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
      pillBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      badge: "Social Responsibility",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=700&q=80",
      description:
        "Social outreach projects, emotional intelligence (EQ) guidance, and environmental stewardship seamlessly woven into school life."
    }
  ];

  return (
    <section id="why-choose" className="border-b border-slate-200">
      {/* 1. Flagship Institutional Banner (Inspired by Siddhartha Academy Screenshot) */}
      <div
        className="relative py-16 sm:py-24 text-white overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(13, 43, 69, 0.96) 0%, rgba(22, 59, 101, 0.92) 55%, rgba(15, 35, 60, 0.95) 100%), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold block">
                02 &bull; THE EAK ADVANTAGE
              </span>
              <h2
                className="font-heading font-black text-3xl sm:text-5xl tracking-tight leading-tight"
                style={{ color: "#ffffff" }}
              >
                Why EAK INTERNATIONAL
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                EAK International School is committed to preparing students for successful futures by combining strong academic foundations with real-world skills and social responsibility. With a legacy of excellence, the school offers industry-aligned innovation, modern infrastructure, and a supportive learning environment that fosters curiosity, leadership, and ethical values.
              </p>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Our dual-track CBSE and Cambridge-aligned curriculum allows students to develop deep conceptual mastery that meets global standards. Experienced faculty, hands-on maker labs, athletic arenas, and digital libraries further support every child's growth and admission readiness into premier institutions worldwide.
              </p>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Alongside academic success, our 15-acre green eco-campus promotes environmental stewardship, sports conditioning, and emotional resilience—shaping well-rounded individuals ready to make a positive impact in the world.
              </p>
            </div>

            {/* Middle Stats Grid (4 Big Institutional Numbers) */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-6 sm:gap-8 text-left py-4 sm:py-0 border-y lg:border-y-0 lg:border-x border-slate-700/80 lg:px-8">
              <div>
                <span
                  className="font-heading font-black text-4xl sm:text-5xl tracking-tight block"
                  style={{ color: "#ffffff" }}
                >
                  2002
                </span>
                <span className="font-sans text-xs font-semibold text-slate-300 uppercase tracking-wider block mt-1">
                  Established Year
                </span>
              </div>

              <div>
                <span
                  className="font-heading font-black text-4xl sm:text-5xl tracking-tight block"
                  style={{ color: "#ffffff" }}
                >
                  15,000+
                </span>
                <span className="font-sans text-xs font-semibold text-slate-300 uppercase tracking-wider block mt-1">
                  Successful Alumni
                </span>
              </div>

              <div>
                <span
                  className="font-heading font-black text-4xl sm:text-5xl tracking-tight block"
                  style={{ color: "#ffffff" }}
                >
                  99.4%
                </span>
                <span className="font-sans text-xs font-semibold text-slate-300 uppercase tracking-wider block mt-1">
                  Board Distinctions
                </span>
              </div>

              <div>
                <span
                  className="font-heading font-black text-4xl sm:text-5xl tracking-tight block"
                  style={{ color: "#ffffff" }}
                >
                  1:12
                </span>
                <span className="font-sans text-xs font-semibold text-slate-300 uppercase tracking-wider block mt-1">
                  Teacher-Student Ratio
                </span>
              </div>
            </div>

            {/* Right Column: 3 Accreditation & Quality Badges */}
            <div className="lg:col-span-3 flex flex-row lg:flex-col justify-around lg:justify-center items-center gap-2 sm:gap-6 lg:gap-8">
              {/* Seal 1: CBSE */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-dashed border-amber-400/80 p-1 flex items-center justify-center bg-white/5 backdrop-blur-xs group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white flex flex-col items-center justify-center shadow-lg p-0.5 sm:p-1">
                    <span className="font-heading font-black text-[11px] sm:text-xs md:text-sm leading-none">A++</span>
                    <span className="font-mono text-[7px] sm:text-[8px] font-bold tracking-widest uppercase">CBSE</span>
                  </div>
                </div>
                <span className="font-sans text-[11px] sm:text-xs font-bold text-slate-200 mt-1.5 sm:mt-2 block">
                  CBSE Affiliated
                </span>
                <span className="font-mono text-[8px] sm:text-[9px] text-slate-400">
                  Affiliation No. 1930422
                </span>
              </div>

              {/* Seal 2: Cambridge */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-dashed border-blue-300/80 p-1 flex items-center justify-center bg-white/5 backdrop-blur-xs group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center shadow-lg p-0.5 sm:p-1">
                    <span className="font-heading font-black text-[9px] sm:text-xs md:text-sm leading-none">CAMBRIDGE</span>
                    <span className="font-mono text-[6px] sm:text-[7px] font-bold tracking-widest uppercase">PATHWAY</span>
                  </div>
                </div>
                <span className="font-sans text-[11px] sm:text-xs font-bold text-slate-200 mt-1.5 sm:mt-2 block">
                  Cambridge Aligned
                </span>
                <span className="font-mono text-[8px] sm:text-[9px] text-slate-400">
                  Global Standards
                </span>
              </div>

              {/* Seal 3: IGBC Green School */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-dashed border-emerald-400/80 p-1 flex items-center justify-center bg-white/5 backdrop-blur-xs group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 text-white flex flex-col items-center justify-center shadow-lg p-0.5 sm:p-1">
                    <span className="font-heading font-black text-[10px] sm:text-xs md:text-sm leading-none">IGBC</span>
                    <span className="font-mono text-[7px] sm:text-[8px] font-bold tracking-widest uppercase">GOLD</span>
                  </div>
                </div>
                <span className="font-sans text-[11px] sm:text-xs font-bold text-slate-200 mt-1.5 sm:mt-2 block">
                  Green Campus
                </span>
                <span className="font-mono text-[8px] sm:text-[9px] text-slate-400">
                  Zero Carbon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Eight Foundational Pillar Cards with Visual Image Explanations */}
      <div className="py-16 sm:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="project-tag-pill tag-blue mb-3">
              FOUNDATIONAL PILLARS
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Eight Pillars of Excellence at EAK
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-600 mt-2">
              Every dimension of education is meticulously designed to foster intellect, athletic vigor, and empathy.
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 relative">
            {differentiators.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  style={{
                    top: `calc(96px + ${idx * 8}px)`,
                    zIndex: 10 + idx,
                  }}
                  className={`sticky sm:static bg-white rounded-3xl overflow-hidden border border-slate-200 border-t-4 ${item.accentColor} shadow-lg sm:shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5`}
                >
                  <div>
                    {/* Visual Photo Thumbnail with Tag Overlay */}
                    <div className="aspect-[16/10] w-full relative overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <span className="absolute top-3 right-3 font-mono text-[9.5px] font-bold tracking-wider text-slate-800 uppercase bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-slate-200 shadow-xs">
                        {item.tag}
                      </span>
                    </div>

                    <div className="p-5 sm:p-6 pb-3">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl ${item.iconBg} border flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform`}
                        >
                          <IconComponent className="w-5 h-5 stroke-[2]" />
                        </div>
                        <h4 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                          {item.title}
                        </h4>
                      </div>

                      <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 pt-0">
                    <div className="pt-3 border-t border-slate-100">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-bold ${item.pillBg} border px-3 py-1 rounded-full shadow-xs`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{item.badge}</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
