import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { socialMediaWorks } from "@/data/social-media";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SocialMediaGallery } from "@/components/gallery/SocialMediaGallery";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media Content — Creative Works",
  description:
    "Portofolio produksi dan pengelolaan konten media sosial kegiatan organisasi oleh Aurell Satrianitto Prianggono.",
};

export default function SocialMediaPage() {
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
        eyebrow="Creative Works / Social Media"
        title="Konten Publikasi & Media Sosial"
        description="Menampilkan rangkaian feed, carousel informasi kepanitiaan, dan dokumentasi visual dengan mempertahankan proporsi utuh setiap desain."
      />

      <SocialMediaGallery works={socialMediaWorks} />
    </div>
  );
}