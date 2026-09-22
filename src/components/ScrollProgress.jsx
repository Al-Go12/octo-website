"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ScrollProgress() {
  const progressBarRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const bar = progressBarRef.current;
    if (!bar) return;

    const anim = gsap.to(bar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
      },
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent pointer-events-none z-[99999] overflow-hidden">
      <div
        ref={progressBarRef}
        className="w-full h-full bg-gradient-to-r from-[#c8102e] via-[#e11d48] to-[#f43f5e] origin-left scale-x-0 shadow-[0_0_10px_#c8102e]"
      />
    </div>
  );
}
