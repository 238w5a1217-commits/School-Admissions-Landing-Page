"use client";

import { useState, useRef } from "react";
import { X, CheckCircle2, Calendar, Phone, ArrowRight, Check, CalendarCheck, PhoneForwarded, ChevronDown, Sparkles, User, GraduationCap, ArrowDown } from "lucide-react";

export function EnquiryModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    grade: "Grade 1",
    parentName: "",
    phone: "",
    email: "",
    mode: "Phone Call",
    notes: ""
  });
  const [refNumber, setRefNumber] = useState("");
  const [activeStep, setActiveStep] = useState(1);

  // Input & section refs for smooth auto-scrolling
  const studentNameRef = useRef(null);
  const gradeRef = useRef(null);
  const parentNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const modeRef = useRef(null);
  const notesRef = useRef(null);
  const submitSectionRef = useRef(null);

  if (!isOpen) return null;

  const scrollToEl = (ref, focus = false) => {
    if (ref && ref.current) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
        if (focus) {
          ref.current.focus({ preventScroll: true });
        }
      }, 90);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = `#EAK-2027-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefNumber(randomRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setActiveStep(1);
    setFormData({
      studentName: "",
      grade: "Grade 1",
      parentName: "",
      phone: "",
      email: "",
      mode: "Phone Call",
      notes: ""
    });
    onClose();
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-enquiry-title">
      <div className="modal-box modal-large">
        {/* Top Header Row with Session Badge & Close Button */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="project-tag-pill tag-blue text-[10px] sm:text-xs py-0.5 px-2.5">
              🎓 SESSION 2027–28
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10.5px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Admissions Open
            </span>
          </div>
          <button
            onClick={handleReset}
            className="modal-close-x"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!submitted ? (
          <div>
            <div className="mb-3">
              <h3
                id="modal-enquiry-title"
                className="font-heading font-black text-lg sm:text-2xl text-slate-900 tracking-tight leading-snug"
              >
                Admission Enquiry &amp; Application
              </h3>
              <p className="font-sans text-xs text-slate-500 mt-0.5">
                Fill out the quick 2-step form. An Admissions Counselor will connect with you within 24 hours.
              </p>
            </div>

            {/* Interactive Step Navigator Pills */}
            <div className="grid grid-cols-2 gap-2 mb-3 sm:mb-4 bg-slate-50 p-1.5 rounded-2xl border border-slate-200/80">
              <button
                type="button"
                onClick={() => {
                  setActiveStep(1);
                  scrollToEl(studentNameRef, true);
                }}
                className={`flex items-center justify-center gap-2 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeStep === 1
                    ? "bg-white text-blue-700 shadow-xs border border-slate-200/60"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                  formData.studentName.trim().length > 0
                    ? "bg-emerald-500 text-white"
                    : "bg-blue-100 text-blue-800"
                }`}>
                  {formData.studentName.trim().length > 0 ? "✓" : "1"}
                </span>
                <span>Student Info</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveStep(2);
                  scrollToEl(parentNameRef, true);
                }}
                className={`flex items-center justify-center gap-2 py-1.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeStep === 2
                    ? "bg-white text-blue-700 shadow-xs border border-slate-200/60"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                  formData.parentName && formData.phone && formData.email
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-200 text-slate-700"
                }`}>
                  {formData.parentName && formData.phone && formData.email ? "✓" : "2"}
                </span>
                <span>Parent &amp; Contact</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Step 1: Student Details */}
              <div className="p-3.5 rounded-2xl bg-blue-50/40 border border-blue-100/90 space-y-2.5">
                <div className="flex items-center justify-between pb-0.5">
                  <span className="font-mono text-[10px] font-bold text-blue-800 tracking-wider uppercase flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                    STEP 1 &bull; STUDENT DETAILS
                  </span>
                  <span className="text-[10px] font-semibold text-blue-600 bg-blue-100/70 px-2 py-0.5 rounded-full">
                    Academic Info
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label className="form-label">Child's Full Name *</label>
                    <input
                      ref={studentNameRef}
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          scrollToEl(gradeRef, true);
                        }
                      }}
                      onFocus={() => setActiveStep(1)}
                      placeholder="e.g. Aryan Sharma"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Grade Applying For *</label>
                    <select
                      ref={gradeRef}
                      value={formData.grade}
                      onChange={(e) => {
                        setFormData({ ...formData, grade: e.target.value });
                        setActiveStep(2);
                        scrollToEl(parentNameRef, true);
                      }}
                      onFocus={() => setActiveStep(1)}
                      className="form-select font-medium"
                      required
                    >
                      <option value="Grade 1">Grade 1 (Age 6+)</option>
                      <option value="Grade 2">Grade 2</option>
                      <option value="Grade 3">Grade 3</option>
                      <option value="Grade 4">Grade 4</option>
                      <option value="Grade 5">Grade 5</option>
                      <option value="Grade 6">Grade 6</option>
                      <option value="Grade 7">Grade 7</option>
                      <option value="Grade 8">Grade 8</option>
                      <option value="Grade 9">Grade 9</option>
                      <option value="Grade 10">Grade 10</option>
                      <option value="Grade 11 Science">Grade 11 (Science PCM/PCB)</option>
                      <option value="Grade 11 Commerce">Grade 11 (Commerce)</option>
                      <option value="Grade 11 Humanities">Grade 11 (Humanities)</option>
                      <option value="Grade 12">Grade 12</option>
                    </select>
                  </div>
                </div>

                {/* Quick Auto-Advance button */}
                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveStep(2);
                      scrollToEl(parentNameRef, true);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 bg-white px-3 py-1.5 rounded-lg border border-blue-200 shadow-2xs hover:bg-blue-50 transition-all cursor-pointer"
                  >
                    <span>Next: Parent &amp; Contact Details</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Step 2: Parent & Contact Details */}
              <div
                className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/90 space-y-2.5"
              >
                <div className="flex items-center justify-between pb-0.5">
                  <span className="font-mono text-[10px] font-bold text-slate-700 tracking-wider uppercase flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    STEP 2 &bull; PARENT &amp; CONTACT DETAILS
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded-full">
                    Verification
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label className="form-label">Parent / Guardian Name *</label>
                    <input
                      ref={parentNameRef}
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          scrollToEl(phoneRef, true);
                        }
                      }}
                      onFocus={() => setActiveStep(2)}
                      placeholder="e.g. Rajesh Sharma"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Contact Phone *</label>
                    <input
                      ref={phoneRef}
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData({ ...formData, phone: val });
                        const digits = val.replace(/\D/g, "");
                        if (digits.length === 10) {
                          scrollToEl(emailRef, true);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          scrollToEl(emailRef, true);
                        }
                      }}
                      onFocus={() => setActiveStep(2)}
                      placeholder="+91 98765 43210"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      ref={emailRef}
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          scrollToEl(modeRef, true);
                        }
                      }}
                      onBlur={() => {
                        if (formData.email.includes("@") && formData.email.includes(".")) {
                          scrollToEl(modeRef, false);
                        }
                      }}
                      onFocus={() => setActiveStep(2)}
                      placeholder="rajesh.sharma@example.com"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Preferred Contact Mode</label>
                    <select
                      ref={modeRef}
                      value={formData.mode}
                      onChange={(e) => {
                        setFormData({ ...formData, mode: e.target.value });
                        scrollToEl(notesRef, true);
                      }}
                      onFocus={() => setActiveStep(2)}
                      className="form-select font-medium"
                    >
                      <option value="Phone Call">Direct Phone Call</option>
                      <option value="WhatsApp">WhatsApp Message</option>
                      <option value="Email">Email Communication</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label flex items-center justify-between">
                    <span>Questions or Current School Info</span>
                    <span className="text-[10px] text-slate-400 font-sans font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    ref={notesRef}
                    rows="2"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        scrollToEl(submitSectionRef, false);
                      }
                    }}
                    onFocus={() => setActiveStep(2)}
                    placeholder="Previous board, transport queries, or specific questions..."
                    className="form-textarea resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Section: Consent Checkbox & Big Action Button */}
              <div ref={submitSectionRef} className="pt-2 pb-4 space-y-3">
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    defaultChecked
                    className="mt-0.5 w-4 h-4 rounded text-blue-700 accent-blue-700 shrink-0 cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-[11px] text-slate-600 leading-snug cursor-pointer select-none">
                    I authorize EAK International School to contact me regarding admission updates and interaction schedules.
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-outline w-full justify-center py-3 text-sm sm:text-base font-bold shadow-md bg-blue-700 hover:bg-blue-800"
                >
                  <span>Submit Admission Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center font-mono text-[9.5px] text-slate-400 mt-1">
                  🔒 100% Confidential &bull; Official Admissions Desk
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-3 sm:py-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-emerald-200 shadow-xs">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900 mb-1.5">
              Enquiry Received Successfully!
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-5">
              Thank you for expressing interest in <strong>EAK International School</strong> for Academic Session 2027–28.
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs sm:text-sm font-sans text-slate-800 mb-5">
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Application Reference:</span>
                <strong className="font-mono text-sm text-blue-700">{refNumber}</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Applicant Name:</span>
                <strong className="text-slate-900">{formData.studentName}</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Grade Applying For:</span>
                <strong className="text-slate-900">{formData.grade}</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Digital Prospectus:</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Dispatched to email
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-slate-500 max-w-sm mx-auto mb-5">
              Our Senior Admissions Counselor will contact you via {formData.mode} within 24 business hours to arrange the next steps.
            </p>

            <button onClick={handleReset} className="btn-outline px-8 py-2.5">
              <span>Close Window</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function CampusTourModal({ isOpen, onClose }) {
  const [booked, setBooked] = useState(false);
  const [tourData, setTourData] = useState({
    parentName: "",
    phone: "",
    date: "",
    slot: "Morning (09:30 AM – 11:00 AM)",
    visitors: "3 Persons (Parents + Child)"
  });

  const tourParentRef = useRef(null);
  const tourPhoneRef = useRef(null);
  const tourDateRef = useRef(null);
  const tourSlotRef = useRef(null);
  const tourSubmitRef = useRef(null);

  if (!isOpen) return null;

  const scrollToEl = (ref, focus = false) => {
    if (ref && ref.current) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
        if (focus) {
          ref.current.focus({ preventScroll: true });
        }
      }, 90);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  const handleClose = () => {
    setBooked(false);
    onClose();
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-tour-title">
      <div className="modal-box">
        {/* Top Header Row */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
          <span className="project-tag-pill tag-blue text-[10px] sm:text-xs py-0.5 px-2.5">
            🏛️ CAMPUS IMMERSION
          </span>
          <button onClick={handleClose} className="modal-close-x" aria-label="Close modal">
            <X className="w-4 h-4" />
          </button>
        </div>

        {!booked ? (
          <div>
            <div className="mb-3 sm:mb-4">
              <h3 id="modal-tour-title" className="font-heading font-black text-lg sm:text-2xl text-slate-900 tracking-tight leading-snug">
                Book a Campus Tour
              </h3>
              <p className="font-sans text-xs text-slate-500 mt-0.5">
                Experience our 15-acre infrastructure, meet educators, and tour STEM labs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="form-label">Parent / Guardian Name *</label>
                <input
                  ref={tourParentRef}
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={tourData.parentName}
                  onChange={(e) => setTourData({ ...tourData, parentName: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      scrollToEl(tourPhoneRef, true);
                    }
                  }}
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Contact Phone *</label>
                <input
                  ref={tourPhoneRef}
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={tourData.phone}
                  onChange={(e) => {
                    const val = e.target.value;
                    setTourData({ ...tourData, phone: val });
                    const digits = val.replace(/\D/g, "");
                    if (digits.length === 10) {
                      scrollToEl(tourDateRef, true);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      scrollToEl(tourDateRef, true);
                    }
                  }}
                  className="form-input"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="form-label">Preferred Date *</label>
                  <input
                    ref={tourDateRef}
                    type="date"
                    required
                    value={tourData.date}
                    onChange={(e) => {
                      setTourData({ ...tourData, date: e.target.value });
                      scrollToEl(tourSlotRef, true);
                    }}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Time Slot *</label>
                  <select
                    ref={tourSlotRef}
                    value={tourData.slot}
                    onChange={(e) => {
                      setTourData({ ...tourData, slot: e.target.value });
                      scrollToEl(tourSubmitRef, false);
                    }}
                    className="form-select font-medium"
                  >
                    <option value="Morning (09:30 AM – 11:00 AM)">Morning (09:30 AM – 11:00 AM)</option>
                    <option value="Mid-Day (11:30 AM – 01:00 PM)">Mid-Day (11:30 AM – 01:00 PM)</option>
                    <option value="Afternoon (02:30 PM – 04:00 PM)">Afternoon (02:30 PM – 04:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="form-label">Number of Visitors</label>
                <select
                  value={tourData.visitors}
                  onChange={(e) => {
                    setTourData({ ...tourData, visitors: e.target.value });
                    scrollToEl(tourSubmitRef, false);
                  }}
                  className="form-select font-medium"
                >
                  <option value="2 Persons (Parent + Child)">2 Persons (Parent + Child)</option>
                  <option value="3 Persons (Parents + Child)">3 Persons (Parents + Child)</option>
                  <option value="4+ Persons">4+ Persons</option>
                </select>
              </div>

              <div ref={tourSubmitRef} className="pt-2 pb-4">
                <button type="submit" className="btn-outline w-full justify-center py-3 text-sm sm:text-base font-bold shadow-md bg-blue-700 hover:bg-blue-800">
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Confirm Campus Visit Slot</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-3 sm:py-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-blue-200 shadow-xs">
              <CalendarCheck className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900 mb-1.5">
              Campus Visit Confirmed!
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mb-5">
              We look forward to welcoming your family to EAK International School.
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left max-w-sm mx-auto space-y-2 text-xs sm:text-sm font-sans text-slate-800 mb-5">
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Pass Code:</span>
                <strong className="font-mono text-blue-700">#VP-EAK-7782</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Date &amp; Slot:</span>
                <strong className="text-slate-900">{tourData.date || "Tomorrow"} &bull; {tourData.slot.split(" ")[0]}</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Reporting Desk:</span>
                <span className="text-slate-800 font-medium">Admissions Center, Admin Block</span>
              </div>
            </div>

            <button onClick={handleClose} className="btn-outline px-8 py-2.5">
              <span>Done</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function CallbackModal({ isOpen, onClose }) {
  const [requested, setRequested] = useState(false);
  const [cbName, setCbName] = useState("");
  const [cbPhone, setCbPhone] = useState("");
  const [cbTime, setCbTime] = useState("Within 30 Minutes");

  const cbNameRef = useRef(null);
  const cbPhoneRef = useRef(null);
  const cbTimeRef = useRef(null);
  const cbSubmitRef = useRef(null);

  if (!isOpen) return null;

  const scrollToEl = (ref, focus = false) => {
    if (ref && ref.current) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
        if (focus) {
          ref.current.focus({ preventScroll: true });
        }
      }, 90);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequested(true);
  };

  const handleClose = () => {
    setRequested(false);
    onClose();
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-cb-title">
      <div className="modal-box">
        {/* Top Header Row */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
          <span className="project-tag-pill tag-blue text-[10px] sm:text-xs py-0.5 px-2.5">
            📞 COUNSELING DESK
          </span>
          <button onClick={handleClose} className="modal-close-x" aria-label="Close modal">
            <X className="w-4 h-4" />
          </button>
        </div>

        {!requested ? (
          <div>
            <div className="mb-3 sm:mb-4">
              <h3 id="modal-cb-title" className="font-heading font-black text-lg sm:text-2xl text-slate-900 tracking-tight leading-snug">
                Talk to Our Admissions Team
              </h3>
              <p className="font-sans text-xs text-slate-500 mt-0.5">
                Provide your contact details, and a Senior Counselor will dial you back.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="form-label">Your Name *</label>
                <input
                  ref={cbNameRef}
                  type="text"
                  required
                  placeholder="Parent / Guardian Name"
                  value={cbName}
                  onChange={(e) => setCbName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      scrollToEl(cbPhoneRef, true);
                    }
                  }}
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Phone Number *</label>
                <input
                  ref={cbPhoneRef}
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={cbPhone}
                  onChange={(e) => {
                    const val = e.target.value;
                    setCbPhone(val);
                    const digits = val.replace(/\D/g, "");
                    if (digits.length === 10) {
                      scrollToEl(cbTimeRef, true);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      scrollToEl(cbTimeRef, true);
                    }
                  }}
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Preferred Time Window</label>
                <select
                  ref={cbTimeRef}
                  value={cbTime}
                  onChange={(e) => {
                    setCbTime(e.target.value);
                    scrollToEl(cbSubmitRef, false);
                  }}
                  className="form-select font-medium"
                >
                  <option value="Within 30 Minutes">Immediately (Within 30 Mins)</option>
                  <option value="Morning (10:00 AM – 12:00 PM)">Morning (10:00 AM – 12:00 PM)</option>
                  <option value="Afternoon (02:00 PM – 04:00 PM)">Afternoon (02:00 PM – 04:00 PM)</option>
                  <option value="Evening (05:00 PM – 07:00 PM)">Evening (05:00 PM – 07:00 PM)</option>
                </select>
              </div>

              <div ref={cbSubmitRef} className="pt-2 pb-4">
                <button type="submit" className="btn-outline w-full justify-center py-3 text-sm sm:text-base font-bold shadow-md bg-blue-700 hover:bg-blue-800">
                  <Phone className="w-4 h-4 text-white" />
                  <span>Request Instant Callback</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-3 sm:py-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-emerald-200 shadow-xs">
              <PhoneForwarded className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900 mb-1.5">
              Callback Scheduled!
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mb-5">
              Thank you, {cbName}! An Admissions Counselor will call {cbPhone} ({cbTime}).
            </p>
            <button onClick={handleClose} className="btn-outline px-8 py-2.5">
              <span>Close</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function FacilityModal({ facility, onClose }) {
  if (!facility) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-box modal-large">
        {/* Top Header Row */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
          <span className="project-tag-pill tag-blue text-[10px] sm:text-xs py-0.5 px-2.5">
            {facility.tag}
          </span>
          <button onClick={onClose} className="modal-close-x" aria-label="Close modal">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mb-3">
          <h3 className="font-heading font-black text-lg sm:text-2xl text-slate-900 tracking-tight leading-snug">
            {facility.title}
          </h3>
        </div>

        <div className="aspect-[16/9] max-h-56 w-full rounded-2xl overflow-hidden mb-4 bg-slate-100 border border-slate-200">
          <img src={facility.image} alt={facility.title} className="w-full h-full object-cover" />
        </div>

        <p className="font-sans text-xs sm:text-sm sm:text-base text-slate-600 leading-relaxed mb-5 font-normal">
          {facility.desc}
        </p>

        <div className="bg-slate-50 p-3.5 sm:p-4 rounded-2xl border border-slate-200 mb-5">
          <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
            INFRASTRUCTURE SPECIFICATIONS
          </h4>
          <div className="flex flex-wrap gap-2">
            {facility.specs.map((spec, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 bg-white px-2.5 sm:px-3 py-1 rounded-full border border-slate-200 shadow-xs"
              >
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{spec}</span>
              </span>
            ))}
          </div>
        </div>

        <button onClick={onClose} className="btn-outline w-full justify-center py-2.5">
          <span>Close Preview</span>
        </button>
      </div>
    </div>
  );
}
