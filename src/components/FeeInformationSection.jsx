"use client";

import { useState } from "react";
import { Calculator, Check, ArrowRight } from "lucide-react";

export default function FeeInformationSection({ onOpenModal }) {
  // Calculator state
  const [gradeTier, setGradeTier] = useState("1-5");
  const [payFreq, setPayFreq] = useState("annual");
  const [includeTransport, setIncludeTransport] = useState(false);
  const [includeMeals, setIncludeMeals] = useState(false);

  // Fee Data table as per official assignment specs
  const feeTableData = [
    {
      tier: "1-5",
      name: "Grade 1 – 5",
      level: "Primary School",
      annual: 45000,
      admission: 8000,
      quarterly: 11250
    },
    {
      tier: "6-8",
      name: "Grade 6 – 8",
      level: "Middle School",
      annual: 58000,
      admission: 10000,
      quarterly: 14500
    },
    {
      tier: "9-12",
      name: "Grade 9 – 12",
      level: "Secondary & Senior Secondary",
      annual: 72000,
      admission: 12000,
      quarterly: 18000
    }
  ];

  const currentTierData = feeTableData.find((d) => d.tier === gradeTier) || feeTableData[0];

  // Calculation logic
  const tuition = currentTierData.annual;
  const admission = currentTierData.admission;
  const discount = payFreq === "annual" ? Math.round(tuition * 0.05) : 0;
  const transportFee = includeTransport ? 18000 : 0;
  const mealsFee = includeMeals ? 14000 : 0;

  const totalFirstYear = tuition + admission - discount + transportFee + mealsFee;

  return (
    <section id="fees" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="project-tag-pill tag-blue mb-4">
            09 &bull; TRANSPARENT PRICING
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-slate-900 leading-tight mb-4">
            Transparent Fee Structure (Session 2027–28)
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600">
            Clear, all-inclusive academic tuition. No hidden development surcharges or unannounced mid-term levies.
          </p>
        </div>

        {/* Official Fee Structure: Clean Cards on Mobile, Full Table on Desktop */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm mb-12">
          {/* Mobile Tier Cards View with Stacking Effect (md:hidden) */}
          <div className="md:hidden p-4 flex flex-col gap-4 relative">
            {feeTableData.map((row, idx) => (
              <div
                key={row.tier}
                style={{
                  top: `calc(105px + ${idx * 14}px)`,
                  zIndex: 10 + idx,
                }}
                className="sticky md:static bg-white rounded-2xl border border-slate-200 p-4 shadow-md transition-all"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 mb-3">
                  <div>
                    <h3 className="font-heading font-black text-slate-900 text-base leading-none">
                      {row.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500 font-bold uppercase mt-1 block">
                      {row.level}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Total Year 1</span>
                    <span className="font-heading font-black text-blue-700 text-lg">
                      Rs. {(row.annual + row.admission).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white p-2.5 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block mb-0.5">Annual Tuition</span>
                    <strong className="font-heading text-slate-900 text-sm block">Rs. {row.annual.toLocaleString()}</strong>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block mb-0.5">Admission Fee</span>
                    <strong className="font-heading text-slate-700 text-sm block">Rs. {row.admission.toLocaleString()}</strong>
                  </div>
                  <div className="col-span-2 bg-blue-50/70 p-2.5 rounded-xl border border-blue-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-900">Quarterly Installment:</span>
                    <span className="font-mono font-bold text-blue-700 text-xs">Rs. {row.quarterly.toLocaleString()} / qtr</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View (hidden md:block) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0f2942] text-white font-mono text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">GRADE LEVEL</th>
                  <th className="py-4 px-6 font-bold">ANNUAL TUITION FEE</th>
                  <th className="py-4 px-6 font-bold">ONE-TIME ADMISSION FEE</th>
                  <th className="py-4 px-6 font-bold">TOTAL FIRST YEAR</th>
                  <th className="py-4 px-6 font-bold">QUARTERLY INSTALLMENT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans text-sm">
                {feeTableData.map((row) => (
                  <tr
                    key={row.tier}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="py-5 px-6">
                      <strong className="block font-heading text-slate-900 text-base">
                        {row.name}
                      </strong>
                      <span className="text-xs text-slate-500 font-medium">{row.level}</span>
                    </td>
                    <td className="py-5 px-6 font-bold text-slate-900 text-base">
                      Rs. {row.annual.toLocaleString()}
                    </td>
                    <td className="py-5 px-6 text-slate-600">
                      Rs. {row.admission.toLocaleString()}
                    </td>
                    <td className="py-5 px-6 font-heading font-black text-[#1e40af] text-lg">
                      Rs. {(row.annual + row.admission).toLocaleString()}
                    </td>
                    <td className="py-5 px-6 text-slate-600">
                      Rs. {row.quarterly.toLocaleString()} <span className="text-xs text-slate-400">/ qtr</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Inclusions Strip */}
          <div className="bg-slate-50 p-4 sm:p-5 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
              <span>Core Curriculum &amp; Library</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
              <span>STEM &amp; Robotics Labs</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
              <span>Olympic Sports Facilities</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
              <span>Parent Portal &amp; Smart App</span>
            </div>
          </div>
        </div>

        {/* Interactive Fee Estimator Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-md">
          <div className="flex items-center gap-3 pb-6 border-b border-slate-100 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-black text-2xl text-slate-900">
                Interactive Fee Estimator
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-500">
                Simulate optional transport, meal plans, and annual discount incentives
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <div className="md:col-span-7 space-y-6">
              {/* Select Grade Tier */}
              <div>
                <label className="type-label form-label block mb-2 text-slate-700">
                  Select Grade Range
                </label>
                <select
                  value={gradeTier}
                  onChange={(e) => setGradeTier(e.target.value)}
                  className="form-select font-semibold"
                >
                  <option value="1-5">Grade 1 – 5 (Annual Tuition: Rs. 45,000)</option>
                  <option value="6-8">Grade 6 – 8 (Annual Tuition: Rs. 58,000)</option>
                  <option value="9-12">Grade 9 – 12 (Annual Tuition: Rs. 72,000)</option>
                </select>
              </div>

              {/* Payment Frequency */}
              <div>
                <label className="type-label form-label block mb-2 text-slate-700">
                  Payment Frequency
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPayFreq("annual")}
                    className={`p-3.5 rounded-2xl text-xs font-bold border transition-all text-left ${
                      payFreq === "annual"
                        ? "bg-[#1e40af] text-white border-[#1e40af] shadow-md shadow-blue-900/20"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span className="block font-heading text-sm mb-0.5">Annual Payment</span>
                    <span className="text-[11px] opacity-80">5% Tuition Discount</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPayFreq("quarterly")}
                    className={`p-3.5 rounded-2xl text-xs font-bold border transition-all text-left ${
                      payFreq === "quarterly"
                        ? "bg-[#1e40af] text-white border-[#1e40af] shadow-md shadow-blue-900/20"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span className="block font-heading text-sm mb-0.5">Quarterly Split</span>
                    <span className="text-[11px] opacity-80">4 Equal Installments</span>
                  </button>
                </div>
              </div>

              {/* Optional Addons */}
              <div>
                <label className="type-label form-label block mb-2 text-slate-700">
                  Optional Services
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeTransport}
                      onChange={(e) => setIncludeTransport(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600 accent-blue-600"
                    />
                    <div className="flex-1 flex justify-between text-xs font-medium text-slate-800">
                      <span>AC Bus Transport (Door-to-Door)</span>
                      <strong className="text-slate-900">+Rs. 18,000 / yr</strong>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeMeals}
                      onChange={(e) => setIncludeMeals(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600 accent-blue-600"
                    />
                    <div className="flex-1 flex justify-between text-xs font-medium text-slate-800">
                      <span>Nutritious Hot Lunch Program</span>
                      <strong className="text-slate-900">+Rs. 14,000 / yr</strong>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Breakdown Summary Box */}
            <div className="md:col-span-5 bg-slate-50 rounded-3xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider block mb-4">
                  ESTIMATED BREAKDOWN
                </span>

                <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-700">
                  <div className="flex justify-between">
                    <span>Annual Tuition Fee:</span>
                    <strong className="text-slate-900">Rs. {tuition.toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>One-Time Admission Fee:</span>
                    <strong className="text-slate-900">Rs. {admission.toLocaleString()}</strong>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Annual Payment Rebate (5%):</span>
                      <span>-Rs. {discount.toLocaleString()}</span>
                    </div>
                  )}
                  {includeTransport && (
                    <div className="flex justify-between text-slate-700">
                      <span>Transport Service:</span>
                      <strong className="text-slate-900">+Rs. {transportFee.toLocaleString()}</strong>
                    </div>
                  )}
                  {includeMeals && (
                    <div className="flex justify-between text-slate-700">
                      <span>Nutritious Meals:</span>
                      <strong className="text-slate-900">+Rs. {mealsFee.toLocaleString()}</strong>
                    </div>
                  )}
                </div>

                <div className="my-5 border-t border-slate-200"></div>

                <div className="flex items-baseline justify-between mb-2">
                  <div>
                    <span className="font-heading font-extrabold text-base text-slate-900 block">
                      Total Year 1:
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {payFreq === "annual" ? "Single Annual Settlement" : "Or split quarterly"}
                    </span>
                  </div>
                  <span className="font-heading font-black text-2xl sm:text-3xl text-[#1e40af]">
                    Rs. {totalFirstYear.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenModal("enquiry")}
                className="btn-outline w-full mt-6 justify-center py-3"
              >
                <span>Apply with this Fee Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Scholarships Policy Box */}
        <div className="mt-8 p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-center max-w-4xl mx-auto">
          <p className="font-sans text-xs sm:text-sm text-amber-900 leading-relaxed font-normal">
            <strong>Scholarships &amp; Concessions:</strong> EAK International School offers up to <strong>40% merit tuition waivers</strong> for exceptional performance in state/national sports and academic olympiads. A <strong>10% sibling concession</strong> is applicable to younger siblings.
          </p>
        </div>
      </div>
    </section>
  );
}
