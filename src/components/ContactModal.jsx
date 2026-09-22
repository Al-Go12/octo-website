"use client";

import { useState, useEffect } from "react";
import { X, Send, Sparkles, CheckCircle2 } from "lucide-react";

export default function ContactModal({ isOpen, onClose, initialProduct = "" }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    productInterest: initialProduct,
    message: "",
  });

  const [prevInitial, setPrevInitial] = useState(initialProduct);
  if (initialProduct !== prevInitial) {
    setPrevInitial(initialProduct);
    setFormData((prev) => ({ ...prev, productInterest: initialProduct }));
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 p-8 sm:p-10 my-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 text-[#171717] hover:bg-[#c8102e] hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#c8102e]/10 text-[#c8102e] flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#171717]">Message Received!</h3>
            <p className="text-slate-600 text-sm max-w-md">
              Thank you for reaching out to OctoSignals Technologies. Our engineering team will review your inquiry and connect with you shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#c8102e] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#a80c24] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8102e]/10 text-xs font-bold text-[#c8102e] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OCTOSIGNALS INQUIRY</span>
            </div>

            <h3 className="text-3xl font-extrabold text-[#171717] mb-2">
              Let&apos;s Build The Right Solution.
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6">
              Tell us about your project or technology requirement and our engineering team will get back to you promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c8102e] bg-slate-50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c8102e] bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Company / Org
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Broadcast Network"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c8102e] bg-slate-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Product / Service Interest
                </label>
                <input
                  type="text"
                  value={formData.productInterest}
                  onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                  placeholder="e.g. Audioprints ACR, Octo Campus CRM, Strategy"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c8102e] bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Project Challenge
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe what you're trying to solve..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#c8102e] bg-slate-50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#c8102e] hover:bg-[#a80c24] text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c8102e]/30"
              >
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
