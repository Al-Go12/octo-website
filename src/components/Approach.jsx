"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MagnifyingGlass, Lightbulb, PenNib, Hammer, Stack, ArrowsClockwise } from "@phosphor-icons/react";

const steps = [
  {
    num: "01",
    title: "Understand the Problem First",
    desc: "We analyze real business context, operational friction, and user goals before proposing any technology stack.",
    icon: MagnifyingGlass,
  },
  {
    num: "02",
    title: "Identify Right Technology",
    desc: "No unnecessary complexity or reinventing wheels. We select modern, practical, and scalable tech frameworks.",
    icon: Lightbulb,
  },
  {
    num: "03",
    title: "Design the Solution",
    desc: "Architecting intuitive user interfaces, clean workflows, and enterprise-grade software architecture.",
    icon: PenNib,
  },
  {
    num: "04",
    title: "Build with Precision",
    desc: "Executing robust frontend, backend, AI, or broadcast media code engineered for long-term scalability.",
    icon: Hammer,
  },
  {
    num: "05",
    title: "Integrate Ecosystems",
    desc: "Connecting platforms, legacy databases, APIs, and automated tools into a single cohesive ecosystem.",
    icon: Stack,
  },
  {
    num: "06",
    title: "Continuously Improve",
    desc: "Monitoring, refining performance, gathering analytics, and continuously enhancing value over time.",
    icon: ArrowsClockwise,
  },
];

export default function Approach() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header item reveal
      gsap.fromTo(
        ".approach-header-item",
        { y: 40, opacity: 0 },
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

      // Image scroll zoom
      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { scale: 0.95, opacity: 0.8 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: imgRef.current,
              start: "top 85%",
              end: "bottom 30%",
              scrub: 0.5,
            },
          }
        );
      }

      // Step cards stagger reveal
      gsap.fromTo(
        ".approach-step",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".approach-steps-grid",
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      id="approach"
      ref={containerRef}
      className="relative z-50 py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#f6f4ee] text-[#171717] border-t border-[#e2dcd2] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Index Divider */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-[#e2dcd2] text-[11px] font-mono tracking-widest text-slate-500 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
            <span className="font-bold text-[#c8102e]">05 //</span>
            <span>OUR APPROACH &amp; WORKFLOW</span>
          </div>
          <span className="hidden sm:inline-block text-slate-400">SYSTEMATIC METHODOLOGY</span>
        </div>

        {/* Header Statement featuring extracted image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="approach-header-item inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c8102e]">
              <span className="w-2 h-2 rounded-full bg-[#c8102e] animate-pulse" />
              <span>OUR PHILOSOPHY</span>
            </div>

            <h2 className="approach-header-item text-4xl sm:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.08]">
              Guiding You in the <span className="gradient-text-red">Right Direction</span>
            </h2>

            <p className="approach-header-item text-slate-700 text-lg leading-relaxed font-normal">
              OctoSignals Technologies uses technology to create powerful solutions for businesses. We offer comprehensive services aimed at improving your offerings to associates, using the best practices in business and technology.
            </p>

            <div className="approach-header-item p-6 rounded-2xl bg-white border border-slate-200 shadow-sm lift-on-hover">
              <p className="text-lg sm:text-xl font-light text-[#171717] leading-relaxed italic">
                &ldquo;At OctoSignals, we&apos;re not in the business of reinventing the wheel. Instead, we focus on ensuring that your wheel is spinning in the right direction.&rdquo;
              </p>
            </div>
          </div>

          <div ref={imgRef} className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl group">
            <img
              src="/images/octo-approach-methodology.jpg"
              alt="Our Approach & Technology Integration"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-100"
            />
          </div>
        </div>

        {/* 6-Step Workflow Grid */}
        <div className="approach-steps-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="approach-step p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#c8102e] shadow-lg shadow-black/10 transition-all duration-300 flex flex-col justify-between group lift-on-hover"
              >

                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono font-bold text-[#c8102e] bg-[#c8102e]/10 px-3 py-1 rounded-full border border-[#c8102e]/20">
                    STEP {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#c8102e] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" weight="duotone" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold text-[#171717] group-hover:text-[#c8102e] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
