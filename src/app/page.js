"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AcademicsSection from "@/components/AcademicsSection";
import HighlightsSection from "@/components/HighlightsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import AdmissionProcessSection from "@/components/AdmissionProcessSection";
import ImportantDatesSection from "@/components/ImportantDatesSection";
import RequiredDocumentsSection from "@/components/RequiredDocumentsSection";
import FeeInformationSection from "@/components/FeeInformationSection";
import ParentTestimonialsSection from "@/components/ParentTestimonialsSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import ScrollReveal from "@/components/ScrollReveal";
import {
  EnquiryModal,
  CampusTourModal,
  CallbackModal,
  FacilityModal
} from "@/components/Modals";

export default function Home() {
  const [modalType, setModalType] = useState(null); // 'enquiry' | 'tour' | 'callback' | null
  const [selectedFacility, setSelectedFacility] = useState(null);

  const handleOpenModal = (type) => {
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header & Sticky Navigation */}
      <Header onOpenModal={handleOpenModal} />

      <main className="flex-1">
        {/* 01 Hero Section (with 3 rotating background images every 5s & 3 academic level cards) */}
        <HeroSection onOpenModal={handleOpenModal} />

        {/* 02 Why Choose This School? */}
        <ScrollReveal>
          <WhyChooseSection />
        </ScrollReveal>

        {/* 03 Academic Programs */}
        <ScrollReveal>
          <AcademicsSection onOpenModal={handleOpenModal} />
        </ScrollReveal>

        {/* 04 School Highlights & Statistics */}
        <ScrollReveal>
          <HighlightsSection />
        </ScrollReveal>

        {/* 05 Facilities */}
        <ScrollReveal>
          <FacilitiesSection onSelectFacility={setSelectedFacility} />
        </ScrollReveal>

        {/* 06 Admission Process (Horizontal 5-step stepper with arrows) */}
        <ScrollReveal>
          <AdmissionProcessSection onOpenModal={handleOpenModal} />
        </ScrollReveal>

        {/* 07 Important Dates */}
        <ScrollReveal>
          <ImportantDatesSection />
        </ScrollReveal>

        {/* 08 Required Documents (Clean 2-column cards, no checkboxes) */}
        <ScrollReveal>
          <RequiredDocumentsSection />
        </ScrollReveal>

        {/* 09 Fee Information & Calculator (No selected button, clean table) */}
        <ScrollReveal>
          <FeeInformationSection onOpenModal={handleOpenModal} />
        </ScrollReveal>

        {/* 10 Parent Testimonials (Smooth slider without progress bar) */}
        <ScrollReveal>
          <ParentTestimonialsSection />
        </ScrollReveal>

        {/* 11 Frequently Asked Questions */}
        <ScrollReveal>
          <FaqSection onOpenModal={handleOpenModal} />
        </ScrollReveal>

        {/* 12 Final Call to Action */}
        <ScrollReveal>
          <FinalCtaSection onOpenModal={handleOpenModal} />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button & Right-edge Vertical Ribbon */}
      <FloatingCta onOpenModal={handleOpenModal} />

      {/* Interactive Modals */}
      <EnquiryModal
        isOpen={modalType === "enquiry"}
        onClose={handleCloseModal}
      />

      <CampusTourModal
        isOpen={modalType === "tour"}
        onClose={handleCloseModal}
      />

      <CallbackModal
        isOpen={modalType === "callback"}
        onClose={handleCloseModal}
      />

      <FacilityModal
        facility={selectedFacility}
        onClose={() => setSelectedFacility(null)}
      />
    </div>
  );
}
