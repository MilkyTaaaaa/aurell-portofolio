import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { experiencesData } from "@/data/experiences";
import { photographyAlbums } from "@/data/photography";
import { socialMediaWorks } from "@/data/social-media";
import { personalSkillGroups, projectContextTechnologies } from "@/data/skills";
import {
  educationList,
  certificationsList,
  languageTestsList,
} from "@/data/education";
import { socialLinks } from "@/data/social-links";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Badge } from "@/components/ui/Badge";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Code2,
  Download,
  GraduationCap,
  Layers,
  Terminal,
} from "lucide-react";

export default function HomePage() {
  const featuredProjects = projectsData
    .filter((p) => p.featured)
    .slice(0, 3);
  const displayedProjects =
    featuredProjects.length > 0 ? featuredProjects : projectsData.slice(0, 3);

  const featuredExperiences = experiencesData
    .filter((e) => e.featured)
    .slice(0, 4);

  const previewPhotos = photographyAlbums
    .flatMap((album) =>
      album.images.map((img) => ({ ...img, albumTitle: album.title }))
    )
    .slice(0, 6);

  const previewSocialWorks = socialMediaWorks.slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-24 py-12 sm:py-20">
      {/* A. HERO SECTION (Staggered Fade-Up saat halaman dibuka) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-8 animate-fade-up bento-card-hover rounded-2xl border border-zinc-800/90 bg-[#121216] p-7 sm:p-10 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-300 text-xs font-mono">
              {/* Titik hijau berdenyut */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
              </span>
              <Terminal className="w-3.5 h-3.5" />
              <span>{profileData.professionalIdentity}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-100 leading-[1.15]">
              {profileData.fullName}
            </h1>

            <p className="text-sm font-mono text-zinc-400">
              {profileData.academicIdentity}
            </p>

            <p className="text-lg sm:text-xl text-zinc-200 font-medium leading-relaxed pt-2">
              {profileData.heroHeadline}
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              {profileData.shortIntroduction}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-lime-400 text-zinc-950 font-medium text-sm hover:bg-lime-300 transition-all"
            >
              <span>Lihat Proyek</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-700/80 text-sm font-medium transition-colors"
            >
              <span>Hubungi Saya</span>
            </Link>

            {profileData.cvUrl && (
              <a
                href={profileData.cvUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-transparent hover:bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-lime-400/40 text-sm font-mono transition-colors"
              >
                <Download className="w-4 h-4 text-lime-400" />
                <span>Unduh CV</span>
              </a>
            )}
          </div>
        </div>

        {/* Profile Monogram / Photo Bento Card */}
        <div className="lg:col-span-4 animate-fade-up delay-100 bento-card-hover rounded-2xl border border-zinc-800/90 bg-[#121216] p-7 flex flex-col justify-between">
          {profileData.profileImageKey ? (
            <div className="group aspect-[4/5] w-full rounded-xl overflow-hidden border border-zinc-800 mb-6">
              <ResponsiveImage
                imageKey={profileData.profileImageKey}
                alt={profileData.fullName}
                priority
                imgClassName="group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
            </div>
          ) : (
            <div className="flex-1 min-h-[220px] rounded-xl border border-zinc-800/80 bg-zinc-950/80 flex flex-col items-center justify-center p-6 text-center mb-6">
              <span className="text-4xl sm:text-5xl font-mono font-semibold tracking-tighter text-lime-400">
                {profileData.monogram}
              </span>
              <span className="text-xs font-mono text-zinc-500 mt-3 uppercase tracking-widest">
                {profileData.location}
              </span>
            </div>
          )}

          <div className="space-y-3 border-t border-zinc-800/80 pt-5 text-xs font-mono">
            <div className="flex justify-between text-zinc-400">
              <span>Fokus Utama</span>
              <span className="text-zinc-200 text-right">Backend & System Dev</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Institusi</span>
              <span className="text-zinc-200 text-right">UGM (2025–Sekarang)</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Domisili</span>
              <span className="text-zinc-200 text-right">{profileData.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* B. ABOUT PREVIEW */}
      <ScrollReveal>
        <section className="bento-card-hover rounded-2xl border border-zinc-800/90 bg-[#121216] p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-2">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-lime-400">
              01 / Who Am I
            </p>
            <h2 className="text-2xl font-semibold text-zinc-100">
              Latar Belakang & Pendekatan Kerja
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {profileData.aboutSections.personalIntroduction[0]}{" "}
              {profileData.aboutSections.workingApproach[0]}
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-1.5 text-sm font-mono text-lime-400 hover:text-lime-300"
            >
              <span>Baca profil selengkapnya</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* C. FEATURED PROJECTS */}
      <ScrollReveal>
        <section className="space-y-8">
          <SectionHeader
            eyebrow="02 / Software Engineering"
            title="Proyek Perangkat Lunak Pilihan"
            description="Dokumentasi pengembangan sistem backend, perancangan REST API, skema database, dan kolaborasi pengembangan aplikasi."
            actionHref="/projects"
            actionLabel={`Lihat Semua Proyek (${projectsData.length})`}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedProjects.map((project, idx) => (
              <ScrollReveal key={project.slug} delayMs={idx * 90}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* D. EXPERIENCE PREVIEW */}
      <ScrollReveal>
        <section className="space-y-8">
          <SectionHeader
            eyebrow="03 / Organizations & Committees"
            title="Pengalaman Organisasi & Kepanitiaan"
            description="Peran operasional, teknis, manajemen logistik, serta pengelolaan media dan komunikasi di lingkungan Universitas Gadjah Mada dan organisasi."
            actionHref="/experience"
            actionLabel={`Lihat Semua Pengalaman (${experiencesData.length})`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredExperiences.map((exp, idx) => (
              <ScrollReveal key={exp.slug} delayMs={idx * 80}>
                <ExperienceCard experience={exp} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* E. CREATIVE WORKS PREVIEW */}
      <ScrollReveal>
        <section className="space-y-8">
          <SectionHeader
            eyebrow="04 / Visual & Media"
            title="Karya Kreatif & Dokumentasi Visual"
            description="Terbagi ke dalam dua fokus utama: Fotografi kegiatan lapangan/alam dan pengelolaan konten publikasi media sosial."
            actionHref="/creative-works"
            actionLabel="Buka Galeri Creative Works"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Photography Preview Card */}
            <div className="bento-card-hover rounded-xl border border-zinc-800/90 bg-[#121216] p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-lime-400">
                    <Camera className="w-4 h-4" />
                    <span>Kategori 01 · Photography</span>
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {photographyAlbums.length} Album Koleksi
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-100">
                  Fotografi Alam, Gunung Hutan & Dokumentasi Kegiatan
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Menampilkan dokumentasi kegiatan operasional lapangan, aktivitas panjat tebing, serta lanskap alam dengan mempertahankan rasio asli foto.
                </p>

                {previewPhotos.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {previewPhotos.slice(0, 4).map((p, idx) => (
                      <div
                        key={idx}
                        className="aspect-[3/2] w-full rounded-lg overflow-hidden border border-zinc-800/80 bg-zinc-950 group"
                      >
                        <ResponsiveImage
                          imageKey={p.imageKey}
                          alt={p.alt}
                          objectFit="cover"
                          imgClassName="group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-lg bg-zinc-950/70 border border-zinc-800/80 p-4 text-xs text-zinc-400 space-y-1">
                    <p className="font-mono text-zinc-300">
                      Album Terdaftar ({photographyAlbums.map((a) => a.title).join(", ")})
                    </p>
                    <p className="text-zinc-500">
                      Siap menampilkan foto teroptimasi AVIF/WebP begitu file dimasukkan ke{" "}
                      <code>source-images/photography/</code>.
                    </p>
                  </div>
                )}
              </div>

              <Link
                href="/creative-works/photography"
                className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-lime-400 hover:text-lime-300"
              >
                <span>Jelajahi Galeri Fotografi</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Social Media Preview Card */}
            <div className="bento-card-hover rounded-xl border border-zinc-800/90 bg-[#121216] p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-lime-400">
                    <Layers className="w-4 h-4" />
                    <span>Kategori 02 · Social Media Content</span>
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {previewSocialWorks.length} Rangkaian Karya
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-100">
                  Publikasi Media Sosial & Dokumentasi Visual Organisasi
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Pengelolaan feed, carousel informasi kegiatan GLADIMULA XLIII, serta dokumentasi lapangan gunung hutan bersama tim media MAPAGAMA.
                </p>

                <div className="space-y-2 pt-2">
                  {previewSocialWorks.map((work) => (
                    <div
                      key={work.slug}
                      className="rounded-lg bg-zinc-950/70 border border-zinc-800/80 p-3 flex items-center justify-between gap-2"
                    >
                      <div>
                        <p className="text-xs font-medium text-zinc-200">
                          {work.title}
                        </p>
                        <p className="text-[11px] font-mono text-zinc-500">
                          {work.campaignOrEvent} · {work.period}
                        </p>
                      </div>
                      <Badge variant="default">{work.contentType}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/creative-works/social-media"
                className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-lime-400 hover:text-lime-300"
              >
                <span>Lihat Karya Media Sosial</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* F. SKILLS PREVIEW */}
      <ScrollReveal>
        <section className="space-y-8">
          <SectionHeader
            eyebrow="05 / Technical Capabilities"
            title="Kemampuan Teknis & Ekosistem Perangkat"
            description="Dikelompokkan berdasarkan pengalaman langsung pada pengembangan proyek dan dipisahkan secara transparan dari stack tim."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personalSkillGroups.map((group) => (
              <div
                key={group.category}
                className="bento-card-hover rounded-xl border border-zinc-800/90 bg-[#121216] p-6 space-y-4"
              >
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-zinc-100 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-lime-400" />
                    <span>{group.category}</span>
                  </h3>
                  <p className="text-xs text-zinc-400">{group.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="accent">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-zinc-800/70 bg-zinc-950/60 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Teknologi dalam Konteks Proyek Kolaboratif
              </p>
              <p className="text-xs text-zinc-500">
                Teknologi berikut digunakan dalam lingkungan proyek bersama tim atau eksplorasi integrasi fitur:
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {projectContextTechnologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* G. EDUCATION & CERTIFICATIONS PREVIEW */}
      <ScrollReveal>
        <section className="space-y-8">
          <SectionHeader
            eyebrow="06 / Academic & Credentials"
            title="Pendidikan, Sertifikasi & Uji Bahasa"
            actionHref="/education"
            actionLabel="Halaman Pendidikan"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationList.map((edu) => (
              <div
                key={edu.degree}
                className="bento-card-hover rounded-xl border border-zinc-800/90 bg-[#121216] p-6 space-y-2"
              >
                <span className="text-xs font-mono text-lime-400 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Pendidikan Tinggi ({edu.period})</span>
                </span>
                <h3 className="text-base font-semibold text-zinc-100">
                  {edu.degree}
                </h3>
                <p className="text-sm text-zinc-300">{edu.institution}</p>
              </div>
            ))}

            {certificationsList.map((cert) => (
              <div
                key={cert.title}
                className="bento-card-hover rounded-xl border border-zinc-800/90 bg-[#121216] p-6 space-y-2"
              >
                <span className="text-xs font-mono text-lime-400">
                  Sertifikasi Kompetensi
                </span>
                <h3 className="text-base font-semibold text-zinc-100">
                  {cert.title}
                </h3>
                <p className="text-sm text-zinc-400">{cert.issuer}</p>
                {cert.year && (
                  <p className="text-xs text-zinc-500">Tahun: {cert.year}</p>
                )}
              </div>
            ))}

            {languageTestsList.map((test) => (
              <div
                key={test.testName}
                className="bento-card-hover rounded-xl border border-zinc-800/90 bg-[#121216] p-6 space-y-2"
              >
                <span className="text-xs font-mono text-lime-400">
                  English Proficiency Test
                </span>
                <h3 className="text-base font-semibold text-zinc-100">
                  {test.testName} — Skor {test.score}
                </h3>
                <p className="text-sm text-zinc-400">{test.organizer}</p>
                {test.year && (
                  <p className="text-xs text-zinc-500">Tahun: {test.year}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* H. CONTACT CTA */}
      <ScrollReveal>
        <section className="bento-card-hover rounded-2xl border border-zinc-800 bg-gradient-to-br from-[#121216] to-[#0d0d11] p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-lime-400">
              07 / Collaboration
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-100">
              Terbuka untuk Diskusi Proyek & Kolaborasi Teknis
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Ingin berdiskusi mengenai pengembangan sistem backend, kolaborasi proyek perangkat lunak, atau kegiatan komunitas? Silakan terhubung melalui kanal yang tersedia.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-lime-400 text-zinc-950 font-medium text-sm hover:bg-lime-300 transition-colors"
            >
              <span>Halaman Kontak</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.url.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 hover:border-lime-400 text-sm font-mono transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}