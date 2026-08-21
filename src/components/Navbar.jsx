"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X, Globe, Sparkles } from "lucide-react";

export default function Navbar({ onContactClick, motionEnabled, setMotionEnabled }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Approach", href: "#approach" },
    { name: "Why Us", href: "#why-us" },
    { name: "Insights", href: "#insights" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-900/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo with Official OctoSignals Red Octagon Emblem */}
        <a href="#" className="flex items-center gap-3 group" data-cursor="magnetic">
          <div className="relative w-10 h-10 bg-[#c8102e] flex items-center justify-center shadow-lg shadow-[#c8102e]/25 group-hover:scale-105 transition-transform duration-300 overflow-hidden [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]">
            <Image
              src="/Octosignals-logo-05-192x192.png"
              alt="OctoSignals Technologies Logo"
              width={40}
              height={40}
              className="object-contain p-1.5"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-[#171717] group-hover:text-[#c8102e] transition-colors leading-none font-sans">
              OCTOSIGNALS
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#c8102e] mt-0.5">
              TECHNOLOGIES
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 bg-slate-100/80 px-6 py-2.5 rounded-full border border-slate-200/60 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-slate-700 hover:text-[#c8102e] transition-colors uppercase tracking-wider"
              data-cursor="magnetic"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Controls */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => setMotionEnabled(!motionEnabled)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-mono transition-colors flex items-center gap-1.5 ${
              motionEnabled
                ? "bg-slate-100 text-[#c8102e] font-bold"
                : "bg-slate-100 text-slate-500"
            }`}
            title="Toggle Smooth Motion & Cursor FX"
          >
            <span className={`w-2 h-2 rounded-full ${motionEnabled ? "bg-[#c8102e]" : "bg-slate-400"}`} />
            <span>FX: {motionEnabled ? "ON" : "OFF"}</span>
          </button>

          <button
            onClick={() => onContactClick()}
            className="px-6 py-2.5 rounded-full bg-[#171717] hover:bg-[#c8102e] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#171717]/10 flex items-center gap-2 group"
            data-cursor="magnetic"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-100 text-[#171717] hover:bg-slate-200 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-white border-b border-slate-200 shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-[#171717] hover:text-[#c8102e] py-2 border-b border-slate-100"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onContactClick();
            }}
            className="w-full py-3.5 rounded-xl bg-[#c8102e] text-white text-xs font-bold uppercase tracking-widest mt-2 flex items-center justify-center gap-2"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
