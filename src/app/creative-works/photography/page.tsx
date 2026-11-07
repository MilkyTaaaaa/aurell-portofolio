import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { photographyAlbums } from "@/data/photography";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PhotographyGallery } from "@/components/gallery/PhotographyGallery";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Photography — Creative Works",
  description:
    "Galeri fotografi kegiatan lapangan, alam bebas, dan dokumentasi organisasi Aurell Satrianitto Prianggono.",
};

export default function PhotographyPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10">
      <Link
        href="/creative-works"
        className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-lime-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Creative Works</span>
      </Link>

      <SectionHeader
        eyebrow="Creative Works / Photography"
        title="Koleksi Album & Galeri Fotografi"
        description="Mendukung orientasi portrait, landscape, dan square tanpa pemotongan paksa, dilengkapi optimasi AVIF/WebP serta fitur Lightbox."
      />

      <PhotographyGallery albums={photographyAlbums} />
    </div>
  );
}