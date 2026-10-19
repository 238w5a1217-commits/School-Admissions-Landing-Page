"use client";

import { useState, useEffect } from "react";
import { AlertCircle, CheckCircle2, CalendarClock, Award, FileCheck, Flag } from "lucide-react";

export default function ImportantDatesSection() {
  // Live Countdown to Early Bird Deadline
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 14,
    minutes: 32,
    seconds: 8
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 45);
    targetDate.setHours(targetDate.getHours() + 14);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dates = [
    {
      month: "OCTOBER",
      day: "15",
      year: "2026",
      title: "Application Window Opens",
      desc: "Online registration portal opens & physical prospectus distribution begins for Grades 1 to 12.",
      status: "ACTIVE NOW",
      statusType: "active",
      icon: CheckCircle2
    },
    {
      month: "DECEMBER",
      day: "20",
      year: "2026",
      title: "Early Bird Application Deadline",
      desc: "Last date to submit completed forms to secure early interaction slots and fee concessions.",
      status: "CLOSING SOON",
      statusType: "urgent",
      icon: AlertCircle
    },
    {
      month: "JANUARY",
      day: "10–15",
      year: "2027",
      title: "Diagnostic Student Interactions",
      desc: "Conversational assessment for primary & diagnostic skill evaluations for middle & secondary levels.",
      status: "UPCOMING",
      statusType: "upcoming",
      icon: CalendarClock
    },
    {
      month: "JANUARY",
      day: "25",
      year: "2027",
      title: "Merit Results & Offer Letters",
      desc: "Provisional admission offer letters dispatched via the online parent portal and SMS notification.",
      status: "UPCOMING",
      statusType: "upcoming",
      icon: Award
    },
    {
      month: "FEBRUARY",
      day: "15",
      year: "2027",
      title: "Final Document & Fee Deadline",
      desc: "Completion of original document physical verification and first term enrollment fee settlement.",
      status: "UPCOMING",
      statusType: "upcoming",
      icon: FileCheck
    },
    {
      month: "APRIL",
      day: "05",
      year: "2027",
      title: "Session 2027–28 Begins!",
      desc: "Grand student-parent orientation, campus kit distribution, and the first day of the academic session.",
      status: "UPCOMING",
      statusType: "upcoming",
      icon: Flag
    }
  ];

  return (
    <section id="dates" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="project-tag-pill tag-blue mb-4">
            07 &bull; ADMISSION SCHEDULE
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-slate-900 leading-tight mb-4">
            Important Dates for Session 2027–28
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600">
            Keep track of key milestones to ensure your child's interaction and enrollment are confirmed ahead of deadlines.
          </p>
        </div>

        {/* Live Countdown Banner Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto mb-14 text-center shadow-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-[11px] font-bold tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
            NEXT MAJOR MILESTONE
          </div>
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mb-5">
            Early Bird Application Deadline Closes In:
          </h3>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
            <div className="bg-slate-50 rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-xs">
              <span className="font-heading font-black text-2xl sm:text-4xl text-[#0f2942] block">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Days</span>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-xs">
              <span className="font-heading font-black text-2xl sm:text-4xl text-[#0f2942] block">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Hours</span>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-xs">
              <span className="font-heading font-black text-2xl sm:text-4xl text-[#0f2942] block">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Mins</span>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-xs">
              <span className="font-heading font-black text-2xl sm:text-4xl text-amber-600 block">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Secs</span>
            </div>
          </div>
        </div>

        {/* 6 Dates Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dates.map((item, idx) => {
            const IconComp = item.icon;
            const isUrgent = item.statusType === "urgent";
            const isActive = item.statusType === "active";

            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  isUrgent
                    ? "border-amber-400 shadow-md ring-1 ring-amber-300"
                    : isActive
                    ? "border-blue-400 shadow-sm"
                    : "border-slate-200 hover:border-slate-300 shadow-sm"
                }`}
              >
                <div>
                  {/* Status Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        isUrgent
                          ? "bg-amber-100 text-amber-800 border border-amber-300"
                          : isActive
                          ? "bg-blue-50 text-blue-800 border border-blue-200"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {item.status}
                    </span>
                    <IconComp className={`w-5 h-5 ${isUrgent ? "text-amber-600" : "text-slate-400"}`} />
                  </div>

                  {/* Calendar Block */}
                  <div className="mb-4">
                    <span className="font-mono text-xs font-bold text-slate-400 uppercase block">
                      {item.month} {item.year}
                    </span>
                    <span className="font-heading font-black text-3xl sm:text-4xl text-slate-900 block">
                      {item.day}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Session 2027–28</span>
                  <span className="font-bold">Stage {idx + 1} of 6</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
