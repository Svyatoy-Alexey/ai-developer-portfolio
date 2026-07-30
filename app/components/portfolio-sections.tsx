const services = [
  { number: "01", title: "Разработка сайтов", text: "Одностраничные сайты и небольшие интерфейсы, которые понятно рассказывают о продукте." },
  { number: "02", title: "Telegram-боты", text: "Боты для заявок, записи клиентов, уведомлений и простых сценариев поддержки." },
  { number: "03", title: "AI-автоматизация", text: "Практичные сценарии с AI для обработки текста, рутины и внутренних процессов." },
  { number: "04", title: "Небольшие веб-приложения", text: "Мини-сервисы и рабочие кабинеты под конкретную задачу бизнеса." },
];

const projects = [
  { type: "Учебный проект", title: "Лендинг AI Automation Studio", text: "Концепция промо-страницы студии, которая показывает услуги и собирает первичные обращения.", stack: "Next.js · TypeScript · Tailwind CSS" },
  { type: "Концептуальный проект", title: "Система обработки заявок", text: "Демонстрация интерфейса для сортировки, статусов и маршрутизации входящих запросов.", stack: "Next.js · TypeScript · Supabase" },
  { type: "Учебный проект", title: "Telegram-бот для записи клиентов", text: "Сценарий бота для выбора услуги, даты и времени с уведомлением администратора.", stack: "Node.js · Telegram API · n8n" },
];

const technologies = ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "OpenAI API", "n8n", "Supabase"];
const processSteps = ["Обсуждение задачи", "Прототип", "Разработка", "Проверка", "Запуск"];

export function SiteHeader() {
  return (
    <header className="border-b border-white/[0.06]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-4 px-5 py-5 sm:px-8">
        <a href="#top" className="text-base font-semibold tracking-tight text-white sm:text-lg">AI Developer</a>
        <nav aria-label="Основная навигация" className="order-3 flex w-full items-center justify-between gap-3 text-xs text-zinc-400 sm:gap-5 sm:text-sm md:order-none md:w-auto md:justify-end md:gap-7">
          <a href="#about" className="transition hover:text-white">Обо мне</a>
          <a href="#services" className="transition hover:text-white">Услуги</a>
          <a href="#projects" className="transition hover:text-white">Проекты</a>
          <a href="#contact" className="transition hover:text-white">Контакты</a>
        </nav>
        <a href="#contact" className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10">Связаться</a>
      </div>
    </header>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="relative scroll-mt-24 px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:pt-36">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-14 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div>
          <p className="eyebrow">AI · web · automation</p>
          <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">Создаю сайты, AI-автоматизации и Telegram-ботов для бизнеса</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">Помогаю малому бизнесу автоматизировать процессы и запускать цифровые продукты.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#061017] shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300">Обсудить проект</a>
            <a href="#projects" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.08]">Посмотреть работы</a>
          </div>
        </div>
        <div className="grid gap-3 text-sm text-zinc-400 sm:grid-cols-3 lg:grid-cols-1">
          {["Собираю понятные интерфейсы", "Изучаю AI-инструменты на практике", "Делаю решения под задачу"].map((item, index) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><span className="text-cyan-300">0{index + 1}</span><p className="mt-3 leading-6 text-zinc-300">{item}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.02] px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <p className="eyebrow">Обо мне</p>
        <div><h2 className="section-title max-w-3xl">Начинающий AI-разработчик, которому важно делать полезные вещи.</h2><p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">Использую современные AI-инструменты, чтобы быстрее исследовать идеи, собирать прототипы и создавать практичные решения для бизнеса. Сейчас развиваю навыки в веб-разработке, автоматизации и интеграциях.</p></div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"><div className="mx-auto max-w-7xl"><p className="eyebrow">Услуги</p><div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><h2 className="section-title max-w-2xl">Цифровые решения без лишней сложности.</h2><p className="max-w-sm text-sm leading-6 text-zinc-400">Выбираю понятный объём для первой версии и оставляю пространство для роста.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((service) => <article key={service.title} className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"><span className="text-sm text-cyan-300">{service.number}</span><h3 className="mt-12 text-xl font-semibold text-white">{service.title}</h3><p className="mt-4 text-sm leading-6 text-zinc-400">{service.text}</p></article>)}</div></div></section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.02] px-5 py-24 sm:px-8 sm:py-32"><div className="mx-auto max-w-7xl"><p className="eyebrow">Проекты</p><h2 className="section-title mt-4 max-w-3xl">Учебные и концептуальные работы.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">Примеры ниже показывают подход к задачам и интерфейсам. Это демонстрационные проекты, а не кейсы реальных клиентов.</p><div className="mt-12 grid gap-5 lg:grid-cols-3">{projects.map((project) => <article key={project.title} className="flex flex-col rounded-3xl border border-white/10 bg-[#0b0f18] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30"><div className="flex items-center justify-between gap-4"><span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">{project.type}</span><span className="text-zinc-600">↗</span></div><h3 className="mt-8 text-xl font-semibold text-white">{project.title}</h3><p className="mt-4 flex-1 text-sm leading-6 text-zinc-400">{project.text}</p><p className="mt-7 border-t border-white/10 pt-5 text-xs leading-5 text-zinc-400">{project.stack}</p><a href="#contact" className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">Подробнее <span className="ml-2">→</span></a></article>)}</div></div></section>
  );
}

export function TechnologiesSection() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><p className="eyebrow">Технологии</p><h2 className="section-title mt-4 max-w-lg">Инструменты, которые изучаю и применяю в проектах.</h2></div><div className="flex flex-wrap content-start gap-3">{technologies.map((technology) => <span key={technology} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-zinc-200">{technology}</span>)}</div></div></section>
  );
}

export function ProcessSection() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.02] px-5 py-24 sm:px-8 sm:py-28"><div className="mx-auto max-w-7xl"><p className="eyebrow">Этапы работы</p><div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-5">{processSteps.map((step, index) => <div key={step} className="bg-[#0b0f18] p-6"><span className="text-sm text-cyan-300">0{index + 1}</span><p className="mt-10 text-sm font-medium leading-6 text-white">{step}</p></div>)}</div></div></section>
  );
}

export function SiteFooter() {
  return <footer className="px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} AI Developer</p><a href="#top" className="transition hover:text-white">В начало ↑</a></div></footer>;
}
