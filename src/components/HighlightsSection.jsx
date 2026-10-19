"use client";

import { History, Globe, GraduationCap, Trophy, Award, School, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function HighlightsSection({ onOpenModal }) {
  const stats = [
    {
      id: "years",
      number: "25+",
      label: "Years of Heritage",
      sub: "Inspiring curious minds & leaders since 2002",
      icon: History,
      iconBg: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: "alumni",
      number: "15,000+",
      label: "Global Alumni",
      sub: "Graduates thriving in 38+ countries worldwide",
      icon: Globe,
      iconBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      id: "faculty",
      number: "180+",
      label: "Master Educators",
      sub: "100% certified teachers with advanced degrees",
      icon: GraduationCap,
      iconBg: "bg-indigo-50 text-indigo-700 border-indigo-200"
    },
    {
      id: "activities",
      number: "45+",
      label: "Sports & Clubs",
      sub: "Debating, robotics, swimming, MUN & fine arts",
      icon: Trophy,
      iconBg: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      id: "results",
      number: "99.4%",
      label: "Board Distinctions",
      sub: "Consistently topping state and national percentiles",
      icon: Award,
      iconBg: "bg-teal-50 text-teal-700 border-teal-200"
    },
    {
      id: "placement",
      number: "100%",
      label: "University Offers",
      sub: "Personalized admissions counseling for Ivy & Tier-1",
      icon: School,
      iconBg: "bg-blue-50 text-blue-700 border-blue-200"
    }
  ];

  return (
    <section id="highlights" className="border-b border-slate-200">
      {/* 1. Flagship Excellence & Commitment to Quality (Directly Inspired by User Screenshot) */}
      <div
        className="py-16 sm:py-24 relative overflow-hidden"
        style={{
          backgroundColor: "#13293d",
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(30, 64, 175, 0.45) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(5, 150, 105, 0.3) 0%, transparent 60%), linear-gradient(135deg, #13293d 0%, #0d1b2a 100%)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Banner Tagline (Matching User Reference) */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="font-sans text-xs sm:text-sm font-medium tracking-wide text-blue-200/90 max-w-3xl mx-auto">
              A Premier International School Shaping Tomorrow’s Leaders Across Academics, Sports, Creative Arts, and STEM
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: 25 Years of Excellence */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6 text-white pr-0 lg:pr-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold block mb-2">
                  04 &bull; INSTITUTIONAL LEGACY
                </span>

                <div className="flex items-baseline gap-3 mb-6">
                  <span
                    className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-none"
                    style={{ color: "#ffffff" }}
                  >
                    25
                  </span>
                  <div className="flex flex-col">
                    <span
                      className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight"
                      style={{ color: "#ffffff" }}
                    >
                      Years of Excellence
                    </span>
                    <span className="font-mono text-xs text-amber-300 font-semibold uppercase tracking-wider mt-1">
                      ESTABLISHED 2002 &bull; BENGALURU
                    </span>
                  </div>
                </div>

                <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-4">
                  Founded with a vision to revolutionize primary and secondary schooling, <strong>EAK International School</strong> has nurtured over 15,000 curious minds into global achievers. Our academic continuum seamlessly merges CBSE board rigor with Cambridge International inquiry frameworks.
                </p>

                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  With a legacy of educational excellence, the school provides state-of-the-art robotics labs, Olympic sports facilities, and an emotionally intelligent community that empowers every child to excel with integrity.
                </p>
              </div>

              <div>
                <a
                  href="#why-choose"
                  className="btn-outline btn-white inline-flex items-center gap-2 px-6 py-3 text-sm font-bold bg-white text-slate-900 hover:bg-slate-100"
                >
                  <span>Explore School Legacy</span>
                  <ArrowRight className="w-4 h-4 text-slate-800" />
                </a>
              </div>
            </div>

            {/* Right Column: Our Commitment to Quality Card (2x2 Badges matching reference screenshot) */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mb-8 border-b border-slate-100 pb-4">
                  Our Commitment to Quality
                </h3>

                {/* 2x2 Certification Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {/* Badge 1: CBSE */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-300 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center shrink-0 shadow-xs">
                      <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div>
                      <strong className="block font-heading font-black text-base text-slate-900">
                        CBSE Affiliated
                      </strong>
                      <span className="font-mono text-[10px] text-slate-500 uppercase font-bold block mt-0.5">
                        Affiliation No. 1930422
                      </span>
                      <p className="font-sans text-xs text-slate-600 mt-1">
                        Recognized standard curriculum aligned with NEP 2020.
                      </p>
                    </div>
                  </div>

                  {/* Badge 2: Cambridge */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-300 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center justify-center shrink-0 shadow-xs">
                      <Globe className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div>
                      <strong className="block font-heading font-black text-base text-slate-900">
                        Cambridge Pathway
                      </strong>
                      <span className="font-mono text-[10px] text-slate-500 uppercase font-bold block mt-0.5">
                        International Checkpoint
                      </span>
                      <p className="font-sans text-xs text-slate-600 mt-1">
                        Global qualifications recognized by Ivy League universities.
                      </p>
                    </div>
                  </div>

                  {/* Badge 3: IGBC Green School */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-300 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0 shadow-xs">
                      <Award className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div>
                      <strong className="block font-heading font-black text-base text-slate-900">
                        IGBC Gold Certified
                      </strong>
                      <span className="font-mono text-[10px] text-slate-500 uppercase font-bold block mt-0.5">
                        Green School Campus
                      </span>
                      <p className="font-sans text-xs text-slate-600 mt-1">
                        Eco-friendly zero carbon infrastructure & solar power.
                      </p>
                    </div>
                  </div>

                  {/* Badge 4: Clean Dining */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-300 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shrink-0 shadow-xs">
                      <CheckCircle2 className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div>
                      <strong className="block font-heading font-black text-base text-slate-900">
                        Eat Right Certified
                      </strong>
                      <span className="font-mono text-[10px] text-slate-500 uppercase font-bold block mt-0.5">
                        FSSAI Nutrition Standards
                      </span>
                      <p className="font-sans text-xs text-slate-600 mt-1">
                        Organic, chef-prepared hot meals with zero junk food.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Trust Tag */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Verified Quality Standards</span>
                <span className="font-bold text-blue-700">ISO 9001:2015 Educational System</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Key Statistical Highlights Grid (Clean Executive Cards) */}
      <div className="py-16 sm:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="project-tag-pill tag-blue mb-3">
              MEASURABLE ACHIEVEMENTS
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-4xl text-slate-900 tracking-tight">
              A Legacy of Measurable Milestones
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-600 mt-2">
              Credibility built over a quarter-century of academic rigor, athletic championships, and high-impact alumni worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-between group hover:-translate-y-1"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${stat.iconBg} border flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <div className="mb-2">
                    <span className="font-heading font-black text-4xl sm:text-5xl text-[#0f2942] tracking-tight block">
                      {stat.number}
                    </span>
                    <span className="font-heading font-extrabold text-lg text-slate-900 mt-1 block">
                      {stat.label}
                    </span>
                  </div>

                  <p className="font-sans text-sm text-slate-600 max-w-xs font-normal">
                    {stat.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
