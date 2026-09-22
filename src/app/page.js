"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhatWeDo from "@/components/WhatWeDo";
import SelectedProducts from "@/components/SelectedProducts";
import BrandTrust from "@/components/BrandTrust";
import Approach from "@/components/Approach";
import WhyOctosignals from "@/components/WhyOctosignals";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedProductInquiry, setSelectedProductInquiry] = useState("");

  const handleOpenContact = (productName = "") => {
    setSelectedProductInquiry(productName || "");
    setContactOpen(true);
  };

  return (
    <SmoothScroll>
      <ScrollProgress />
      <Cursor isEnabled={motionEnabled} />


      <Navbar
        onContactClick={() => handleOpenContact()}
        motionEnabled={motionEnabled}
        setMotionEnabled={setMotionEnabled}
      />

      <main className="min-h-screen bg-[#fafafa]">
        {/* 1. Hero Section (WHITE BG) */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById("products");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          onContactClick={() => handleOpenContact()}
        />

        {/* 2. Who We Are (BLACK BG) */}
        <AboutSection />

        {/* 3. Capabilities / What We Do (WHITE BG) */}
        <WhatWeDo />

        {/* 4. Products Showcase (BLACK BG) */}
        <SelectedProducts
          onInquireProduct={(productTitle) => handleOpenContact(productTitle)}
        />

        {/* 5. Trusted Clients (WHITE BG) */}
        <BrandTrust />

        {/* 6. Our Approach (BLACK BG) */}
        <Approach />

        {/* 7. Why OctoSignals (WHITE BG) */}
        <WhyOctosignals />

        {/* 8. Client Testimonials (BLACK BG) */}
        <Testimonials />

        {/* 9. Final CTA (BLACK BG) */}
        <FinalCTA onContactClick={() => handleOpenContact()} />

      </main>

      <Footer />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        initialProduct={selectedProductInquiry}
      />
    </SmoothScroll>
  );
}
