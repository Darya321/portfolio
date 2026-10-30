"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectCategory } from "@/data/projects";
import { projectCategoryLabels, projects } from "@/data/projects";

type ProjectFilter = "all" | ProjectCategory;

type FilterOption = {
  label: string;
  value: ProjectFilter;
};

type ArchiveProjectCardProps = {
  project: Project;
  index: number;
};

const filterOptions: FilterOption[] = [
  { label: "Все проекты", value: "all" },
  { label: "Коммерческие", value: "commercial" },
  { label: "Государственные", value: "government" },
  { label: "Кейс-чемпионаты", value: "championship" },
  { label: "Учебные", value: "educational" }
];

const sortedProjects = [...projects].sort((a, b) => a.archivePriority - b.archivePriority);

const projectTools: Record<string, string> = {
  "thailand-real-estate": "Figma / Tilda",
  "ownerless-animals": "Figma / web portal",
  "stellar-passage": "Figma / long-form concept"
};

// Temporary archive previews: replace these paths with real covers when final project visuals are ready.
const archivePreviewImages: Record<string, string> = {
  "thailand-real-estate": "/images/archive-preview-05.svg",
  "ownerless-animals": "/images/archive-preview-03.svg",
  "stellar-passage": "/images/archive-preview-04.svg"
};

function getProjectImageClass(index: number) {
  const imageClasses = [
    "aspect-[16/10]",
    "aspect-[16/10]",
    "aspect-[4/3]",
    "aspect-[4/3]",
    "aspect-[16/10]"
  ];

  return imageClasses[index] ?? "aspect-[16/10]";
}

function ArchiveProjectCard({ project, index }: ArchiveProjectCardProps) {
  const displayImage = archivePreviewImages[project.slug] ?? project.image;
  const isVector = displayImage.endsWith(".svg");
  const keywords = [project.caseCategory, projectTools[project.slug] ?? "Figma"];

  return (
    <Link
      href={project.projectLink}
      aria-label={`Открыть кейс ${project.title}`}
      className="group col-span-8 block outline-none md:col-span-4"
      style={{ animationDelay: `${Math.min(index * 70, 280)}ms` }}
    >
      <figure className="space-y-5">
        <div
          className={`relative overflow-hidden bg-paper/5 ${getProjectImageClass(index)} transition duration-[650ms] ease-editorial group-hover:brightness-110 group-focus-visible:brightness-110`}
        >
          <Image
            src={displayImage}
            alt={`Обложка проекта ${project.title}`}
            fill
            priority={index < 2}
            unoptimized={isVector}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover grayscale transition-[filter,transform] duration-[700ms] ease-editorial group-hover:scale-[1.025] group-hover:grayscale-0 group-focus-visible:scale-[1.025] group-focus-visible:grayscale-0"
          />
          <span className="absolute right-4 top-4 font-mono text-[18px] leading-none text-[var(--accent)] opacity-90">
            ↗
          </span>
        </div>

        <figcaption className="grid gap-5 border-t border-white/18 pt-5 sm:grid-cols-[1fr_auto] sm:items-start">
          <div className="max-w-xl">
            <h3 className="text-[clamp(1.35rem,2vw,2.25rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-paper">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/64">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/22 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-paper/70">
                {projectCategoryLabels[project.category]}
              </span>
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/18 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-paper/58"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <span className="border-b border-paper pb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-paper transition-opacity group-hover:opacity-60 group-focus-visible:opacity-60">
            Смотреть
          </span>
        </figcaption>
      </figure>
    </Link>
  );
}

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") {
      return sortedProjects;
    }

    return sortedProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="container-page py-16 text-paper sm:py-24">
      <div className="module-grid gap-y-16">
        <div className="projects-guide-header col-span-8 border-b border-white/18 pb-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/70">My projects</p>

          <div className="mt-7 grid gap-7">
            <h2 className="max-w-2xl text-2xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] sm:text-4xl">
              За год сделала &gt;10 проектов, здесь показываю ключевые.
            </h2>

            <nav
              aria-label="Фильтр проектов"
              className="flex max-w-[calc(50%-1rem)] gap-x-[22px] gap-y-3 overflow-x-auto pb-2 font-sans text-base font-normal leading-none tracking-[-0.04em] md:justify-start md:overflow-visible md:pb-0 md:text-left sm:text-lg"
            >
              {filterOptions.map((option) => {
                const isActive = option.value === activeFilter;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setActiveFilter(option.value)}
                    className={`shrink-0 border-b pb-1 transition-colors duration-300 ease-editorial focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper ${
                      isActive
                        ? "border-paper text-paper opacity-100"
                        : "border-transparent text-paper opacity-35 hover:border-paper/35 hover:opacity-72"
                    }`}
                    aria-pressed={isActive}
                  >
                    {option.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        <div
          key={activeFilter}
          className="col-span-8 grid grid-cols-8 gap-x-4 gap-y-16 animate-[archiveCardsIn_520ms_cubic-bezier(0.22,1,0.36,1)_both] sm:gap-y-20"
        >
          {visibleProjects.map((project, index) => (
            <ArchiveProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
