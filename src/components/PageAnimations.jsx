"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function PageAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Text splitter for .fly-text (Kinetic letter-by-letter stagger entrance - Butter Smooth)
      function splitTextToChars(element) {
        if (element.getAttribute("data-split-done")) return;
        element.setAttribute("data-split-done", "true");

        const nodes = Array.from(element.childNodes);
        nodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent;
            if (!text.trim() && text.includes("\n")) return;
            const wrapped = text.replace(/([^\s])/g, "<span class='char-wrap inline-block'>$1</span>");
            const temp = document.createElement("span");
            temp.innerHTML = wrapped;
            while (temp.firstChild) {
              element.insertBefore(temp.firstChild, node);
            }
            element.removeChild(node);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            if (
              !node.classList.contains("char-wrap") &&
              node.tagName !== "BR" &&
              node.tagName !== "SVG" &&
              node.tagName !== "IMG"
            ) {
              splitTextToChars(node);
            }
          }
        });
      }

      // Initialize .fly-text with slower, buttery easing
      const flyingElements = document.querySelectorAll(".fly-text");
      flyingElements.forEach((element) => {
        splitTextToChars(element);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });

        const chars = element.querySelectorAll(".char-wrap");
        if (chars.length > 0) {
          tl.fromTo(
            chars,
            {
              x: -20,
              opacity: 0,
              rotateY: 15,
            },
            {
              x: 0,
              opacity: 1,
              rotateY: 0,
              duration: 1.2,
              stagger: 0.02,
              ease: "power3.out",
            },
            0
          );
        }

        const internalBlurs = element.querySelectorAll(".blur-text");
        if (internalBlurs.length > 0) {
          tl.fromTo(
            internalBlurs,
            {
              opacity: 0,
              filter: "blur(14px)",
              y: 12,
            },
            {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              duration: 1.4,
              ease: "power2.out",
            },
            0
          );
        }
      });

      // 2. Standalone .blur-text reveals (slower, silky focus)
      const standaloneBlurs = document.querySelectorAll(".blur-text:not(.fly-text .blur-text)");
      standaloneBlurs.forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            filter: "blur(18px)",
            y: 16,
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 3. Cinematic Mask Reveal: .reveal-up (Slide up curtain + inner image scale down - Slower)
      gsap.utils.toArray(".reveal-up").forEach((elem) => {
        gsap.fromTo(
          elem,
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );

        const img = elem.querySelector("img") || (elem.tagName === "IMG" ? elem : null);
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.18 },
            {
              scale: 1,
              duration: 2.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: elem,
                start: "top 88%",
              },
            }
          );
        }
      });

      // 4. Cinematic Mask Reveal: .reveal-left (Horizontal geometric curtain wipe - Slower)
      gsap.utils.toArray(".reveal-left").forEach((elem) => {
        gsap.fromTo(
          elem,
          {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 5. SVG Stroke Draw animation (.svg-draw path)
      gsap.utils.toArray(".svg-draw path").forEach((path) => {
        try {
          const length = path.getTotalLength ? path.getTotalLength() : 800;
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 3.2,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: path.closest("svg") || path,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        } catch {
          // ignore SVG calculation error on edge cases
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}

