"use client";

import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export interface LightboxSlide {
  imageKey: string;
  alt: string;
  caption?: string;
  meta?: string;
}

interface LightboxProps {
  slides: LightboxSlide[];
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (newIndex: number) => void;
}

export function Lightbox({
  slides,
  activeIndex,
  onClose,
  onChangeIndex,
}: LightboxProps) {
  const isOpen = activeIndex !== null && activeIndex >= 0 && activeIndex < slides.length;

  const handlePrev = useCallback(() => {
    if (activeIndex === null) return;
    onChangeIndex((activeIndex - 1 + slides.length) % slides.length);
  }, [activeIndex, slides.length, onChangeIndex]);

  const handleNext = useCallback(() => {
    if (activeIndex === null) return;
    onChangeIndex((activeIndex + 1) % slides.length);
  }, [activeIndex, slides.length, onChangeIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || activeIndex === null) return null;

  const current = slides[activeIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6"
    >
      {/* Header Lightbox */}
      <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
        <span>
          {activeIndex + 1} / {slides.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox"
          className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:border-lime-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Area Carousel Smooth Slide di Lightbox */}
      <div className="relative flex-1 flex flex-col items-center justify-center my-2 overflow-hidden">
        {slides.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Image"
            className="absolute left-2 sm:left-6 z-20 p-2.5 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-100 hover:border-lime-400 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Track Geser Beranimasi */}
        <div className="max-h-[70vh] max-w-5xl w-full h-full overflow-hidden relative">
          <div
            className="flex h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div
                key={`${slide.imageKey}-${idx}`}
                className="min-w-full h-full flex items-center justify-center p-2"
              >
                <ResponsiveImage
                  imageKey={slide.imageKey}
                  alt={slide.alt}
                  sizes="100vw"
                  objectFit="contain"
                  className="w-full h-full flex items-center justify-center"
                  imgClassName="max-h-[70vh] w-auto h-auto mx-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {slides.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Image"
            className="absolute right-2 sm:right-6 z-20 p-2.5 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-100 hover:border-lime-400 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Teks Keterangan / Caption */}
        {(current.caption || current.meta) && (
          <div className="mt-3 max-w-xl mx-auto text-center space-y-0.5 z-10">
            {current.caption && (
              <p className="text-sm text-zinc-200">{current.caption}</p>
            )}
            {current.meta && (
              <p className="text-xs font-mono text-zinc-400">{current.meta}</p>
            )}
          </div>
        )}
      </div>

      <div className="h-6" />
    </div>
  );
}