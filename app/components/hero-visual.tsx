"use client";

import { useEffect, useRef } from "react";

export default function HeroVisual() {
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = motionQuery.matches;
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let currentX = 0;
    let currentY = 0;
    let scrollOffset = 0;

    const render = () => {
      frame = 0;
      currentX += (pointerX - currentX) * 0.08;
      currentY += (pointerY - currentY) * 0.08;
      visual.style.setProperty("--mouse-x", `${currentX.toFixed(2)}px`);
      visual.style.setProperty("--mouse-y", `${currentY.toFixed(2)}px`);
      visual.style.setProperty("--scroll-y", `${Math.min(scrollOffset * 0.045, 34).toFixed(2)}px`);

      if (!reducedMotion && (Math.abs(pointerX - currentX) > 0.1 || Math.abs(pointerY - currentY) > 0.1)) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const scheduleRender = () => {
      if (!reducedMotion && frame === 0) frame = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (reducedMotion || window.innerWidth < 768 || !window.matchMedia("(pointer: fine)").matches) return;
      const bounds = visual.getBoundingClientRect();
      pointerX = (event.clientX - (bounds.left + bounds.width / 2)) * 0.035;
      pointerY = (event.clientY - (bounds.top + bounds.height / 2)) * 0.035;
      scheduleRender();
    };

    const handlePointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
      scheduleRender();
    };

    const handleScroll = () => {
      if (reducedMotion) return;
      scrollOffset = window.scrollY;
      scheduleRender();
    };

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      if (reducedMotion) {
        pointerX = 0;
        pointerY = 0;
        if (frame) window.cancelAnimationFrame(frame);
        frame = 0;
        visual.style.setProperty("--mouse-x", "0px");
        visual.style.setProperty("--mouse-y", "0px");
        visual.style.setProperty("--scroll-y", "0px");
      } else {
        scheduleRender();
      }
    };

    visual.addEventListener("pointermove", handlePointerMove);
    visual.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    motionQuery.addEventListener("change", handleMotionPreference);

    return () => {
      visual.removeEventListener("pointermove", handlePointerMove);
      visual.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", handleScroll);
      motionQuery.removeEventListener("change", handleMotionPreference);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={visualRef} aria-hidden="true" className="hero-visual relative mx-auto h-[390px] w-full max-w-[520px] sm:h-[500px] lg:h-[560px]">
      <div className="hero-grid absolute inset-6 rounded-[2.5rem] opacity-45 sm:inset-0" />
      <div className="hero-orbit absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#625BFF]/20 sm:h-[380px] sm:w-[380px]" />
      <div className="hero-browser absolute left-[4%] top-[16%] w-[88%] rounded-[1.5rem] border border-white/50 bg-[#0C0C0E]/90 p-3 shadow-[0_35px_80px_-30px_rgba(12,12,14,0.6)] sm:left-[8%] sm:top-[14%] sm:w-[84%] sm:p-4">
        <div className="flex items-center gap-1.5 border-b border-white/10 pb-3"><span className="h-2 w-2 rounded-full bg-[#FF665A]" /><span className="h-2 w-2 rounded-full bg-[#F4F2ED]" /><span className="h-2 w-2 rounded-full bg-[#8ED8FF]" /><span className="ml-3 h-2 w-2/5 rounded-full bg-white/10" /></div>
        <div className="grid grid-cols-[1fr_1.25fr] gap-3 p-4 sm:gap-5 sm:p-7"><div><div className="h-2 w-16 rounded-full bg-[#C8B6FF]" /><div className="mt-5 h-6 w-full rounded-lg bg-white/90" /><div className="mt-2 h-6 w-4/5 rounded-lg bg-white/70" /><div className="mt-5 h-2 w-full rounded-full bg-white/15" /><div className="mt-2 h-2 w-3/4 rounded-full bg-white/10" /><div className="mt-7 h-8 w-24 rounded-full bg-gradient-to-r from-[#625BFF] to-[#8ED8FF]" /></div><div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:p-4"><div className="flex items-end gap-1.5"><span className="h-12 w-1/5 rounded-t bg-[#625BFF]" /><span className="h-20 w-1/5 rounded-t bg-[#8ED8FF]" /><span className="h-16 w-1/5 rounded-t bg-[#C8B6FF]" /><span className="h-28 w-1/5 rounded-t bg-[#FF665A]" /><span className="h-24 w-1/5 rounded-t bg-white/80" /></div><div className="mt-4 h-2 w-2/3 rounded-full bg-white/20" /></div></div>
      </div>
      <span className="hero-tag hero-tag-openai absolute left-0 top-[24%] rounded-full border border-white/60 bg-white/75 px-4 py-2 text-xs font-semibold text-[#111111] shadow-lg backdrop-blur sm:left-[-2%]">OpenAI</span>
      <span className="hero-tag hero-tag-telegram absolute right-0 top-[18%] rounded-full bg-[#8ED8FF] px-4 py-2 text-xs font-semibold text-[#0C0C0E] shadow-lg sm:right-[-2%]">Telegram</span>
      <span className="hero-tag hero-tag-crm absolute bottom-[24%] right-[2%] rounded-full border border-white/60 bg-white/75 px-4 py-2 text-xs font-semibold text-[#111111] shadow-lg backdrop-blur sm:right-[-3%]">CRM</span>
      <span className="hero-tag hero-tag-website absolute bottom-[12%] left-[17%] rounded-full bg-[#FF8178] px-4 py-2 text-xs font-semibold text-[#0C0C0E] shadow-lg">Website</span>
      <div className="hero-code absolute bottom-[16%] left-[3%] rounded-2xl border border-[#111111]/10 bg-white/70 px-4 py-3 font-mono text-sm text-[#625BFF] shadow-xl backdrop-blur sm:bottom-[13%] sm:left-[2%] sm:px-5 sm:py-4">{"{ }"}<span className="ml-2 text-[#111111]/65">build / launch</span></div>
      <div className="hero-cursor absolute bottom-[10%] right-[9%] text-5xl text-[#FF665A] drop-shadow-lg sm:bottom-[12%] sm:right-[8%]">↗</div>
      <div className="hero-dot absolute left-[18%] top-[7%] h-3 w-3 rounded-full bg-[#FF665A] shadow-[0_0_30px_8px_rgba(255,102,90,0.3)] sm:left-[20%]" />
    </div>
  );
}
