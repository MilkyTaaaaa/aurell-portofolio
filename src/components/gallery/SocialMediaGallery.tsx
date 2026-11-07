"use client";

import React, { useState } from "react";
import { SocialMediaWork } from "@/types/portfolio";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { Badge } from "@/components/ui/Badge";
import { Lightbox, LightboxSlide } from "@/components/gallery/Lightbox";
import { ChevronLeft, ChevronRight, Maximize2, ArrowUpRight } from "lucide-react";

interface SocialMediaGalleryProps {
  works: SocialMediaWork[];
}

export function SocialMediaGallery({ works }: SocialMediaGalleryProps) {
  const [carouselIndices, setCarouselIndices] = useState<Record<string, number>>({});
  const [lightboxSlides, setLightboxSlides] = useState<LightboxSlide[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const getIndex = (slug: string) => carouselIndices[slug] || 0;

  const stepCarousel = (slug: string, total: number, delta: number) => {
    setCarouselIndices((prev) => {
      const current = prev[slug] || 0;
      return {
        ...prev,
        [slug]: (current + delta + total) % total,
      };
    });
  };

  const openWorkLightbox = (work: SocialMediaWork, startIndex: number) => {
    const slides: LightboxSlide[] = work.images.map((img) => ({
      imageKey: img.imageKey,
      alt: img.alt,
      caption: img.caption || work.title,
      meta: `${work.campaignOrEvent} (${work.period})`,
    }));
    setLightboxSlides(slides);
    setLightboxIndex(startIndex);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {works.map((work) => {
        const totalImages = work.images.length;
        const currentIdx = getIndex(work.slug);

        return (
          <article
            key={work.slug}
            className="rounded-xl border border-zinc-800/90 bg-[#121216] overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Visual Preview Area dengan Smooth Carousel Track */}
              <div className="relative bg-zinc-950/90 border-b border-zinc-800/80 h-[400px] sm:h-[440px] flex items-center justify-center overflow-hidden">
                {totalImages > 0 ? (
                  <>
                    {/* Track Geser Mulus */}
                    <div
                      className="flex h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{ transform: `translateX(-${currentIdx * 100}%)` }}
                    >
                      {work.images.map((img, imgIdx) => (
                        <div
                          key={`${img.imageKey}-${imgIdx}`}
                          onClick={() => openWorkLightbox(work, currentIdx)}
                          className="min-w-full h-full flex items-center justify-center cursor-pointer p-3 select-none"
                        >
                          <ResponsiveImage
                            imageKey={img.imageKey}
                            alt={img.alt}
                            objectFit="contain"
                            imgClassName="max-h-[390px] w-auto h-auto mx-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Tombol Perbesar Lightbox */}
                    <button
                      type="button"
                      onClick={() => openWorkLightbox(work, currentIdx)}
                      aria-label="Perbesar Desain"
                      className="absolute top-3 right-3 p-2 rounded-md bg-zinc-900/90 border border-zinc-700 text-zinc-200 hover:border-lime-400 z-10 transition-colors"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>

                    {/* Navigasi Carousel Kiri & Kanan */}
                    {totalImages > 1 && (
                      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between pointer-events-none z-10">
                        <button
                          type="button"
                          onClick={() => stepCarousel(work.slug, totalImages, -1)}
                          aria-label="Slide Sebelumnya"
                          className="pointer-events-auto p-2 rounded-lg bg-zinc-900/95 border border-zinc-700 text-zinc-200 hover:border-lime-400 shadow-lg transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="px-3 py-1 rounded-md bg-zinc-900/95 border border-zinc-800 text-xs font-mono text-zinc-200 shadow-lg">
                          Slide {currentIdx + 1} / {totalImages}
                        </span>
                        <button
                          type="button"
                          onClick={() => stepCarousel(work.slug, totalImages, 1)}
                          aria-label="Slide Berikutnya"
                          className="pointer-events-auto p-2 rounded-lg bg-zinc-900/95 border border-zinc-700 text-zinc-200 hover:border-lime-400 shadow-lg transition-colors"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center p-6 space-y-2 max-w-sm">
                    <span className="inline-block text-xs font-mono uppercase tracking-wider text-lime-400/90">
                      {work.contentType}
                    </span>
                    <p className="text-xs text-zinc-500">
                      Preview visual akan tampil setelah file desain dimasukkan.
                    </p>
                  </div>
                )}
              </div>

              {/* Informasi Konten & Transparansi Peran */}
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge variant="accent">{work.contentType}</Badge>
                  <Badge variant="default">{work.ownershipType}</Badge>
                </div>

                <div>
                  <p className="text-xs font-mono text-zinc-400">
                    {work.campaignOrEvent} · {work.period}
                  </p>
                  <h3 className="text-lg font-semibold text-zinc-100 mt-1">
                    {work.title}
                  </h3>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {work.description}
                </p>

                <div className="rounded-lg bg-zinc-950/70 border border-zinc-800/80 p-3.5 space-y-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                    Peran & Kontribusi
                  </p>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {work.roleAndContribution}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Kartu (Opsional Link Instagram Post) */}
            <div className="px-6 py-4 border-t border-zinc-800/70 bg-zinc-950/40 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">
                {work.images.length} Slide Carousel
              </span>

              {work.postUrl ? (
                <a
                  href={work.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-lime-400 transition-colors"
                >
                  <span>Lihat Postingan IG</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs font-mono text-zinc-600">Arsip Internal</span>
              )}
            </div>
          </article>
        );
      })}

      <Lightbox
        slides={lightboxSlides}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />
    </div>
  );
}