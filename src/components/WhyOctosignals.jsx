"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CheckCircle2, ShieldCheck, HeartHandshake, Wrench, Target, Zap } from "lucide-react";

const pillars = [
  {
    title: "Practical Technology",
    desc: "We focus on solving real operational challenges with reliable, scalable software rather than chasing hype.",
    icon: Wrench,
  },
  {
    title: "Long-Term Partnerships",
    desc: "We build enduring relationships, serving as a trusted technology co-pilot as your business evolves.",
    icon: HeartHandshake,
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
    icon: Zap,
  },
];

export default function WhyOctosignals() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
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
      id="why-us"
      ref={containerRef}
      className="relative z-[60] -mt-12 sm:-mt-16 py-28 px-4 sm:px-8 lg:px-12 bg-white text-[#171717] rounded-t-[3rem] sm:rounded-t-[4rem] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
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

        {/* 5 Focus Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="why-card p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#c8102e] shadow-lg shadow-slate-900/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#c8102e]/10 text-[#c8102e] flex items-center justify-center mb-6 group-hover:bg-[#c8102e] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#171717] mb-3 group-hover:text-[#c8102e] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-2 text-xs text-[#c8102e] font-mono font-bold">
                  <CheckCircle2 className="w-4 h-4" />
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
