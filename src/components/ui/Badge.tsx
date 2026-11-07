import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = {
    default: "bg-zinc-900 text-zinc-300 border border-zinc-800",
    accent: "bg-lime-400/10 text-lime-300 border border-lime-400/30",
    outline: "bg-transparent text-zinc-400 border border-zinc-800",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono ${styles[variant]}`}
    >
      {children}
    </span>
  );
}