"use client";

import { FileText, Printer, ShieldCheck, Info } from "lucide-react";

export default function RequiredDocumentsSection() {
  const documents = [
    {
      id: "doc-1",
      title: "Child's Official Birth Certificate",
      category: "MANDATORY",
      desc: "Municipal Corporation or Panchayat issued original certificate certifying exact date of birth and parentage.",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: "doc-2",
      title: "Previous Academic Records & Transfer Certificate (TC)",
      category: "MANDATORY",
      desc: "Report cards of the last two academic years along with the original TC countersigned by the education board (for Grade 2 & above).",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: "doc-3",
      title: "Recent Passport-Size Photographs",
      category: "MANDATORY",
      desc: "6 recent color photographs of the child (white background) and 2 photographs of each parent/guardian.",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: "doc-4",
      title: "Proof of Current Residential Address",
      category: "MANDATORY",
      desc: "Valid utility bill (electricity, piped gas, water), registered rent agreement, Aadhaar card, or passport.",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: "doc-5",
      title: "Parent / Guardian Photo ID Proof",
      category: "MANDATORY",
      desc: "Government-issued photo identification (Aadhaar Card, Passport, Voter ID, or Driving License) of both parents.",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: "doc-6",
      title: "Medical Fitness & Immunization Chart",
      category: "HEALTH RECORD",
      desc: "Certified vaccination history and a medical certificate from a registered pediatrician noting blood group and allergies.",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    }
  ];

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section id="documents" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="project-tag-pill tag-blue mb-4">
            08 &bull; ADMISSION VERIFICATION
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-slate-900 leading-tight mb-4">
            Required Documents for Admission
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600">
            Keep these records ready for upload during the digital application and physical verification during final enrollment.
          </p>
        </div>

        {/* Clean, Simple & Neat Document Grid (No checkboxes/ticks, standard executive styling) */}
        <div className="max-w-4xl mx-auto">
          {/* Top Bar with print action */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-200">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />
              <span>Official Verification Checklist ({documents.length} Items)</span>
            </div>
            <button
              onClick={handlePrint}
              className="btn-outline btn-white btn-sm self-end sm:self-auto cursor-pointer"
              aria-label="Print Document Checklist"
            >
              <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700" />
              <span className="text-xs">Print Checklist</span>
            </button>
          </div>

          {/* Document cards: Stacking cards effect on mobile, 2-column grid on desktop */}
          <div className="flex flex-col gap-3.5 md:grid md:grid-cols-2 md:gap-4 mb-8 relative">
            {documents.map((doc, idx) => (
              <div
                key={doc.id}
                style={{
                  top: `calc(105px + ${idx * 8}px)`,
                  zIndex: 10 + idx,
                }}
                className="sticky md:static bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-blue-300 transition-all shadow-md md:shadow-xs flex items-start gap-3.5 sm:gap-4"
              >
                {/* Document Icon */}
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 shadow-xs">
                  <FileText className="w-5 h-5" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-mono text-[10px] font-bold text-slate-400">
                      DOC 0{idx + 1}
                    </span>
                    <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border ${doc.badgeColor}`}>
                      {doc.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-slate-900 mb-1 leading-snug">
                    {doc.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {doc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Verification Notice */}
          <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <p className="font-sans text-xs text-blue-900 leading-relaxed font-normal">
              <strong>Verification Note:</strong> Scanned PDF copies can be uploaded during the initial application. Original documents must be presented for physical in-person verification on the enrollment interaction day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
