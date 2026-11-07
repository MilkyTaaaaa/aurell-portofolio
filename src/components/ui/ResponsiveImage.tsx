import React from "react";
import manifestData from "@/generated/image-manifest.json";
import { ManifestEntry } from "@/types/portfolio";
import { ImageOff } from "lucide-react";

const manifest = manifestData as Record<string, ManifestEntry>;

interface ResponsiveImageProps {
  imageKey?: string | null;
  alt: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
}

export function ResponsiveImage({
  imageKey,
  alt,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className = "",
  imgClassName = "",
  priority = false,
  objectFit = "cover",
}: ResponsiveImageProps) {
  if (!imageKey) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-zinc-900/70 border border-zinc-800/80 text-zinc-500 p-6 text-center ${className}`}
      >
        <ImageOff className="w-6 h-6 mb-2 text-zinc-600" />
        <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
          Visual Asset Pending
        </span>
      </div>
    );
  }

  const entry = manifest[imageKey];

  if (!entry) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        `[ResponsiveImage] Image key "${imageKey}" tidak ditemukan di src/generated/image-manifest.json. Pastikan gambar sudah ada di source-images/ dan jalankan "npm run images:optimize".`
      );
    }

    return (
      <div
        className={`flex flex-col items-center justify-center bg-zinc-900/70 border border-dashed border-zinc-800 text-zinc-400 p-6 text-center ${className}`}
      >
        <span className="text-xs font-mono text-amber-400/90 mb-1">
          Unoptimized / Missing Key
        </span>
        <code className="text-[11px] text-zinc-500 break-all">{imageKey}</code>
      </div>
    );
  }

  const avifSrcSet = entry.avif.map((v) => `${v.path} ${v.width}w`).join(", ");
  const webpSrcSet = entry.webp.map((v) => `${v.path} ${v.width}w`).join(", ");

  return (
    <picture className={`block overflow-hidden ${className}`}>
      {avifSrcSet && (
        <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      )}
      {webpSrcSet && (
        <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      )}
      <img
        src={entry.fallbackSrc}
        alt={alt}
        width={entry.outputWidth}
        height={entry.outputHeight}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={`w-full h-full transition-transform duration-500 ${
          objectFit === "contain" ? "object-contain" : "object-cover"
        } ${imgClassName}`}
      />
    </picture>
  );
}