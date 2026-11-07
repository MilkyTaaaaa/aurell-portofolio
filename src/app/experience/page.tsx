import React from "react";
import type { Metadata } from "next";
import { experiencesData } from "@/data/experiences";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExperienceCard } from "@/components/cards/ExperienceCard";

export const metadata: Metadata = {
  title: "Experience & Organization",
  description:
    "Rekam jejak organisasi, komunitas teknologi, dan kepanitiaan program kerja Aurell Satrianitto Prianggono.",
};

export default function ExperiencePage() {
  const organizationalList = experiencesData.filter(
    (e) => e.category === "organizational"
  );
  const committeeList = experiencesData.filter(
    (e) => e.category === "committee"
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-16">
      <SectionHeader
        eyebrow="Experience & Leadership"
        title="Organisasi, Komunitas & Kepanitiaan"
        description="Dokumentasi tanggung jawab struktural organisasi, eksplorasi teknis komunitas, serta pelaksanaan kepanitiaan program kerja."
      />

      {/* A. Organizational Experience */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-zinc-100">
            A. Organizational Experience
          </h2>
          <p className="text-sm text-zinc-400">
            Jabatan struktural, pengelolaan operasional, inventaris logistik, dan keanggotaan komunitas teknologi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organizationalList.map((exp) => (
            <ExperienceCard key={exp.slug} experience={exp} />
          ))}
        </div>
      </section>

      {/* B. Selected Programs & Committee Experience */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-zinc-100">
            B. Selected Programs & Committee Experience
          </h2>
          <p className="text-sm text-zinc-400">
            Keterlibatan dalam kepanitiaan program kerja utama, koordinasi tim lapangan, serta pengelolaan media dan dokumentasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {committeeList.map((exp) => (
            <ExperienceCard key={exp.slug} experience={exp} />
          ))}
        </div>
      </section>
    </div>
  );
}