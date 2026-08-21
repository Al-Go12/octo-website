"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight, Sparkles, Phone } from "lucide-react";

export default function FinalCTA({ onContactClick }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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
      id="contact"
      ref={containerRef}
      className="relative z-[90] -mt-12 sm:-mt-16 py-32 px-4 sm:px-8 lg:px-12 bg-black text-white rounded-t-[3rem] sm:rounded-t-[4rem] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-[#c8102e] border border-white/10 backdrop-blur-md w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>START A PROJECT WITH OCTOSIGNALS</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Dealing with complex challenges? <br />
              <span className="underline decoration-[#c8102e] decoration-4 underline-offset-8">
                Need innovative technology solutions?
              </span>
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed">
              Count on OctoSignals Technologies to guide you towards the <strong className="text-white font-bold">right solution</strong>. Innovation is our guiding force, driving us to create solutions that revolutionize industries and empower businesses.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onContactClick}
                className="px-10 py-5 rounded-full bg-[#c8102e] hover:bg-[#a80c24] text-white text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-2xl shadow-[#c8102e]/40 flex items-center gap-3 group"
                data-cursor="magnetic"
              >
                <span>Get In Touch With Engineers</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>

          {/* Right Image Column featuring extracted digital graph image */}
          <div className="lg:col-span-5 flex flex-col gap-3 group">
            <div className="w-full h-[420px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img
                src="https://octosignals.com/wp-content/uploads/2022/12/digital-increasing-bar-graph-with-businessman-hand-overlay_53876-97640-e1705387653716-1024x704.webp"
                alt="Digital Growth Solutions - OctoSignals Technologies"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-100"
              />
            </div>
            <div className="px-1">
              <span className="text-xs font-mono font-bold text-[#c8102e] uppercase tracking-widest block mb-1">
                REVOLUTIONIZING INDUSTRIES
              </span>
              <p className="text-sm font-bold text-white">
                Contact us to explore the forefront of technology together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
