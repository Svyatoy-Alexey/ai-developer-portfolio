import ContactForm from "./components/contact-form";
import {
  AboutSection,
  HeroSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  SiteFooter,
  SiteHeader,
  TechnologiesSection,
} from "./components/portfolio-sections";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#070910] text-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TechnologiesSection />
        <ProcessSection />
        <section id="contact" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto grid min-w-0 max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] sm:p-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-16 lg:p-14">
            <div className="lg:pt-4">
              <p className="eyebrow">Контакты</p>
              <h2 className="section-title mt-4 max-w-xl">Есть идея для проекта?</h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">
                Расскажите, что хочется улучшить или запустить. Форма работает в демонстрационном режиме — данные никуда не отправляются.
              </p>
              <div className="mt-10 grid gap-4 text-sm text-zinc-300">
                <div className="flex items-center gap-3"><span className="text-cyan-300">01</span> Понятно разбираем задачу</div>
                <div className="flex items-center gap-3"><span className="text-cyan-300">02</span> Предлагаем реалистичный первый шаг</div>
                <div className="flex items-center gap-3"><span className="text-cyan-300">03</span> Открыто обозначаем объём работ</div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
