"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight, Sparkle } from "@phosphor-icons/react";

export default function FinalCTA({ onContactClick }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative z-[90] py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-white text-[#171717] border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="cta-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8102e]/10 text-xs font-bold uppercase tracking-widest text-[#c8102e] border border-[#c8102e]/20 w-fit">
              <Sparkle className="w-3.5 h-3.5 text-[#c8102e]" weight="duotone" />
              <span>OCTOSIGNALS TECHNOLOGIES</span>
            </div>

            <h2 className="cta-item text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#171717] leading-[1.05]">
              Ready to improve <br />
              <span className="gradient-text-red">your signals?</span>
            </h2>

            <p className="cta-item text-slate-700 text-lg sm:text-xl font-normal leading-relaxed max-w-xl">
              Whether it&apos;s a new platform, a broadcast upgrade or a connected device network — we&apos;re ready to help you build it.
            </p>

            <div className="cta-item flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onContactClick}
                className="px-10 py-5 rounded-full bg-[#c8102e] hover:bg-[#a80c24] text-white text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#c8102e]/30 flex items-center gap-3 group cursor-pointer"
                data-cursor="magnetic"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" weight="bold" />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex flex-col gap-3 group">
            <div className="w-full h-[420px] relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
              <img
                src="/images/octo-initiate-partnership.jpg"
                alt="Digital Transformation - OctoSignals Technologies"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-100"
              />
            </div>
            <div className="px-1">
              <span className="text-xs font-mono font-bold text-[#c8102e] uppercase tracking-widest block mb-1">
                LET&apos;S DISCUSS YOUR NEXT PROJECT
              </span>
              <p className="text-sm font-bold text-[#171717]">
                Kochi (HQ) · Muscat · Dubai · Operations across India, UAE, Oman & US
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
