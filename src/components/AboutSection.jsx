"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Target, Eye, Compass, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".about-header-item",
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

      // Philosophy image scroll zoom
      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { scale: 0.95, opacity: 0.8 },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imgRef.current,
              start: "top 85%",
              end: "top 40%",
              scrub: 0.5,
            },
          }
        );
      }

      // Card reveals
      gsap.fromTo(
        ".about-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".about-card-container",
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#f6f4ee] text-[#171717] border-t border-[#e2dcd2] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Sleek Top Section Identifier Bar */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-[#e2dcd2] text-[11px] font-mono tracking-widest text-slate-500 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
            <span className="font-bold text-[#c8102e]">01 //</span>
            <span>WHO WE ARE</span>
          </div>
          <span className="hidden sm:inline-block text-slate-400">OCTOSIGNALS BRAND PHILOSOPHY</span>
        </div>

        {/* Top Header */}
        <div className="max-w-4xl mb-20 flex flex-col gap-6">
          <div className="about-header-item inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c8102e]">
            <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
            <span>EXECUTIVE OVERVIEW</span>
          </div>

          <h2 className="about-header-item text-4xl sm:text-6xl font-extrabold text-[#171717] tracking-tight leading-tight">
            We Make Your Signals Better
          </h2>

          <p className="about-header-item text-slate-700 text-lg sm:text-xl leading-relaxed font-normal">
            Welcome to OctoSignals Technologies, your trusted partner in the
            world of technology. With a robust presence in India, UAE, Oman,
            and the US, we are a team of dedicated technologists, visionary
            strategists, and inventive problem solvers, driven by the goal of
            positively transforming your business.
          </p>
        </div>

        {/* Feature Image & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

          {/* Feature Image */}
          <div ref={imgRef} className="lg:col-span-6 flex flex-col gap-3 group">
            <div className="w-full h-[420px] relative rounded-3xl overflow-hidden border border-[#e8e4dc] shadow-xl bg-white">
              <img
                src="https://octosignals.com/wp-content/uploads/2024/01/397-e1705387330501.jpg"
                alt="OctoSignals Philosophy - Guiding You in the Right Direction"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-100"
              />
            </div>
            <div className="px-1">
              <span className="text-xs font-mono font-bold text-[#c8102e] uppercase tracking-widest block mb-1">
                OUR PHILOSOPHY
              </span>
              <h3 className="text-xl font-extrabold text-[#171717]">
                Guiding You in the Right Direction
              </h3>
            </div>
          </div>

          {/* Philosophy Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* Strategy Card */}
            <div className="about-card p-8 rounded-3xl bg-white border border-slate-200 flex flex-col gap-4 lift-on-hover">
              <div className="flex items-center gap-3">
                <Compass className="w-6 h-6 text-[#c8102e]" />

                <h3 className="text-xl font-bold text-[#171717]">
                  Technology Strategy & Consulting
                </h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                At OctoSignals, we&apos;re not in the business of reinventing the
                wheel. Instead, we focus on ensuring that your wheel is
                spinning in the right direction. Our core competencies lie in
                technology strategy and consulting, seamless technology
                integration, and cutting-edge product development.
              </p>
            </div>

            {/* Business Solutions Card */}
            <div className="about-card p-8 rounded-3xl bg-white border border-slate-200 flex flex-col gap-4 lift-on-hover">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#c8102e]" />

                <h3 className="text-xl font-bold text-[#171717]">
                  Comprehensive Business Solutions
                </h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-light">
                OctoSignals Technologies uses technology to create powerful
                solutions for businesses. We offer comprehensive services
                aimed at improving your offerings to associates, using the
                best practices in business and technology.
              </p>
            </div>

          </div>
        </div>

        {/* Mission / Vision Cards */}
        <div className="about-card-container grid grid-cols-1 md:grid-cols-2 gap-8">


          {/* Mission */}
          <div className="about-card p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between group hover:border-[#c8102e] transition-all duration-300">

            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#c8102e]/10 text-[#c8102e] flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] mb-4">
                Our Mission
              </h3>

              <p className="text-slate-600 text-base leading-relaxed font-normal">
                To create reliable, scalable, and intuitive technology
                solutions that empower businesses to work smarter, connect
                deeper with audiences, and drive sustained ROI.
              </p>
            </div>

            <div className="pt-6 mt-8 border-t border-slate-200 text-xs font-mono text-[#c8102e] font-bold uppercase">
              STRATEGIC DIRECTIVE
            </div>

          </div>

          {/* Vision */}
          <div className="about-card p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between group hover:border-[#c8102e] transition-all duration-300">

            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#c8102e]/10 text-[#c8102e] flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] mb-4">
                Our Vision
              </h3>

              <p className="text-slate-600 text-base leading-relaxed font-light">
                To become the preferred technology partner for media,
                education, and retail enterprises globally by delivering
                intelligent software with uncompromising quality.
              </p>
            </div>

            <div className="pt-6 mt-8 border-t border-slate-200 text-xs font-mono text-[#c8102e] font-bold uppercase">
              LONG-TERM HORIZON
            </div>

          </div>

        </div>

        {/* Deep Dive Callout Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-white border border-[#e8e4dc] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8102e]">
              DISCOVER OUR STORY & VALUES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
              Want to learn more about OctoSignals?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl font-normal">
              Explore our core principles, leadership, 4 regional offices, and engineering ethos on our dedicated About Us page.
            </p>
          </div>

          <Link
            href="/about"
            className="shrink-0 px-8 py-4 rounded-full bg-[#c8102e] hover:bg-[#171717] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-[#c8102e]/25 cursor-pointer"
            data-cursor="magnetic"
          >
            <span>Explore About Us</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}