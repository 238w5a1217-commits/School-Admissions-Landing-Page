"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-12 font-sans text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <a href="#hero" className="flex items-center gap-3 mb-4 group" aria-label="EAK International School">
              <div className="w-10 h-10 rounded-2xl bg-[#0f2942] text-amber-400 flex items-center justify-center font-heading font-black text-lg shadow-md border border-slate-700">
                EAK
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg tracking-tight text-white leading-none">
                  EAK INTERNATIONAL SCHOOL
                </span>
                <span className="font-mono text-[9px] font-semibold text-slate-400 tracking-widest uppercase mt-0.5">
                  Academic Session 2027–28
                </span>
              </div>
            </a>
            <p className="font-sans text-sm text-slate-300 max-w-sm mb-6 leading-relaxed">
              A premier 15-acre international institution committed to intellectual inquiry, championship athletics, robotics innovation, and compassionate ethical character.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-slate-800 text-slate-300 border border-slate-700 font-mono text-[10px] px-2.5 py-1 rounded-full">
                CBSE Affiliation No. 1930422
              </span>
              <span className="bg-blue-950/70 text-blue-300 border border-blue-800/60 font-mono text-[10px] px-2.5 py-1 rounded-full">
                School Code: 45108
              </span>
            </div>
          </div>

          {/* Quick Admissions Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Admissions
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#why-choose" className="hover:text-amber-400 transition-colors">Why Choose EAK</a></li>
              <li><a href="#academics" className="hover:text-amber-400 transition-colors">Curricular Levels</a></li>
              <li><a href="#process" className="hover:text-amber-400 transition-colors">5-Step Process</a></li>
              <li><a href="#dates" className="hover:text-amber-400 transition-colors">Important Dates</a></li>
              <li><a href="#documents" className="hover:text-amber-400 transition-colors">Required Records</a></li>
              <li><a href="#fees" className="hover:text-amber-400 transition-colors">Fee Structure</a></li>
            </ul>
          </div>

          {/* Campus Life */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Campus Life
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#facilities" className="hover:text-amber-400 transition-colors">Smart Classrooms</a></li>
              <li><a href="#facilities" className="hover:text-amber-400 transition-colors">STEM &amp; Robotics Hub</a></li>
              <li><a href="#facilities" className="hover:text-amber-400 transition-colors">Olympic Sports Complex</a></li>
              <li><a href="#facilities" className="hover:text-amber-400 transition-colors">Digital Library</a></li>
              <li><a href="#facilities" className="hover:text-amber-400 transition-colors">AC Bus Fleet</a></li>
              <li><a href="#testimonials" className="hover:text-amber-400 transition-colors">Parent Reviews</a></li>
            </ul>
          </div>

          {/* Office Address */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Admissions Desk
            </h4>
            <address className="not-italic space-y-3 leading-relaxed text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">EAK International Knowledge Campus, Campus Boulevard, Sector 14, Silicon Valley Corridor, Bengaluru 560100</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-300">+91 98765 43210 / +91 (80) 4123 9900</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-300">admissions@eakschool.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-300">Monday – Saturday (8:30 AM – 4:30 PM)</span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <p>
            &copy; 2026–2027 EAK International School. All rights reserved. EAK Pustak Pvt. Ltd.
          </p>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#hero" className="hover:text-slate-300 transition-colors">Terms of Admission</a>
            <span>&bull;</span>
            <a href="#hero" className="hover:text-slate-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
