"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const clientLogos = [
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-15.jpg", alt: "Nippon Paint" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-14.jpg", alt: "Takecare" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-13.jpg", alt: "Paints & Brushes" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-10.jpg", alt: "Continuum" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-12.jpg", alt: "Radio 90 FM" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-01.jpg", alt: "Sagarkshetra" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-11.jpg", alt: "Js Foods" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-09.jpg", alt: "Prochannel" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-02.jpg", alt: "Ibacus" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-03.jpg", alt: "Your Campus" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-04.jpg", alt: "Radio" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-16.jpg", alt: "Manorama" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-05.jpg", alt: "Sustainable" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-06.jpg", alt: "Akidev" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-07.jpg", alt: "Myfin" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-17.jpg", alt: "FA" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-19.jpg", alt: "RW" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-18.jpg", alt: "Iattitude" },
  { src: "https://octosignals.com/wp-content/uploads/2023/11/clients-08.jpg", alt: "Radio Benziger" },
];

export default function BrandTrust() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".trust-logo-card",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.04,
          duration: 0.6,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-28 px-4 sm:px-8 lg:px-12 bg-white text-[#171717] border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        {/* Sleek Top Section Identifier Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 text-[11px] font-mono tracking-widest text-slate-500 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
            <span className="font-bold text-[#c8102e]">04 //</span>
            <span>CLIENT ECOSYSTEM</span>
          </div>
          <span className="hidden sm:inline-block text-slate-400">GLOBAL ENTERPRISE PARTNERS</span>
        </div>

        <div className="flex flex-col items-center gap-3 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e] bg-[#c8102e]/10 px-3 py-1 rounded-full border border-[#c8102e]/20">
            PROVEN TRACK RECORD
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
            Trusted by Industry Leaders &amp;{" "}
            <span className="gradient-text-red">Enterprises</span>
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From premier broadcast radio networks in the Middle East to global education consultancies and retail brand leaders.
          </p>
        </div>

        {/* Infinite Seamless Client Logo Marquee with Edge Gradient Masks */}
        <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee flex items-center gap-6">
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <div
                key={idx}
                className="w-48 h-24 shrink-0 p-4 rounded-2xl bg-[#fafafa] border border-slate-200/80 flex items-center justify-center hover:border-[#c8102e] hover:shadow-lg hover:shadow-[#c8102e]/10 hover:bg-white transition-all duration-300 group cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 max-w-full object-contain grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Agency Metrics Summary Bar (Inspired by Sustainable Mindz) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-100">
          <div className="p-6 rounded-2xl bg-[#f6f4ee] border border-[#e8e4dc] flex flex-col justify-between">
            <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#c8102e] block mb-1">
              4
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
              Global Tech Hubs
            </span>
            <span className="text-[11px] text-slate-500 mt-1">
              India (HQ), UAE, Oman, USA
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-[#f6f4ee] border border-[#e8e4dc] flex flex-col justify-between">
            <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#171717] block mb-1">
              10+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
              Proprietary Platforms
            </span>
            <span className="text-[11px] text-slate-500 mt-1">
              ACR, CRM, Media, Analytics
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-[#f6f4ee] border border-[#e8e4dc] flex flex-col justify-between">
            <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#c8102e] block mb-1">
              99.9%
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
              Continuous Uptime
            </span>
            <span className="text-[11px] text-slate-500 mt-1">
              Broadcast-grade monitoring
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-[#f6f4ee] border border-[#e8e4dc] flex flex-col justify-between">
            <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#171717] block mb-1">
              150+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
              Enterprise Projects
            </span>
            <span className="text-[11px] text-slate-500 mt-1">
              High-concurrency deployments
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


