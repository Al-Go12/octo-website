"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowDown, Radio, Sparkles, ArrowRight } from "lucide-react";

export default function Hero({ onExploreClick, onContactClick }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      tl.fromTo(".hero-badge", { y: 20, opacity: 0 }, { y: 0, opacity: 1, clearProps: "all" })
        .fromTo(".hero-title-line", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, clearProps: "all" }, "-=0.6")
        .fromTo(".hero-subhead", { y: 20, opacity: 0 }, { y: 0, opacity: 1, clearProps: "all" }, "-=0.4")
        .fromTo(".hero-actions", { y: 20, opacity: 0 }, { y: 0, opacity: 1, clearProps: "all" }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-16 px-4 sm:px-8 lg:px-12 flex flex-col justify-between overflow-hidden bg-white text-[#171717]"
    >
      {/* Light Background Image Layer with Optic Fiber Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/hero-bg-signals-light.png"
          alt="OctoSignals Optic Fiber Background"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        {/* Subtle Light White Overlay for Editorial Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-white/30" />
      </div>

      {/* Expanding Circular Signal Pulse Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 flex items-center justify-center">
        <div className="w-[550px] h-[550px] rounded-full border border-[#c8102e]/30 animate-ping duration-[3500ms]" />
        <div className="absolute w-[800px] h-[800px] rounded-full border border-[#c8102e]/20 animate-pulse" />
        <div className="absolute w-[1050px] h-[1050px] rounded-full border border-slate-200" />
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-[#c8102e]/10 via-[#e11d48]/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Top Banner Tag */}
      <div className="max-w-7xl mx-auto w-full pt-4 relative z-10">
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-slate-200 shadow-sm text-xs font-semibold text-[#171717] backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c8102e] animate-ping" />
          <Radio className="w-3.5 h-3.5 text-[#c8102e]" />
          <span>OCTOSIGNALS TECHNOLOGIES</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600 font-normal">India • UAE • Oman • US</span>
        </div>
      </div>

      {/* Main Cuberto Editorial Headline (Adjusted Compact Font Size) */}
      <div className="max-w-7xl mx-auto w-full my-auto relative z-10 py-10">
        <div className="max-w-4xl flex flex-col gap-6">
          <div className="flex flex-col">
            <div className="overflow-hidden pb-1">
              <h1 className="hero-title-line font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#171717] leading-[1.02]">
                We Make Your
              </h1>
            </div>
            <div className="overflow-hidden flex items-center gap-4 sm:gap-5 flex-wrap mt-1 sm:mt-2 pb-2">
              <h1 className="hero-title-line font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#c8102e] leading-[1.02]">
                Signals
              </h1>
              <div className="hero-title-line inline-flex items-center justify-center px-6 py-2.5 sm:py-3 rounded-full bg-[#171717] text-white text-xl sm:text-3xl font-light italic tracking-normal border border-slate-800 shadow-xl shadow-[#171717]/20">
                Better.
              </div>
            </div>
          </div>

          <p className="hero-subhead text-base sm:text-xl text-slate-700 max-w-2xl font-normal leading-relaxed tracking-wide">
            Empowering Businesses with Innovative Technology Solutions. We design, build, and deliver custom software, broadcast media platforms, and AI systems that move your business in the right direction.
          </p>

          <div className="hero-actions flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#products"
              onClick={onExploreClick}
              className="px-8 py-4 rounded-full bg-[#c8102e] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#a80c24] hover:shadow-xl hover:shadow-[#c8102e]/30 flex items-center gap-3 group"
              data-cursor="magnetic"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              onClick={onContactClick}
              className="px-8 py-4 rounded-full bg-white text-[#171717] border border-slate-300 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:border-[#c8102e] hover:text-[#c8102e] hover:bg-slate-50 flex items-center gap-2 shadow-sm"
              data-cursor="magnetic"
            >
              <Sparkles className="w-4 h-4 text-[#c8102e]" />
              <span>Discuss Solution</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Footer Indicator */}
      <div className="max-w-7xl mx-auto w-full pt-8 flex items-center justify-between border-t border-slate-200/80 text-xs text-slate-500 font-medium relative z-10">
        <div className="flex items-center gap-6">
          <span>INDIA</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span>UAE</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span>OMAN</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span>US</span>
        </div>

        <a
          href="#services"
          className="flex items-center gap-2 text-slate-700 hover:text-[#c8102e] transition-colors font-bold uppercase tracking-wider"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#c8102e]" />
        </a>
      </div>
    </section>
  );
}
