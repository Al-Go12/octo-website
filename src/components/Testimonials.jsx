"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Quotes, Star } from "@phosphor-icons/react";

const testimonials = [
  {
    quote:
      "Octosignals stands as an invaluable asset, consistently delivering top-tier efficiency and reliability in project delivery and quality. I wholeheartedly recommend them to anyone in search of a trustworthy and efficient IT solution provider. Their commitment to excellence has truly transformed our operations for the better.",
    author: "Dhanesh P K",
    role: "Project Director",
    bgColor: "bg-white text-[#171717] border-slate-200",
    accent: "text-[#c8102e]",
  },
  {
    quote:
      "Octosignals team delivered a very innovative and reliable solution for a Healthcare customer. This required integration in a batch mode to process multiple records but also provided a simple and easy to use interface for non-technical end users. Team is also very responsive to changes and resolving any issues that are reported by users.",
    author: "Sreeram Kishore Chavali",
    role: "Enterprise Healthcare Solutions Partner",
    bgColor: "bg-white text-[#171717] border-slate-200",
    accent: "text-[#c8102e]",
  },
  {
    quote:
      "Working with Octosignals Technologies allowed us to streamline our broadcast audio tracking and automated campaign reporting. Their engineering team is exceptionally prompt, technical, and dependable.",
    author: "Regional Media Network",
    role: "Broadcasting Operations",
    bgColor: "bg-white text-[#171717] border-slate-200",
    accent: "text-[#c8102e]",
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-card",
        { y: 45, opacity: 0 },
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
      ref={containerRef}
      className="relative z-[70] py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#f6f4ee] text-[#171717] border-t border-[#e2dcd2] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Index Divider */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-[#e2dcd2] text-[11px] font-mono tracking-widest text-slate-500 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
            <span className="font-bold text-[#c8102e]">07 //</span>
            <span>CLIENT TESTIMONIALS</span>
          </div>
          <span className="hidden sm:inline-block text-slate-400">VERIFIED PARTNER FEEDBACK</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c8102e]">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#171717] tracking-tight leading-tight">
            Trusted by our clients
          </h2>
          <p className="text-slate-600 text-base font-normal">
            Real feedback from enterprise partners, healthcare executives, and media networks we serve.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`testimonial-card p-8 sm:p-10 rounded-3xl ${t.bgColor} border shadow-xl flex flex-col justify-between group hover:border-[#c8102e] transition-all duration-300 lift-on-hover`}
            >
              <div>
                <Quotes className={`w-10 h-10 ${t.accent} mb-6 opacity-90`} weight="duotone" />

                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400" weight="fill" />
                  ))}
                </div>

                <p className="text-sm sm:text-base leading-relaxed font-normal mb-8 italic text-slate-600">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-base font-extrabold font-sans text-[#171717]">
                  {t.author}
                </h4>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

