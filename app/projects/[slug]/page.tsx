import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Project } from "@/data/projects";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const problemGoal = [
  {
    title: "Проблема",
    text: "Покупка недвижимости за границей вызывает сомнения: цена входа, надежность сделки, удаленный выбор объекта и доверие к эксперту. Лендинг должен не просто впечатлять визуально, а снижать тревожность и объяснять следующий шаг."
  },
  {
    title: "Цель",
    text: "Собрать страницу, которая быстро показывает ценность предложения, помогает сравнить варианты и мягко ведет к консультации. Важно сохранить премиальный образ, но сделать сценарий понятным и прикладным."
  }
];

const solutions = [
  "Выстроить путь пользователя: интерес, доверие, подбор, выбор и заявка.",
  "Добавить рациональные опоры: цифры, этапы сделки, каталог объектов и понятный CTA.",
  "Сохранить эмоциональную роль визуалов, но привязать их к смыслу каждого блока.",
  "Сделать текст коротким, чтобы пользователь не терял фокус между большими изображениями."
];

const visuals = [
  {
    label: "Первый экран",
    text: "Формирует премиальное первое впечатление и сразу объясняет, что пользователь может получить консультацию по подбору.",
    image: "/images/thailand-case/hero.png",
    width: 1800,
    height: 990,
    wide: true
  },
  {
    label: "Каталог",
    text: "Переводит интерес в выбор: пользователь видит объекты, сравнивает параметры и понимает, куда двигаться дальше.",
    image: "/images/thailand-case/catalog.png",
    width: 1800,
    height: 2250,
    wide: false
  },
  {
    label: "Финальная заявка",
    text: "Появляется после аргументов и визуального доверия, поэтому воспринимается как естественный следующий шаг.",
    image: "/images/thailand-case/contact.png",
    width: 1800,
    height: 1018,
    wide: true
  }
];

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} - кейс Нестеркиной Дарьи`,
    description: project.shortDescription
  };
}

function Label({ children, blue = false }: { children: ReactNode; blue?: boolean }) {
  return (
    <p className={`font-mono text-[10px] uppercase tracking-[0.18em] ${blue ? "text-[var(--blue)]" : "text-muted"}`}>
      {children}
    </p>
  );
}

function SectionNumber({ children }: { children: ReactNode }) {
  return <p className="text-[clamp(4.5rem,10vw,9.5rem)] font-semibold leading-none tracking-[-0.08em] text-[var(--blue)]/15">{children}</p>;
}

function CaseHero({ project }: { project: Project }) {
  return (
    <section className="case-paper border-b border-ink/10 px-5 pb-8 pt-5 sm:px-8 lg:px-10 lg:pb-10">
      <div className="grid grid-cols-4 gap-x-4 border-b border-ink/10 pb-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted md:grid-cols-12">
        <Link href="/#projects" className="col-span-1 border-b border-ink/35 text-ink transition-opacity hover:opacity-60 md:col-span-2">
          Резюме
        </Link>
        <span className="col-span-2 text-center md:col-span-8">D.Nesterkina_Design</span>
        <span className="col-span-1 text-right md:col-span-2">{project.year}</span>
      </div>

      <div className="grid grid-cols-4 gap-x-4 gap-y-10 pt-14 md:grid-cols-12 lg:pt-20">
        <div className="col-span-4 md:col-span-7">
          <Label blue>О проекте</Label>
          <h1 className="mt-12 max-w-4xl text-[clamp(2.35rem,5.8vw,6.4rem)] font-semibold uppercase leading-[0.84] tracking-[-0.06em] text-ink md:mt-20">
            Лендинг для подбора премиальной недвижимости
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/70">
            {project.shortDescription}
          </p>
          <div className="mt-9 max-w-lg border-t border-ink/10 pt-5">
            <Label>Role</Label>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">{project.role}</p>
          </div>
        </div>

        <div className="col-span-4 self-end md:col-span-5 md:col-start-8">
          <h2 className="text-right text-[clamp(3.2rem,8vw,8.6rem)] font-semibold uppercase leading-[0.78] tracking-[-0.075em] text-[var(--blue)]">
            Thailand
            <span className="block">Estate</span>
          </h2>
          <div className="mt-12 text-right">
            <Link href="#case-start" className="inline-flex border-b border-[var(--blue)] pb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--blue)] transition-opacity hover:opacity-60">
              Смотреть кейс ↳
            </Link>
          </div>
        </div>
      </div>

      <figure id="case-start" className="mt-12 border border-ink/10 bg-white p-2 sm:p-3 lg:mt-16">
        <Image
          src="/images/thailand-case/hero.png"
          alt="Первый экран лендинга недвижимости в Таиланде"
          width={1800}
          height={990}
          priority
          sizes="(max-width: 768px) 100vw, 1320px"
          className="h-auto w-full"
        />
      </figure>
    </section>
  );
}

function ProblemGoalSection() {
  return (
    <section className="case-paper grid grid-cols-4 gap-x-4 gap-y-12 border-b border-ink/10 px-5 py-16 sm:px-8 md:grid-cols-12 lg:px-10 lg:py-24">
      <div className="col-span-4 md:col-span-3">
        <Label blue>Проблемы и цель</Label>
        <div className="mt-10">
          <SectionNumber>01</SectionNumber>
        </div>
      </div>

      <div className="col-span-4 grid gap-14 md:col-span-8 md:col-start-5 md:grid-cols-2">
        {problemGoal.map((item) => (
          <article key={item.title} className="border-t border-ink/10 pt-6">
            <h2 className="text-sm font-semibold uppercase tracking-[-0.01em] text-[var(--blue)]">{item.title}:</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/60">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section className="case-paper grid grid-cols-4 gap-x-4 gap-y-12 border-b border-ink/10 px-5 py-16 sm:px-8 md:grid-cols-12 lg:px-10 lg:py-24">
      <div className="col-span-4 md:col-span-3">
        <Label blue>Решения</Label>
        <div className="mt-10">
          <SectionNumber>02</SectionNumber>
        </div>
      </div>

      <div className="col-span-4 grid gap-x-12 gap-y-14 md:col-span-8 md:col-start-5 md:grid-cols-2">
        {solutions.map((solution, index) => (
          <article key={solution} className="border-t border-ink/10 pt-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--blue)]">{String(index + 1).padStart(2, "0")}</span>
            <p className="mt-8 text-xl leading-snug tracking-[-0.03em] text-ink/70">{solution}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function VisualsSection() {
  return (
    <section className="case-paper border-b border-ink/10 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="grid grid-cols-4 gap-x-4 border-b border-ink/10 pb-6 md:grid-cols-12">
        <div className="col-span-2 md:col-span-3">
          <Label blue>Визуальная система</Label>
        </div>
        <p className="col-span-2 text-right font-mono text-[10px] uppercase tracking-[0.16em] text-muted md:col-span-3 md:col-start-10">
          Selected screens
        </p>
      </div>

      <div className="space-y-20 pt-14 lg:space-y-28">
        {visuals.map((visual, index) => (
          <figure key={visual.label} className="grid grid-cols-4 gap-x-4 gap-y-6 md:grid-cols-12">
            <figcaption className="col-span-4 border-t border-ink/10 pt-5 md:col-span-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--blue)]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-7 text-2xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-ink">{visual.label}</h3>
              <p className="mt-5 text-sm leading-relaxed text-ink/60">{visual.text}</p>
            </figcaption>
            <div className={`${visual.wide ? "md:col-span-8 md:col-start-5" : "md:col-span-6 md:col-start-6"} col-span-4`}>
              <Image
                src={visual.image}
                alt={visual.label}
                width={visual.width}
                height={visual.height}
                sizes="(max-width: 768px) 100vw, 1100px"
                className="h-auto w-full border border-ink/10 bg-white"
                priority={index === 0}
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ResultSection({ project }: { project: Project }) {
  return (
    <section className="case-paper grid grid-cols-4 gap-x-4 gap-y-12 px-5 py-16 sm:px-8 md:grid-cols-12 lg:px-10 lg:py-24">
      <div className="col-span-4 md:col-span-3">
        <Label blue>Результат</Label>
        <div className="mt-10">
          <SectionNumber>03</SectionNumber>
        </div>
      </div>

      <div className="col-span-4 md:col-span-7 md:col-start-5">
        <h2 className="text-[clamp(2.3rem,5vw,5.2rem)] font-semibold uppercase leading-[0.86] tracking-[-0.06em] text-ink">
          Красивый макет стал понятной продуктовой историей
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/60">{project.result}</p>
        <div className="mt-14 flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--blue)]">
          {project.tags.map((tag) => (
            <span key={tag} className="border-b border-[var(--blue)]/30 pb-1">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function GenericCase({ project }: { project: Project }) {
  return (
    <section className="case-paper rounded-[24px] border border-white/25 p-8 text-ink sm:p-12">
      <Label blue>Case</Label>
      <h1 className="mt-10 text-[clamp(2.6rem,7vw,7rem)] font-semibold uppercase leading-[0.82] tracking-[-0.065em]">{project.title}</h1>
      <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink/70">{project.shortDescription}</p>
    </section>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const isThailandCase = project.slug === "thailand-real-estate";

  return (
    <main style={{ "--accent": project.accentColor } as CSSProperties}>
      <article className="container-page pb-12 pt-16">
        {isThailandCase ? (
          <div className="overflow-hidden rounded-[24px] border border-white/25 shadow-[0_30px_120px_rgba(0,0,0,0.16)]">
            <CaseHero project={project} />
            <ProblemGoalSection />
            <SolutionsSection />
            <VisualsSection />
            <ResultSection project={project} />
          </div>
        ) : (
          <GenericCase project={project} />
        )}

        <section id="contacts" className="pt-8 sm:pt-12">
          <div className="rounded-[20px] border border-white/25 bg-[#0f1730] p-6 text-paper sm:p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">CTA / contact</p>
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="max-w-3xl text-balance text-[clamp(2.4rem,7vw,5.8rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em]">
                Нужен дизайн с такой же логикой?
              </h2>
              <a href="mailto:dasanesterkina80008@gmail.com" className="w-fit rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-80">
                Написать на почту
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
