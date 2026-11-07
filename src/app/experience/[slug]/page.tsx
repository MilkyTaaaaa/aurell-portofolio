import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { experiencesData } from "@/data/experiences";
import { Badge } from "@/components/ui/Badge";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return experiencesData.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const exp = experiencesData.find((e) => e.slug === slug);
  if (!exp) return { title: "Pengalaman Tidak Ditemukan" };

  return {
    title: `${exp.position} — ${exp.programName || exp.organization}`,
    description: exp.description,
  };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const exp = experiencesData.find((e) => e.slug === slug);

  if (!exp) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10">
      <Link
        href="/experience"
        className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-lime-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Halaman Pengalaman</span>
      </Link>

      <header className="space-y-4 border-b border-zinc-800 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={exp.isCurrent ? "accent" : "default"}>
            {exp.isCurrent ? "Active · " : ""}
            {exp.period}
          </Badge>
          <Badge variant="outline">
            {exp.category === "organizational"
              ? "Organizational Experience"
              : "Program & Committee Experience"}
          </Badge>
        </div>

        <h1 className="text-2xl sm:text-4xl font-semibold text-zinc-100">
          {exp.position}
        </h1>

        <p className="text-base font-medium text-lime-400">
          {exp.programName
            ? `${exp.programName} · ${exp.organization}`
            : exp.organization}
        </p>

        {exp.additionalPositions && exp.additionalPositions.length > 0 && (
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-400">
              Cakupan Peran Terpadu:
            </span>
            {exp.additionalPositions.map((pos) => (
              <Badge key={pos} variant="default">
                {pos}
              </Badge>
            ))}
          </div>
        )}
      </header>

      <section className="space-y-3">
        <h2 className="text-sm font-mono uppercase tracking-wider text-lime-400">
          Deskripsi Peran
        </h2>
        <p className="text-zinc-300 leading-relaxed">{exp.description}</p>
      </section>

      <section className="rounded-xl border border-zinc-800 bg-[#121216] p-6 sm:p-8 space-y-4">
        <h2 className="text-sm font-mono uppercase tracking-wider text-lime-400">
          Rincian Tanggung Jawab
        </h2>
        <ul className="space-y-2.5">
          {exp.responsibilities.map((res) => (
            <li
              key={res}
              className="flex items-start gap-3 text-sm text-zinc-200 bg-zinc-950/60 border border-zinc-800/70 rounded-lg p-3.5"
            >
              <span className="text-lime-400 font-mono">→</span>
              <span>{res}</span>
            </li>
          ))}
        </ul>
      </section>

      {exp.images.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-lime-400">
            Dokumentasi Kegiatan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {exp.images.map((img) => (
              <figure
                key={img.imageKey}
                className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950"
              >
                <ResponsiveImage imageKey={img.imageKey} alt={img.alt} />
                {img.caption && (
                  <figcaption className="p-3 text-xs text-zinc-400">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}