"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Technology Strategy & Consulting",
    description:
      "We help businesses identify the right technology direction, simplify complex challenges, and turn ideas into practical technology strategies.",
    features: [
      "Technology Direction & Roadmap",
      "Architecture & System Audits",
      "Feasibility & Platform Selection",
    ],
  },
  {
    id: "02",
    title: "Software & Product Development",
    description:
      "We design and build custom digital products, web applications, mobile applications, platforms, dashboards, and business systems around real business needs.",
    features: [
      "Custom Web & Mobile Platforms",
      "Enterprise Dashboards",
      "Scalable Cloud Backend Systems",
    ],
  },
  {
    id: "03",
    title: "Technology Integration",
    description:
      "We connect systems, platforms, data, and workflows to create seamless digital ecosystems that work together.",
    features: [
      "API & Pipeline Engineering",
      "Data Synchronization & Automation",
      "Legacy & Cloud System Bridges",
    ],
  },
  {
    id: "04",
    title: "Creative Technology",
    description:
      "We combine software, interaction, AI, motion, and emerging technologies to create engaging digital experiences beyond conventional websites and applications.",
    features: [
      "Interactive Motion & WebGL",
      "Experiential Kiosks & Displays",
      "Digital Brand Systems",
    ],
  },
  {
    id: "05",
    title: "Broadcast & Media Technology",
    description:
      "We build technology solutions for broadcasting, radio, media monitoring, streaming, content recognition, and digital media operations.",
    features: [
      "Automatic Content Recognition (ACR)",
      "24/7 Broadcast Streaming",
      "Media Monitoring & Analytics",
    ],
  },
  {
    id: "06",
    title: "AI & Intelligent Solutions",
    description:
      "We use artificial intelligence, automation, computer vision, natural language processing, and data-driven technologies to solve practical business problems.",
    features: [
      "Computer Vision & ACR",
      "Natural Language Processing",
      "Predictive Data Pipelines",
    ],
  },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Entry Animation for Cards
      gsap.fromTo(
        ".cuberto-service-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      // Auto-Expand Card on Scroll Down smoothly
      services.forEach((_, idx) => {
        const cardEl = cardRefs.current[idx];
        if (!cardEl) return;

        ScrollTrigger.create({
          trigger: cardEl,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setActiveIndex(idx),
          onEnterBack: () => setActiveIndex(idx),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Determine current expanded card (hover takes priority over scroll active index)
  const currentExpanded = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative z-20 -mt-12 sm:-mt-16 py-28 px-4 sm:px-8 lg:px-12 bg-white text-[#171717] rounded-t-[3rem] sm:rounded-t-[4rem] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c8102e]">
              WHAT WE DO
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#171717] tracking-tight leading-tight">
              Our Capabilities
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed font-normal">
              We partner with businesses across India, UAE, Oman, and the US to build software, media solutions, and digital products that combine high engineering standards with measurable business results.
            </p>
          </div>
        </div>

        {/* Clean Stacked Capabilities Accordion */}
        <div className="flex flex-col gap-5">
          {services.map((item, idx) => {
            const isActive = currentExpanded === idx;

            return (
              <div
                key={item.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(idx)}
                className={`cuberto-service-card relative rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer overflow-hidden p-8 sm:p-10 border ${
                  isActive
                    ? "bg-black text-white border-slate-800 shadow-2xl scale-[1.01]"
                    : "bg-white text-[#171717] border-slate-200/80 hover:border-[#c8102e] hover:shadow-lg"
                }`}
                data-cursor="magnetic"
              >
                {/* Right Side Geometric Accent Shape on Active Card */}
                {isActive && (
                  <div className="absolute top-0 right-0 bottom-0 w-1/3 opacity-20 pointer-events-none hidden md:block bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#c8102e] via-transparent to-transparent transition-opacity duration-700" />
                )}

                <div className="relative z-10 flex items-center justify-between gap-6">
                  {/* Clean Main Heading without icon or top tag */}
                  <h3
                    className={`text-2xl sm:text-4xl font-extrabold tracking-tight transition-colors duration-500 ${
                      isActive ? "text-white" : "text-[#171717]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-4 shrink-0">
                    <span
                      className={`text-2xl sm:text-4xl font-mono font-extrabold transition-colors duration-500 ${
                        isActive ? "text-[#c8102e]" : "text-slate-300"
                      }`}
                    >
                      {item.id}
                    </span>
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "bg-[#c8102e] text-white rotate-45 shadow-lg shadow-[#c8102e]/40"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                </div>

                {/* Smooth Butter Accordion Expandable Content */}
                <div
                  className={`grid transition-[grid-template-rows,margin-top,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? "grid-template-rows-[1fr] opacity-100 mt-8 pt-6 border-t border-slate-800"
                      : "grid-template-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-6">
                      <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed font-light">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-3 pt-2">
                        {item.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-white backdrop-blur-md"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#c8102e]" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
