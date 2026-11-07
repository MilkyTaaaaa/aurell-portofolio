import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `Latar belakang akademik, ketertarikan teknis, dan pendekatan kerja ${profileData.fullName}.`,
};

export default function AboutPage() {
  const sections = [
    {
      number: "01",
      title: "Personal Introduction",
      paragraphs: profileData.aboutSections.personalIntroduction,
    },
    {
      number: "02",
      title: "Educational Background",
      paragraphs: profileData.aboutSections.educationalBackground,
    },
    {
      number: "03",
      title: "Technical Interests",
      paragraphs: profileData.aboutSections.technicalInterests,
    },
    {
      number: "04",
      title: "Professional Interests",
      paragraphs: profileData.aboutSections.professionalInterests,
    },
    {
      number: "05",
      title: "Working Approach",
      paragraphs: profileData.aboutSections.workingApproach,
    },
    {
      number: "06",
      title: "Career Direction",
      paragraphs: profileData.aboutSections.careerDirection,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-16">
      <SectionHeader
        eyebrow="About / Profile"
        title={profileData.fullName}
        description={`${profileData.academicIdentity} · ${profileData.location}`}
      />

      <div className="space-y-10">
        {sections.map((sec) => (
          <section
            key={sec.number}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-10 border-b border-zinc-800/70"
          >
            <div className="md:col-span-4">
              <span className="text-xs font-mono text-lime-400 block">
                {sec.number}
              </span>
              <h2 className="text-lg font-semibold text-zinc-100 mt-1">
                {sec.title}
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4">
              {sec.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-zinc-300 leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* 7. Contact CTA */}
      <div className="rounded-xl border border-zinc-800 bg-[#121216] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-zinc-100">
            Ingin mengenal proyek atau pengalaman saya lebih jauh?
          </h3>
          <p className="text-sm text-zinc-400">
            Jelajahi halaman proyek atau hubungi saya secara langsung.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/projects"
            className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-200 hover:border-lime-400"
          >
            Lihat Proyek
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-lime-400 text-zinc-950 text-xs font-mono font-semibold hover:bg-lime-300"
          >
            <span>Hubungi Saya</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}