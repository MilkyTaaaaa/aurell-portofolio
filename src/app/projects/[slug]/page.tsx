import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { ArrowLeft, ArrowUpRight, GitBranch, Info } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Proyek Tidak Ditemukan" };

  return {
    title: `${project.title} — Project Detail`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-lime-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Daftar Proyek</span>
      </Link>

      {/* 1. Project Header */}
      <header className="space-y-4 border-b border-zinc-800 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">{project.category}</Badge>
          {project.typeLabel && <Badge variant="default">{project.typeLabel}</Badge>}
          <span className="text-xs font-mono text-zinc-400">{project.period}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-100">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-100 hover:border-lime-400 transition-colors"
            >
              <GitBranch className="w-4 h-4 text-lime-400" />
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : project.repositoryNote ? (
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-400">
              <Info className="w-4 h-4 text-zinc-500 shrink-0" />
              <span>{project.repositoryNote}</span>
            </span>
          ) : null}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-lime-400 text-zinc-950 text-xs font-mono font-semibold hover:bg-lime-300 transition-colors"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </header>

      {/* 2. Project Overview */}
      {project.overview && (
        <section className="space-y-3">
          <h2 className="text-sm font-mono uppercase tracking-wider text-lime-400">
            Ringkasan Proyek
          </h2>
          <p className="text-zinc-300 leading-relaxed">{project.overview}</p>
        </section>
      )}

      {/* 3 & 4. Background / Problem & Solution (Hanya tampil jika tersedia) */}
      {project.background && (
        <section className="space-y-3">
          <h2 className="text-sm font-mono uppercase tracking-wider text-lime-400">
            Latar Belakang
          </h2>
          <p className="text-zinc-300 leading-relaxed">{project.background}</p>
        </section>
      )}

      {project.solution && (
        <section className="space-y-3">
          <h2 className="text-sm font-mono uppercase tracking-wider text-lime-400">
            Solusi
          </h2>
          <p className="text-zinc-300 leading-relaxed">{project.solution}</p>
        </section>
      )}

      {/* 5 & 6. My Role & Responsibilities */}
      <section className="rounded-xl border border-zinc-800/90 bg-[#121216] p-6 sm:p-8 space-y-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-lime-400">
            Peran Saya
          </p>
          <h2 className="text-xl font-semibold text-zinc-100 mt-1">
            {project.role}
          </h2>
        </div>

        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Tanggung Jawab & Sorotan Teknis
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {project.responsibilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-zinc-300 bg-zinc-950/60 border border-zinc-800/70 rounded-lg p-3"
              >
                <span className="text-lime-400 font-mono">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.collaborationNote && (
          <div className="rounded-lg bg-zinc-950/90 border border-zinc-800 p-4 text-xs text-zinc-400 leading-relaxed">
            <strong className="text-zinc-200 font-mono block mb-1">
              Catatan Kolaborasi Tim:
            </strong>
            {project.collaborationNote}
          </div>
        )}
      </section>

      {/* 7. Technology Stack */}
      <section className="space-y-4">
        <h2 className="text-sm font-mono uppercase tracking-wider text-lime-400">
          Technology Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-zinc-800 bg-[#121216] p-5 space-y-3">
            <p className="text-xs font-mono text-zinc-400">
              Fokus & Kontribusi Langsung
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.personalContribution.map((tech) => (
                <Badge key={tech} variant="accent">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.technologies.teamOrContext &&
            project.technologies.teamOrContext.length > 0 && (
              <div className="rounded-xl border border-zinc-800 bg-[#121216] p-5 space-y-3">
                <p className="text-xs font-mono text-zinc-400">
                  Stack Konteks Tim / Proyek
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.teamOrContext.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
        </div>
      </section>

      {/* 8. Development Process */}
      {project.developmentProcess && project.developmentProcess.length > 0 && (
        <section className="rounded-xl border border-zinc-800/90 bg-[#121216] p-6 sm:p-8 space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-lime-400">
            Proses & Tahapan Pengembangan
          </h2>
          <ol className="space-y-3">
            {project.developmentProcess.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-3.5 text-sm text-zinc-300 bg-zinc-950/60 border border-zinc-800/70 rounded-lg p-3.5"
              >
                <span className="text-xs font-mono text-lime-400 bg-lime-400/10 border border-lime-400/30 px-2 py-0.5 rounded shrink-0">
                  0{index + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* 10. Result / Current Status */}
      {(project.status || project.resultOrStatus) && (
        <section className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-lime-400">
              Hasil & Status Proyek
            </h2>
            {project.status && (
              <Badge variant="accent">{project.status}</Badge>
            )}
          </div>
          {project.resultOrStatus && (
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.resultOrStatus}
            </p>
          )}
        </section>
      )}

      {/* 11. Project Gallery (Hanya tampil jika ada gambar) */}
      {project.gallery.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-lime-400">
            Dokumentasi Visual Proyek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.gallery.map((img) => (
              <figure
                key={img.imageKey}
                className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950"
              >
                <ResponsiveImage
                  imageKey={img.imageKey}
                  alt={img.alt}
                  objectFit="contain"
                />
                {img.caption && (
                  <figcaption className="p-3 text-xs text-zinc-400 border-t border-zinc-800">
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