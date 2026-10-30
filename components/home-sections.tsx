import Image from "next/image";
import { ProjectGrid } from "@/components/project-grid";
import { ProcessArcCarousel } from "@/components/process-arc-carousel";
import { projects } from "@/data/projects";

const skillPoints = [
  { label: "Title", className: "left-[17%] top-[17%]" },
  { label: "UX/UI design", className: "right-[9%] top-[24%]" },
  { label: "Research", className: "right-[27%] bottom-[24%]" }
];

const aboutTags = [
  { label: "UI/UX design", active: true },
  { label: "Graphic design" },
  { label: "Product strategy" },
  { label: "Analytics", active: true },
  { label: "Research" },
  { label: "Visual identity" },
  { label: "Landing pages" },
  { label: "Presentations", active: true },
  { label: "Campaign design" },
  { label: "Design systems" },
  { label: "Figma" },
  { label: "Grid", active: true },
  { label: "Art direction" },
  { label: "Prototyping" },
  { label: "Editorial layout" },
  { label: "Mobile UI" },
  { label: "Brand logic", active: true },
  { label: "UX structure" },
  { label: "Visual storytelling" },
  { label: "Case packaging" },
  { label: "Interface audit", active: true },
  { label: "Creative direction" }
];

const aboutPhotoSlots = [
  { id: "photo-slot-1", image: "/images/thailand-property-01.png" },
  { id: "photo-slot-2", image: "/images/nf-group-cover.svg" },
  { id: "photo-slot-3", image: "/images/thailand-property-02.png" },
  { id: "photo-slot-4", image: "/images/tvoya-korovka-cover.svg" },
  { id: "photo-slot-5", image: "/images/partner-program-cover.svg" },
  { id: "photo-slot-6", image: "/images/thailand-gallery.png" },
  { id: "photo-slot-7", image: "/images/digital-campaigns-cover.svg" },
  { id: "photo-slot-8", image: "/images/thailand-property-03.png" },
  { id: "photo-slot-9", image: "/images/archive-lab-cover.svg" },
  { id: "photo-slot-10", image: "/images/field-notes-cover.svg" },
  { id: "photo-slot-11", image: "/images/signal-form-cover.svg" },
  { id: "photo-slot-12", image: "/images/slow-market-cover.svg" },
  { id: "photo-slot-13", image: "/images/thailand-estate-cover.svg" },
  { id: "photo-slot-14", image: "/images/nf-group-01.svg" },
  { id: "photo-slot-15", image: "/images/tvoya-korovka-01.svg" },
  { id: "photo-slot-16", image: "/images/partner-program-01.svg" },
  { id: "photo-slot-17", image: "/images/digital-campaigns-01.svg" },
  { id: "photo-slot-18", image: "/images/archive-lab-01.svg" },
  { id: "photo-slot-19", image: "/images/field-notes-01.svg" },
  { id: "photo-slot-20", image: "/images/signal-form-01.svg" },
  { id: "photo-slot-21", image: "/images/thailand-property-01.png" },
  { id: "photo-slot-22", image: "/images/thailand-property-02.png" },
  { id: "photo-slot-23", image: "/images/nf-group-cover.svg" },
  { id: "photo-slot-24", image: "/images/tvoya-korovka-cover.svg" }
];

