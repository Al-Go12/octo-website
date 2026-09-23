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
import ScrollProgress from "@/components/ScrollProgress";
import Cursor from "@/components/Cursor";

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
    address: "Ponnurunni, Vyttila, Kochi, Kerala 682019",
    phone: "+91 79944 77790",
    email: "india@octosignals.com",
    role: "Global Engineering, R&D Lab & Technology Operations",
    badge: "HEADQUARTERS",
  },
  {
    country: "UNITED ARAB EMIRATES",
    city: "Dubai",
    address: "Dubai Silicon Oasis, UAE",
    phone: "+971 50380 6840",
    email: "uae@octosignals.com",
    role: "MENA Enterprise Strategy & Client Solutions",
    badge: "REGIONAL HUB",
  },
  {
    country: "OMAN",
    city: "Muscat",
    address: "Muscat Technology Hub, Sultanate of Oman",
    phone: "+968 92154 642",
    email: "oman@octosignals.com",
    role: "Broadcast Media Solutions & Enterprise Integrations",
    badge: "REGIONAL HUB",
  },
  {
    country: "UNITED STATES",
    city: "Delaware / East Coast",
    address: "Delaware Tech Center, United States",
    phone: "hello@octosignals.com",
    email: "us@octosignals.com",
    role: "North American Strategic Partnerships & Consulting",
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
      <ScrollProgress />
      <Cursor isEnabled={motionEnabled} />

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
              OctoSignals Technologies is a technology solutions company helping businesses turn complex challenges into practical digital products, intelligent software, and engaging technology experiences.
            </p>

            {/* Quick Metrics Counter Grid */}
            <div className="about-hero-reveal grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-200/80 mb-12">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#c8102e] font-mono block mb-1">
                  4
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                  Global Hubs
                </span>
                <span className="text-[11px] text-slate-500">
                  India, UAE, Oman, US
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#171717] font-mono block mb-1">
                  10+
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                  Proprietary Platforms
                </span>
                <span className="text-[11px] text-slate-500">
                  ACR, CRM, Media, Analytics
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#c8102e] font-mono block mb-1">
                  99.9%
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                  Broadcast Reliability
                </span>
                <span className="text-[11px] text-slate-500">
                  24/7 automated monitoring
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#171717] font-mono block mb-1">
                  100%
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                  Practical ROI
                </span>
                <span className="text-[11px] text-slate-500">
                  Business-first software
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
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4" weight="bold" />
              </button>

              <Link
                href="/products"
                className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
                data-cursor="magnetic"
              >
                <span>Explore Products</span>
                <ArrowUpRight className="w-4 h-4" weight="bold" />
              </Link>

              <Link
                href="/services"
                className="px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
                data-cursor="magnetic"
              >
                <span>Our Capabilities</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. OUR STORY & PHILOSOPHY (Warm Cream Background) */}
        <section className="relative z-10 py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#f6f4ee] text-[#171717] border-t border-[#e2dcd2]">
          <div className="max-w-7xl mx-auto">
            {/* Section Index Divider */}
            <div className="flex items-center justify-between pb-6 mb-16 border-b border-[#e2dcd2] text-[11px] font-mono tracking-widest text-slate-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                <span className="font-bold text-[#c8102e]">01 //</span>
                <span>OUR STORY &amp; PHILOSOPHY</span>
              </div>
              <span className="hidden sm:inline-block text-slate-400">THE OCTOSIGNALS WAY</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
                  OUR CORE PHILOSOPHY
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#171717] leading-tight">
                  Guiding You in the <span className="text-[#c8102e]">Right Direction</span>.
                </h2>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal mt-2">
                  At OctoSignals, we are not interested in reinventing the wheel. We focus on making sure your wheel is spinning in the right direction.
                </p>
                <div className="p-6 rounded-2xl bg-white border border-[#e8e4dc] shadow-sm mt-4">
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    &ldquo;We understand the problem first, identify the right technology, design the solution, build it, integrate it, and continuously improve it.&rdquo;
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e8e4dc] hover:border-[#c8102e] shadow-sm hover:shadow-xl transition-all">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#171717] mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#c8102e]/20 text-[#c8102e] flex items-center justify-center text-sm font-mono font-bold">
                      01
                    </span>
                    Who We Are
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    We are a team of technologists, strategists, engineers, designers, and problem solvers working together to positively transform businesses through technology. We operate across borders, bringing together diverse domain knowledge in media, broadcast, education, retail, and enterprise AI.
                  </p>
                </div>

                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e8e4dc] hover:border-[#c8102e] shadow-sm hover:shadow-xl transition-all">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#171717] mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#c8102e]/20 text-[#c8102e] flex items-center justify-center text-sm font-mono font-bold">
                      02
                    </span>
                    Integrated Disciplines
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    We combine technology strategy, software engineering, creative development, and domain expertise to build solutions that create measurable value. Rather than isolated deliverables, we build interconnected digital ecosystems that elevate operational performance.
                  </p>
                </div>

                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e8e4dc] hover:border-[#c8102e] shadow-sm hover:shadow-xl transition-all">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#171717] mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#c8102e]/20 text-[#c8102e] flex items-center justify-center text-sm font-mono font-bold">
                      03
                    </span>
                    Practical Technology Over Buzzwords
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    Technology should solve problems, not create more of them. We reject over-engineered hype in favor of stable, highly-performant software that your teams and end-users love working with every single day.
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
            {/* Section Index Divider */}
            <div className="flex items-center justify-between pb-6 mb-16 border-b border-slate-200 text-[11px] font-mono tracking-widest text-slate-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                <span className="font-bold text-[#c8102e]">02 //</span>
                <span>OUR CORE VALUES</span>
              </div>
              <span className="hidden sm:inline-block text-slate-400">THE OCTOSIGNALS ETHOS</span>
            </div>

            {/* Header */}
            <div className="max-w-3xl mb-16 flex flex-col gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
                THE OCTOSIGNALS ETHOS
              </span>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-tight">
                Our Core Values
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Our culture, decision-making, and client commitments are anchored in four non-negotiable principles.
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
            {/* Section Index Divider */}
            <div className="flex items-center justify-between pb-6 mb-16 border-b border-[#e2dcd2] text-[11px] font-mono tracking-widest text-slate-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                <span className="font-bold text-[#c8102e]">03 //</span>
                <span>MISSION &amp; VISION</span>
              </div>
              <span className="hidden sm:inline-block text-slate-400">STRATEGIC HORIZON</span>
            </div>

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
                    Sustained Value Through Practical Digital Solutions
                  </h3>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                    To create reliable, scalable, and intuitive technology solutions that empower businesses to work smarter, connect deeper with audiences, and drive sustained ROI.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200 text-xs font-mono text-slate-500">
                  DRIVING TRANSFORMATION DAILY
                </div>
              </div>

              {/* Vision */}
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#e8e4dc] hover:border-[#c8102e] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#c8102e]/20 text-[#c8102e] flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7" weight="duotone" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e] block mb-2">
                    OUR VISION
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#171717] mb-6">
                    Shaping an Extraordinary Technological Future
                  </h3>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                    Our mission is to use technology to shape a future that is not only better, but truly extraordinary. To become the preferred technology partner for media, education, and retail enterprises globally by delivering intelligent software with uncompromising quality.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200 text-xs font-mono text-slate-500">
                  LONG-TERM GLOBAL HORIZON
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. GLOBAL FOOTPRINT & OFFICES (White Background) */}
        <section
          id="presence"
          className="relative z-40 py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-white text-[#171717] border-t border-slate-200 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Index Divider */}
            <div className="flex items-center justify-between pb-6 mb-16 border-b border-slate-200 text-[11px] font-mono tracking-widest text-slate-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                <span className="font-bold text-[#c8102e]">04 //</span>
                <span>REGIONAL OFFICES</span>
              </div>
              <span className="hidden sm:inline-block text-slate-400">GLOBAL FOOTPRINT</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
                  GLOBAL REACH, LOCAL TOUCH
                </span>
                <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-tight">
                  Regional Offices
                </h2>
              </div>
              <p className="text-slate-600 text-base max-w-md leading-relaxed font-normal">
                Serving forward-thinking enterprises across 4 international hubs with local teams and global engineering excellence.
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
            {/* Section Index Divider */}
            <div className="w-full flex items-center justify-between pb-6 mb-10 border-b border-[#e2dcd2] text-[11px] font-mono tracking-widest text-slate-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                <span className="font-bold text-[#c8102e]">05 //</span>
                <span>NEXT STEPS</span>
              </div>
              <span className="hidden sm:inline-block text-slate-400">INITIATE ENGAGEMENT</span>
            </div>

            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
              HAVE A CHALLENGE?
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-tight">
              Let&apos;s build the right solution.
            </h2>
            <p className="text-slate-600 text-base sm:text-xl max-w-2xl font-normal leading-relaxed">
              Tell us what you&apos;re trying to solve and let&apos;s find the technology that can move your business forward.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setContactOpen(true)}
                className="px-8 py-4 rounded-full bg-[#c8102e] hover:bg-[#171717] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#c8102e]/30 flex items-center gap-2 cursor-pointer"
                data-cursor="magnetic"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" weight="bold" />
              </button>

              <Link
                href="/products"
                className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
                data-cursor="magnetic"
              >
                <span>View Products Suite</span>
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
