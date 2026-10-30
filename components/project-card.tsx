import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  large?: boolean;
};

export function ProjectCard({ project, priority = false, large = false }: ProjectCardProps) {
  return (
    <Link
      href={project.projectLink}
      className={`group block overflow-hidden rounded-[10px] border border-ink/10 bg-[#f7f4ee] transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 ${
        large ? "md:row-span-2" : ""
      }`}
      style={{ "--accent": project.accentColor } as React.CSSProperties}
      aria-label={`Открыть кейс ${project.title}`}
    >
      <div className={`relative overflow-hidden bg-white ${large ? "aspect-[4/3]" : "aspect-[16/10]"}`}>
        <Image
          src={project.coverImage}
          alt={`Обложка проекта ${project.title}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
        />
        <div className="absolute left-3 top-3 rounded-full bg-white/88 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink">
          {project.year}
        </div>
        <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-lg text-ink opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">
          ↗
        </div>
      </div>
      <div className="p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{project.caseCategory}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em]">{project.title}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink/68">{project.shortDescription}</p>
      </div>
    </Link>
  );
}
