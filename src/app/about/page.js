"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ShieldCheck,
  Lightbulb,
  Cpu,
  Handshake,
  Target,
  Eye,
  Globe,
  MapPin,
  Phone,
  EnvelopeSimple,
  ArrowUpRight,
  Sparkle,
  CheckCircle,
} from "@phosphor-icons/react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import SmoothScroll from "@/components/SmoothScroll";

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    badge: "FOUNDATIONAL",
    description:
      "We believe in absolute transparency, honest technical assessments, and ethical software practices. We advise on what truly serves your business, not what pads a contract.",
    details: [
      "Transparent engineering roadmaps",
      "Honest feasibility & cost guidance",
      "Zero hidden lock-ins or black boxes",
    ],
  },
  {
    icon: Lightbulb,
    title: "Practical Innovation",
    badge: "FORWARD LOOKING",
    description:
      "We innovate with purpose. Whether deploying proprietary Automatic Content Recognition or custom NLP pipelines, our innovations solve concrete, high-stakes operational challenges.",
    details: [
      "Targeted AI & ACR applications",
      "Modern cloud-native architectures",
      "Real-world measurable ROI",
    ],
  },
  {
    icon: Cpu,
    title: "Engineering Reliability",
    badge: "MISSION CRITICAL",
    description:
      "From 24/7 broadcast radio monitoring to enterprise overseas CRM workflows, our software is engineered for maximum uptime, high concurrency, and resilient performance.",
    details: [
      "Broadcast-grade continuous uptime",
      "Hardened data security & pipelines",
      "Rigorous quality assurance standards",
    ],
  },
  {
    icon: Handshake,
    title: "Enduring Relationships",
    badge: "COLLABORATIVE",
    description:
      "We do not view projects as transactional deliverables. We build long-term technology partnerships that support your digital evolution as your business grows.",
    details: [
      "Dedicated technical support teams",
      "Proactive systems optimization",
      "Continuous feature iteration",
    ],
  },
];

const globalLocations = [
  {
    country: "INDIA (HQ)",
    city: "Kochi, Kerala",
    address: "Bluemoon Pearl, Ponnurunni, Vyttila, Kochi 682019, India",
    phone: "+91 79944 77790",
    email: "hello@octosignals.com",
    role: "Global Engineering, R&D Lab & Technology Operations",
    badge: "HEADQUARTERS",
  },
  {
    country: "UNITED ARAB EMIRATES",
    city: "Dubai",
    address: "Dubai, UAE",
    phone: "+971 55804 4945",
    email: "hello@octosignals.com",
    role: "MENA Enterprise Strategy & Client Solutions",
    badge: "REGIONAL HUB",
  },
  {
    country: "OMAN",
    city: "Muscat",
    address: "Muscat, Sultanate of Oman",
    phone: "+968 9586 5983",
    email: "hello@octosignals.com",
    role: "Broadcast Media Solutions & Enterprise Integrations",
    badge: "REGIONAL HUB",
  },
  {
    country: "UNITED STATES",
    city: "Delaware / East Coast",
    address: "United States Client Operations",
    phone: "+91 79944 77790",
    email: "hello@octosignals.com",
    role: "North American Strategic Partnerships & Operations",
    badge: "GLOBAL PRESENCE",
  },
];

