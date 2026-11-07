import React from "react";
import Link from "next/link";
import { ProjectItem } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { ArrowUpRight, GitBranch } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const allTech = [
    ...project.technologies.personalContribution,
    ...(project.technologies.teamOrContext || []),
  ];

  return (
    <article className="group bento-card-hover rounded-xl border border-zinc-800/90 bg-[#121216] flex flex-col justify-between overflow-hidden h-full">
      <div>
        {project.thumbnail ? (
          <Link
            href={`/projects/${project.slug}`}
            className="block aspect-[16/9] w-full overflow-hidden border-b border-zinc-800/80 bg-zinc-950"
          >
            <ResponsiveImage
              imageKey={project.thumbnail}
              alt={project.title}
              objectFit="cover"
              imgClassName="group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
          </Link>
        ) : (
          <div className="px-6 pt-6 flex items-center justify-between">
            <span className="text-xs font-mono text-lime-400">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-500">
              {project.period}
            </span>
          </div>
        )}

        <div className="p-6 space-y-4">
          {project.thumbnail && (
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="text-lime-400">{project.category}</span>
              <span>{project.period}</span>
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-lime-300 transition-colors">
              <Link href={`/projects/${project.slug}`} className="focus:outline-none">
                {project.title}
              </Link>
            </h3>
            <p className="text-xs font-mono text-zinc-400 mt-1">
              Role: <span className="text-zinc-200">{project.role}</span>
            </p>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {allTech.slice(0, 6).map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-zinc-800/70 bg-zinc-950/40 flex items-center justify-between">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-200 group-hover:text-lime-400 transition-colors"
        >
          <span>Detail Proyek</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>
        )}
      </div>
    </article>
  );
}