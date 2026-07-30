import HeroVisual from "./hero-visual";
import Reveal from "./reveal";

const serviceCards = [
  {
    number: "01",
    title: "Современный сайт",
    text: "Помогаю понятно представить бизнес в интернете и получать обращения от клиентов.",
    points: ["Лендинги и корпоративные сайты", "Адаптация под мобильные устройства", "Высокая скорость и базовая SEO-подготовка"],
    accent: "text-[#625BFF]",
  },
  {
    number: "02",
    title: "AI-автоматизация",
    text: "Автоматизирую повторяющиеся задачи и обработку информации с помощью AI.",
    points: ["Обработка заявок и сообщений", "Генерация ответов и анализ данных", "Интеграция AI с рабочими сервисами"],
    accent: "text-[#FF665A]",
  },
  {
    number: "03",
    title: "Telegram-бот",
    text: "Создаю ботов для общения с клиентами, записи и автоматизации процессов.",
    points: ["Приём заявок и запись клиентов", "Уведомления и личные кабинеты", "Интеграция с CRM и внешними сервисами"],
    accent: "text-[#1494c5]",
  },
  {
    number: "04",
    title: "Веб-приложение",
    text: "Разрабатываю небольшие системы и внутренние инструменты под задачи бизнеса.",
    points: ["Личные кабинеты и админ-панели", "Мини CRM и управление заявками", "MVP цифровых продуктов"],
    accent: "text-[#8a63e8]",
  },
];

const projects = [
  {
    type: "Учебный проект",
    title: "Лендинг AI Automation Studio",
    task: "Создать современную страницу для презентации услуг AI-автоматизации.",
    implemented: ["Адаптивный интерфейс", "Секции услуг и преимуществ", "Форма заявки", "Современная визуальная подача"],
    stack: "Next.js · TypeScript · Tailwind CSS",
    tone: "from-[#625BFF] to-[#8ED8FF]",
    preview: "landing",
  },
  {
    type: "Концептуальный проект",
    title: "Система обработки заявок",
    task: "Показать концепцию системы, которая помогает бизнесу собирать и обрабатывать обращения клиентов.",
    implemented: ["Форма заявки", "Отображение статусов", "Концепция административной панели", "Автоматизация маршрута заявки"],
    stack: "Next.js · React · Supabase",
    tone: "from-[#FF665A] to-[#C8B6FF]",
    preview: "requests",
  },
  {
    type: "Учебный проект",
    title: "Telegram-бот для записи клиентов",
    task: "Продемонстрировать сценарий записи клиента через Telegram.",
    implemented: ["Выбор услуги", "Сбор контактных данных", "Подтверждение записи", "Передача информации менеджеру"],
    stack: "Node.js · n8n · Telegram API",
    tone: "from-[#8ED8FF] to-[#625BFF]",
    preview: "telegram",
  },
];

