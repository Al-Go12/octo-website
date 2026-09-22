"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, Phone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-20 pb-12 px-4 sm:px-8 lg:px-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Pills & Locations */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <div className="w-10 h-10 bg-[#c8102e] flex items-center justify-center overflow-hidden p-1 shadow-md shadow-[#c8102e]/30 [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] group-hover:scale-105 transition-transform">
                <Image
                  src="/Octosignals-logo-05-192x192.png"
                  alt="OctoSignals Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white font-sans group-hover:text-[#c8102e] transition-colors">
                  OCTOSIGNALS
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#c8102e]">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>

            {/* Pill Contact Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:info@octosignals.com"
                className="px-6 py-3 rounded-full bg-white/10 border border-white/15 hover:border-[#c8102e] text-xs font-mono font-bold text-white transition-all flex items-center gap-2"
                data-cursor="magnetic"
              >
                <Mail className="w-4 h-4 text-[#c8102e]" />
                <span>info@octosignals.com</span>
              </a>

              <a
                href="tel:+917994477790"
                className="px-6 py-3 rounded-full bg-white/10 border border-white/15 hover:border-[#c8102e] text-xs font-mono font-bold text-white transition-all flex items-center gap-2"
                data-cursor="magnetic"
              >
                <Phone className="w-4 h-4 text-[#c8102e]" />
                <span>+91 79944 77790</span>
              </a>
            </div>

            {/* Regional Offices Directory */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-white/10 text-xs">
              <div>
                <span className="font-bold uppercase tracking-wider text-[#c8102e] block mb-1">
                  INDIA (HQ)
                </span>
                <p className="text-slate-400 leading-relaxed font-normal">
                  Ponnurunni, Vyttila, Kochi, Kerala 682019
                </p>
              </div>

              <div>
                <span className="font-bold uppercase tracking-wider text-[#c8102e] block mb-1">
                  UAE OFFICE
                </span>
                <p className="text-slate-400 leading-relaxed font-normal">
                  Dubai Silicon Oasis, UAE
                </p>
              </div>

              <div>
                <span className="font-bold uppercase tracking-wider text-[#c8102e] block mb-1">
                  OMAN OFFICE
                </span>
                <p className="text-slate-400 leading-relaxed font-normal">
                  Muscat Technology Hub, Oman
                </p>
              </div>

              <div>
                <span className="font-bold uppercase tracking-wider text-[#c8102e] block mb-1">
                  US PRESENCE
                </span>
                <p className="text-slate-400 leading-relaxed font-normal">
                  Delaware / East Coast US
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Navigation Directory */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 text-sm">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-bold text-[#c8102e] uppercase tracking-widest">
                SOLUTIONS & WORK
              </span>
              <Link href="/services" className="text-slate-300 hover:text-[#c8102e] transition-colors">
                All Services & Capabilities
              </Link>
              <Link href="/products" className="text-slate-300 hover:text-[#c8102e] transition-colors">
                Proprietary Products Suite
              </Link>
              <Link href="/#approach" className="text-slate-300 hover:text-[#c8102e] transition-colors">
                Our Engineering Approach
              </Link>
              <Link href="/#why-us" className="text-slate-300 hover:text-[#c8102e] transition-colors">
                Why OctoSignals
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-bold text-[#c8102e] uppercase tracking-widest">
                COMPANY
              </span>
              <Link href="/about" className="text-slate-300 hover:text-[#c8102e] transition-colors">
                About OctoSignals
              </Link>
              <Link href="/about#values" className="text-slate-300 hover:text-[#c8102e] transition-colors">
                Core Values & Vision
              </Link>
              <Link href="/about#presence" className="text-slate-300 hover:text-[#c8102e] transition-colors">
                Global Footprint
              </Link>
              <a href="mailto:info@octosignals.com" className="text-slate-300 hover:text-[#c8102e] transition-colors">
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} OctoSignals Technologies. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/octosignals-ltd/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c8102e] hover:text-white transition-colors"
              title="LinkedIn"
            >
              <span className="font-sans font-bold text-xs">in</span>
            </a>
            <a
              href="https://www.instagram.com/octosignals/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c8102e] hover:text-white transition-colors"
              title="Instagram"
            >
              <span className="font-sans font-bold text-xs">ig</span>
            </a>
            <a
              href="https://octosignals.com/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c8102e] hover:text-white transition-colors"
              title="Official Website"
            >
              <span className="font-sans font-bold text-xs">web</span>
            </a>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-[#c8102e] text-white flex items-center justify-center hover:bg-white hover:text-[#171717] transition-colors ml-4 cursor-pointer"
              title="Back to Top"
              data-cursor="magnetic"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
