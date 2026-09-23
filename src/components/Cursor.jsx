"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Cursor({ isEnabled = true }) {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [cursorState, setCursorState] = useState({
    active: false,
    text: "",
    variant: "default", // 'default' | 'project' | 'magnetic' | 'explore'
  });

  useEffect(() => {
    if (!isEnabled) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.08, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.08, ease: "power3.out" });

    const fxTo = gsap.quickTo(follower, "x", { duration: 0.28, ease: "power3.out" });
    const fyTo = gsap.quickTo(follower, "y", { duration: 0.28, ease: "power3.out" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      fxTo(e.clientX);
      fyTo(e.clientY);
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        const cursorType = target.getAttribute("data-cursor");
        const cursorLabel = target.getAttribute("data-cursor-label") || "VIEW";
        setCursorState({
          active: true,
          text: cursorLabel,
          variant: cursorType,
        });
      } else if (e.target.closest("a, button, [role='button']")) {
        setCursorState({
          active: true,
          text: "",
          variant: "magnetic",
        });
      } else {
        setCursorState({
          active: false,
          text: "",
          variant: "default",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  const isProject = cursorState.variant === "project" || cursorState.variant === "explore";
  const isMagnetic = cursorState.variant === "magnetic";

  return (
    <>
      {/* Small Precision Cursor Dot */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 bg-[#c8102e] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hidden md:block ${
          isMouseDown ? "scale-75" : "scale-100"
        }`}
        style={{ opacity: cursorState.active ? 0 : 0.9 }}
      />

      {/* Fluid Follower Circle / Badge */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out hidden md:flex items-center justify-center rounded-full font-medium tracking-wide ${
          isProject
            ? "w-24 h-24 bg-[#c8102e] text-white text-xs font-bold shadow-2xl scale-100 uppercase tracking-widest border border-white/30"
            : isMagnetic
            ? "w-14 h-14 bg-[#c8102e]/25 border-2 border-[#c8102e] backdrop-blur-xs scale-110 shadow-[0_0_25px_rgba(200,16,46,0.65)]"
            : "w-9 h-9 border-2 border-[#c8102e] bg-[#c8102e]/15 shadow-[0_0_18px_rgba(200,16,46,0.6)] scale-100"
        } ${isMouseDown ? "scale-90" : ""}`}
      >
        {isProject ? (
          <span>{cursorState.text || "EXPLORE"}</span>
        ) : (
          /* Vivid animated pulsing red signal ring */
          <span className="w-full h-full rounded-full border border-[#c8102e]/70 animate-ping pointer-events-none opacity-80" />
        )}
      </div>
    </>
  );
}

