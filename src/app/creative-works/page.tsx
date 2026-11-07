import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { photographyAlbums } from "@/data/photography";
import { socialMediaWorks } from "@/data/social-media";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight, Camera, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Creative Works",
  description:
    "Karya fotografi dan pengelolaan konten media sosial oleh Aurell Satrianitto Prianggono.",
};

export default function CreativeWorksPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12">
      <SectionHeader
        eyebrow="Creative Works"
        title="Fotografi & Konten Media Sosial"
        description="Dokumentasi visual dibagi secara spesifik ke dalam dua kategori utama: Fotografi kegiatan lapangan/alam dan produksi serta pengelolaan konten publikasi media sosial."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kategori A: Photography */}
        <div className="rounded-2xl border border-zinc-800 bg-[#121216] p-8 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lime-400">
              <Camera className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-lime-400 block">
              Fokus 01 · Photography
            </span>
            <h2 className="text-2xl font-semibold text-zinc-100">
              Galeri Fotografi Pribadi & Lapangan
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Kumpulan album fotografi yang mencakup aktivitas gunung hutan, kegiatan panjat tebing, lanskap alam terbuka, serta dokumentasi kegiatan organisasi. Disajikan dengan layout adaptive masonry yang menjaga rasio asli setiap foto.
            </p>
            <div className="pt-2 space-y-2">
              <p className="text-xs font-mono text-zinc-500">
                Koleksi Album Tersedia ({photographyAlbums.length}):
              </p>
              <ul className="space-y-1.5 text-xs text-zinc-300 font-mono">
                {photographyAlbums.map((album) => (
                  <li key={album.slug}>• {album.title}</li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/creative-works/photography"
            className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-sm font-mono text-zinc-100 transition-colors"
          >
            <span>Buka Halaman Photography</span>
            <ArrowUpRight className="w-4 h-4 text-lime-400" />
          </Link>
        </div>

        {/* Kategori B: Social Media Content */}
        <div className="rounded-2xl border border-zinc-800 bg-[#121216] p-8 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lime-400">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-lime-400 block">
              Fokus 02 · Social Media Content
            </span>
            <h2 className="text-2xl font-semibold text-zinc-100">
              Publikasi Feed & Dokumentasi Media Sosial
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Arsip karya publikasi feed, carousel informasi kegiatan (seperti GLADIMULA XLIII), dan dokumentasi lapangan gunung hutan. Menampilkan kontribusi secara jujur antara karya kolaborasi tim dan kontribusi langsung tanpa memotong elemen tipografi desain.
            </p>
            <div className="pt-2 space-y-2">
              <p className="text-xs font-mono text-zinc-500">
                Rangkaian Konten Terdaftar ({socialMediaWorks.length}):
              </p>
              <ul className="space-y-1.5 text-xs text-zinc-300 font-mono">
                {socialMediaWorks.map((work) => (
                  <li key={work.slug}>• {work.title}</li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/creative-works/social-media"
            className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-sm font-mono text-zinc-100 transition-colors"
          >
            <span>Buka Halaman Social Media Content</span>
            <ArrowUpRight className="w-4 h-4 text-lime-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}