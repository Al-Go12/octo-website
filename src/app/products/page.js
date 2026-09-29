"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  MagnifyingGlass,
  ArrowUpRight,
  Sparkle,
  CheckCircle,
  ShieldCheck,
  Broadcast,
  GraduationCap,
  Trophy,
  CalendarCheck,
  Gift,
  Waves,
  Newspaper,
  FirstAid,
  TreeStructure,
  Receipt,
  Storefront,
  Star,
  Leaf,
  Briefcase,
  Megaphone,
} from "@phosphor-icons/react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductModal from "@/components/ProductModal";
import ContactModal from "@/components/ContactModal";
import SmoothScroll from "@/components/SmoothScroll";

const allProducts = [
  // 1. Media & Broadcasting
  {
    id: "audioprints",
    title: "AUDIOPRINTS",
    category: "MEDIA & BROADCASTING",
    icon: Broadcast,
    tagline: "Know what's playing, the moment it airs.",
    description:
      "AudioPrints uses in-house Automatic Content Recognition (ACR) technology to identify and monitor radio content in real time, giving broadcasters, brands and media agencies verified proof of what aired, when, and how often.",
    highlights: [
      "Real-time audio content recognition",
      "Automated monitoring across multiple stations",
      "Verified airplay and compliance reports",
      "Brand and campaign tracking intelligence",
    ],
    techStack: ["Acoustic Fingerprinting", "Python/Rust Core", "WebSockets", "Kafka"],
    image: "https://images.pexels.com/photos/32354361/pexels-photo-32354361.jpeg",
    badge: "PATENTED ACR TECH",
  },
  {
    id: "community-radio",
    title: "COMMUNITY / CAMPUS RADIO",
    category: "MEDIA & BROADCASTING",
    icon: Waves,
    tagline: "Your own radio station, fully set up and streaming.",
    description:
      "A complete radio station setup and online streaming solution for community groups, campuses and institutions — covering everything from equipment and studio build-out to live online broadcast.",
    highlights: [
      "End-to-end station setup and consultation",
      "Studio and transmission equipment",
      "Live online and community streaming",
      "Scalable for campus, community or institutional use",
    ],
    techStack: ["Icecast/HLS", "Low-Latency AAC", "Studio Integration", "Web Player SDK"],
    badge: "BROADCAST INTEGRATOR",
    image: "https://images.pexels.com/photos/6954162/pexels-photo-6954162.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
  {
    id: "news-portal",
    title: "NEWS PORTAL",
    category: "MEDIA & BROADCASTING",
    icon: Newspaper,
    tagline: "A modern newsroom, online.",
    description:
      "A digital newsroom platform built for efficient news aggregation, editorial workflows and publishing — helping media houses move from source to story to screen faster.",
    highlights: [
      "Content aggregation and curation",
      "Editorial and publishing workflow",
      "Multi-format story publishing (text, video, audio)",
      "Built to scale with newsroom teams",
    ],
    techStack: ["Next.js ISR", "Full-Text Search", "Editorial CMS", "Web Push"],
    badge: "DIGITAL NEWSROOM",
    image: "https://images.pexels.com/photos/5185440/pexels-photo-5185440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },

  // 2. Healthcare
  {
    id: "ayur-cms",
    title: "AYUR CMS",
    category: "HEALTHCARE",
    icon: FirstAid,
    tagline: "The modern harmony of ancient wisdom.",
    description:
      "Ayur CMS is a comprehensive clinic and hospital management system built specifically for Ayurveda practices — streamlining patient care, therapy scheduling, pharmacy and billing while preserving the clinical heritage of traditional treatment.",
    highlights: [
      "Patient and doctor management",
      "Appointment booking and OP consultation",
      "Panchakarma / therapy and treatment tracking",
      "Pharmacy and inventory management",
      "Billing and payments",
      "Role-based access (admin, doctors, therapists, pharmacists)",
      "Clinical and financial reports & analytics",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "HIPAA/EHR Standards"],
    badge: "AYURVEDA HEALTHCARE",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },

  // 3. Education
  {
    id: "octo-campus-crm",
    title: "OCTO CAMPUS CRM",
    category: "EDUCATION",
    icon: GraduationCap,
    tagline: "From first enquiry to enrollment — in one system.",
    description:
      "A centralized CRM built for education and study-abroad agencies, Octo Campus CRM manages the complete student lifecycle: capturing enquiries, distributing leads to counsellors, tracking follow-ups across phone, WhatsApp and email, and converting interest into enrollment.",
    highlights: [
      "Centralized student enquiry and lead management",
      "Automated lead distribution to telecalling teams",
      "Integrated phone, WhatsApp and email communication",
      "Follow-up and interest-level tracking",
      "Course and college/university management",
      "Employee productivity and call reports",
      "Sales and conversion analytics",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "WhatsApp Cloud API"],
    badge: "EDTECH ENTERPRISE",
    image: "https://images.pexels.com/photos/5900222/pexels-photo-5900222.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },

  // 4. Enterprise CRM, ERP & Business Platforms
  {
    id: "orbit-crm",
    title: "ORBIT CRM SUITE",
    category: "ENTERPRISE CRM & ERP",
    icon: TreeStructure,
    tagline: "One platform. Every department.",
    description:
      "Orbit is a full enterprise CRM and ERP suite that unifies sales, finance, HR, projects, assets, support and reporting into a single connected system — taking a lead from first contact all the way through proposal, delivery and support.",
    highlights: [
      "CRM: leads, clients, proposals and sales orders",
      "Accounts: invoicing, vendors, GST and financial reporting",
      "HR and payroll: attendance, leave and workforce management",
      "Project management: milestones, timesheets and issue tracking",
      "Asset management with QR-based tracking",
      "Help desk and support ticketing",
      "Role-based access and cross-module reporting",
    ],
    techStack: ["React", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    badge: "FULL ERP SUITE",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "servicepro-crm",
    title: "SERVICEPRO CRM",
    category: "ENTERPRISE CRM & ERP",
    icon: Briefcase,
    tagline: "Scale your service business without the chaos.",
    description:
      "A service-business CRM and ERP built for companies that manage recurring contracts and field teams — automating everything from customer onboarding to recurring billing and renewal reminders.",
    highlights: [
      "Centralized customer database with order history",
      "Service and product order management with PDF invoicing",
      "Automated recurring billing cycles and renewal reminders",
      "Complaint and service-ticket tracking",
      "Employee and territory management",
      "Automated WhatsApp reminders & real-time analytics",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "WhatsApp Webhooks"],
    badge: "SERVICE BUSINESS ERP",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "quotation-generator-pro",
    title: "QUOTATION GENERATOR PRO",
    category: "ENTERPRISE CRM & ERP",
    icon: Receipt,
    tagline: "From quote to order, without the back-and-forth.",
    description:
      "A commercial document engine for teams that generate frequent quotations, purchase orders and approvals — pairing a lightweight CRM with GST-ready templates, multi-stage approval workflows and audit-ready reporting.",
    highlights: [
      "Client and staff management",
      "Configurable GST and non-GST quotation templates",
      "Multi-stage approval workflow",
      "Auto-generated release orders",
      "High-fidelity PDF document generation",
      "Reports and audit trail",
    ],
    techStack: ["React", "TailwindCSS", "PDF Generation Core", "Node.js"],
    badge: "COMMERCIAL ENGINE",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "retailhub-pos",
    title: "RETAILHUB POS",
    category: "ENTERPRISE CRM & ERP",
    icon: Storefront,
    tagline: "Multi-category retail, one connected system.",
    description:
      "RetailHub is a point-of-sale and inventory platform built for multi-category retailers — from electronics to apparel and watches — combining stock and variant management with GST billing and an automated WhatsApp assistant that captures leads from customer enquiries.",
    highlights: [
      "Product, category and variant management",
      "Low-stock alerts and supplier margin tracking",
      "Point-of-sale billing with GST-compliant invoices",
      "Customer registry and purchase history",
      "Automated WhatsApp chatbot for stock/price queries and lead capture",
      "Purchase and sales reporting with data export",
    ],
    techStack: ["Electron/Web", "Next.js", "Thermal Printer API", "WhatsApp AI"],
    badge: "RETAIL POS & BOT",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1200&q=80",
  },

  // 5. Marketing, Engagement & Rewards
  {
    id: "spin-n-win",
    title: "SPIN N WIN REWARDS",
    category: "MARKETING & REWARDS",
    icon: Gift,
    tagline: "Scan, play, win — every purchase becomes an experience.",
    description:
      "A gamified loyalty platform that turns everyday purchases into engaging spin-and-quiz reward experiences, with OCR-powered invoice verification and automated gift fulfilment so every campaign runs securely at scale.",
    highlights: [
      "Spin-the-wheel and quiz-based reward mechanics",
      "OCR-based invoice/bill verification",
      "Configurable prize tiers and winner rules",
      "Gift inventory and dealer/distribution management",
      "Real-time campaign dashboard and analytics",
      "Fraud-resistant duplicate-bill detection",
    ],
    techStack: ["OCR Engine", "Canvas/WebGL", "Redis Rate Limiter", "SMS Gateway"],
    badge: "GAMIFIED LOYALTY",
    image: "https://images.pexels.com/photos/7594228/pexels-photo-7594228.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
  {
    id: "dealer-display",
    title: "DEALER DISPLAY CONTEST PORTAL",
    category: "MARKETING & REWARDS",
    icon: Trophy,
    tagline: "Turn every dealer display into a competition.",
    description:
      "A platform that lets dealers submit photos of their product displays, get evaluated against defined criteria, and compete for rewards — giving brands a transparent, data-driven way to run display and merchandising contests at scale.",
    highlights: [
      "Dealer login and display submission",
      "Configurable evaluation criteria and scoring",
      "Region-wise dealer ranking & leaderboards",
      "Campaign setup with winner-count limits",
      "Evaluation scorecards by area/regional manager or agency",
      "Excel-based reporting and data export",
    ],
    techStack: ["Image Auditing", "React", "Cloudflare Storage", "GraphQL"],
    badge: "DEALER AUDITING",
    image: "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
  {
    id: "trade-promotion-manager",
    title: "TRADE PROMOTION MANAGER",
    category: "MARKETING & REWARDS",
    icon: Megaphone,
    tagline: "Field marketing, tracked from ground to boardroom.",
    description:
      "A trade marketing and materials management platform that gives brands visibility and control over painter meets, dealer/shop meets, signage and merchandise requests — with geo-tagged proof of execution and synced inventory across regional depots.",
    highlights: [
      "Painter meet, shop meet and merchandise request management",
      "Signage request and vendor allocation",
      "Regional stock and depot transfer control",
      "Geo-tagged, photo-verified installation proof",
      "Multi-stage marketing approval workflow",
      "ERP-linked masters and Excel compliance reporting",
    ],
    techStack: ["Geolocation Proof", "React Native", "Node.js", "ERP Sync"],
    badge: "FIELD MARKETING",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gift-redemption-portal",
    title: "GIFT REDEMPTION & CHANNEL REWARDS",
    category: "MARKETING & REWARDS",
    icon: Gift,
    tagline: "Reward your channel partners, compliantly.",
    description:
      "An end-to-end platform for managing promotional gift campaigns for channel partners and dealers — from purchase orders and inventory allocation to winner verification, logistics tracking and automated tax-compliant deductions.",
    highlights: [
      "Campaign and purchase order management",
      "Gift inventory and vendor pricing control",
      "PAN/Aadhar-based KYC and winner verification",
      "Automated TDS calculation per regulatory rules",
      "Real-time logistics and delivery tracking",
      "Analytics and compliance reporting",
    ],
    techStack: ["KYC Integration", "Automated TDS Engine", "PostgreSQL", "Logistics API"],
    badge: "CHANNEL COMPLIANCE",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "reviewxpert",
    title: "REVIEWXPERT",
    category: "MARKETING & REWARDS",
    icon: Star,
    tagline: "Turn every happy customer into a five-star review.",
    description:
      "A review management platform that tracks staff-level customer interactions and channels positive sentiment straight to your public review profile — giving businesses a measurable, QR-driven way to build their online reputation.",
    highlights: [
      "Unique QR code per staff member for instant review capture",
      "Staff performance and ratings leaderboard",
      "Smart redirection of positive feedback to public review profiles",
      "Multi-business, multi-tenant dashboard",
      "Rating analytics and sentiment breakdown",
      "Exportable review reports",
    ],
    techStack: ["Dynamic QR", "Sentiment Classifier", "Google Review API", "FastAPI"],
    badge: "REPUTATION ENGINE",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  },

  // 6. Sustainability & Climate Tech
  {
    id: "carbon-mrv",
    title: "CARBONMRV",
    category: "SUSTAINABILITY",
    icon: Leaf,
    tagline: "Turning real-world climate action into verified carbon credits.",
    description:
      "CarbonMRV is a Digital Measurement, Reporting and Verification (DMRV) platform paired with in-house IoT sensor hardware, purpose-built for carbon credit programs — starting with electric vehicle adoption and clean cookstove projects. It captures ground-truth usage data at the source, transmits it securely, and turns it into audit-ready evidence that registries, verifiers and credit buyers can trust.",
    highlights: [
      "Custom-designed IoT sensors for EV usage & cookstove usage",
      "Real-time, secure data capture and transmission from field devices",
      "Automated MRV data pipelines aligned with leading methodologies",
      "Tamper-resistant, geo-tagged and timestamped device data",
      "Project dashboard for monitoring emissions reduction in real time",
      "Automated report generation for registries and third-party verifiers",
      "Scalable device fleet management across distributed project sites",
    ],
    techStack: ["In-House IoT Hardware", "Cellular Telemetry", "Cryptographic Signatures", "DMRV Pipeline"],
    badge: "CLIMATE DMRV & IOT",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
  },

  // 7. Events
  {
    id: "eventease",
    title: "EVENTEASE",
    category: "EVENTS",
    icon: CalendarCheck,
    tagline: "From invite to check-in, seamlessly.",
    description:
      "EventEase helps event managers run seamless registration and check-in for gatherings of any size — from boutique meetings to international summits — with personalized invites, QR-based entry passes and real-time reporting.",
    highlights: [
      "Email and WhatsApp invite integration",
      "Unique registration link per attendee",
      "QR code entry pass generation",
      "Multiple check-in points, including hotel check-in",
      "Admin console with camera-based scanning",
      "Real-time attendance reporting",
    ],
    techStack: ["QR Fast Scanner", "WebSockets", "Serverless Edge", "PDF Engine"],
    badge: "SEAMLESS CHECK-IN",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
];

const categoryTabs = [
  "ALL PRODUCTS",
  "MEDIA & BROADCASTING",
  "HEALTHCARE",
  "EDUCATION",
  "ENTERPRISE CRM & ERP",
  "MARKETING & REWARDS",
  "SUSTAINABILITY",
  "EVENTS",
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
              Purpose-Built Platforms for <span className="text-[#c8102e]">Real Outcomes</span>.
            </h1>

            <p className="prod-hero-anim text-lg sm:text-2xl text-slate-700 max-w-3xl leading-relaxed font-normal mb-10">
              Purpose-built platforms designed for real business outcomes. Explore our growing suite of products across media, healthcare, education, retail, sustainability and enterprise operations.
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
                <MagnifyingGlass className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" weight="bold" />
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
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-[#e8e4dc] p-8 shadow-sm">
                <MagnifyingGlass className="w-10 h-10 text-[#c8102e] mx-auto mb-4" weight="duotone" />
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
                              <IconComp className="w-4 h-4" weight="duotone" />
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
                                <CheckCircle className="w-3.5 h-3.5 text-[#c8102e] shrink-0 mt-0.5" weight="duotone" />
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
                          <ArrowUpRight className="w-3.5 h-3.5" weight="bold" />
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
                  <ShieldCheck className="w-6 h-6" weight="duotone" />
                </div>
                <h3 className="text-xl font-bold text-[#171717] mb-2">Hardened Data Security</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  End-to-end encrypted databases, automated role-based access control (RBAC), and strict isolation of enterprise client records.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#c8102e] mb-6 shadow-sm">
                  <Broadcast className="w-6 h-6" weight="duotone" />
                </div>
                <h3 className="text-xl font-bold text-[#171717] mb-2">24/7 High-Availability</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  Continuous uptime telemetry, multi-region failovers, and low-latency edge CDN pipelines engineered for round-the-clock stability.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#c8102e] mb-6 shadow-sm">
                  <Sparkle className="w-6 h-6" weight="duotone" />
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
                onClick={() => handleOpenContact()}
                className="px-8 py-4 rounded-full bg-[#c8102e] hover:bg-[#171717] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#c8102e]/30 flex items-center gap-2 cursor-pointer"
                data-cursor="magnetic"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" weight="bold" />
              </button>

              <Link
                href="/services"
                className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
                data-cursor="magnetic"
              >
                <span>Explore Solutions</span>
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
