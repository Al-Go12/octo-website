"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";

export default function Navbar({ onContactClick, motionEnabled = true, setMotionEnabled }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Approach", href: "/#approach" },
    { name: "Why Us", href: "/#why-us" },
  ];

  const handleContactAction = () => {
    if (typeof onContactClick === "function") {
      onContactClick();
    } else {
      window.location.href = "mailto:info@octosignals.com";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-8 lg:px-12 ${
        scrolled
          ? "py-3 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-900/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo with Official OctoSignals Red Octagon Emblem */}
        <Link href="/" className="flex items-center gap-3 group" data-cursor="magnetic">
          <div className="relative w-10 h-10 bg-[#c8102e] flex items-center justify-center shadow-lg shadow-[#c8102e]/25 group-hover:scale-105 transition-transform duration-300 overflow-hidden [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]">
            <Image
              src="/Octosignals-logo-05-192x192.png"
              alt="OctoSignals Technologies Logo"
              width={40}
              height={40}
              className="object-contain p-1.5"
            />
          </div>

          <span
            className="font-ubuntu-bold-italic text-xl sm:text-2xl tracking-tight text-[#c8102e] group-hover:text-[#a80c24] transition-colors leading-none select-none"
            style={{
              fontFamily: "'Ubuntu', -apple-system, BlinkMacSystemFont, sans-serif",
              fontStyle: "italic",
              fontWeight: 700,
            }}
          >
            Octosignals
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-2 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/70 backdrop-blur-md shadow-sm">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("/#")
                ? false
                : pathname === link.href || pathname?.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-[#c8102e] text-white shadow-sm shadow-[#c8102e]/30"
                    : "text-slate-700 hover:text-[#c8102e] hover:bg-white/60"
                }`}
                data-cursor="magnetic"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {setMotionEnabled && (
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
          )}

          <button
            onClick={handleContactAction}
            className="px-6 py-2.5 rounded-full bg-[#171717] hover:bg-[#c8102e] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#171717]/10 flex items-center gap-2 group cursor-pointer"
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
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" weight="bold" /> : <List className="w-6 h-6" weight="bold" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-white border-b border-slate-200 shadow-2xl p-6 flex flex-col gap-3 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("/#")
                ? false
                : pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                  isActive
                    ? "bg-[#c8102e]/10 text-[#c8102e]"
                    : "text-[#171717] hover:text-[#c8102e]"
                }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#c8102e]" />}
              </Link>
            );
          })}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleContactAction();
            }}
            className="w-full py-3.5 rounded-xl bg-[#c8102e] hover:bg-[#a80c24] text-white text-xs font-bold uppercase tracking-widest mt-3 flex items-center justify-center gap-2 shadow-lg shadow-[#c8102e]/25 cursor-pointer"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
