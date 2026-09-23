"use client";

import { useEffect } from "react";
import { X, ArrowUpRight, ShieldCheck, CheckCircle } from "@phosphor-icons/react";

export default function ProductModal({ product, onClose, onInquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md"
        >
          <X className="w-5 h-5" weight="bold" />
        </button>

        {/* Modal Header Banner */}
        <div className="w-full h-64 sm:h-80 text-white relative overflow-hidden bg-slate-950">
          {product.image ? (
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover opacity-80"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/60 to-transparent p-8 sm:p-12 flex flex-col justify-end">
            <div className="relative z-10 flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-white/90 bg-[#c8102e] px-3.5 py-1 rounded-full border border-white/20">
                {product.category}
              </span>
              <span className="text-xs font-mono text-white/80">
                PROPRIETARY SYSTEM
              </span>
            </div>

            <h2 className="relative z-10 text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
              {product.title}
            </h2>

            <p className="relative z-10 text-slate-200 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
              {product.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-white flex-grow">
          <div>
            <h3 className="text-xs font-bold text-[#c8102e] uppercase tracking-widest mb-3">
              OVERVIEW & PURPOSE
            </h3>
            <p className="text-slate-700 text-base leading-relaxed font-normal">
              {product.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-[#c8102e] uppercase tracking-widest mb-4">
              KEY CAPABILITIES & HIGHLIGHTS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#c8102e] shrink-0 mt-0.5" weight="duotone" />
                  <span className="text-sm font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <ShieldCheck className="w-4 h-4 text-[#c8102e]" weight="duotone" />
              <span>OCTOSIGNALS ENTERPRISE READY</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-6 py-3 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors"
              >
                Close
              </button>

              <button
                onClick={() => {
                  onClose();
                  if (onInquire) onInquire(product.title);
                }}
                className="flex-1 sm:flex-none px-6 py-3 rounded-full bg-[#c8102e] hover:bg-[#a80c24] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#c8102e]/30"
              >
                <span>Inquire Solution</span>
                <ArrowUpRight className="w-4 h-4" weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
