"use client";

import { useState } from "react";
import { X, CheckCircle2, Calendar, Phone, ArrowRight, Check, CalendarCheck, PhoneForwarded } from "lucide-react";

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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = `#EAK-2027-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefNumber(randomRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
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
        <button
          onClick={handleReset}
          className="modal-close-x"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="project-tag-pill tag-blue text-xs mb-2">
                ACADEMIC SESSION 2027–28
              </span>
              <h3
                id="modal-enquiry-title"
                className="font-heading font-black text-2xl sm:text-3xl text-slate-900"
              >
                Admission Enquiry &amp; Application
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1">
                Fill out the form below. An Admissions Counselor will contact you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="type-label form-label">Child's Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Aryan Sharma"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="type-label form-label">Grade Applying For *</label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
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
                    <option value="Grade 11 Science">Grade 11 (Science PCM/PCB)</option>
                    <option value="Grade 11 Commerce">Grade 11 (Commerce)</option>
                    <option value="Grade 11 Humanities">Grade 11 (Humanities)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="type-label form-label">Parent / Guardian Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="type-label form-label">Contact Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="type-label form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rajesh.sharma@example.com"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="type-label form-label">Preferred Contact Mode</label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="form-select font-medium"
                  >
                    <option value="Phone Call">Direct Phone Call</option>
                    <option value="WhatsApp">WhatsApp Message</option>
                    <option value="Email">Email Communication</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="type-label form-label">Questions or Current School Info</label>
                <textarea
                  rows="3"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your child's interests, previous board, or specific questions about bus routes or scholarships..."
                  className="form-textarea"
                ></textarea>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input type="checkbox" id="consent" required defaultChecked className="mt-1 accent-blue-700" />
                <label htmlFor="consent" className="text-xs text-slate-600 leading-normal">
                  I authorize EAK International School to contact me regarding admission updates, interaction schedules, and prospectus delivery for Session 2027–28.
                </label>
              </div>

              <div className="pt-3">
                <button type="submit" className="btn-outline w-full justify-center py-3.5 text-base">
                  <span>Submit Admission Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-black text-2xl text-slate-900 mb-2">
              Enquiry Received Successfully!
            </h3>
            <p className="font-sans text-sm text-slate-600 max-w-md mx-auto mb-6">
              Thank you for expressing interest in <strong>EAK International School</strong> for Academic Session 2027–28.
            </p>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs sm:text-sm font-sans text-slate-800 mb-6">
              <div className="flex justify-between">
                <span>Application Reference:</span>
                <strong className="font-mono text-sm text-blue-700">{refNumber}</strong>
              </div>
              <div className="flex justify-between">
                <span>Applicant Name:</span>
                <strong>{formData.studentName}</strong>
              </div>
              <div className="flex justify-between">
                <span>Grade Applying For:</span>
                <strong>{formData.grade}</strong>
              </div>
              <div className="flex justify-between">
                <span>Digital Prospectus:</span>
                <span className="text-emerald-700 font-bold">Dispatched to your email</span>
              </div>
            </div>

            <p className="font-sans text-xs text-slate-500 max-w-sm mx-auto mb-6">
              Our Senior Admissions Counselor will contact you via {formData.mode} within 24 business hours to arrange the next steps.
            </p>

            <button onClick={handleReset} className="btn-outline px-8">
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

  if (!isOpen) return null;

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
        <button onClick={handleClose} className="modal-close-x" aria-label="Close modal">
          <X className="w-5 h-5" />
        </button>

        {!booked ? (
          <div>
            <div className="mb-6">
              <span className="project-tag-pill tag-blue text-xs mb-2">
                CAMPUS IMMERSION
              </span>
              <h3 id="modal-tour-title" className="font-heading font-black text-2xl text-slate-900">
                Book a Campus Tour
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1">
                Experience our 15-acre infrastructure, meet educators, and tour STEM labs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="type-label form-label">Parent / Guardian Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={tourData.parentName}
                  onChange={(e) => setTourData({ ...tourData, parentName: e.target.value })}
                  className="form-input"
                />
              </div>

              <div>
                <label className="type-label form-label">Contact Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={tourData.phone}
                  onChange={(e) => setTourData({ ...tourData, phone: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="type-label form-label">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={tourData.date}
                    onChange={(e) => setTourData({ ...tourData, date: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="type-label form-label">Time Slot *</label>
                  <select
                    value={tourData.slot}
                    onChange={(e) => setTourData({ ...tourData, slot: e.target.value })}
                    className="form-select"
                  >
                    <option value="Morning (09:30 AM – 11:00 AM)">Morning (09:30 AM – 11:00 AM)</option>
                    <option value="Mid-Day (11:30 AM – 01:00 PM)">Mid-Day (11:30 AM – 01:00 PM)</option>
                    <option value="Afternoon (02:30 PM – 04:00 PM)">Afternoon (02:30 PM – 04:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="type-label form-label">Number of Visitors</label>
                <select
                  value={tourData.visitors}
                  onChange={(e) => setTourData({ ...tourData, visitors: e.target.value })}
                  className="form-select"
                >
                  <option value="2 Persons (Parent + Child)">2 Persons (Parent + Child)</option>
                  <option value="3 Persons (Parents + Child)">3 Persons (Parents + Child)</option>
                  <option value="4+ Persons">4+ Persons</option>
                </select>
              </div>

              <div className="pt-2">
                <button type="submit" className="btn-outline w-full justify-center py-3">
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Confirm Campus Visit Slot</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mx-auto mb-4 border border-blue-200">
              <CalendarCheck className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-black text-2xl text-slate-900 mb-2">
              Campus Visit Confirmed!
            </h3>
            <p className="font-sans text-sm text-slate-600 max-w-sm mx-auto mb-6">
              We look forward to welcoming your family to EAK International School.
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left max-w-sm mx-auto space-y-2 text-xs font-sans text-slate-800 mb-6">
              <div className="flex justify-between">
                <span>Pass Code:</span>
                <strong className="font-mono text-blue-700">#VP-EAK-7782</strong>
              </div>
              <div className="flex justify-between">
                <span>Date &amp; Slot:</span>
                <strong>{tourData.date || "Tomorrow"} &bull; {tourData.slot.split(" ")[0]}</strong>
              </div>
              <div className="flex justify-between">
                <span>Reporting Desk:</span>
                <span>Admissions Center, Admin Block</span>
              </div>
            </div>

            <button onClick={handleClose} className="btn-outline px-8">
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

  if (!isOpen) return null;

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
        <button onClick={handleClose} className="modal-close-x" aria-label="Close modal">
          <X className="w-5 h-5" />
        </button>

        {!requested ? (
          <div>
            <div className="mb-6">
              <span className="project-tag-pill tag-blue text-xs mb-2">
                DIRECT ADMISSIONS COUNSELING
              </span>
              <h3 id="modal-cb-title" className="font-heading font-black text-2xl text-slate-900">
                Talk to Our Admissions Team
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1">
                Provide your phone number, and a Senior Counselor will dial you back.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="type-label form-label">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Parent Name"
                  value={cbName}
                  onChange={(e) => setCbName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div>
                <label className="type-label form-label">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={cbPhone}
                  onChange={(e) => setCbPhone(e.target.value)}
                  className="form-input"
                />
              </div>

              <div>
                <label className="type-label form-label">Preferred Time Window</label>
                <select
                  value={cbTime}
                  onChange={(e) => setCbTime(e.target.value)}
                  className="form-select"
                >
                  <option value="Within 30 Minutes">Immediately (Within 30 Mins)</option>
                  <option value="Morning (10:00 AM – 12:00 PM)">Morning (10:00 AM – 12:00 PM)</option>
                  <option value="Afternoon (02:00 PM – 04:00 PM)">Afternoon (02:00 PM – 04:00 PM)</option>
                  <option value="Evening (05:00 PM – 07:00 PM)">Evening (05:00 PM – 07:00 PM)</option>
                </select>
              </div>

              <div className="pt-2">
                <button type="submit" className="btn-outline w-full justify-center py-3">
                  <Phone className="w-4 h-4 text-white" />
                  <span>Request Instant Callback</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <PhoneForwarded className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-black text-2xl text-slate-900 mb-2">
              Callback Scheduled!
            </h3>
            <p className="font-sans text-sm text-slate-600 max-w-sm mx-auto mb-6">
              Thank you, {cbName}! An Admissions Counselor will call {cbPhone} ({cbTime}).
            </p>
            <button onClick={handleClose} className="btn-outline px-8">
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
        <button onClick={onClose} className="modal-close-x" aria-label="Close modal">
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <span className="project-tag-pill tag-blue text-xs mb-2">
            {facility.tag}
          </span>
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
            {facility.title}
          </h3>
        </div>

        <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-200">
          <img src={facility.image} alt={facility.title} className="w-full h-full object-cover" />
        </div>

        <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
          {facility.desc}
        </p>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-6">
          <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
            INFRASTRUCTURE SPECIFICATIONS
          </h4>
          <div className="flex flex-wrap gap-2">
            {facility.specs.map((spec, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-xs"
              >
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{spec}</span>
              </span>
            ))}
          </div>
        </div>

        <button onClick={onClose} className="btn-outline w-full justify-center">
          <span>Close Preview</span>
        </button>
      </div>
    </div>
  );
}
