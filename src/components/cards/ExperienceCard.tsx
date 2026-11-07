import React from "react";
import Link from "next/link";
import { ExperienceItem } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group bento-card-hover rounded-xl border border-zinc-800/90 bg-[#121216] p-6 flex flex-col justify-between gap-5 h-full">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge variant={experience.isCurrent ? "accent" : "outline"}>
              {experience.isCurrent && (
                /* Tambahkan items-center di sini agar vertikalnya pas di tengah */
                <span className="relative flex items-center h-3 w-2.7 mr-2.5 inline-block">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-400"></span>
                </span>
              )}
              {experience.isCurrent ? "Active · " : ""}
              {experience.period}
            </Badge>
            <Badge variant="default">
              {experience.category === "organizational"
                ? "Organisasi"
                : "Kepanitiaan & Program"}
            </Badge>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-lime-300 transition-colors">
            <Link href={`/experience/${experience.slug}`}>
              {experience.position}
            </Link>
          </h3>
          <p className="text-sm text-zinc-300 font-medium mt-0.5">
            {experience.programName
              ? `${experience.programName} — ${experience.organization}`
              : experience.organization}
          </p>
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed">
          {experience.description}
        </p>

        {experience.responsibilities.length > 0 && (
          <ul className="space-y-1.5 pt-1 text-xs text-zinc-400 list-disc list-inside">
            {experience.responsibilities.slice(0, 4).map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-3 border-t border-zinc-800/70 flex items-center justify-between">
        <Link
          href={`/experience/${experience.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300 group-hover:text-lime-400 transition-colors"
        >
          <span>Lihat Rincian Tanggung Jawab</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}