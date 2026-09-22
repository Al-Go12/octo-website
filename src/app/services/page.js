"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Compass,
  Code2,
  Workflow,
  Sparkles,
  Radio,
  BrainCircuit,
  ArrowUpRight,
  CheckCircle2,
  Tv,
  GraduationCap,
  ShoppingBag,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Cursor from "@/components/Cursor";

const detailedServices = [
  {
    id: "01",
    icon: Compass,
    title: "Technology Strategy & Consulting",
    tagline: "Clarity and strategic direction for complex technology investments.",
    summary:
      "We help businesses identify the right technology direction, simplify complex challenges, and turn ideas into practical technology strategies.",
    deliverables: [
      "Technology Direction & 3-Year Strategic Roadmaps",
      "System Architecture Audits & Tech Debt Remediation",
      "Feasibility, Tech Stack & Platform Selection",
      "Cloud Cost & Infrastructure Optimization Reviews",
    ],
    outcomes: "Eliminate costly trial-and-error, reduce operational friction, and align IT with business ROI.",
  },
  {
    id: "02",
    icon: Code2,
    title: "Software & Product Development",
    tagline: "End-to-end engineering of digital products built to scale.",
    summary:
      "We design and build custom digital products, web applications, mobile applications, platforms, dashboards, and business systems around real business needs.",
    deliverables: [
      "Enterprise Web Applications & Customer Portals",
      "Native & Cross-Platform Mobile Apps (iOS & Android)",
      "High-Concurrency Microservices & Cloud Backends",
      "Real-Time Data Visualization & Executive Dashboards",
    ],
    outcomes: "Robust, maintainable, and high-performance software tailored to your specific workflows.",
  },
  {
    id: "03",
    icon: Workflow,
    title: "Technology Integration",
    tagline: "Connecting platforms, data, and workflows into cohesive ecosystems.",
    summary:
      "We connect systems, platforms, data, and workflows to create seamless digital ecosystems that work together without friction.",
    deliverables: [
      "Enterprise API & Webhook Pipeline Engineering",
      "Legacy Core to Cloud Modernization Bridges",
      "Automated CRM, ERP & Billing Data Synchronization",
      "Event-Driven Message Queues & Webhook Ingestion",
    ],
    outcomes: "Unified operational data, automated multi-department handoffs, and zero manual duplicate entry.",
  },
  {
    id: "04",
    icon: Sparkles,
    title: "Creative Technology",
    tagline: "Engaging digital experiences that bridge software and human emotion.",
    summary:
      "We combine software, interaction, AI, motion, and emerging technologies to create engaging digital experiences beyond conventional websites and applications.",
    deliverables: [
      "Interactive 3D, WebGL & High-Performance Motion UI",
      "Experiential Event Displays & Interactive Kiosks",
      "Gamified Promotional Campaigns & Brand Portals",
      "Digital Brand Systems & Immersive Micro-Experiences",
    ],
    outcomes: "Unforgettable customer engagement that amplifies brand presence and drives retention.",
  },
  {
    id: "05",
    icon: Radio,
    title: "Broadcast & Media Technology",
    tagline: "Mission-critical systems for radio, streaming, and content tracking.",
    summary:
      "We build technology solutions for broadcasting, radio, media monitoring, streaming, content recognition, and digital media operations.",
    deliverables: [
      "Proprietary In-House Automatic Content Recognition (ACR)",
      "Continuous 24/7/365 Radio & Audio Stream Infrastructure",
      "Automated Broadcast Ad Verification & Telemetry",
      "Content Ingestion, Archiving & Metadata Systems",
    ],
    outcomes: "Verified broadcast reach, reliable streaming distribution, and actionable media intelligence.",
  },
  {
    id: "06",
    icon: BrainCircuit,
    title: "AI & Intelligent Solutions",
    tagline: "Practical AI that automates workflows and unlocks intelligence.",
    summary:
      "We use artificial intelligence, automation, computer vision, natural language processing, and data-driven technologies to solve practical business problems.",
    deliverables: [
      "Computer Vision for Brand & Image Submission Auditing",
      "NLP Sentiment Analysis for Multi-Channel Messaging",
      "Automated Triage & Intelligent Escalation Bots",
      "Predictive Analytics & Anomaly Detection Engines",
    ],
    outcomes: "Dramatic reductions in manual processing time and proactive identification of trends.",
  },
];

const deliverySteps = [
  {
    step: "01",
    title: "Discover & Define",
    description:
      "We analyze your existing workflows, identify operational bottlenecks, and pinpoint technical objectives with concrete metrics for success.",
  },
  {
    step: "02",
    title: "Architect & Blueprint",
    description:
      "We map system architecture, data models, API contracts, security protocols, and interactive wireframes before writing code.",
  },
  {
    step: "03",
    title: "Engineer & Validate",
    description:
      "Iterative agile sprints with clean modular code, automated test suites, and transparent staging builds for continuous feedback.",
  },
  {
    step: "04",
    title: "Integrate & Deploy",
    description:
      "Seamless rollouts with zero downtime, robust data migration, enterprise SSO integration, and comprehensive staff onboarding.",
  },
  {
    step: "05",
    title: "Scale & Proactive SLA",
    description:
      "Continuous 24/7 monitoring, real-time performance telemetry, automated security patching, and proactive feature roadmapping.",
  },
];

