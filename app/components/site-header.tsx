"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Обо мне" },
  { href: "#services", label: "Услуги" },
  { href: "#projects", label: "Проекты" },
  { href: "#contact", label: "Контакты" },
];

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? "border-b border-[#111111]/10 bg-[#F4F2ED]/85 shadow-[0_12px_35px_-25px_rgba(17,17,17,0.5)] backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-3 px-5 py-4 sm:px-8 sm:py-5">
        <a href="#top" onClick={handleLinkClick} className="min-h-11 inline-flex items-center text-lg font-semibold tracking-[-0.04em] text-[#111111] sm:text-xl">Saint Web</a>
        <div className="flex items-center gap-2 md:order-3">
          <a href="#contact" onClick={handleLinkClick} className="hidden min-h-11 items-center rounded-full bg-[#0C0C0E] px-4 text-sm font-semibold text-[#F7F6F2] transition-transform hover:-translate-y-0.5 md:inline-flex sm:px-5">Обсудить проект</a>
          <button type="button" aria-expanded={isMenuOpen} aria-controls="main-navigation" aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"} onClick={() => setIsMenuOpen((open) => !open)} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#111111]/15 bg-white/45 text-lg text-[#111111] md:hidden">{isMenuOpen ? "×" : "☰"}</button>
        </div>
        <nav id="main-navigation" aria-label="Основная навигация" className={`${isMenuOpen ? "flex" : "hidden"} order-3 w-full flex-col gap-1 border-t border-[#111111]/10 pt-3 text-sm text-[#71717A] md:order-none md:flex md:w-auto md:flex-row md:items-center md:gap-7 md:border-0 md:p-0`}>
          {links.map((link) => <a key={link.href} href={link.href} onClick={handleLinkClick} className="inline-flex min-h-11 items-center rounded-xl px-2 transition-colors hover:bg-white/60 hover:text-[#111111] md:min-h-9 md:rounded-none md:px-0">{link.label}</a>)}
          <a href="#contact" onClick={handleLinkClick} className="mt-1 inline-flex min-h-11 items-center justify-center rounded-full bg-[#0C0C0E] px-5 text-sm font-semibold text-[#F7F6F2] md:hidden">Обсудить проект</a>
        </nav>
      </div>
    </header>
  );
}
