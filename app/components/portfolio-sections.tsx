import HeroVisual from "./hero-visual";
import Reveal from "./reveal";

const serviceCards = [
  {
    number: "01",
    title: "Сайты",
    text: "Собираю понятные цифровые витрины, которые помогают бизнесу выглядеть убедительно и вести к нужному действию.",
    points: ["Лендинги", "Корпоративные сайты", "Адаптивный интерфейс", "SEO-основа", "Высокая скорость загрузки"],
    accent: "text-[#625BFF]",
  },
  {
    number: "02",
    title: "AI-автоматизация",
    text: "Встраиваю AI в повторяющиеся процессы, чтобы команда тратила меньше времени на рутину и обработку данных.",
    points: ["OpenAI API", "Обработка заявок", "Автоматизация рутины", "Интеграция сервисов", "Генерация и анализ данных"],
    accent: "text-[#FF665A]",
  },
  {
    number: "03",
    title: "Telegram-боты",
    text: "Проектирую ботов для заявок, записи и уведомлений с удобным сценарием для клиентов.",
    points: ["Приём заявок", "Запись клиентов", "Уведомления", "Интеграция с CRM", "Mini Apps"],
    accent: "text-[#1494c5]",
  },
  {
    number: "04",
    title: "Веб-приложения",
    text: "Создаю рабочие интерфейсы для личных кабинетов, внутренних инструментов и первых версий продуктов.",
    points: ["Личные кабинеты", "Мини CRM", "Админ-панели", "Внутренние инструменты", "MVP-продукты"],
    accent: "text-[#8a63e8]",
  },
];

const projects = [
  { type: "Учебный проект", title: "Saint Web portfolio", text: "Концепция продуктового портфолио для независимого веб-разработчика и AI-интегратора.", stack: "Next.js · TypeScript · Tailwind CSS", tone: "from-[#625BFF] to-[#8ED8FF]" },
  { type: "Концептуальный проект", title: "Система обработки заявок", text: "Демонстрация интерфейса для сортировки, статусов и маршрутизации входящих запросов.", stack: "Next.js · React · Supabase", tone: "from-[#FF665A] to-[#C8B6FF]" },
  { type: "Учебный проект", title: "Telegram-бот для записи", text: "Сценарий бота для выбора услуги, даты и времени с понятным пользовательским потоком.", stack: "Node.js · n8n · Telegram API", tone: "from-[#8ED8FF] to-[#625BFF]" },
];