const technologyGroups = [
  { title: "Интерфейс", text: "Адаптивные и быстрые пользовательские интерфейсы.", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { title: "Сервер и данные", text: "Хранение информации, авторизация и серверная логика.", items: ["Node.js", "Supabase"] },
  { title: "AI и автоматизация", text: "Интеграция AI и автоматизация повторяющихся процессов.", items: ["OpenAI API", "n8n"] },
];

const processSteps = [
  { title: "Обсуждение задачи", result: "Определяем цель, аудиторию, функциональность и ожидаемый результат." },
  { title: "Прототип и структура", result: "Продумываю логику страниц, пользовательский путь и ключевые блоки." },
  { title: "Разработка", result: "Создаю интерфейс, функциональность и необходимые интеграции." },
  { title: "Проверка", result: "Тестирую сайт на разных устройствах и исправляю найденные проблемы." },
  { title: "Запуск и поддержка", result: "Публикую проект и помогаю с дальнейшими улучшениями." },
];

const specializations = ["Сайты и лендинги", "Telegram-боты", "AI-автоматизация", "Веб-приложения"];
const whyPoints = ["Понятное общение", "Современные технологии", "Адаптация под мобильные устройства", "Внимание к скорости и удобству", "Решения под задачу бизнеса", "Возможность дальнейшего развития проекта"];

function ProjectPreview({ kind, tone }: { kind: string; tone: string }) {
  if (kind === "telegram") {
    return <div className={`project-preview bg-gradient-to-br ${tone}`}><div className="project-phone"><div className="project-phone-head"><span>Telegram</span><span>•••</span></div><div className="project-chat project-chat-in">Здравствуйте! Выберите услугу</div><div className="project-chat project-chat-button">Записаться на консультацию</div><div className="project-chat project-chat-out">Сайт и автоматизация</div></div></div>;
  }

  if (kind === "requests") {
    return <div className={`project-preview bg-gradient-to-br ${tone}`}><div className="project-dashboard"><div className="project-dashboard-side"><span /><span /><span /><span /></div><div className="project-dashboard-main"><div className="project-dashboard-title"><b>Заявки</b><i>Сегодня</i></div><div className="project-request-row"><span>Новый запрос</span><em>Новый</em></div><div className="project-request-row"><span>Обсуждение сайта</span><em>В работе</em></div><div className="project-request-row"><span>AI-автоматизация</span><em>Готово</em></div></div></div></div>;
  }

  return <div className={`project-preview bg-gradient-to-br ${tone}`}><div className="project-browser"><div className="project-browser-bar"><span /><span /><span /><i>saint-web.dev</i></div><div className="project-browser-content"><div><small>AI AUTOMATION STUDIO</small><b>Собираем процессы проще</b><em>Обсудить задачу</em></div><div className="project-browser-card"><span /><span /><span /></div></div></div></div>;
}

export function HeroSection() {
  return (
    <section id="top" data-hero-shell className="relative isolate min-h-[690px] scroll-mt-24 overflow-hidden bg-[#F4F2ED] px-5 pb-16 pt-32 sm:min-h-[720px] sm:px-8 sm:pb-20 sm:pt-36 lg:min-h-[680px] lg:pb-8 lg:pt-24">
      <div className="hero-blob hero-blob-purple pointer-events-none absolute -left-32 top-20 -z-0 h-72 w-72 rounded-full blur-3xl sm:h-96 sm:w-96" />
      <div className="hero-blob hero-blob-blue pointer-events-none absolute right-[-15%] top-16 -z-0 h-[520px] w-[520px] rounded-full blur-[110px]" />
      <div className="hero-blob hero-blob-coral pointer-events-none absolute bottom-[-20%] left-[38%] -z-0 h-80 w-80 rounded-full blur-[100px]" />
      <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(350px,0.75fr)] lg:gap-5">
        <Reveal>
          <p className="saint-eyebrow">Saint Web — сайты, AI и автоматизация</p>
          <h1 className="mt-6 max-w-5xl text-[2.25rem] font-semibold leading-[0.97] tracking-[-0.065em] text-[#111111] sm:text-7xl lg:mt-5 lg:leading-[0.92] lg:text-[clamp(3.9rem,4.6vw,5rem)]">Создаю сайты, <span className="whitespace-nowrap">веб-приложения</span> и <span className="whitespace-nowrap">AI-решения</span>, которые помогают бизнесу расти</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#71717A] sm:text-xl lg:mt-4 lg:max-w-3xl">Разрабатываю быстрые и удобные цифровые продукты — от лендингов и корпоративных сайтов до Telegram-ботов, CRM и AI-автоматизации.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-6"><a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0C0C0E] px-6 py-3 text-sm font-semibold text-[#F7F6F2] shadow-xl shadow-[#0C0C0E]/15 transition-transform hover:-translate-y-1">Обсудить проект</a><a href="#projects" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#111111]/15 bg-white/35 px-6 py-3 text-sm font-semibold text-[#111111] transition-colors hover:border-[#625BFF]/50 hover:bg-white/70">Посмотреть проекты</a></div>
          <div className="mt-10 flex max-w-xl flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#71717A] sm:mt-12 sm:gap-3 lg:mt-7"><span className="rounded-full border border-[#111111]/10 px-3 py-2">Современные сайты</span><span className="rounded-full border border-[#111111]/10 px-3 py-2">AI-автоматизация</span><span className="rounded-full border border-[#111111]/10 px-3 py-2">Telegram-боты</span><span className="rounded-full border border-[#111111]/10 px-3 py-2">Веб-приложения</span></div>
          <p className="mt-5 flex items-center gap-2 text-sm text-[#71717A] lg:mt-3"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#625BFF] shadow-[0_0_0_4px_rgba(98,91,255,0.1)]" />Работаю удалённо с клиентами по всему миру</p>
        </Reveal>
        <HeroVisual />
      </div>
      <div aria-hidden="true" className="hero-flow-route pointer-events-none absolute inset-x-[14%] bottom-5 hidden lg:block"><span className="hero-flow-route-line" /><span className="hero-flow-route-arrow">→</span></div>
    </section>
  );
}

