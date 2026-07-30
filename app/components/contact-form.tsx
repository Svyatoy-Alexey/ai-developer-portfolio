"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
    event.currentTarget.reset();
  }

  if (isSubmitted) {
    return (
      <div className="flex min-h-[470px] flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-[#151519] p-8 text-center" role="status" aria-live="polite">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8ED8FF]/15 text-2xl text-[#8ED8FF]">✓</div>
        <h3 className="mt-6 text-2xl font-semibold text-[#F7F6F2]">Заявка принята интерфейсом</h3>
        <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">Это демонстрационный режим Saint Web: данные проверены, но не сохраняются и никуда не отправляются.</p>
        <button type="button" onClick={() => setIsSubmitted(false)} className="mt-8 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-[#F7F6F2] transition-colors hover:bg-white/10">Заполнить ещё раз</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-describedby="form-note" className="w-full min-w-0 max-w-full rounded-[2rem] border border-white/10 bg-[#151519] p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid min-w-0 gap-2 text-sm font-medium text-white/85">Имя<input name="name" type="text" autoComplete="name" placeholder="Как к вам обращаться?" required className="min-h-12 w-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-base text-[#F7F6F2] outline-none transition-colors placeholder:text-white/45 focus:border-[#8ED8FF]/80 focus:bg-white/[0.08]" /></label>
        <label className="grid min-w-0 gap-2 text-sm font-medium text-white/85">Email<input name="email" type="email" autoComplete="email" placeholder="you@company.ru" required className="min-h-12 w-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-base text-[#F7F6F2] outline-none transition-colors placeholder:text-white/45 focus:border-[#8ED8FF]/80 focus:bg-white/[0.08]" /></label>
      </div>
      <label className="mt-5 grid min-w-0 gap-2 text-sm font-medium text-white/85">Telegram <span className="font-normal text-white/40">необязательно</span><input name="telegram" type="text" autoComplete="username" placeholder="@username" className="min-h-12 w-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-base text-[#F7F6F2] outline-none transition-colors placeholder:text-white/45 focus:border-[#8ED8FF]/80 focus:bg-white/[0.08]" /></label>
      <label className="mt-5 grid min-w-0 gap-2 text-sm font-medium text-white/85">Тип проекта<select name="projectType" defaultValue="website" className="min-h-12 w-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-base text-[#F7F6F2] outline-none transition-colors focus:border-[#8ED8FF]/80 focus:bg-white/[0.08]"><option value="website" className="bg-[#151519]">Сайт или лендинг</option><option value="web-app" className="bg-[#151519]">Веб-приложение</option><option value="telegram" className="bg-[#151519]">Telegram-бот</option><option value="ai" className="bg-[#151519]">AI-автоматизация</option><option value="crm" className="bg-[#151519]">Мини CRM-система</option></select></label>
      <label className="mt-5 grid min-w-0 gap-2 text-sm font-medium text-white/85">Описание задачи<textarea name="message" rows={5} minLength={20} placeholder="Что хочется создать или улучшить?" required className="w-full min-w-0 resize-y rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base leading-6 text-[#F7F6F2] outline-none transition-colors placeholder:text-white/45 focus:border-[#8ED8FF]/80 focus:bg-white/[0.08]" /></label>
      <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-5 text-white/55"><input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#625BFF]" /><span>Согласен(на) на демонстрационную обработку введённых данных в интерфейсе.</span></label>
      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p id="form-note" className="max-w-xs text-xs leading-5 text-white/45">Форма работает в демонстрационном режиме и пока не отправляет данные.</p><button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#F7F6F2] px-6 py-3 text-sm font-semibold text-[#0C0C0E] transition-transform hover:-translate-y-0.5 focus:outline-none">Отправить форму</button></div>
    </form>
  );
}
