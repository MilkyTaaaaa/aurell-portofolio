"use client";

import React, { useState } from "react";
import { PhotographyAlbum } from "@/types/portfolio";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { Lightbox, LightboxSlide } from "@/components/gallery/Lightbox";
import { EmptyState } from "@/components/ui/EmptyState";
import { Badge } from "@/components/ui/Badge";

interface PhotographyGalleryProps {
  albums: PhotographyAlbum[];
}

export function PhotographyGallery({ albums }: PhotographyGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", ...Array.from(new Set(albums.map((a) => a.category)))];

  const filteredAlbums =
    selectedCategory === "All"
      ? albums
      : albums.filter((a) => a.category === selectedCategory);

  const flatPhotos: (LightboxSlide & { albumTitle: string })[] = filteredAlbums.flatMap(
      (album) =>
        album.images.map((img) => ({
          imageKey: img.imageKey,
          alt: img.alt,
          caption: img.caption || album.title,
          // Masukkan img.camera ke sini agar ikut tampil di bawah foto saat Lightbox dibuka:
          meta: [img.camera, album.title, img.location || album.location, img.date || album.date]
            .filter(Boolean)
            .join(" · "),
          albumTitle: album.title,
        }))
    );
  

  return (
    <div className="space-y-8">
      {/* Filter Kategori Album */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors border ${
              selectedCategory === cat
                ? "bg-lime-400/15 text-lime-300 border-lime-400/40"
                : "bg-zinc-900/70 text-zinc-400 border-zinc-800 hover:text-zinc-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Daftar Struktur Album */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredAlbums.map((album) => (
          <div
            key={album.slug}
            className="rounded-xl border border-zinc-800/80 bg-[#121216] p-5 flex flex-col justify-between gap-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-lime-400">
                  {album.category}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  {album.images.length} Foto
                </span>
              </div>
              <h3 className="text-base font-semibold text-zinc-100">
                {album.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {album.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {album.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Masonry Grid Foto */}
      {flatPhotos.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {flatPhotos.map((photo, idx) => (
            <figure
              key={`${photo.imageKey}-${idx}`}
              className="break-inside-avoid group relative rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-950 cursor-pointer"
              onClick={() => setLightboxIndex(idx)}
            >
              <ResponsiveImage
                imageKey={photo.imageKey}
                alt={photo.alt}
                objectFit="contain"
                imgClassName="w-full h-auto group-hover:scale-[1.015]"
              />
              <figcaption className="p-3.5 bg-zinc-950/95 border-t border-zinc-800/80 space-y-1">
                <p className="text-xs font-medium text-zinc-200 line-clamp-1">
                  {photo.caption}
                </p>
                <p className="text-[11px] font-mono text-lime-400">
                  {photo.albumTitle}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <EmptyState
          title="Koleksi Album Siap Menerima File Foto"
          description="Struktur album fotografi di atas telah siap. Belum ada file foto yang diunggah agar tidak menggunakan gambar stock. Masukkan foto asli berukuran 10–20 MB ke dalam folder source-images/photography/ lalu jalankan perintah optimasi."
          hintCommand="npm run images:optimize"
        />
      )}

      <Lightbox
        slides={flatPhotos}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />
    </div>
  );
}