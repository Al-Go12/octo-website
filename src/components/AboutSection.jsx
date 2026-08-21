"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Target, Eye, Compass, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
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
      id="about"
      ref={containerRef}
      className="relative z-10 -mt-12 sm:-mt-16 py-28 px-4 sm:px-8 lg:px-12 bg-black text-white rounded-t-[3rem] sm:rounded-t-[4rem] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Top Header */}
        <div className="max-w-4xl mb-20 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c8102e]">
            <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
            <span>WHO WE ARE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            We Make Your Signals Better
          </h2>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-normal">
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
          <div className="lg:col-span-6 flex flex-col gap-3 group">
            <div className="w-full h-[420px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
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
              <h3 className="text-xl font-extrabold text-white">
                Guiding You in the Right Direction
              </h3>
            </div>
          </div>

          {/* Philosophy Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* Strategy Card */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Compass className="w-6 h-6 text-[#c8102e]" />

                <h3 className="text-xl font-bold text-[#171717]">
                  Technology Strategy & Consulting
                </h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                At OctoSignals, we're not in the business of reinventing the
                wheel. Instead, we focus on ensuring that your wheel is
                spinning in the right direction. Our core competencies lie in
                technology strategy and consulting, seamless technology
                integration, and cutting-edge product development.
              </p>
            </div>

            {/* Business Solutions Card */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col gap-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

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
      </div>
    </section>
  );
}