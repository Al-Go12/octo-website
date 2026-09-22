"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight, Sparkles } from "lucide-react";
import ProductModal from "./ProductModal";

const productsData = [
  {
    id: "audioprints",
    title: "AUDIOPRINTS",
    category: "MEDIA & BROADCAST",
    tagline: "Radio monitoring powered by Automatic Content Recognition (ACR).",
    description:
      "A radio monitoring system powered by in-house Automatic Content Recognition technology. Monitor, identify, search, and analyze broadcast content through an intelligent monitoring platform.",
    highlights: [
      "Proprietary In-House ACR Recognition Engine",
      "Real-Time Radio Broadcast Identification",
      "Automated Campaign Verification & Ad Tracking",
      "Comprehensive Audio Search & Analytics Dashboard",
    ],
    image: "https://images.pexels.com/photos/32354361/pexels-photo-32354361.jpeg",
    gradient: "from-[#171717] via-[#7f1d1d] to-[#c8102e]",
    staggerOffset: "mt-0",
  },
  {
    id: "octo-campus-crm",
    title: "OCTO CAMPUS CRM",
    category: "CRM & EDUCATION",
    tagline: "CRM platform designed for overseas education consultants.",
    description:
      "A CRM platform designed for overseas education consultants and agencies. Manage students, applications, documents, tasks, communication, and the complete student journey from inquiry to enrollment.",
    highlights: [
      "Complete Student Journey Tracking",
      "Application & Document Workflow Engine",
      "Counselor Task & Lead Assignment",
      "Automated Multi-Channel Communication (SMS/WhatsApp)",
    ],
    image: "https://images.pexels.com/photos/5900222/pexels-photo-5900222.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    gradient: "from-[#c8102e] via-[#a80c24] to-[#171717]",
    staggerOffset: "md:mt-12",
  },
  {
    id: "dealer-display",
    title: "DEALER DISPLAY CONTEST PORTAL",
    category: "RETAIL & MARKETING",
    tagline: "Run dealer display contests and monitor submissions.",
    description:
      "A digital platform that helps companies run dealer display contests, manage participation, monitor submissions, and improve product visibility.",
    highlights: [
      "Image Submission & Audit Approval Engine",
      "Dealer Participation & Scoring Leaderboard",
      "Product Branding Visibility Verification",
      "Automated Notification & Prize Distribution",
    ],
    image: "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    gradient: "from-[#171717] via-[#450a0a] to-[#c8102e]",
    staggerOffset: "mt-0",
  },
  {
    id: "eventease",
    title: "EVENTEASE",
    category: "ENTERPRISE EVENTS",
    tagline: "Complete event management platform for registrations & attendance.",
    description:
      "A complete event management platform for invitations, registrations, attendance, and customer/dealer events.",
    highlights: [
      "QR Code Check-in & Badge Generation",
      "Dealer & Executive Invitation Tracking",
      "Real-Time Attendance Analytics",
      "Post-Event Survey & Feedback Collection",
    ],
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    gradient: "from-[#991b1b] via-[#c8102e] to-[#171717]",
    staggerOffset: "md:mt-12",
  },
  {
    id: "spin-n-win",
    title: "SPIN N WIN REWARDS",
    category: "RETAIL & REWARDS",
    tagline: "Transform purchases into memorable experiences through interactive games.",
    description:
      "An interactive customer engagement platform that transforms purchases into memorable experiences through games, rewards, and promotional campaigns.",
    highlights: [
      "Gamified Promotional Spin Wheel Logic",
      "Secure Purchase Receipt Verification",
      "Instant Digital Reward Code Redemption",
      "Multi-Branch Store Performance Dashboard",
    ],
    image: "https://images.pexels.com/photos/7594228/pexels-photo-7594228.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    gradient: "from-[#c8102e] via-[#171717] to-[#7f1d1d]",
    staggerOffset: "mt-0",
  },
  {
    id: "community-radio",
    title: "COMMUNITY RADIO",
    category: "MEDIA & BROADCAST",
    tagline: "Campus & community radio solution with online streaming.",
    description:
      "A campus and community radio solution with online streaming capabilities for creating vibrant digital radio experiences.",
    highlights: [
      "Continuous Web & Mobile Audio Streaming",
      "Scheduled Show & Podcast Automation",
      "Community Listener Request Interactivity",
      "High-Efficiency Low-Bandwidth Encoding",
    ],
    image: "https://images.pexels.com/photos/6954162/pexels-photo-6954162.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    gradient: "from-[#171717] via-[#a80c24] to-[#c8102e]",
    staggerOffset: "md:mt-12",
  },
  {
    id: "trend-tracker",
    title: "TREND TRACKER",
    category: "ANALYTICS & NLP",
    tagline: "Communication monitoring across WhatsApp, SMS, and Telegram.",
    description:
      "A communication monitoring platform designed to assess incoming messages from channels such as WhatsApp, SMS, and Telegram.",
    highlights: [
      "Multi-Channel Inbound Feed Aggregation",
      "Natural Language Sentiment Classification",
      "Keyword & Trend Velocity Alerts",
      "Automated Escalation Workflows",
    ],
    image: "https://images.pexels.com/photos/14380720/pexels-photo-14380720.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    gradient: "from-[#7f1d1d] via-[#c8102e] to-[#171717]",
    staggerOffset: "mt-0",
  },
  {
    id: "news-portal",
    title: "NEWS PORTAL",
    category: "MEDIA & PUBLISHING",
    tagline: "Complete news aggregation and dissemination platform.",
    description:
      "A complete news aggregation and dissemination platform for collecting, organizing, and distributing news content.",
    highlights: [
      "Multi-Source Automated RSS & Feed Ingestion",
      "Editorial Publishing & Category Workflow",
      "SEO-Optimized Fast Content Rendering",
      "Targeted Push Notification Engine",
    ],
    image: "https://images.pexels.com/photos/5185440/pexels-photo-5185440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    gradient: "from-[#171717] via-[#991b1b] to-[#c8102e]",
    staggerOffset: "md:mt-12",
  },
  {
    id: "tunes24",
    title: "TUNES24",
    category: "CONSUMER MEDIA",
    tagline: "24/7 online radio streaming focused on South Indian music.",
    description:
      "A 24/7 online radio streaming experience focused on South Indian music.",
    highlights: [
      "Uninterrupted High-Fidelity Audio Stream",
      "Dynamic Metadata & Now Playing Display",
      "Cross-Platform Web & Mobile Player UI",
      "Low Latency Global CDN Distribution",
    ],
    image: "https://images.pexels.com/photos/3351407/pexels-photo-3351407.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    gradient: "from-[#c8102e] via-[#7f1d1d] to-[#171717]",
    staggerOffset: "mt-0",
  },
];

const categories = [
  "ALL PRODUCTS",
  "MEDIA & BROADCAST",
  "CRM & EDUCATION",
  "RETAIL & REWARDS",
  "ANALYTICS & NLP",
];

export default function SelectedProducts({ onInquireProduct }) {
  const [selectedFilter, setSelectedFilter] = useState("ALL PRODUCTS");
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cuberto-project-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Scroll reveal zoom for product images
      gsap.utils.toArray(".product-img-box").forEach((box) => {
        const img = box.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.2 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: box,
                start: "top 90%",
                end: "bottom 20%",
                scrub: true,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selectedFilter]);


  const filteredProducts =
    selectedFilter === "ALL PRODUCTS"
      ? productsData
      : productsData.filter((p) =>
          p.category.toLowerCase().includes(selectedFilter.split(" ")[0].toLowerCase())
        );

  return (
    <section
      id="products"
      ref={containerRef}
      className="relative py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#f6f4ee] text-[#171717] border-t border-[#e2dcd2] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Sleek Top Section Identifier Bar */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-[#e2dcd2] text-[11px] font-mono tracking-widest text-slate-500 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
            <span className="font-bold text-[#c8102e]">03 //</span>
            <span>PROPRIETARY SYSTEMS</span>
          </div>
          <span className="hidden sm:inline-block text-slate-400">SOFTWARE PLATFORMS</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c8102e]">
              PROPRIETARY PRODUCTS
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#171717] tracking-tight leading-tight">
              Engineered for <span className="text-[#c8102e]">impact</span>
            </h2>
          </div>
          <p className="text-slate-700 text-base max-w-md leading-relaxed font-normal">
            Discover our unique offerings: Custom software, broadcast engines, CRM systems, and customer reward platforms engineered by OctoSignals.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-16 no-scrollbar">
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

        {/* Cuberto Staggered 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
          {filteredProducts.map((prod) => (
            <button
              key={prod.id}
              type="button"
              onClick={() => setActiveModalProduct(prod)}
              className={`cuberto-project-card text-left w-full group cursor-pointer ${prod.staggerOffset}`}
              data-cursor="explore"
              data-cursor-label="EXPLORE"
            >
              {/* Standalone Rounded Image Box */}
              <div className="product-img-box w-full h-80 sm:h-[420px] relative rounded-3xl overflow-hidden shadow-xl bg-white border border-[#e2ded6]">

                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-100"
                  loading="lazy"
                />
              </div>

              {/* Text Description Below Image */}
              <div className="mt-4 sm:mt-5 px-1">
                <p className="text-base sm:text-lg text-slate-800 group-hover:text-[#c8102e] transition-colors leading-relaxed font-normal">
                  {prod.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* View Complete Products Suite CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-[#e8e4dc] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 justify-center sm:justify-start">
              <Sparkles className="w-4 h-4 text-[#c8102e]" />
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
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