const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "OpenAI API", "n8n"];
const processSteps = ["Обсуждение задачи", "Прототип и структура", "Разработка", "Проверка", "Запуск и поддержка"];
const whyPoints = [
  "Понятное общение",
  "Современные технологии",
  "Адаптация под мобильные устройства",
  "Внимание к скорости и удобству",
  "Решения под задачу бизнеса",
  "Возможность дальнейшего развития проекта",
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-4 px-5 py-5 sm:px-8 sm:py-7">
        <a href="#top" className="text-lg font-semibold tracking-[-0.04em] text-[#111111] sm:text-xl">Saint Web</a>
        <nav aria-label="Основная навигация" className="order-3 flex w-full items-center justify-between gap-3 text-xs text-[#71717A] sm:gap-5 sm:text-sm md:order-none md:w-auto md:justify-end md:gap-7">
          <a href="#services" className="transition-colors hover:text-[#111111]">Что создаю</a>
          <a href="#about" className="transition-colors hover:text-[#111111]">Обо мне</a>
          <a href="#projects" className="transition-colors hover:text-[#111111]">Проекты</a>
          <a href="#contact" className="transition-colors hover:text-[#111111]">Контакты</a>
        </nav>
        <a href="#contact" className="rounded-full bg-[#0C0C0E] px-4 py-2.5 text-sm font-semibold text-[#F7F6F2] transition-transform hover:-translate-y-0.5 sm:px-5">Обсудить проект</a>
      </div>
    </header>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="relative isolate min-h-[760px] scroll-mt-20 overflow-hidden bg-[#F4F2ED] px-5 pb-20 pt-40 sm:px-8 sm:pb-28 sm:pt-48 lg:min-h-[820px] lg:pt-52">
      <div className="hero-blob hero-blob-purple pointer-events-none absolute -left-32 top-20 -z-0 h-72 w-72 rounded-full blur-3xl sm:h-96 sm:w-96" />
      <div className="hero-blob hero-blob-blue pointer-events-none absolute right-[-15%] top-16 -z-0 h-[520px] w-[520px] rounded-full blur-[110px]" />
      <div className="hero-blob hero-blob-coral pointer-events-none absolute bottom-[-20%] left-[38%] -z-0 h-80 w-80 rounded-full blur-[100px]" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.75fr)] lg:gap-10">
        <Reveal>
          <p className="saint-eyebrow">Saint Web — сайты, AI и автоматизация</p>
          <h1 className="mt-7 max-w-5xl text-[2.25rem] font-semibold leading-[0.99] tracking-[-0.065em] text-[#111111] sm:text-7xl lg:text-[clamp(4.5rem,7.2vw,7.6rem)]">
            Создаю сайты, <span className="whitespace-nowrap">веб-приложения</span> и <span className="whitespace-nowrap">AI-решения</span>, которые помогают бизнесу расти
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#71717A] sm:text-xl">Разрабатываю быстрые и удобные цифровые продукты — от лендингов и корпоративных сайтов до Telegram-ботов, CRM и AI-автоматизации.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0C0C0E] px-6 py-3 text-sm font-semibold text-[#F7F6F2] shadow-xl shadow-[#0C0C0E]/15 transition-transform hover:-translate-y-1">Обсудить проект</a>
            <a href="#projects" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#111111]/15 bg-white/35 px-6 py-3 text-sm font-semibold text-[#111111] transition-colors hover:border-[#625BFF]/50 hover:bg-white/70">Посмотреть проекты</a>
          </div>
          <div className="mt-12 flex max-w-xl flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#71717A] sm:mt-14 sm:gap-3">
            <span className="rounded-full border border-[#111111]/10 px-3 py-2">Современные сайты</span>
            <span className="rounded-full border border-[#111111]/10 px-3 py-2">AI-автоматизация</span>
            <span className="rounded-full border border-[#111111]/10 px-3 py-2">Telegram-боты</span>
            <span className="rounded-full border border-[#111111]/10 px-3 py-2">Веб-приложения</span>
          </div>
        </Reveal>
        <HeroVisual />
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-[#F4F2ED] px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div><p className="saint-eyebrow">Что создаю</p><h2 className="saint-section-title mt-5 max-w-3xl">Цифровые продукты, которые помогают бизнесу работать проще.</h2></div>
          <p className="max-w-sm text-sm leading-6 text-[#71717A]">От первой идеи до аккуратной рабочей версии, которую можно показывать людям и развивать дальше.</p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {serviceCards.map((service) => (
            <article key={service.title} className="service-card group min-w-0 rounded-[2rem] border border-[#111111]/10 bg-white/45 p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_70px_-35px_rgba(17,17,17,0.35)] sm:p-8">
              <div className="flex items-start justify-between gap-6"><span className={`text-sm font-medium ${service.accent}`}>{service.number}</span><span className="text-2xl text-[#111111]/20 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></div>
              <h3 className="mt-12 text-2xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-3xl">{service.title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-[#71717A] sm:text-base">{service.text}</p>
              <ul className="mt-7 grid gap-2 border-t border-[#111111]/10 pt-6 text-sm text-[#111111]/70 sm:grid-cols-2">
                {service.points.map((point) => <li key={point} className="flex items-center gap-2"><span className={`h-1.5 w-1.5 rounded-full bg-current ${service.accent}`} />{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#0C0C0E] px-5 py-24 text-[#F7F6F2] sm:px-8 sm:py-32">
      <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-24">
        <p className="saint-eyebrow saint-eyebrow-inverse">Обо мне</p>
        <div className="max-w-4xl"><h2 className="saint-section-title saint-section-title-inverse">Привет! Меня зовут Алексей.</h2><div className="mt-8 grid gap-5 text-base leading-8 text-white/65 sm:text-lg"><p>Я независимый веб-разработчик и создатель цифровых решений под названием Saint Web.</p><p>Помогаю предпринимателям и компаниям запускать современные сайты, веб-приложения, Telegram-ботов и AI-автоматизацию, которые упрощают работу, экономят время и помогают развивать бизнес.</p><p>Использую современные технологии и уделяю внимание скорости, удобству использования и качеству реализации каждого проекта.</p><p>Моя цель — создавать решения, которые приносят реальную пользу, а не просто выглядят красиво.</p></div></div>
      </Reveal>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-20 bg-[#F4F2ED] px-5 py-24 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-7xl">
        <p className="saint-eyebrow">Как проходит работа</p><h2 className="saint-section-title mt-5 max-w-2xl">Понятный путь от задачи к запуску.</h2>
        <div className="mt-12 grid gap-3 sm:grid-cols-5">{processSteps.map((step, index) => <div key={step} className="rounded-3xl border border-[#111111]/10 bg-white/45 p-5 transition-transform hover:-translate-y-1 sm:p-6"><span className="text-sm text-[#625BFF]">0{index + 1}</span><p className="mt-10 text-sm font-semibold leading-6 text-[#111111]">{step}</p></div>)}</div>
      </Reveal>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 bg-[#F4F2ED] px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal className="mx-auto max-w-7xl">
        <p className="saint-eyebrow">Работы</p><h2 className="saint-section-title mt-5 max-w-3xl">Учебные и концептуальные проекты.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-[#71717A]">Примеры показывают подход к задачам и интерфейсам. Это демонстрационные работы, а не кейсы реальных клиентов.</p>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">{projects.map((project) => <article key={project.title} className="group flex min-w-0 flex-col overflow-hidden rounded-[2rem] border border-[#111111]/10 bg-white/55 transition-transform hover:-translate-y-1"><div className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.tone}`}><div className="absolute inset-5 rounded-2xl border border-white/40 bg-[#0C0C0E]/80 p-5 shadow-2xl transition-transform duration-700 group-hover:scale-105"><div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-[#FF665A]" /><span className="h-2 w-2 rounded-full bg-[#F4F2ED]" /><span className="h-2 w-2 rounded-full bg-[#8ED8FF]" /></div><div className="mt-6 h-2 w-2/3 rounded-full bg-white/60" /><div className="mt-3 h-2 w-1/2 rounded-full bg-white/20" /></div></div><div className="flex flex-1 flex-col p-7 sm:p-8"><span className="w-fit rounded-full bg-[#625BFF]/10 px-3 py-1 text-xs font-medium text-[#625BFF]">{project.type}</span><h3 className="mt-7 text-xl font-semibold tracking-[-0.03em] text-[#111111]">{project.title}</h3><p className="mt-4 flex-1 text-sm leading-6 text-[#71717A]">{project.text}</p><p className="mt-7 border-t border-[#111111]/10 pt-5 text-xs leading-5 text-[#71717A]">{project.stack}</p><a href="#contact" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[#625BFF] transition-colors hover:text-[#FF665A]">Подробнее <span className="ml-2 transition-transform group-hover:translate-x-1">→</span></a></div></article>)}</div>
      </Reveal>
    </section>
  );
}

export function WhySection() {
  return (
    <section id="why" className="bg-[#111114] px-5 py-24 text-[#F7F6F2] sm:px-8 sm:py-32">
      <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div><p className="saint-eyebrow saint-eyebrow-inverse">Почему Saint Web</p><h2 className="saint-section-title saint-section-title-inverse mt-5 max-w-xl">Технологии должны решать задачу, а не усложнять её.</h2></div>
        <ul className="grid gap-3 sm:grid-cols-2">{whyPoints.map((point, index) => <li key={point} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-white/75 transition-colors hover:border-[#C8B6FF]/40 hover:bg-white/[0.07] sm:p-6"><span className="mb-8 block text-xs text-[#C8B6FF]">0{index + 1}</span>{point}</li>)}</ul>
      </Reveal>
    </section>
  );
}

export function TechnologiesSection() {
  return (
    <section id="technologies" className="bg-[#0C0C0E] px-5 py-24 text-[#F7F6F2] sm:px-8 sm:py-32"><Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><div><p className="saint-eyebrow saint-eyebrow-inverse">Технологии</p><h2 className="saint-section-title saint-section-title-inverse mt-5 max-w-xl">Инструменты, которые изучаю и применяю в проектах.</h2></div><div className="flex flex-wrap content-start gap-3">{technologies.map((technology, index) => <span key={technology} className={`rounded-full border px-5 py-3 text-sm transition-transform hover:-translate-y-1 ${index % 3 === 0 ? "border-[#C8B6FF]/40 text-[#C8B6FF]" : index % 3 === 1 ? "border-[#8ED8FF]/40 text-[#8ED8FF]" : "border-[#FF8178]/40 text-[#FF8178]"}`}>{technology}</span>)}</div></Reveal></section>
  );
}

export function ContactMethods() {
  return (
    <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-1"><span className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><span className="block text-sm font-semibold text-white">Telegram</span><span className="mt-2 block text-xs leading-5 text-white/45">Реквизиты добавим после получения username.</span></span><span className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><span className="block text-sm font-semibold text-white">Email</span><span className="mt-2 block text-xs leading-5 text-white/45">Адрес для связи будет добавлен отдельно.</span></span><a href="https://github.com/Svyatoy-Alexey/ai-developer-portfolio" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-[#8ED8FF]/50"><span className="block text-sm font-semibold text-white">GitHub</span><span className="mt-2 block break-all text-xs leading-5 text-white/45">Svyatoy-Alexey/ai-developer-portfolio ↗</span></a></div>
  );
}

export function SiteFooter() {
  return <footer className="border-t border-white/10 bg-[#0C0C0E] px-5 py-8 text-[#F7F6F2] sm:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Saint Web</p><p>Работаю удалённо по всему миру</p><a href="#top" className="transition-colors hover:text-white">В начало ↑</a></div></footer>;
}
