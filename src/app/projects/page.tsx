"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(projectsData.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10">
      <SectionHeader
        eyebrow="Software Development Projects"
        title="Arsip Proyek Perangkat Lunak"
        description="Daftar proyek pengembangan sistem backend, REST API, manajemen basis data, dan aplikasi kolaboratif."
      />

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono border transition-colors ${
              selectedCategory === cat
                ? "bg-lime-400/15 text-lime-300 border-lime-400/40"
                : "bg-zinc-900/70 text-zinc-400 border-zinc-800 hover:text-zinc-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}