export function ServicesSection() {
  return <section id="services" className="scroll-mt-24 bg-[#F4F2ED] px-5 py-12 sm:px-8 sm:py-16"><Reveal className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="saint-eyebrow">Что может получить ваш бизнес</p><h2 className="saint-section-title mt-4 max-w-3xl">Цифровые продукты, которые помогают работать проще.</h2></div><p className="max-w-sm text-sm leading-6 text-[#71717A]">От первой идеи до аккуратной рабочей версии, которую можно развивать дальше.</p></div><div className="mt-6 grid gap-3 md:grid-cols-2">{serviceCards.map((service) => <article key={service.title} className="service-card group min-w-0 rounded-[1.5rem] border border-[#111111]/10 bg-white/45 p-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_70px_-35px_rgba(17,17,17,0.35)] sm:p-4"><div className="flex items-start justify-between gap-4"><span className={`text-sm font-medium ${service.accent}`}>{service.number}</span><span className="text-xl text-[#111111]/20 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></div><h3 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-2xl">{service.title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-[#71717A]">{service.text}</p><ul className="mt-3 grid gap-1.5 border-t border-[#111111]/10 pt-3 text-xs leading-5 text-[#111111]/70 sm:text-sm">{service.points.map((point) => <li key={point} className="flex items-start gap-2"><span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current ${service.accent}`} />{point}</li>)}</ul></article>)}</div></Reveal></section>;
}

export function AboutSection() {
  return <section id="about" className="scroll-mt-24 bg-[#0C0C0E] px-5 py-16 text-[#F7F6F2] sm:px-8 sm:py-24"><Reveal className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20"><p className="saint-eyebrow saint-eyebrow-inverse">Обо мне</p><div className="max-w-4xl"><h2 className="saint-section-title saint-section-title-inverse">Привет! Меня зовут Алексей.</h2><div className="mt-6 grid gap-4 text-base leading-7 text-white/65 sm:text-lg"><p>Я независимый веб-разработчик и создатель цифровых решений под названием Saint Web.</p><p>Помогаю предпринимателям и компаниям запускать современные сайты, веб-приложения, Telegram-ботов и AI-автоматизацию, которые упрощают работу, экономят время и помогают развивать бизнес.</p><p>Использую современные технологии и уделяю внимание скорости, удобству использования и качеству реализации каждого проекта.</p><p>Моя цель — создавать решения, которые приносят реальную пользу, а не просто выглядят красиво.</p></div><div className="mt-7 flex flex-wrap gap-2">{specializations.map((item) => <span key={item} className="rounded-full border border-white/15 px-3 py-2 text-xs text-white/70">{item}</span>)}</div><p className="mt-5 text-sm text-white/55">Работаю удалённо с клиентами по всему миру.</p></div></Reveal></section>;
}

export function ProcessSection() {
  return <section id="process" className="scroll-mt-24 bg-[#F4F2ED] px-5 py-16 sm:px-8 sm:py-24"><Reveal className="mx-auto max-w-7xl"><p className="saint-eyebrow">Как проходит работа</p><h2 className="saint-section-title mt-4 max-w-2xl">Понятный путь от задачи к запуску.</h2><div className="process-flow relative mt-9"><div aria-hidden="true" className="process-flow-line hidden sm:block" /><div className="relative grid gap-3 sm:grid-cols-5">{processSteps.map((step, index) => <div key={step.title} className="rounded-2xl border border-[#111111]/10 bg-white/45 p-4 transition-transform hover:-translate-y-1 sm:p-5"><span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#F4F2ED] text-sm text-[#625BFF] ring-1 ring-[#625BFF]/25">0{index + 1}</span><h3 className="mt-6 text-sm font-semibold leading-5 text-[#111111]">{step.title}</h3><p className="mt-2 text-xs leading-5 text-[#71717A]">{step.result}</p></div>)}</div></div></Reveal></section>;
}

export function ProjectsSection() {
  return <section id="projects" className="scroll-mt-24 bg-[#F4F2ED] px-5 py-14 sm:px-8 sm:py-20"><Reveal className="mx-auto max-w-7xl"><p className="saint-eyebrow">Работы</p><h2 className="saint-section-title mt-4 max-w-3xl">Учебные и концептуальные проекты.</h2><p className="mt-4 max-w-2xl text-base leading-7 text-[#71717A]">Примеры показывают подход к задачам и интерфейсам. Это демонстрационные работы, а не кейсы реальных клиентов.</p><div className="mt-8 grid gap-4 lg:grid-cols-3">{projects.map((project) => <article key={project.title} className="group flex min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-[#111111]/10 bg-white/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_70px_-35px_rgba(17,17,17,0.35)]"><ProjectPreview kind={project.preview} tone={project.tone} /><div className="flex flex-1 flex-col p-4 sm:p-5"><span className="w-fit rounded-full bg-[#625BFF]/10 px-3 py-1 text-xs font-medium text-[#625BFF]">{project.type}</span><h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-[#111111]">{project.title}</h3><div className="mt-3 grid gap-2 text-sm leading-5 text-[#71717A]"><p><strong className="font-semibold text-[#111111]/75">Задача:</strong> {project.task}</p><div><strong className="font-semibold text-[#111111]/75">Реализовано:</strong><ul className="mt-1 list-disc space-y-1 pl-4">{project.implemented.map((item) => <li key={item}>{item}</li>)}</ul></div></div><p className="mt-4 border-t border-[#111111]/10 pt-3 text-xs leading-5 text-[#71717A]">{project.stack}</p><a href="#contact" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#625BFF] transition-colors hover:text-[#FF665A]">Обсудить похожий проект <span className="ml-2 transition-transform group-hover:translate-x-1">→</span></a></div></article>)}</div></Reveal></section>;
}

export function WhySection() {
  return <section id="why" className="bg-[#111114] px-5 py-16 text-[#F7F6F2] sm:px-8 sm:py-24"><Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><p className="saint-eyebrow saint-eyebrow-inverse">Почему Saint Web</p><h2 className="saint-section-title saint-section-title-inverse mt-4 max-w-xl">Технологии должны решать задачу, а не усложнять её.</h2></div><ul className="grid gap-3 sm:grid-cols-2">{whyPoints.map((point, index) => <li key={point} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-white/75 transition-colors hover:border-[#C8B6FF]/40 hover:bg-white/[0.07] sm:p-5"><span className="mb-5 block text-xs text-[#C8B6FF]">0{index + 1}</span>{point}</li>)}</ul></Reveal></section>;
}

export function TechnologiesSection() {
  return <section id="technologies" className="scroll-mt-24 bg-[#0C0C0E] px-5 py-12 text-[#F7F6F2] sm:px-8 sm:py-16"><Reveal className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end"><div><p className="saint-eyebrow saint-eyebrow-inverse">Технологии</p><h2 className="saint-section-title saint-section-title-inverse mt-4 max-w-xl">Инструменты, которые изучаю и применяю в проектах.</h2></div><p className="max-w-md text-sm leading-6 text-white/55">Использую современный стек для создания быстрых, масштабируемых и удобных цифровых решений.</p></div><div className="grid gap-2 pt-5 md:grid-cols-3">{technologyGroups.map((group) => <div key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-3 sm:p-4"><h3 className="text-sm font-semibold text-white">{group.title}</h3><p className="mt-1 text-xs leading-5 text-white/45">{group.text}</p><div className="mt-3 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/75">{item}</span>)}</div></div>)}</div></Reveal></section>;
}

export function ContactMethods() {
  return <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1"><span className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><span className="block text-sm font-semibold text-white">Telegram</span><span className="mt-2 block text-xs leading-5 text-white/45">Контактные данные будут добавлены перед запуском формы.</span></span><span className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><span className="block text-sm font-semibold text-white">Email</span><span className="mt-2 block text-xs leading-5 text-white/45">Контактные данные будут добавлены перед запуском формы.</span></span><a href="https://github.com/Svyatoy-Alexey/ai-developer-portfolio" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-[#8ED8FF]/50"><span className="block text-sm font-semibold text-white">GitHub</span><span className="mt-2 block break-all text-xs leading-5 text-white/45">Svyatoy-Alexey/ai-developer-portfolio ↗</span></a></div>;
}

export function SiteFooter() {
  return <footer className="border-t border-white/10 bg-[#0C0C0E] px-5 py-7 text-[#F7F6F2] sm:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Saint Web</p><p>Работаю удалённо по всему миру</p><a href="#top" className="transition-colors hover:text-white">В начало ↑</a></div></footer>;
}
