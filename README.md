# EAK International School — Admissions Landing Page (Session 2027–28)

**Official Admissions Portal & Campus Interactive Experience**  
*Built with Next.js (App Router), React 19, and Tailwind CSS*

---

## 📌 Executive Summary

This repository contains the complete frontend implementation of the dedicated admissions landing page for **EAK International School** for the upcoming **Academic Session 2027–28**.

The primary objective of the page is:  
**Inform → Build Trust → Answer Questions → Encourage Admission Enquiry**

The design adopts a prestigious, modern educational institution aesthetic:
- **Curated Palette**: Deep Royal Navy (`#0f2942`), Royal Blue (`#1e40af`), Golden Amber (`#d97706`), Emerald (`#059669`), and Slate (`#0f172a` / `#f8fafc`).
- **Typography Pairing**: Clean geometric sans-serif (`Outfit` & `Plus Jakarta Sans`) paired with technical monospace labels (`Roboto Mono`).
- **Signature UI Patterns**: Sticky navbar with active section scroll-spy, auto-rotating hero background photography, mobile-only stacking cards effect, slow and graceful scroll reveal animations (`1000ms`), interactive fee estimator calculator, document readiness verification checklist, accordion FAQ, and accessible dialog modals.

---

## 🚀 All 12 Sections & Feature Checklist

| # | Section Name | Description & Interactive Capabilities |
|---|--------------|----------------------------------------|
| **01** | **Hero Section** | School crest, "Admissions Open 2027–28", rotating campus photography (cycles every 5s), value proposition, "Apply Now" & "Schedule a Visit" CTA buttons, trust badges, key statistics chips, and 3 academic pathway cards. |
| **02** | **Why Choose EAK** | Flagship institutional banner with 4 key metrics (2002, 15,000+ Alumni, 99.4% Distinctions, 1:12 Ratio), 3 accreditation seals (A++ CBSE, Cambridge Pathway, IGBC Gold), and 8 foundational pillar cards with photo thumbnails. Features mobile-only stacking cards effect. |
| **03** | **Academic Programs** | Interactive tabbed explorer covering all 4 developmental stages: Primary (Grades 1–5), Middle (Grades 6–8), Secondary (Grades 9–10), and Senior Secondary (Grades 11–12). Auto-cycles every 5 seconds with hover-pause. Responsive 2x2 grid on mobile screens. |
| **04** | **School Highlights** | "25 Years of Excellence" legacy banner, "Our Commitment to Quality" 2x2 certification card, and 6 measurable milestone cards (Legacy, Alumni, Certified Faculty, Sports Disciplines, Distinctions, University Offers). |
| **05** | **Campus Facilities** | Filterable 8-item visual facility gallery (Smart Classrooms, Robotics Labs, Digital Library, Olympic Pool, AC Fleet Transport, Pediatric Infirmary, Nutri-Cafeteria, Performing Arts Hall) with category filter pills and interactive lightbox spec modal. Includes mobile stacking cards. |
| **06** | **Admission Process** | 5-step flow (1. Online Registration → 2. Document Submission → 3. Student Interaction → 4. Offer Letter → 5. Fee Payment & Welcome). Renders as a numbered stepper with connecting arrows on desktop and structured stacking cards on mobile. |
| **07** | **Important Dates** | Interactive schedule with date cards, dynamic status pills (*Active Now*, *Closing Soon*, *Upcoming*), and a live real-time countdown timer counting down to the Early Bird Application Deadline. |
| **08** | **Required Documents** | Official verification checklist covering all required records (Birth Certificate, Transfer Certificate, Passport Photos, Address Proof, Parent IDs, Medical Certificate). Includes print checklist button and mobile stacking cards. |
| **09** | **Fee Information** | Transparent fee structure with clean 5-column table on desktop and dedicated responsive cards on mobile. Features an interactive fee calculator with grade selection, payment frequency (5% annual rebate), optional AC transport (+Rs. 18k/yr), and meal plans (+Rs. 14k/yr). |
| **10** | **Parent Testimonials** | Authentic parent reviews with verified quotes, parent avatars, star ratings, and child grade info. Features auto-cycling carousel with manual Previous/Next controls and dot pagination. |
| **11** | **Frequently Asked Questions (FAQ)** | Accessible accordion containing parent queries regarding minimum age criteria, CBSE & Cambridge dual-track curriculum, school transport, and merit scholarship guidelines. |
| **12** | **Final Call to Action** | Royal navy closing card: *"Give Your Child a Future-Ready Education"*, complete with 3 primary interactive actions (*Apply Now*, *Book a Campus Visit*, *Talk to Admissions Team*), phone hotline, direct email, and admissions desk direct helpline. |

---

## 🛠️ Technologies & Libraries Used

1. **Framework**: [Next.js](https://nextjs.org/) (App Router architecture, React 19)
2. **Styling**: Tailwind CSS & Modern Vanilla CSS with tailored CSS custom properties, responsive flexbox & CSS Grid, and custom animations.
3. **Typography**: Google Fonts (`Outfit`, `Plus Jakarta Sans`, and `Roboto Mono`).
4. **Icons**: [Lucide React](https://lucide.dev/) for crisp, scalable UI icons.
5. **Responsive Design**: Mobile-first architecture with breakpoints for mobile (320px–640px), tablet (641px–1024px), and desktop (1025px+).

---

## 💻 Setup & Run Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (bundled with Node.js)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

### 3. Build for Production (Optional)
```bash
npm run build
npm run start
```

---

## 📱 Interactive Highlights & Accessibility Basics

- **Sticky Navigation with Scroll Spy**:
  - The header stays pinned to the top on scroll.
  - As the user scrolls or navigates to any anchor (e.g., `#testimonials`, `#fees`, `#academics`), the active section link highlights automatically in the navigation bar.
- **Mobile Stacking Cards Effect**:
  - Exclusively on mobile devices (`< 640px`), card lists in Why Choose, Admission Process, Facilities, and Documents smoothly stack on top of each other as the user scrolls like a physical card deck.
  - On desktop (`>= 640px`), the layout displays as clean side-by-side grids.
- **Slow & Graceful Reveal Animation**:
  - Section reveal transitions use a 1000ms duration with `cubic-bezier(0.16, 1, 0.3, 1)` easing for smooth entrance into the viewport.
- **Interactive Modals**:
  - `EnquiryModal`: Validates form inputs, generates a unique application reference number (e.g., `#EAK-2027-8912`), and provides instant confirmation feedback.
  - `CampusTourModal`: Lets parents pick a date, time slot, and visitor count, generating a digital visitor pass slip.
  - `CallbackModal`: Allows parents to request an immediate or scheduled phone callback.
  - `FacilityModal`: Displays high-resolution photography and engineering specifications for any selected campus facility.

---

## 📄 Note on External Assets
- All images are sourced from royalty-free high-resolution Unsplash photography with optimized CDN parameters (`auto=format&fit=crop&q=80`).
- Google Fonts are preconnected and loaded asynchronously.

---
*EAK International School Official Admissions Portal.*