export default function ServicesPage() {
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedServiceInquiry, setSelectedServiceInquiry] = useState("");
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".serv-hero-anim",
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

  const handleOpenContact = (serviceTitle = "") => {
    setSelectedServiceInquiry(serviceTitle ? `Service Inquiry: ${serviceTitle}` : "");
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
        {/* 1. HERO SECTION (White / Light Background) */}
        <section
          ref={heroRef}
          className="relative pt-36 pb-24 px-4 sm:px-8 lg:px-12 bg-[#fafafa] text-[#171717] overflow-hidden"
        >
          {/* Subtle Ambient Red Tint */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c8102e]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="serv-hero-anim flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
                SERVICES & CAPABILITIES
              </span>
            </div>

            <h1 className="serv-hero-anim text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#171717] leading-[1.08] max-w-5xl mb-6">
              Engineering Scalable Solutions For <span className="text-[#c8102e]">Real Impact</span>.
            </h1>

            <p className="serv-hero-anim text-lg sm:text-2xl text-slate-700 max-w-3xl leading-relaxed font-normal mb-10">
              We combine technology strategy, software engineering, creative development, and domain expertise to build solutions that create measurable value across India, UAE, Oman, and the US.
            </p>

            <div className="serv-hero-anim flex flex-wrap items-center gap-4 pt-8 border-t border-slate-200/80">
              <button
                onClick={() => handleOpenContact()}
                className="px-8 py-4 rounded-full bg-[#c8102e] hover:bg-[#a80c24] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#c8102e]/30 flex items-center gap-2 cursor-pointer"
                data-cursor="magnetic"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <Link
                href="/products"
                className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
                data-cursor="magnetic"
              >
                <span>Browse Software Products</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 2. CORE SERVICE PILLARS (Warm Cream Background) */}
        <section className="relative z-10 py-24 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#f6f4ee] text-[#171717] border-t border-[#e2dcd2]">
          <div className="max-w-7xl mx-auto">
            {/* Section Index Divider */}
            <div className="flex items-center justify-between pb-6 mb-16 border-b border-[#e2dcd2] text-[11px] font-mono tracking-widest text-slate-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                <span className="font-bold text-[#c8102e]">01 //</span>
                <span>6 CORE PILLARS</span>
              </div>
              <span className="hidden sm:inline-block text-slate-400">CAPABILITY SPECTRUM</span>
            </div>

            <div className="max-w-3xl mb-16 flex flex-col gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
                WHAT WE DO
              </span>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-tight">
                Our 6 Pillars of Engineering
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                Tailored capabilities designed to modernize operations, automate workflows, and deliver resilient digital platforms.
              </p>
            </div>

            {/* Detailed Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {detailedServices.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.id}
                    className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e8e4dc] hover:border-[#c8102e] transition-all duration-500 flex flex-col justify-between group shadow-sm hover:shadow-xl"
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#c8102e]/10 text-[#c8102e] flex items-center justify-center group-hover:scale-105 transition-transform">
                          <IconComp className="w-7 h-7" />
                        </div>
                        <span className="text-2xl sm:text-3xl font-mono font-extrabold text-slate-300 group-hover:text-[#c8102e] transition-colors">
                          {service.id}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] mb-2 group-hover:text-[#c8102e] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-xs font-mono text-[#c8102e] uppercase tracking-wider mb-4 font-semibold">
                        {service.tagline}
                      </p>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {service.summary}
                      </p>

                      {/* Deliverables List */}
                      <div className="space-y-2.5 pt-6 border-t border-slate-100 mb-6">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 block mb-3">
                          CORE DELIVERABLES:
                        </span>
                        {service.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#c8102e] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Expected Outcome */}
                      <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e2ded6] mb-6 text-xs text-slate-700 leading-relaxed">
                        <span className="font-bold text-[#171717] block mb-1">Business Impact:</span>
                        {service.outcomes}
                      </div>
                    </div>

                    {/* Inquiry Button */}
                    <button
                      type="button"
                      onClick={() => handleOpenContact(service.title)}
                      className="w-full py-3.5 px-6 rounded-xl bg-slate-100 hover:bg-[#c8102e] text-slate-800 hover:text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                      data-cursor="magnetic"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. 5-STAGE DELIVERY METHODOLOGY (White Background) */}
        <section className="relative z-20 py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-white text-[#171717] border-t border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Section Index Divider */}
            <div className="flex items-center justify-between pb-6 mb-16 border-b border-slate-200 text-[11px] font-mono tracking-widest text-slate-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                <span className="font-bold text-[#c8102e]">02 //</span>
                <span>5-STAGE DELIVERY PROCESS</span>
              </div>
              <span className="hidden sm:inline-block text-slate-400">SYSTEMATIC EXECUTION</span>
            </div>

            <div className="max-w-3xl mb-16 flex flex-col gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
                SYSTEMATIC EXECUTION
              </span>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-tight">
                Our 5-Stage Delivery Process
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                How we turn complex enterprise requirements into robust, production-ready digital solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {deliverySteps.map((stepItem, sIdx) => (
                <div
                  key={sIdx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-[#c8102e] hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <span className="text-3xl font-mono font-extrabold text-[#c8102e] block mb-4">
                      {stepItem.step}
                    </span>
                    <h3 className="text-lg font-extrabold text-[#171717] mb-2">
                      {stepItem.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {stepItem.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c8102e]" />
                    <span>MILESTONE {stepItem.step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. DOMAIN EXPERTISE HIGHLIGHT (Warm Cream Background) */}
        <section className="relative z-30 py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#f6f4ee] text-[#171717] border-t border-[#e2dcd2] overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Section Index Divider */}
            <div className="flex items-center justify-between pb-6 mb-16 border-b border-[#e2dcd2] text-[11px] font-mono tracking-widest text-slate-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                <span className="font-bold text-[#c8102e]">03 //</span>
                <span>DOMAIN EXPERTISE</span>
              </div>
              <span className="hidden sm:inline-block text-slate-400">INDUSTRY SPECIALIZATIONS</span>
            </div>

            <div className="max-w-3xl mb-16 flex flex-col gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
                INDUSTRY SPECIALIZATIONS
              </span>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-tight">
                Domain Expertise
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Deep vertical knowledge in media, education, and retail allows us to engineer software that addresses real industry nuances.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Media */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e8e4dc] hover:border-[#c8102e] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#c8102e]/10 text-[#c8102e] flex items-center justify-center mb-6">
                    <Tv className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c8102e] block mb-2">
                    BROADCAST & STREAMING
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#171717] mb-3">
                    Media & Broadcasting
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    Technology solutions designed for media organizations, broadcasters, radio networks, and content-driven businesses.
                  </p>
                  <div className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#c8102e]" />
                      <span>Automatic Content Recognition (ACR)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#c8102e]" />
                      <span>24/7 Digital Radio Streaming</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#c8102e]" />
                      <span>Media Monitoring & Ad Analytics</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e8e4dc] hover:border-[#c8102e] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#c8102e]/10 text-[#c8102e] flex items-center justify-center mb-6">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c8102e] block mb-2">
                    STUDENT LIFECYCLE
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#171717] mb-3">
                    Education Technology
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    Digital platforms and business solutions that simplify education operations, student management, communication, and engagement.
                  </p>
                  <div className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#c8102e]" />
                      <span>Overseas Student Journey CRM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#c8102e]" />
                      <span>Document Vault & Verification Pipelines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#c8102e]" />
                      <span>Automated WhatsApp Nurturing</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Retail */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e8e4dc] hover:border-[#c8102e] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#c8102e]/10 text-[#c8102e] flex items-center justify-center mb-6">
                    <ShoppingBag className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c8102e] block mb-2">
                    LOYALTY & VISIBILITY
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#171717] mb-3">
                    Retail & Loyalty Systems
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    Technology experiences that help retailers improve customer engagement, dealer promotions, loyalty, and business operations.
                  </p>
                  <div className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#c8102e]" />
                      <span>Interactive Gamification & Rewards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#c8102e]" />
                      <span>Dealer Display Audits & Contests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#c8102e]" />
                      <span>Receipt Verification & Anti-Fraud</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FINAL CONSULTATION CTA (White Background) */}
        <section className="relative z-40 py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-white text-[#171717] border-t border-slate-200 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            {/* Section Index Divider */}
            <div className="w-full flex items-center justify-between pb-6 mb-10 border-b border-slate-200 text-[11px] font-mono tracking-widest text-slate-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                <span className="font-bold text-[#c8102e]">04 //</span>
                <span>CONSULTATION</span>
              </div>
              <span className="hidden sm:inline-block text-slate-400">START A CONVERSATION</span>
            </div>

            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
              START A CONVERSATION
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-tight">
              Let&apos;s engineer your next digital advantage.
            </h2>
            <p className="text-slate-600 text-base sm:text-xl max-w-2xl font-normal leading-relaxed">
              Tell us what you&apos;re trying to solve and let&apos;s find the technology strategy and software engineering that will move your business forward.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              <button
                onClick={() => handleOpenContact()}
                className="px-8 py-4 rounded-full bg-[#c8102e] hover:bg-[#171717] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#c8102e]/30 flex items-center gap-2 cursor-pointer"
                data-cursor="magnetic"
              >
                <span>Schedule Discovery Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <Link
                href="/products"
                className="px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 shadow-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
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
        initialProduct={selectedServiceInquiry}
      />
    </SmoothScroll>
  );
}
