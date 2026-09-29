"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight, Sparkle, CheckCircle } from "@phosphor-icons/react";
import ProductModal from "./ProductModal";

const productsData = [
  {
    id: "audioprints",
    title: "AUDIOPRINTS",
    category: "MEDIA & BROADCASTING",
    tagline: "Know what's playing, the moment it airs.",
    description:
      "AudioPrints uses in-house Automatic Content Recognition (ACR) technology to identify and monitor radio content in real time, giving broadcasters, brands and media agencies verified proof of what aired, when, and how often.",
    highlights: [
      "Real-time audio content recognition engine",
      "Automated monitoring across multiple stations",
      "Verified airplay and compliance reports",
      "Brand and campaign tracking intelligence",
    ],
    image: "https://images.pexels.com/photos/32354361/pexels-photo-32354361.jpeg",
    gradient: "from-[#171717] via-[#7f1d1d] to-[#c8102e]",
    staggerOffset: "mt-0",
  },
  {
    id: "ayur-cms",
    title: "AYUR CMS",
    category: "HEALTHCARE",
    tagline: "The modern harmony of ancient wisdom.",
    description:
      "Ayur CMS is a comprehensive clinic and hospital management system built specifically for Ayurveda practices — streamlining patient care, therapy scheduling, pharmacy and billing while preserving the clinical heritage of traditional treatment.",
    highlights: [
      "Patient and doctor management & OP consultation",
      "Panchakarma / therapy and treatment tracking",
      "Pharmacy and inventory management",
      "Role-based access & comprehensive billing",
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-[#c8102e] via-[#a80c24] to-[#171717]",
    staggerOffset: "md:mt-12",
  },
  {
    id: "carbon-mrv",
    title: "CARBONMRV",
    category: "SUSTAINABILITY",
    tagline: "Turning real-world climate action into verified carbon credits.",
    description:
      "CarbonMRV is a Digital Measurement, Reporting and Verification (DMRV) platform paired with in-house IoT sensor hardware, purpose-built for carbon credit programs — capturing ground-truth usage data at the source and turning it into audit-ready evidence.",
    highlights: [
      "Custom IoT sensors for EV & clean cookstove usage",
      "Real-time, secure data capture and transmission",
      "Automated MRV data pipelines aligned with registries",
      "Tamper-resistant, geo-tagged & timestamped audit data",
    ],
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-[#171717] via-[#450a0a] to-[#c8102e]",
    staggerOffset: "mt-0",
  },
  {
    id: "spin-n-win",
    title: "SPIN N WIN REWARDS",
    category: "MARKETING & REWARDS",
    tagline: "Scan, play, win — every purchase becomes an experience.",
    description:
      "A gamified loyalty platform that turns everyday purchases into engaging spin-and-quiz reward experiences, with OCR-powered invoice verification and automated gift fulfilment so every campaign runs securely at scale.",
    highlights: [
      "Spin-the-wheel and quiz-based reward mechanics",
      "OCR-based invoice/bill verification with anti-fraud",
      "Configurable prize tiers & winner rules",
      "Gift inventory, logistics & dealer management",
    ],
    image: "https://images.pexels.com/photos/7594228/pexels-photo-7594228.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    gradient: "from-[#c8102e] via-[#171717] to-[#7f1d1d]",
    staggerOffset: "mt-0",
  },
  {
    id: "community-radio",
    title: "COMMUNITY / CAMPUS RADIO",
    category: "MEDIA & BROADCASTING",
    tagline: "Your own radio station, fully set up and streaming.",
    description:
      "A complete radio station setup and online streaming solution for community groups, campuses and institutions — covering everything from equipment and studio build-out to live online broadcast.",
    highlights: [
      "End-to-end station setup, studio acoustics & consultation",
      "Broadcast transmission & studio equipment installation",
      "Live online and community streaming infrastructure",
      "Scalable for campus, community or institutional use",
    ],
    image: "https://images.pexels.com/photos/6954162/pexels-photo-6954162.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    gradient: "from-[#171717] via-[#a80c24] to-[#c8102e]",
    staggerOffset: "md:mt-12",
  },
  {
    id: "octo-campus-crm",
    title: "OCTO CAMPUS CRM",
    category: "CRM & EDUCATION",
    tagline: "From first enquiry to enrollment — in one system.",
    description:
      "A centralized CRM built for education and study-abroad agencies, Octo Campus CRM manages the complete student lifecycle: capturing enquiries, distributing leads to counsellors, and tracking follow-ups across phone, WhatsApp and email.",
    highlights: [
      "Centralized student enquiry and lead management",
      "Automated lead distribution to telecalling teams",
      "Integrated phone, WhatsApp and email communication",
      "Sales, counselor productivity & conversion analytics",
    ],
    image: "https://images.pexels.com/photos/5900222/pexels-photo-5900222.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    gradient: "from-[#c8102e] via-[#a80c24] to-[#171717]",
    staggerOffset: "md:mt-12",
  },
  {
    id: "orbit-crm",
    title: "ORBIT CRM SUITE",
    category: "ENTERPRISE CRM",
    tagline: "One platform. Every department.",
    description:
      "Orbit is a full enterprise CRM and ERP suite that unifies sales, finance, HR, projects, assets, support and reporting into a single connected system — taking a lead from first contact all the way through delivery and support.",
    highlights: [
      "CRM: leads, clients, proposals and sales orders",
      "Accounts: invoicing, vendors, GST & financial reports",
      "HR, payroll, attendance & QR-based asset tracking",
      "Project milestones, timesheets & helpdesk support ticketing",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-[#171717] via-[#7f1d1d] to-[#c8102e]",
    staggerOffset: "mt-0",
  },
  {
    id: "eventease",
    title: "EVENTEASE",
    category: "EVENTS",
    tagline: "From invite to check-in, seamlessly.",
    description:
      "EventEase helps event managers run seamless registration and check-in for gatherings of any size — from boutique meetings to international summits — with personalized invites, QR-based entry passes and real-time reporting.",
    highlights: [
      "Email and WhatsApp invite integration with unique links",
      "Instant QR code entry pass generation & badge scanning",
      "Multiple check-in points including hotel and hall reception",
      "Admin console with camera-based scanning & live analytics",
    ],
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    gradient: "from-[#991b1b] via-[#c8102e] to-[#171717]",
    staggerOffset: "md:mt-12",
  },
];

const categories = [
  "ALL PRODUCTS",
  "MEDIA & BROADCASTING",
  "HEALTHCARE",
  "SUSTAINABILITY",
  "CRM & EDUCATION",
  "MARKETING & REWARDS",
  "EVENTS",
];

export default function SelectedProducts({ onInquireProduct }) {
  const [selectedFilter, setSelectedFilter] = useState("ALL PRODUCTS");
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".pinned-product-card");
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          const nextCard = cards[i + 1];
          gsap.to(card, {
            scale: 0.94,
            opacity: 0.6,
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top 85%",
              end: "top 120px",
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selectedFilter]);

  const filteredProducts =
    selectedFilter === "ALL PRODUCTS"
      ? productsData
      : productsData.filter((p) => {
          const filterKeyword = selectedFilter.split(" ")[0].toLowerCase();
          return p.category.toLowerCase().includes(filterKeyword);
        });

  return (
    <section
      id="products"
      ref={containerRef}
      className="relative py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#f6f4ee] text-[#171717] border-t border-[#e2dcd2] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-14 gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c8102e]">
            FEATURED PRODUCTS
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#171717] tracking-tight leading-tight">
            Purpose-Built Platforms for <span className="gradient-text-red">Real Outcomes</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Discover our flagship platforms: In-house broadcast engines, ACR audio recognition, overseas education CRM, sustainability DMRV, and retail gamification systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-14 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 cursor-pointer ${
                selectedFilter === cat
                  ? "bg-[#c8102e] text-white shadow-md shadow-[#c8102e]/25"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-[#e2ded6] shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pinned Stacking Cards System (Sustainable Mindz Pattern) */}
        <div className="pinned-stack-container flex flex-col gap-8 pb-12">
          {filteredProducts.map((prod, idx) => (
            <div
              key={prod.id}
              className="pinned-product-card pinned-stack-card bg-white border border-[#e2ded6] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/5 overflow-hidden transition-shadow"
              style={{
                zIndex: idx + 1,
              }}
            >
              {/* Card Meta Header */}
              <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#c8102e] tracking-widest">
                    0{idx + 1} {"//"}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-[#f6f4ee] border border-[#e8e4dc] text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-700">
                    {prod.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-[10px] font-mono font-bold text-emerald-700 tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>PRODUCTION READY // OCTOSIGNALS CORE</span>
                </div>
              </div>

              {/* 2-Column Editorial Card Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Information Column */}
                <div className="lg:col-span-7 flex flex-col gap-5">
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#171717] tracking-tight leading-tight uppercase">
                    {prod.title}
                  </h3>

                  <p className="text-sm sm:text-base font-semibold text-[#c8102e] leading-snug">
                    {prod.tagline}
                  </p>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {prod.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {prod.highlights.map((hl, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                      >
                        <CheckCircle
                          weight="duotone"
                          className="w-5 h-5 text-[#c8102e] shrink-0 mt-0.5"
                        />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setActiveModalProduct(prod)}
                      className="px-6 py-3.5 rounded-full bg-[#171717] hover:bg-[#c8102e] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md shadow-black/10 flex items-center gap-2 group cursor-pointer"
                    >
                      <span>Explore Architecture</span>
                      <ArrowUpRight
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        weight="bold"
                      />
                    </button>

                    <button
                      type="button"
                      onClick={() => onInquireProduct && onInquireProduct(prod.title)}
                      className="px-6 py-3.5 rounded-full bg-[#f6f4ee] hover:bg-slate-200 text-[#171717] border border-[#e2ded6] text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      <span>Request Live Demo</span>
                    </button>
                  </div>
                </div>

                {/* Right Media Column */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => setActiveModalProduct(prod)}
                    className="w-full h-72 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden relative border border-[#e8e4dc] shadow-xl group cursor-pointer bg-slate-100"
                  >
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                        {prod.category}
                      </span>
                      <span className="text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>View Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" weight="bold" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Complete Products Suite CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-[#e8e4dc] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 justify-center sm:justify-start">
              <Sparkle className="w-4 h-4 text-[#c8102e]" weight="duotone" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
                PROPRIETARY SOFTWARE SUITE
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#171717]">
              Explore Our Complete Product Catalog
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl font-normal">
              Dive into all 9 specialized proprietary platforms with in-depth feature breakdowns, technology specifications, and live demonstrations.
            </p>
          </div>

          <Link
            href="/products"
            className="shrink-0 px-8 py-4 rounded-full bg-[#c8102e] hover:bg-[#171717] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group shadow-xl shadow-[#c8102e]/30 cursor-pointer"
            data-cursor="magnetic"
          >
            <span>View All Products</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" weight="bold" />
          </Link>
        </div>
      </div>

      {/* Modal Dialog */}
      {activeModalProduct && (
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          onInquire={onInquireProduct}
        />
      )}
    </section>
  );
}
