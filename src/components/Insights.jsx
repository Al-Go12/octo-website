"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight, BookOpen } from "@phosphor-icons/react";

const articles = [
  {
    title: "How Automatic Content Recognition (ACR) Revolutions Broadcast Media",
    category: "BROADCAST TECH",
    date: "AUG 2025",
    readTime: "5 MIN READ",
    snippet: "Exploring how audio fingerprinting and real-time ACR enable automated ad verification, radio stream tracking, and content analytics.",
    gradient: "from-[#171717] via-[#7f1d1d] to-[#c8102e]",
  },
  {
    title: "Designing CRMs for International Student Journey & Lead Lifecycle",
    category: "PRODUCT STRATEGY",
    date: "JUL 2025",
    readTime: "4 MIN READ",
    snippet: "Why generic CRMs fail educational agencies and how custom workflows improve counselor productivity and enrollment conversion.",
    gradient: "from-[#c8102e] via-[#a80c24] to-[#171717]",
  },
  {
    title: "Practical AI & NLP Integration for High-Volume Communication Channels",
    category: "AI & AUTOMATION",
    date: "JUN 2025",
    readTime: "6 MIN READ",
    snippet: "Building scalable inbound message monitoring pipelines for WhatsApp, SMS, and Telegram to extract real-time operational insights.",
    gradient: "from-[#7f1d1d] via-[#171717] to-[#c8102e]",
  },
];

export default function Insights() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".insight-card",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.85,
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
      id="insights"
      ref={containerRef}
      className="relative z-[80] py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-white text-[#171717] border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Cuberto Screenshot 10 Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c8102e]">
              THOUGHT LEADERSHIP
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#171717] tracking-tight leading-tight">
              Insights
            </h2>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-[#171717] hover:bg-[#c8102e] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 self-start md:self-auto"
            data-cursor="magnetic"
          >
            <span>Visit Blog & Publications</span>
            <ArrowUpRight className="w-4 h-4" weight="bold" />
          </a>
        </div>

        {/* Cuberto Screenshot 10 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="insight-card rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-900/5 overflow-hidden flex flex-col justify-between group hover:border-[#c8102e] hover:shadow-2xl transition-all duration-300 cursor-pointer lift-on-hover"
            >

              {/* Cuberto Visual Banner */}
              <div
                className={`w-full h-48 p-6 bg-gradient-to-br ${art.gradient} flex flex-col justify-between text-white relative overflow-hidden`}
              >
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/90 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {art.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                    <BookOpen className="w-4 h-4" weight="duotone" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-white/80 z-10">
                  <span>{art.date}</span>
                  <span>{art.readTime}</span>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-[#171717] mb-4 group-hover:text-[#c8102e] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {art.snippet}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#171717] group-hover:text-[#c8102e] transition-colors">
                  <span>READ FULL INSIGHT</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#c8102e] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" weight="bold" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
