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
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Sleek Top Section Identifier Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 text-[11px] font-mono tracking-widest text-slate-500 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
            <span className="font-bold text-[#c8102e]">04 //</span>
            <span>CLIENT ECOSYSTEM</span>
          </div>
          <span className="hidden sm:inline-block text-slate-400">GLOBAL ENTERPRISE PARTNERS</span>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c8102e]">
            CLIENTS WE WORK WITH
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight">
            Trusted by Industry Leaders & Enterprises
          </h3>
        </div>

        {/* Client Logo Grid featuring extracted WordPress image URLs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {clientLogos.map((logo, idx) => (
            <div
              key={idx}
              className="trust-logo-card p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center hover:border-[#c8102e] hover:shadow-md transition-all duration-300 group h-24 relative overflow-hidden"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-14 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