function AboutStudioSection() {
  return (
    <section id="studio" className="blue-guide-section container-page border-t border-white/18 py-12 sm:py-20">
      <div className="module-grid min-h-[620px] gap-y-10 py-8 text-paper lg:items-start">
        <div className="col-span-8 max-w-xl lg:col-span-3">
          <p className="mb-12 font-mono text-[10px] uppercase tracking-[0.18em] text-white/62">Hard & soft skills</p>
          <h2 className="text-balance text-[clamp(2.8rem,5.4vw,5.9rem)] font-semibold uppercase leading-[0.86] tracking-[-0.07em]">
            НАПРАВЛЕНИЯ, С КОТОРЫМИ Я РАБОТАЮ
          </h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-white/72 sm:text-base">
            Соединяю UX-логику, визуальную систему и аккуратную презентационную подачу. Мне важно, чтобы проект не просто выглядел красиво, а помогал человеку быстро понять ценность, довериться продукту и сделать следующий шаг.
          </p>
        </div>

        <div className="col-span-8 lg:col-span-5 lg:col-start-4 lg:flex lg:min-h-[520px] lg:flex-col lg:text-right">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.18em] text-white/62">Services / focus</p>
          <div className="flex flex-wrap content-start gap-3 lg:flex-1 lg:items-start lg:justify-end">
            {aboutTags.map((tag, index) => (
              <span
                key={`${tag.label}-${index}`}
                className={`rounded-full border px-4 py-2 text-xl leading-none tracking-[-0.04em] transition-colors duration-200 ease-out sm:px-5 sm:py-3 sm:text-2xl lg:text-[1.65rem] ${
                  tag.active
                    ? "border-paper bg-paper text-ink"
                    : "border-white/55 bg-transparent text-paper hover:border-paper hover:bg-paper hover:text-ink"
                }`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-[700px] overflow-visible text-paper">
        <div className="process-frame-grid pointer-events-none absolute inset-y-0 -left-[15px] -right-[15px] rounded-[18px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -inset-x-24 -inset-y-32 bg-[radial-gradient(circle_at_50%_68%,rgba(255,255,255,0.13),transparent_34%)]" aria-hidden="true" />

        <div className="relative z-10 flex items-start justify-between py-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white sm:py-7">
          <span>Project development</span>
          <span>Process archive</span>
        </div>

        <div className="relative z-10 mt-[120px] h-[500px] overflow-visible sm:mt-[128px] sm:h-[410px]">
          <div className="absolute left-1/2 top-[320px] h-[500px] w-screen -translate-x-1/2 overflow-visible sm:top-[340px]">
            <ProcessArcCarousel slots={aboutPhotoSlots} />
          </div>

          <div className="absolute bottom-5 left-1/2 z-20 w-[min(100%-2.5rem,560px)] -translate-x-1/2 text-center sm:bottom-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/72 sm:text-xs">
              <span>Галерея процесса работ</span>
            </p>
            <p className="mx-auto mt-3 max-w-[360px] text-xs leading-relaxed text-white/52 sm:text-sm">
              Личные кадры, рабочие процессы и фрагменты проектов, которые собирают визуальный контекст моей практики.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeSections() {
  const featuredProject = projects[0];

  return (
    <main>
      <section id="about" className="blue-guide-after-card container-page relative flex min-h-screen flex-col justify-between pb-8 pt-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-4 overflow-hidden">
          <p className="text-[clamp(6rem,21vw,19rem)] font-semibold leading-[0.72] tracking-[-0.08em] text-white">portfolio</p>
        </div>

        <div className="blueprint-shell relative z-10 mt-[0vh] overflow-hidden rounded-[8px] border border-white/30 text-ink shadow-[0_35px_120px_rgba(0,0,0,0.24)]">
          <div className="min-h-[430px] p-4 sm:min-h-[520px] sm:p-[calc(var(--page-grid-unit)*0.12)] lg:min-h-[560px]">
            <div className="relative z-10 grid grid-cols-4 items-start font-mono text-[9px] uppercase tracking-[0.14em] text-ink sm:grid-cols-8">
              <a href="#contacts" className="transition-opacity hover:opacity-60">
                Contacts
              </a>
              <p className="col-span-2 text-center sm:col-span-6">D.Nesterkina_Design</p>
              <a href="#projects" className="text-right transition-opacity hover:opacity-60">
                Works
              </a>
            </div>

            <div className="blueprint-orbit" aria-hidden="true" />

            {skillPoints.map((point) => (
              <div key={point.label} className={`absolute z-10 flex items-center gap-2 font-mono text-[9px] text-ink/58 ${point.className}`}>
                <span className="blueprint-dot static" aria-hidden="true" />
                <span>{point.label}</span>
              </div>
            ))}

            <div className="absolute left-1/2 top-[43%] z-20 h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[8px] border border-[#7fb4ff] bg-white shadow-[0_16px_40px_rgba(18,63,159,0.18)] sm:top-1/2 sm:h-[84px] sm:w-[84px]">
              <Image src="/images/daria-avatar.jpg" alt="Нестеркина Дарья" fill priority sizes="84px" className="object-cover" />
              <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full border border-white bg-[#23d45b]" aria-hidden="true" />
            </div>

            <div className="absolute bottom-7 left-5 z-10 max-w-[330px] sm:bottom-10 sm:left-[calc(var(--page-grid-unit)*0.18)]">
              <h1 className="text-balance text-2xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] sm:text-4xl">
                <span className="block">Привет! Я Дарья, product / UX/UI</span>
                <span className="block">дизайнер</span>
              </h1>
              <p className="mt-3 max-w-[290px] text-[11px] leading-relaxed text-ink/68 sm:text-xs">
                Соединяю UX/UI, визуальный дизайн и продуктовую логику в проектах, где структура, типографика и образ работают как единая система.
              </p>
              <a href="#projects" className="mt-5 inline-flex border-b border-ink pb-1 font-mono text-[10px] uppercase tracking-[0.14em] transition-opacity hover:opacity-60 focus-visible:outline-[var(--blue)]">
                Смотреть проекты
              </a>
            </div>

            <p className="absolute bottom-7 right-5 z-10 hidden font-mono text-[9px] uppercase tracking-[0.12em] text-ink/62 sm:right-[calc(var(--page-grid-unit)*0.18)] sm:block">
              Russia, Moscow
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-8 grid gap-4 font-mono text-xs uppercase tracking-[0.08em] text-paper sm:grid-cols-3">
          <p>{"// Personal website"}</p>
          <p className="sm:text-center">{"// 2026"}</p>
          <p className="sm:text-right">{"// UX/UI design"}</p>
        </div>
      </section>

      <section id="skills" className="blue-guide-section container-page py-12 sm:py-20">
        <div className="module-grid min-h-[420px] items-center gap-y-10 text-paper">
          <div className="col-span-8 lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/68">About / logic</p>
            <h2 className="mt-8 max-w-none text-[clamp(2.15rem,5.8vw,5.55rem)] font-semibold lowercase leading-[0.84] tracking-[-0.07em]">
              <span className="block whitespace-normal xl:whitespace-nowrap">«собираю интерфейс</span>
              <span className="block whitespace-normal xl:whitespace-nowrap">не из элементов, а вокруг</span>
              <span className="block whitespace-normal xl:whitespace-nowrap">пользовательской задачи»</span>
            </h2>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/72 sm:text-base">
              Так я собираю интерфейсы, айдентику и презентационные материалы: от ясной задачи до визуальной системы, которую можно показать клиенту, команде или рекрутеру.
            </p>
          </div>

        </div>
      </section>

      <ProjectGrid />

      <AboutStudioSection />

      <section id="contacts" className="contacts-guide-inlet container-page pb-6 pt-10 sm:pt-16">
        <footer className="footer-plain-shell overflow-hidden rounded-[8px] text-ink">
          <div className="footer-grid-panel blueprint-shell relative z-10 grid min-h-[520px] border-b border-ink/16 lg:grid-cols-2">
            <div className="flex flex-col justify-between border-b border-dashed border-ink/20 p-5 lg:border-b-0 lg:border-r sm:p-8">
              <p className="font-mono text-[12px] uppercase tracking-[0.18em]">• Контакты</p>
              <div>
                <p className="max-w-sm text-xl leading-tight tracking-[-0.035em] text-ink/56 sm:text-2xl">
                  Есть сайт, интерфейс или кейс, который нужно собрать заметно, понятно и с сильной подачей?
                </p>
                <a href="mailto:dasanesterkina80008@gmail.com" className="mt-7 inline-flex border-b border-ink pb-1 text-xl font-semibold uppercase tracking-[-0.04em] transition-opacity hover:opacity-60">
                  обсудить проект ↘
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-14 p-5 sm:p-8">
              <div className="flex items-start justify-between gap-8">
                <nav className="flex flex-col items-start gap-3 text-xl font-semibold uppercase tracking-[-0.035em]" aria-label="Навигация в футере">
                  <a href="#about" className="leading-none transition-opacity hover:opacity-60">Главная</a>
                  <a href="#skills" className="leading-none transition-opacity hover:opacity-60">Подход</a>
                  <a href="#projects" className="leading-none transition-opacity hover:opacity-60">Портфолио & аналитика</a>
                  <a href="#studio" className="leading-none transition-opacity hover:opacity-60">Навыки</a>
                  <a href="#projects" className="leading-none transition-opacity hover:opacity-60">Другие кейсы</a>
                  <a href="#contacts" className="leading-none transition-opacity hover:opacity-60">Контакты</a>
                </nav>

                <div className="flex flex-wrap justify-end gap-2">
                  {["IG", "TG", "BE", "IN", "CV"].map((item) => (
                    <a
                      key={item}
                      href={item === "TG" ? "https://t.me/Darya_Nestle" : item === "BE" ? "https://behance.net/" : item === "IN" ? "https://linkedin.com/" : "#contacts"}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink bg-ink text-sm font-semibold text-paper transition hover:bg-paper hover:text-ink"
                      aria-label={item}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid max-w-[620px] gap-x-14 gap-y-6 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">Почта:</p>
                  <a href="mailto:dasanesterkina80008@gmail.com" className="mt-2 block text-base font-semibold uppercase tracking-[-0.035em] transition-opacity hover:opacity-60 sm:text-lg">
                    dasanesterkina80008@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">Telegram:</p>
                  <a href="https://t.me/Darya_Nestle" className="mt-2 block text-base font-semibold uppercase tracking-[-0.035em] transition-opacity hover:opacity-60 sm:text-lg">
                    @Darya_Nestle
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 px-5 pb-4 pt-6 sm:px-8">
            <p className="-ml-[36px] w-full whitespace-nowrap text-[clamp(4.9rem,18vw,18.12rem)] font-semibold uppercase leading-[0.72] tracking-[-0.085em]">
              Darya_Nest
            </p>
            <div className="mt-4 flex flex-col gap-2 border-t border-ink/16 pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/58 sm:flex-row sm:items-center sm:justify-between">
              <p>Нестеркина Дарья © 2026</p>
              <p>Product / UI-UX / Visual designer</p>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
