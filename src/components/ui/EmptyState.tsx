import React from "react";
import { Layers } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  hintCommand?: string;
}

export function EmptyState({ title, description, hintCommand }: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-8 sm:p-10 flex flex-col items-start justify-between gap-4">
      <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
        <Layers className="w-5 h-5" />
      </div>
      <div className="space-y-1.5 max-w-xl">
        <h3 className="text-base font-medium text-zinc-200">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
      </div>
      {hintCommand && (
        <div className="text-xs font-mono text-zinc-500 bg-zinc-950/90 border border-zinc-800/80 px-3 py-2 rounded-md">
          Workflow: <span className="text-zinc-300">{hintCommand}</span>
        </div>
      )}
    </div>
  );
}