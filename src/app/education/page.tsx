import React from "react";
import type { Metadata } from "next";
import {
  educationList,
  certificationsList,
  languageTestsList,
} from "@/data/education";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Award, BookOpen, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Education & Certifications",
  description:
    "Riwayat pendidikan, sertifikasi kompetensi BNSP, dan skor uji bahasa Inggris ETS TOEIC Aurell Satrianitto Prianggono.",
};

export default function EducationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-14">
      <SectionHeader
        eyebrow="Academic & Credentials"
        title="Pendidikan, Sertifikasi & Uji Bahasa"
        description="Informasi akademik resmi, sertifikasi kompetensi teknis, dan hasil pengujian kemampuan bahasa."
      />

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-sm font-mono uppercase tracking-wider text-lime-400 flex items-center gap-2">
          <GraduationCap className="w-4 h-4" />
          <span>Pendidikan Tinggi</span>
        </h2>
        {educationList.map((edu) => (
          <div
            key={edu.degree}
            className="rounded-xl border border-zinc-800 bg-[#121216] p-6 sm:p-8 space-y-2"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-semibold text-zinc-100">
                {edu.degree}
              </h3>
              <span className="text-xs font-mono text-lime-400 bg-lime-400/10 border border-lime-400/30 px-2.5 py-1 rounded">
                {edu.period}
              </span>
            </div>
            <p className="text-base text-zinc-300 font-medium">
              {edu.institution}
            </p>
            {edu.description && (
              <p className="text-sm text-zinc-400 leading-relaxed pt-2">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Certification */}
      <section className="space-y-4">
        <h2 className="text-sm font-mono uppercase tracking-wider text-lime-400 flex items-center gap-2">
          <Award className="w-4 h-4" />
          <span>Sertifikasi Kompetensi</span>
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {certificationsList.map((cert) => (
            <div
              key={cert.title}
              className="rounded-xl border border-zinc-800 bg-[#121216] p-6 space-y-1"
            >
              <h3 className="text-lg font-semibold text-zinc-100">
                {cert.title}
              </h3>
              <p className="text-sm text-zinc-400">{cert.issuer}</p>
              {cert.year && (
                <p className="text-xs text-zinc-500">
                  Tahun: {cert.year}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* English Test */}
      <section className="space-y-4">
        <h2 className="text-sm font-mono uppercase tracking-wider text-lime-400 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          <span>English Proficiency Test</span>
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {languageTestsList.map((test) => (
            <div
              key={test.testName}
              className="rounded-xl border border-zinc-800 bg-[#121216] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-zinc-100">
                  {test.testName}
                </h3>
                <p className="text-sm text-zinc-400">{test.organizer}</p>
                {test.year && (
                  <p className="text-xs text-zinc-500">
                    Tahun: {test.year}
                  </p>
                )}
              </div>
              <div className="px-4 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-right">
                <span className="text-xs font-mono text-zinc-500 block">
                  Official Score
                </span>
                <span className="text-lg font-mono font-semibold text-lime-400">
                  {test.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}