import ContactForm from "./components/contact-form";
import {
  AboutSection,
  ContactMethods,
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
    <div className="min-h-screen overflow-hidden bg-[#F4F2ED] text-[#111111]">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TechnologiesSection />
        <ProcessSection />
        <section id="contact" className="scroll-mt-20 bg-[#0C0C0E] px-5 py-24 text-[#F7F6F2] sm:px-8 sm:py-32">
          <div className="mx-auto grid min-w-0 max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-20">
            <div className="lg:pt-5">
              <p className="saint-eyebrow saint-eyebrow-inverse">Контакты</p>
              <h2 className="saint-section-title saint-section-title-inverse mt-5 max-w-xl">Давайте сделаем следующий шаг.</h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-white/65 sm:text-lg">
                Работаю удалённо с клиентами по всему миру. Расскажите о задаче — форма пока работает в демонстрационном режиме и не отправляет данные наружу.
              </p>
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