export default function AboutPage() {
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [contactOpen, setContactOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-hero-reveal",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <SmoothScroll>
      <Navbar
        onContactClick={() => setContactOpen(true)}
        motionEnabled={motionEnabled}
        setMotionEnabled={setMotionEnabled}
      />

      <main className="min-h-screen bg-[#fafafa]">
        {/* 1. HERO SECTION (Light Background) */}
        <section
          ref={heroRef}
          className="relative pt-36 pb-24 px-4 sm:px-8 lg:px-12 bg-[#fafafa] text-[#171717] overflow-hidden"
        >
          {/* Subtle Ambient Radial Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c8102e]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top Breadcrumb & Badge */}
            <div className="about-hero-reveal flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
                ABOUT OCTOSIGNALS TECHNOLOGIES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="about-hero-reveal text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#171717] leading-[1.08] max-w-5xl mb-8">
              We Make Your <span className="text-[#c8102e]">Signals</span> Better.
            </h1>

            {/* Positioning Statement */}
            <p className="about-hero-reveal text-lg sm:text-2xl text-slate-700 max-w-3xl leading-relaxed font-normal mb-12">
              Octosignals Technologies delivers technology solutions that help businesses operate more effectively. We work across India, UAE, Oman and the US.
            </p>

            {/* Quick Metrics Counter Grid */}
            <div className="about-hero-reveal grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-200/80 mb-12">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#c8102e] font-mono block mb-1">
                  4
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                  Operating Regions
                </span>
                <span className="text-[11px] text-slate-500">
                  India, UAE, Oman & US
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#171717] font-mono block mb-1">
                  13+
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                  Proprietary Systems
                </span>
                <span className="text-[11px] text-slate-500">
                  Media, CRM, DMRV, Retail
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#c8102e] font-mono block mb-1">
                  24/7
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                  Broadcast Integration
                </span>
                <span className="text-[11px] text-slate-500">
                  FM, Studio, Transmission & ACR
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#171717] font-mono block mb-1">
                  IoT
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                  In-House R&D
                </span>
                <span className="text-[11px] text-slate-500">
                  Custom hardware & telemetry
                </span>
              </div>
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="about-hero-reveal flex flex-wrap items-center gap-4">
              <button
                onClick={() => setContactOpen(true)}
                className="px-8 py-4 rounded-full bg-[#c8102e] hover:bg-[#a80c24] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#c8102e]/30 flex items-center gap-2 cursor-pointer"
                data-cursor="magnetic"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" weight="bold" />
              </button>

              <Link
                href="/products"
                className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
                data-cursor="magnetic"
              >
                <span>View Products</span>
                <ArrowUpRight className="w-4 h-4" weight="bold" />
              </Link>

              <Link
                href="/services"
                className="px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
                data-cursor="magnetic"
              >
                <span>Explore Solutions</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. WHAT WE DO & PHILOSOPHY (Warm Cream Background) */}
        <section className="relative z-10 py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#f6f4ee] text-[#171717] border-t border-[#e2dcd2]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
                  OUR CORE PHILOSOPHY
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#171717] leading-tight">
                  Inspired by People, <span className="text-[#c8102e]">Led by Purpose</span>.
                </h2>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal mt-2">
                  Octosignals is a digital transformation partner, crafting solutions and strategies that bring our clients&apos; vision to life. We work side by side with businesses across media, healthcare, education, retail and enterprise operations — driving real impact through technology.
                </p>
                <div className="p-6 rounded-2xl bg-white border border-[#e8e4dc] shadow-sm mt-4">
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    &ldquo;Use technology to create clearer, more effective outcomes for our clients.&rdquo;
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e8e4dc] hover:border-[#c8102e] shadow-sm hover:shadow-xl transition-all">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#171717] mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#c8102e]/20 text-[#c8102e] flex items-center justify-center text-sm font-mono font-bold">
                      01
                    </span>
                    Digital Transformation Partner
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    We craft solutions and strategies that bring our clients&apos; vision to life across media, healthcare, education, retail, and enterprise operations — driving real impact through tailored technology.
                  </p>
                </div>

                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e8e4dc] hover:border-[#c8102e] shadow-sm hover:shadow-xl transition-all">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#171717] mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#c8102e]/20 text-[#c8102e] flex items-center justify-center text-sm font-mono font-bold">
                      02
                    </span>
                    Broadcasting Systems Integrator
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    As a leading systems integrator for FM Radio, Community Radio, Online Radio and Media Infrastructure, we deliver complete broadcasting solutions — from project planning and regulatory guidance to studio setup, transmitter installation, and ongoing technical support and maintenance.
                  </p>
                </div>

                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e8e4dc] hover:border-[#c8102e] shadow-sm hover:shadow-xl transition-all">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#171717] mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#c8102e]/20 text-[#c8102e] flex items-center justify-center text-sm font-mono font-bold">
                      03
                    </span>
                    In-House IoT R&D & Device Engineering
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    Our in-house R&D, engineering and support teams design, develop and manufacture customized electronic devices for the IoT sector — connecting equipment, automating operations, and turning data into decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE VALUES (White Background) */}
        <section
          id="values"
          className="relative z-20 py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-white text-[#171717] border-t border-slate-200 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="max-w-3xl mb-16 flex flex-col gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
                THE OCTOSIGNALS ETHOS
              </span>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-tight">
                Our Core Values
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Anchored in integrity and long-term partnerships, delivering clarity and measurable outcomes for our clients.
              </p>
            </div>

            {/* 4 Values Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-[#c8102e] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#c8102e] shadow-sm">
                          <IconComponent className="w-7 h-7" weight="duotone" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c8102e] bg-[#c8102e]/10 px-3 py-1 rounded-full border border-[#c8102e]/20">
                          {val.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] mb-3">
                        {val.title}
                      </h3>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8">
                        {val.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-200 flex flex-col gap-2.5">
                      {val.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                          <CheckCircle className="w-4 h-4 text-[#c8102e] shrink-0" weight="duotone" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. MISSION & VISION (Warm Cream Background) */}
        <section className="relative z-30 py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#f6f4ee] text-[#171717] border-t border-[#e2dcd2] overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16 flex flex-col gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
                PURPOSE & DESTINATION
              </span>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-tight">
                Mission & Vision
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#e8e4dc] hover:border-[#c8102e] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#c8102e]/20 text-[#c8102e] flex items-center justify-center mb-6">
                    <Target className="w-7 h-7" weight="duotone" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e] block mb-2">
                    OUR MISSION
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#171717] mb-6">
                    Use technology to create clearer, more effective outcomes for our clients.
                  </h3>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                    We turn complex operational and broadcasting challenges into intuitive, robust digital tools and connected ecosystems that scale seamlessly.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200 text-xs font-mono text-slate-500">
                  DRIVING TRANSFORMATION DAILY
                </div>
              </div>

              {/* Vision / Values */}
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#e8e4dc] hover:border-[#c8102e] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#c8102e]/20 text-[#c8102e] flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7" weight="duotone" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e] block mb-2">
                    OUR CORE VALUES
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#171717] mb-6">
                    Integrity and long-term partnerships.
                  </h3>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                    We believe in honest technology advice, uncompromising engineering rigor, and building relationships that endure across product cycles and international borders.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200 text-xs font-mono text-slate-500">
                  LONG-TERM GLOBAL HORIZON
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. GLOBAL PRESENCE & OFFICES (White Background) */}
        <section
          id="presence"
          className="relative z-40 py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-white text-[#171717] border-t border-slate-200 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
                  GLOBAL PRESENCE
                </span>
                <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-tight">
                  Regional Offices & Presence
                </h2>
              </div>
              <p className="text-slate-600 text-base max-w-md leading-relaxed font-normal">
                Kochi (HQ) · Muscat · Dubai · Operations across India, UAE, Oman & US.
              </p>
            </div>

            {/* Location Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalLocations.map((loc, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#c8102e] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c8102e] bg-[#c8102e]/10 px-2.5 py-1 rounded-full border border-[#c8102e]/20">
                        {loc.badge}
                      </span>
                      <MapPin className="w-4 h-4 text-slate-400" weight="duotone" />
                    </div>

                    <h3 className="text-xl font-extrabold text-[#171717] mb-1">
                      {loc.country}
                    </h3>
                    <span className="text-xs font-bold text-slate-500 block mb-4">
                      {loc.city}
                    </span>

                    <p className="text-slate-600 text-xs leading-relaxed mb-6 font-normal">
                      {loc.address}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex flex-col gap-2 text-xs">
                    <span className="font-bold text-slate-800 text-[11px]">
                      {loc.role}
                    </span>
                    <a
                      href={`tel:${loc.phone}`}
                      className="text-[#c8102e] font-semibold hover:underline flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" weight="duotone" />
                      <span>{loc.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FINAL CALL TO ACTION (Warm Cream Background) */}
        <section className="relative z-50 py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#f6f4ee] text-[#171717] border-t border-[#e2dcd2] overflow-hidden text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
              READY TO IMPROVE YOUR SIGNALS?
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-tight">
              Ready to improve your signals?
            </h2>
            <p className="text-slate-600 text-base sm:text-xl max-w-2xl font-normal leading-relaxed">
              Whether it&apos;s a new platform, a broadcast upgrade or a connected device network — we&apos;re ready to help you build it.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setContactOpen(true)}
                className="px-8 py-4 rounded-full bg-[#c8102e] hover:bg-[#171717] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#c8102e]/30 flex items-center gap-2 cursor-pointer"
                data-cursor="magnetic"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" weight="bold" />
              </button>

              <Link
                href="/products"
                className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
                data-cursor="magnetic"
              >
                <span>View Products Catalog</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </SmoothScroll>
  );
}
