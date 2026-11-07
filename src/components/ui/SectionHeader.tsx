import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-zinc-800/80">
      <div className="space-y-2 max-w-2xl">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-lime-400">
          {eyebrow}
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
          {title}
        </h2>
        {description && (
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed pt-1">
            {description}
          </p>
        )}
      </div>

      {actionHref && actionLabel && (
        <Link
          href={actionHref}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-lime-400 transition-colors group shrink-0"
        >
          <span>{actionLabel}</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      )}
    </div>
  );
}