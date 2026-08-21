"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Tv, GraduationCap, ShoppingBag, ArrowUpRight, ShieldCheck } from "lucide-react";

const domains = [
  {
    title: "Media & Broadcasting",
    icon: Tv,
    badge: "BROADCAST & STREAMING",
    summary:
      "Technology solutions designed for media organizations, broadcasters, radio networks, and content-driven businesses.",
    points: [
      "Automatic Content Recognition (ACR)",
      "Live 24/7 Digital Radio Streaming",
      "Media Analytics & Campaign Verification",
    ],
  },
  {
    title: "Education Technology",
    icon: GraduationCap,
    badge: "CRM & STUDENT SYSTEMS",
    summary:
      "Digital platforms and business solutions that simplify education operations, student management, communication, and engagement.",
    points: [
      "Overseas Student Journey CRM",
      "Inquiry-to-Enrollment Automation",
      "Campus Digital Communication Portals",
    ],
  },
  {
    title: "Retail & Consumer Engagement",
    icon: ShoppingBag,
    badge: "CONTESTS & REWARDS",
    summary:
      "Technology experiences that help retailers improve customer engagement, promotions, loyalty, and business operations.",
    points: [
      "Interactive Contest & Gamification Platforms",
      "Dealer Display Audit & Verification",
      "Promotional Campaign & Reward Portals",
    ],
  },
];

export default function DomainExpertise() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".domain-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="domains"
      ref={containerRef}
      className="relative z-50 -mt-12 sm:-mt-16 py-28 px-4 sm:px-8 lg:px-12 bg-[#fafafa] rounded-t-[3rem] sm:rounded-t-[4rem] lg:rounded-t-[5rem] shadow-[0_-25px_70px_rgba(0,0,0,0.06)] border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c8102e]">
            INDUSTRY SPECIALIZATION
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#171717] tracking-tight leading-tight">
            Domain Expertise
          </h2>
          <p className="text-slate-700 text-base leading-relaxed font-normal">
            Deep domain knowledge in Media, Education, and Retail allows us to engineer software that addresses real industry nuances.
          </p>
        </div>

        {/* 3 Large Editorial Domain Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {domains.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <div
                key={idx}
                className="domain-card rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 overflow-hidden flex flex-col justify-between p-8 group hover:border-[#c8102e] transition-all duration-500"
                data-cursor="magnetic"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#171717] group-hover:bg-[#c8102e] group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#c8102e] bg-[#c8102e]/10 px-3 py-1 rounded-full border border-[#c8102e]/20">
                      {domain.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#171717] mb-4 group-hover:text-[#c8102e] transition-colors">
                    {domain.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-8 font-normal">
                    {domain.summary}
                  </p>

                  {/* Bullet points */}
                  <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 mb-8">
                    {domain.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700">
                        <ShieldCheck className="w-4 h-4 text-[#c8102e] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#171717] group-hover:text-[#c8102e] transition-colors">
                  <span>EXPLORE INDUSTRY SOLUTIONS</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#c8102e] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
