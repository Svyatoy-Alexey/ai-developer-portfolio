"use client";

import { useEffect, useRef } from "react";

export default function HeroVisual() {
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return;

    const heroShell = visual.closest<HTMLElement>("[data-hero-shell]");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = motionQuery.matches;
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let currentX = 0;
    let currentY = 0;
    let scrollOffset = 0;
    let bounds = visual.getBoundingClientRect();

    const setMotionValues = () => {
      visual.style.setProperty("--mouse-x", `${currentX.toFixed(2)}px`);
      visual.style.setProperty("--mouse-y", `${currentY.toFixed(2)}px`);
      visual.style.setProperty("--scroll-y", `${Math.min(scrollOffset * 0.04, 28).toFixed(2)}px`);
      visual.style.setProperty("--tag-x", `${(currentX * 0.72).toFixed(2)}px`);
      visual.style.setProperty("--tag-y", `${(currentY * 0.72).toFixed(2)}px`);
      visual.style.setProperty("--network-x", `${(currentX * 0.48).toFixed(2)}px`);
      visual.style.setProperty("--network-y", `${(currentY * 0.48).toFixed(2)}px`);
      heroShell?.style.setProperty("--hero-bg-x", `${(currentX * 0.18).toFixed(2)}px`);
      heroShell?.style.setProperty("--hero-bg-y", `${(currentY * 0.18).toFixed(2)}px`);
    };

    const render = () => {
      frame = 0;
      currentX += (pointerX - currentX) * 0.08;
      currentY += (pointerY - currentY) * 0.08;
      setMotionValues();

      if (!reducedMotion && (Math.abs(pointerX - currentX) > 0.1 || Math.abs(pointerY - currentY) > 0.1)) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const scheduleRender = () => {
      if (!reducedMotion && frame === 0) frame = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (reducedMotion || window.innerWidth < 768 || !window.matchMedia("(pointer: fine)").matches) return;
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

    const handleResize = () => {
      bounds = visual.getBoundingClientRect();
    };

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      if (reducedMotion) {
        pointerX = 0;
        pointerY = 0;
        if (frame) window.cancelAnimationFrame(frame);
        frame = 0;
        currentX = 0;
        currentY = 0;
        setMotionValues();
      } else {
        scheduleRender();
      }
    };

    visual.addEventListener("pointermove", handlePointerMove);
    visual.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    motionQuery.addEventListener("change", handleMotionPreference);

    return () => {
      visual.removeEventListener("pointermove", handlePointerMove);
      visual.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      motionQuery.removeEventListener("change", handleMotionPreference);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={visualRef} aria-hidden="true" className="hero-visual relative mx-auto h-[340px] w-full max-w-[520px] sm:h-[430px] lg:h-[420px]">
      <div className="hero-grid absolute inset-6 rounded-[2.5rem] opacity-45 sm:inset-0" />
      <div className="hero-orbit absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#625BFF]/20 sm:h-[330px] sm:w-[330px]" />
      <div className="hero-network absolute inset-0">
        <span className="hero-network-core absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#625BFF] shadow-[0_0_0_5px_rgba(98,91,255,0.1)]" />
        <span className="hero-network-node hero-network-node-website absolute left-[3%] top-[45%]">Website</span>
        <span className="hero-network-node hero-network-node-telegram absolute right-[1%] top-[27%]">Telegram</span>
        <span className="hero-network-node hero-network-node-crm absolute bottom-[27%] right-[3%]">CRM</span>
        <span className="hero-network-node hero-network-node-openai absolute bottom-[14%] left-[5%]">OpenAI</span>
        <span className="hero-network-line hero-network-line-website absolute" />
        <span className="hero-network-line hero-network-line-telegram absolute" />
        <span className="hero-network-line hero-network-line-crm absolute" />
        <span className="hero-network-line hero-network-line-openai absolute" />
      </div>
      <div className="hero-browser absolute left-[4%] top-[14%] w-[88%] rounded-[1.5rem] border border-white/50 bg-[#0C0C0E]/90 p-3 shadow-[0_30px_65px_-30px_rgba(12,12,14,0.6)] sm:left-[8%] sm:top-[10%] sm:w-[84%] sm:p-4">
        <div className="flex items-center gap-1.5 border-b border-white/10 pb-3"><span className="h-2 w-2 rounded-full bg-[#FF665A]" /><span className="h-2 w-2 rounded-full bg-[#F4F2ED]" /><span className="h-2 w-2 rounded-full bg-[#8ED8FF]" /><span className="ml-3 h-2 w-2/5 rounded-full bg-white/10" /></div>
        <div className="flex items-center justify-between px-4 pt-3 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white/45 sm:px-7 sm:pt-4"><span>Dashboard</span><span className="text-[#8ED8FF]">Automation</span></div>
        <div className="grid grid-cols-[1fr_1.25fr] gap-3 p-4 pt-3 sm:gap-5 sm:p-7 sm:pt-4"><div><div className="flex items-center justify-between text-[0.58rem] font-medium text-white/40"><span>Leads</span><span className="text-[#C8B6FF]">+24</span></div><div className="mt-3 h-6 w-full rounded-lg bg-white/90" /><div className="mt-2 h-6 w-4/5 rounded-lg bg-white/70" /><div className="mt-5 h-2 w-full rounded-full bg-white/15" /><div className="mt-2 h-2 w-3/4 rounded-full bg-white/10" /><div className="mt-7 h-8 w-24 rounded-full bg-gradient-to-r from-[#625BFF] to-[#8ED8FF]" /></div><div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:p-4"><div className="mb-3 flex items-center justify-between text-[0.58rem] font-medium text-white/45"><span>Analytics</span><span>CRM</span></div><div className="flex items-end gap-1.5"><span className="h-10 w-1/5 rounded-t bg-[#625BFF]" /><span className="h-16 w-1/5 rounded-t bg-[#8ED8FF]" /><span className="h-12 w-1/5 rounded-t bg-[#C8B6FF]" /><span className="h-24 w-1/5 rounded-t bg-[#FF665A]" /><span className="h-20 w-1/5 rounded-t bg-white/80" /></div><div className="mt-4 flex items-center justify-between text-[0.58rem] text-white/40"><span>OpenAI</span><span>Telegram</span></div></div></div>
      </div>
      <span className="hero-tag hero-tag-api absolute left-0 top-[22%] rounded-full border border-white/60 bg-white/75 px-4 py-2 text-xs font-semibold text-[#111111] shadow-lg backdrop-blur sm:left-[-2%]">API</span>
      <span className="hero-tag hero-tag-automation absolute right-0 top-[16%] rounded-full bg-[#8ED8FF] px-4 py-2 text-xs font-semibold text-[#0C0C0E] shadow-lg sm:right-[-2%]">Automation</span>
      <div className="hero-code absolute bottom-[12%] left-[3%] rounded-2xl border border-[#111111]/10 bg-white/70 px-4 py-3 font-mono text-sm text-[#625BFF] shadow-xl backdrop-blur sm:bottom-[9%] sm:left-[2%] sm:px-5 sm:py-4">{"{ }"}<span className="ml-2 text-[#111111]/65">build / launch</span></div>
      <div className="hero-cursor absolute bottom-[7%] right-[9%] text-5xl text-[#FF665A] drop-shadow-lg sm:bottom-[8%] sm:right-[8%]">↗</div>
      <div className="hero-dot absolute left-[18%] top-[5%] h-3 w-3 rounded-full bg-[#FF665A] shadow-[0_0_30px_8px_rgba(255,102,90,0.3)] sm:left-[20%]" />
    </div>
  );
}
