"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CheckCircle, ShieldCheck, Handshake, Wrench, Target, Lightning } from "@phosphor-icons/react";

const pillars = [
  {
    title: "Practical Technology",
    desc: "We focus on solving real operational challenges with reliable, scalable software rather than chasing hype.",
    icon: Wrench,
  },
  {
    title: "Long-Term Partnerships",
    desc: "We build enduring relationships, serving as a trusted technology co-pilot as your business evolves.",
    icon: Handshake,
  },
  {
    title: "Reliable Engineering",
    desc: "Built with high uptime, clean code architecture, security, and enterprise performance standards.",
    icon: ShieldCheck,
  },
  {
    title: "Business-Focused Solutions",
    desc: "Every line of code and architectural decision is aligned with measurable business ROI and user value.",
    icon: Target,
  },
  {
    title: "Continuous Innovation",
    desc: "Leveraging emerging AI, ACR, NLP, and media streaming technologies to keep your business ahead.",
    icon: Lightning,
  },
];

const stats = [
  { value: 99.9, suffix: "%", label: "SYSTEM UPTIME" },
  { value: 4, suffix: "+", label: "GLOBAL REGIONS (IND, UAE, OMN, US)" },
  { value: 100, suffix: "+", label: "DIGITAL & MEDIA PRODUCTS" },
  { value: 10, suffix: "+ YRS", label: "DOMAIN & TECH LEADERSHIP" },
];

export default function WhyOctosignals() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Cards stagger
      gsap.fromTo(
        ".why-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Stats numbers animated counting
      gsap.utils.toArray(".stat-num").forEach((numEl) => {
        const targetVal = parseFloat(numEl.getAttribute("data-target"));
        const decimals = numEl.getAttribute("data-decimals") || "0";
        const obj = { val: 0 };

        gsap.to(obj, {
          val: targetVal,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: numEl,
            start: "top 90%",
          },
          onUpdate: () => {
            numEl.textContent = decimals === "1" ? obj.val.toFixed(1) : Math.floor(obj.val);
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us"
      ref={containerRef}
      className="relative z-[60] py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-white text-[#171717] border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Index Divider */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-slate-200 text-[11px] font-mono tracking-widest text-slate-500 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
            <span className="font-bold text-[#c8102e]">06 //</span>
            <span>WHY OCTOSIGNALS</span>
          </div>
          <span className="hidden sm:inline-block text-slate-400">CORE VALUE PROPOSITION</span>
        </div>

        {/* Header Statement */}
        <div className="max-w-3xl mb-16 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c8102e]">
            <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
            <span>WHY OCTOSIGNALS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#171717] tracking-tight leading-tight">
            Technology should solve problems, not create more of them.
          </h2>

          <p className="text-slate-700 text-lg leading-relaxed font-normal">
            We bring strategy, engineering, design, domain knowledge, and implementation together under one unified team.
          </p>
        </div>

        {/* Live Animated Stats Counter Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 p-8 rounded-3xl bg-black text-white border border-slate-800 shadow-2xl">
          {stats.map((st, i) => (
            <div key={i} className="flex flex-col gap-1 border-l-2 border-[#c8102e] pl-4">
              <div className="text-3xl sm:text-5xl font-extrabold font-mono text-white flex items-center">
                <span
                  className="stat-num"
                  data-target={st.value}
                  data-decimals={st.value % 1 !== 0 ? "1" : "0"}
                >
                  0
                </span>
                <span className="text-[#c8102e]">{st.suffix}</span>
              </div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400">
                {st.label}
              </span>
            </div>
          ))}
        </div>

        {/* 5 Focus Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="why-card p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#c8102e] shadow-lg shadow-slate-900/5 transition-all duration-300 flex flex-col justify-between group lift-on-hover"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#c8102e]/10 text-[#c8102e] flex items-center justify-center mb-6 group-hover:bg-[#c8102e] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" weight="duotone" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#171717] mb-3 group-hover:text-[#c8102e] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-2 text-xs text-[#c8102e] font-mono font-bold">
                  <CheckCircle className="w-4 h-4" weight="duotone" />
                  <span>OCTOSIGNALS CORE PRINCIPLE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

