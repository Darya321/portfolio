"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers: number[] = [];

    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) {
        return;
      }

      const scroll = () => {
        document.getElementById(id)?.scrollIntoView({ block: "start" });
        updateProgress();
      };

      window.requestAnimationFrame(scroll);
      timers.push(window.setTimeout(scroll, 180));
      timers.push(window.setTimeout(scroll, 520));
      timers.push(window.setTimeout(scroll, 1000));
    };

    updateProgress();
    scrollToHash();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("hashchange", scrollToHash);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [pathname]);

  return (
    <>
      <div
        ref={progressRef}
        className="scroll-progress fixed left-0 top-0 z-[70] h-1 w-full bg-[var(--accent)]"
        aria-hidden="true"
      />
      {children}
    </>
  );
}
