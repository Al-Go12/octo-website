"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Search,
  SlidersHorizontal,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Radio,
  GraduationCap,
  Award,
  Calendar,
  Gift,
  Waves,
  MessageSquareCode,
  Newspaper,
  Music,
  ExternalLink,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductModal from "@/components/ProductModal";
import ContactModal from "@/components/ContactModal";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Cursor from "@/components/Cursor";

const allProducts = [
  {
    id: "audioprints",
    title: "AUDIOPRINTS",
    category: "MEDIA & BROADCAST",
    icon: Radio,
    tagline: "Radio monitoring powered by in-house Automatic Content Recognition (ACR).",
    description:
      "A radio monitoring system powered by in-house Automatic Content Recognition technology. Monitor, identify, search, and analyze broadcast content through an intelligent monitoring platform.",
    highlights: [
      "Proprietary In-House ACR Recognition Engine",
      "Real-Time Radio Broadcast Identification",
      "Automated Campaign Verification & Ad Tracking",
      "Comprehensive Audio Search & Analytics Dashboard",
    ],
    techStack: ["Acoustic Fingerprinting", "Python/Rust Core", "WebSockets", "Kafka"],
    image: "https://images.pexels.com/photos/32354361/pexels-photo-32354361.jpeg",
    badge: "PATENTED ACR TECH",
  },
  {
    id: "octo-campus-crm",
    title: "OCTO CAMPUS CRM",
    category: "CRM & EDUCATION",
    icon: GraduationCap,
    tagline: "CRM platform designed for overseas education consultants and agencies.",
    description:
      "A CRM platform designed for overseas education consultants and agencies. Manage students, applications, documents, tasks, communication, and the complete student journey from inquiry to enrollment.",
    highlights: [
      "Complete Student Journey Tracking & Pipelines",
      "Application & Document Verification Workflow Engine",
      "Counselor Task & Lead Assignment Logic",
      "Automated Multi-Channel Communication (SMS/WhatsApp)",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "WhatsApp Cloud API"],
    badge: "EDTECH ENTERPRISE",
    image: "https://images.pexels.com/photos/5900222/pexels-photo-5900222.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
  {
    id: "dealer-display",
    title: "DEALER DISPLAY CONTEST PORTAL",
    category: "RETAIL & MARKETING",
    icon: Award,
    tagline: "Digital platform to run dealer display contests and monitor submissions.",
    description:
      "A digital platform that helps companies run dealer display contests, manage participation, monitor submissions, and improve product visibility.",
    highlights: [
      "Image Submission & Audit Approval Engine",
      "Dealer Participation & Scoring Leaderboard",
      "Product Branding Visibility Verification",
      "Automated Notification & Prize Distribution",
    ],
    techStack: ["Computer Vision Audit", "React", "Cloudflare R2", "GraphQL"],
    badge: "RETAIL AUDITING",
    image: "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
  {
    id: "eventease",
    title: "EVENTEASE",
    category: "ENTERPRISE EVENTS",
    icon: Calendar,
    tagline: "Complete event management platform for registrations & attendance.",
    description:
      "A complete event management platform for invitations, registrations, attendance, and customer/dealer events.",
    highlights: [
      "QR Code Check-in & Instant Badge Generation",
      "Dealer & Executive Invitation Tracking",
      "Real-Time Attendance Analytics & Capacity Alerts",
      "Post-Event Survey & Feedback Collection",
    ],
    techStack: ["QR Fast Scanner", "WebSockets", "Serverless Edge", "PDF Engine"],
    badge: "HIGH CONCURRENCY",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
  {
    id: "spin-n-win",
    title: "SPIN N WIN REWARDS",
    category: "RETAIL & MARKETING",
    icon: Gift,
    tagline: "Gamified customer engagement turning purchases into interactive experiences.",
    description:
      "An interactive customer engagement platform that transforms purchases into memorable experiences through games, rewards, and promotional campaigns.",
    highlights: [
      "Gamified Promotional Spin Wheel Logic",
      "Secure Purchase Receipt Verification & Anti-Fraud",
      "Instant Digital Reward Code Redemption",
      "Multi-Branch Store Performance Dashboard",
    ],
    techStack: ["Canvas/WebGL Gamification", "Fraud Heuristics", "Redis", "SMS Gateway"],
    badge: "LOYALTY ENGINE",
    image: "https://images.pexels.com/photos/7594228/pexels-photo-7594228.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
  {
    id: "community-radio",
    title: "COMMUNITY RADIO",
    category: "MEDIA & BROADCAST",
    icon: Waves,
    tagline: "Campus & community radio solution with online streaming capabilities.",
    description:
      "A campus and community radio solution with online streaming capabilities for creating vibrant digital radio experiences.",
    highlights: [
      "Continuous Web & Mobile Audio Streaming",
      "Scheduled Show & Podcast Automation",
      "Community Listener Request Interactivity",
      "High-Efficiency Low-Bandwidth Encoding",
    ],
    techStack: ["Icecast/HLS", "Low-Latency AAC", "Automated Playout", "Web Player SDK"],
    badge: "STREAMING CLOUD",
    image: "https://images.pexels.com/photos/6954162/pexels-photo-6954162.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
  {
    id: "trend-tracker",
    title: "TREND TRACKER",
    category: "ANALYTICS & NLP",
    icon: MessageSquareCode,
    tagline: "Multi-channel intelligence monitoring WhatsApp, SMS, and Telegram.",
    description:
      "A communication monitoring platform designed to assess incoming messages from channels such as WhatsApp, SMS, and Telegram.",
    highlights: [
      "Multi-Channel Inbound Feed Aggregation",
      "Natural Language Sentiment Classification",
      "Keyword & Trend Velocity Alerts",
      "Automated Escalation Workflows",
    ],
    techStack: ["NLP Classifiers", "Telegram/WhatsApp Webhooks", "TimescaleDB", "Elasticsearch"],
    badge: "NLP INTELLIGENCE",
    image: "https://images.pexels.com/photos/14380720/pexels-photo-14380720.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
  {
    id: "news-portal",
    title: "NEWS PORTAL",
    category: "MEDIA & PUBLISHING",
    icon: Newspaper,
    tagline: "Complete news aggregation, editorial curation, and distribution engine.",
    description:
      "A complete news aggregation and dissemination platform for collecting, organizing, and distributing news content.",
    highlights: [
      "Multi-Source Automated RSS & Feed Ingestion",
      "Editorial Publishing & Category Workflow",
      "SEO-Optimized Fast Content Rendering",
      "Targeted Push Notification Engine",
    ],
    techStack: ["Next.js ISR", "Full-Text Search", "Editorial CMS", "Web Push"],
    badge: "PUBLISHING SUITE",
    image: "https://images.pexels.com/photos/5185440/pexels-photo-5185440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
  {
    id: "tunes24",
    title: "TUNES24",
    category: "MEDIA & BROADCAST",
    icon: Music,
    tagline: "24/7 online radio streaming experience focused on South Indian music.",
    description:
      "A 24/7 online radio streaming experience focused on South Indian music, delivering continuous high-fidelity audio streams globally.",
    highlights: [
      "Uninterrupted High-Fidelity Audio Stream",
      "Dynamic Metadata & Now Playing Display",
      "Cross-Platform Web & Mobile Player UI",
      "Low Latency Global CDN Distribution",
    ],
    techStack: ["Global Edge CDN", "Dynamic ID3 Tags", "React Player", "Audio Transcoding"],
    badge: "LIVE 24/7 STREAM",
    image: "https://images.pexels.com/photos/3351407/pexels-photo-3351407.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
];

const categoryTabs = [
  "ALL PRODUCTS",
  "MEDIA & BROADCAST",
  "CRM & EDUCATION",
  "RETAIL & MARKETING",
  "ANALYTICS & NLP",
];

export default function ProductsPage() {
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("ALL PRODUCTS");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedProductInquiry, setSelectedProductInquiry] = useState("");

  const heroRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".prod-hero-anim",
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

  const handleOpenContact = (productName = "") => {
    setSelectedProductInquiry(productName || "");
    setContactOpen(true);
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "ALL PRODUCTS" ||
        product.category.toLowerCase().includes(selectedCategory.split(" ")[0].toLowerCase());

      const matchesSearch =
        searchQuery.trim() === "" ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
          className="relative pt-36 pb-20 px-4 sm:px-8 lg:px-12 bg-[#fafafa] text-[#171717] overflow-hidden"
        >
          {/* Subtle Ambient Red Tint */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c8102e]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="prod-hero-anim flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
                PROPRIETARY SOFTWARE & PLATFORMS
              </span>
            </div>

            <h1 className="prod-hero-anim text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#171717] leading-[1.08] max-w-5xl mb-6">
              Engineered for <span className="text-[#c8102e]">Measurable Impact</span>.
            </h1>

            <p className="prod-hero-anim text-lg sm:text-2xl text-slate-700 max-w-3xl leading-relaxed font-normal mb-10">
              Explore our full suite of proprietary platforms — from in-house Automatic Content Recognition (ACR) and 24/7 broadcast engines to specialized enterprise CRMs and retail gamification portals.
            </p>

            {/* Filter & Search Bar */}
            <div className="prod-hero-anim pt-8 border-t border-slate-200/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
                {categoryTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedCategory(tab)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 cursor-pointer ${
                      selectedCategory === tab
                        ? "bg-[#c8102e] text-white shadow-md shadow-[#c8102e]/25"
                        : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Keyword Search Input */}
              <div className="relative w-full lg:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search products or tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#c8102e] transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. PRODUCTS SHOWCASE GRID (Warm Cream Background) */}
        <section className="relative z-10 py-24 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#f6f4ee] text-[#171717] border-t border-[#e2dcd2]">
          <div className="max-w-7xl mx-auto">
            {/* Section Index Divider */}
            <div className="flex items-center justify-between pb-6 mb-16 border-b border-[#e2dcd2] text-[11px] font-mono tracking-widest text-slate-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                <span className="font-bold text-[#c8102e]">01 //</span>
                <span>PRODUCT CATALOG</span>
              </div>
              <span className="hidden sm:inline-block text-slate-400">PROPRIETARY SYSTEMS</span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-[#e8e4dc] p-8 shadow-sm">
                <SlidersHorizontal className="w-10 h-10 text-[#c8102e] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#171717] mb-2">No products match your filter</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Try adjusting your search query or selecting &ldquo;ALL PRODUCTS&rdquo; to view the complete catalog.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("ALL PRODUCTS");
                    setSearchQuery("");
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#c8102e] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((prod) => {
                  const IconComp = prod.icon;
                  return (
                    <div
                      key={prod.id}
                      className="group rounded-3xl bg-white border border-[#e8e4dc] hover:border-[#c8102e] transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl"
                    >
                      <div>
                        {/* Image Banner */}
                        <div className="w-full h-52 relative overflow-hidden bg-slate-100">
                          <img
                            src={prod.image}
                            alt={prod.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                          {/* Top Badges */}
                          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                              {prod.category}
                            </span>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c8102e] bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#c8102e]/30">
                              {prod.badge}
                            </span>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-6 sm:p-8">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-xl bg-[#c8102e]/10 text-[#c8102e] flex items-center justify-center shrink-0">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-[#171717] group-hover:text-[#c8102e] transition-colors">
                              {prod.title}
                            </h3>
                          </div>

                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                            {prod.description}
                          </p>

                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {prod.techStack.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md bg-[#f6f4ee] border border-[#e2ded6] text-slate-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Highlights Preview */}
                          <div className="space-y-2 pt-4 border-t border-slate-100">
                            {prod.highlights.slice(0, 2).map((hl, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#c8102e] shrink-0 mt-0.5" />
                                <span>{hl}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="p-6 sm:p-8 pt-0 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setActiveModalProduct(prod)}
                          className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-[#171717] text-slate-800 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                          data-cursor="magnetic"
                        >
                          <span>Full Specs</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleOpenContact(prod.title)}
                          className="py-3 px-4 rounded-xl bg-[#c8102e] hover:bg-[#a80c24] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md shadow-[#c8102e]/25 cursor-pointer"
                          data-cursor="magnetic"
                          title="Inquire about this product"
                        >
                          <span>Inquire</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* 3. ENTERPRISE ENGINEERING STANDARDS (White Background) */}
        <section className="relative z-20 py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-white text-[#171717] border-t border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Section Index Divider */}
            <div className="flex items-center justify-between pb-6 mb-16 border-b border-slate-200 text-[11px] font-mono tracking-widest text-slate-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                <span className="font-bold text-[#c8102e]">02 //</span>
                <span>ARCHITECTURAL STANDARDS</span>
              </div>
              <span className="hidden sm:inline-block text-slate-400">ENTERPRISE RIGOR</span>
            </div>

            <div className="max-w-3xl mb-16 flex flex-col gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
                ENTERPRISE RIGOR
              </span>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-tight">
                Architectural Standards
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Every software platform we engineer is built to meet strict production performance, security, and scalability benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#c8102e] mb-6 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#171717] mb-2">Hardened Data Security</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  End-to-end encrypted databases, automated role-based access control (RBAC), and strict isolation of enterprise client records.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#c8102e] mb-6 shadow-sm">
                  <Radio className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#171717] mb-2">24/7 High-Availability</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  Continuous uptime telemetry, multi-region failovers, and low-latency edge CDN pipelines engineered for round-the-clock stability.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#c8102e] mb-6 shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#171717] mb-2">Custom White-Labeling</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  Adaptable platform architecture that seamlessly integrates into your company branding, SSO providers, and internal ERP workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FINAL CTA (Warm Cream Background) */}
        <section className="relative z-30 py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#f6f4ee] text-[#171717] border-t border-[#e2dcd2] text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            {/* Section Index Divider */}
            <div className="w-full flex items-center justify-between pb-6 mb-10 border-b border-[#e2dcd2] text-[11px] font-mono tracking-widest text-slate-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                <span className="font-bold text-[#c8102e]">03 //</span>
                <span>PLATFORM INQUIRY</span>
              </div>
              <span className="hidden sm:inline-block text-slate-400">SCHEDULE A DEMO</span>
            </div>

            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
              DEPLOY A PROPRIETARY SYSTEM
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-tight">
              Ready to deploy or customize a platform?
            </h2>
            <p className="text-slate-600 text-base sm:text-xl max-w-2xl font-normal leading-relaxed">
              Schedule a technical demo or talk with our engineering architects to explore how our products integrate into your operations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              <button
                onClick={() => handleOpenContact()}
                className="px-8 py-4 rounded-full bg-[#c8102e] hover:bg-[#171717] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#c8102e]/30 flex items-center gap-2 cursor-pointer"
                data-cursor="magnetic"
              >
                <span>Request Live Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <Link
                href="/services"
                className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
                data-cursor="magnetic"
              >
                <span>Explore Custom Services</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          onInquire={(prodName) => handleOpenContact(prodName)}
        />
      )}

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        initialProduct={selectedProductInquiry}
      />
    </SmoothScroll>
  );
}
