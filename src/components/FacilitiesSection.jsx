"use client";

import { useState } from "react";
import { Sparkles, Eye, Check } from "lucide-react";

export default function FacilitiesSection({ onSelectFacility }) {
  const [filter, setFilter] = useState("all");

  const facilities = [
    {
      id: "classrooms",
      category: "academic",
      tag: "ACADEMIC",
      title: "Interactive Smart Classrooms",
      desc: "Equipped with 75-inch 4K touchscreen panels, ergonomic modular furniture, acoustic insulation, and high-speed Wi-Fi.",
      specs: ["4K Touch Displays", "Acoustic Wall Panels", "Ergonomic Desks"],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "labs",
      category: "academic",
      tag: "ACADEMIC",
      title: "Advanced STEM & Robotics Hub",
      desc: "Four separate research-grade laboratories for Physics, Chemistry, Biology, and AI/Robotics with 3D printers and micro-controllers.",
      specs: ["AI & IoT Kits", "Fume Hood Safety", "3D Prototyping"],
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "library",
      category: "academic",
      tag: "ACADEMIC",
      title: "Digital Knowledge Commons",
      desc: "Over 35,000 physical volumes, international subscriptions (JSTOR, National Geographic), digital Kindle reading stations, and quiet pods.",
      specs: ["35,000+ Volumes", "JSTOR Subscriptions", "Quiet Study Pods"],
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "sports",
      category: "sports",
      tag: "SPORTS",
      title: "Olympic Half-Size Pool & Arena",
      desc: "Temperature-regulated 25m swimming pool, FIFA-grade artificial turf football pitch, floodlit basketball courts, and NIS certified coaching.",
      specs: ["25m Regulated Pool", "FIFA-Spec Turf", "Certified Coaches"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "transport",
      category: "campus",
      tag: "CAMPUS LIFE",
      title: "GPS-Tracked AC Transport Fleet",
      desc: "Safe air-conditioned buses covering 65+ city routes, live parent tracking app, speed governors, female attendants, and CCTV cameras.",
      specs: ["Live GPS App", "Speed Governors", "Female Attendants"],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "infirmary",
      category: "campus",
      tag: "CAMPUS LIFE",
      title: "Full-Time Pediatric Infirmary",
      desc: "Resident pediatrician, certified nursing staff, 6 observation beds, emergency oxygen, and on-call ambulance partnership.",
      specs: ["Resident Doctor", "Emergency Oxygen", "Hospital Tie-ups"],
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cafeteria",
      category: "campus",
      tag: "CAMPUS LIFE",
      title: "Hygienic Nutri-Cafeteria",
      desc: "Dietitian-curated balanced vegetarian and non-vegetarian hot lunches prepared in an ISO 22000 certified commercial stainless-steel kitchen.",
      specs: ["Organic Produce", "Dietitian Curated", "Zero Junk Food"],
      image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "theatre",
      category: "sports",
      tag: "CREATIVE ARTS",
      title: "800-Seat Performing Arts Hall",
      desc: "Acoustically treated amphitheatre, professional theatrical lighting, black box drama studio, and recording booth.",
      specs: ["800 Seater", "Sound Recording", "Black Box Studio"],
      image: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=700&q=80"
    }
  ];

  const filtered = filter === "all" ? facilities : facilities.filter((f) => f.category === filter);

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="project-tag-pill tag-blue mb-3">
            05 &bull; INFRASTRUCTURE EXCELLENCE
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-5xl tracking-tight text-slate-900 leading-tight mb-3 sm:mb-4">
            World-Class Campus Facilities
          </h2>
          <p className="font-sans text-sm sm:text-lg text-slate-600">
            A 15-acre green ecosystem engineered for intellectual focus, athletic excellence, safety, and creative expression.
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === "all"
                ? "bg-blue-700 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
            }`}
          >
            All Facilities (8)
          </button>
          <button
            onClick={() => setFilter("academic")}
            className={`px-4 py-2 rounded-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === "academic"
                ? "bg-blue-700 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
            }`}
          >
            Academics &amp; Labs
          </button>
          <button
            onClick={() => setFilter("sports")}
            className={`px-4 py-2 rounded-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === "sports"
                ? "bg-blue-700 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
            }`}
          >
            Sports &amp; Arts
          </button>
          <button
            onClick={() => setFilter("campus")}
            className={`px-4 py-2 rounded-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === "campus"
                ? "bg-blue-700 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
            }`}
          >
            Safety &amp; Campus
          </button>
        </div>

        {/* Facilities Grid: Stacking cards on mobile, 4-col grid on desktop */}
        <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 relative">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onSelectFacility(item)}
              style={{
                top: `calc(126px + ${idx * 8}px)`,
                zIndex: 10 + idx,
              }}
              className="sticky sm:static bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-blue-400 shadow-lg sm:shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1.5"
            >
              <div className="aspect-[16/10] w-full relative overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 project-tag-pill tag-blue text-[10px]">
                  {item.tag}
                </span>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-sans text-xs font-semibold backdrop-blur-xs">
                  <Eye className="w-4 h-4" />
                  <span>View Details</span>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 mb-1.5 leading-snug group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {item.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md"
                    >
                      <Check className="w-3 h-3 text-blue-700" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
