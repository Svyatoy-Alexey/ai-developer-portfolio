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
      <div className="flex min-h-[390px] flex-col items-center justify-center rounded-3xl border border-cyan-400/20 bg-[#0b1522] p-8 text-center" role="status" aria-live="polite">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/15 text-2xl text-cyan-300">✓</div>
        <h3 className="mt-6 text-2xl font-semibold text-white">Форма отправлена</h3>
        <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">
          Это демонстрационный режим: данные проверены интерфейсом, но никуда не отправлены.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-8 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Заполнить ещё раз
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-describedby="form-note" className="w-full min-w-0 max-w-full rounded-3xl border border-white/10 bg-[#0b101b] p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-zinc-200">
          Имя
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Как к вам обращаться?"
            required
            className="min-h-12 w-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-base text-white outline-none transition placeholder:text-zinc-400 focus:border-cyan-400/70 focus:bg-white/[0.08]"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-zinc-200">
          Email или Telegram
          <input
            name="contact"
            type="text"
            autoComplete="email"
            placeholder="you@company.ru или @username"
            required
            className="min-h-12 w-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-base text-white outline-none transition placeholder:text-zinc-400 focus:border-cyan-400/70 focus:bg-white/[0.08]"
          />
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-medium text-zinc-200">
        Описание задачи
        <textarea
          name="message"
          rows={6}
          minLength={20}
          placeholder="Что хочется создать или автоматизировать?"
          required
          className="w-full min-w-0 resize-y rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base leading-6 text-white outline-none transition placeholder:text-zinc-400 focus:border-cyan-400/70 focus:bg-white/[0.08]"
        />
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="max-w-xs text-xs leading-5 text-zinc-400">Все поля обязательны. Отправка пока отключена.</p>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#061017] shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#0b101b]"
        >
          Отправить форму
        </button>
      </div>
    </form>
  );
}
