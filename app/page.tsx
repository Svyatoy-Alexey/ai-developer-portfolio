import ContactForm from "./components/contact-form";
import SiteHeader from "./components/site-header";
import {
  AboutSection,
  ContactMethods, HeroSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  SiteFooter,
  TechnologiesSection,
  WhySection,
} from "./components/portfolio-sections";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F4F2ED] text-[#111111]">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <ProjectsSection />
        <WhySection />
        <TechnologiesSection />
        <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-[#0C0C0E] px-5 py-16 text-[#F7F6F2] sm:px-8 sm:py-24">
          <div aria-hidden="true" className="contact-flow-route pointer-events-none absolute left-[10%] right-[10%] top-16 hidden lg:block"><span className="contact-flow-route-line" /><span className="contact-flow-route-arrow">→</span></div>
          <div className="mx-auto grid min-w-0 max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-20">
            <div className="lg:pt-5">
              <p className="saint-eyebrow saint-eyebrow-inverse">Контакты</p>
              <h2 className="saint-section-title saint-section-title-inverse mt-5 max-w-xl">Давайте сделаем следующий шаг.</h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-white/65 sm:text-lg">Работаю удалённо с клиентами по всему миру. Расскажите о задаче — форма пока работает в демонстрационном режиме и не отправляет данные наружу.</p>
              <ContactMethods />
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
