import React from "react";
import type { Metadata } from "next";
import { profileData } from "@/data/profile";
import { socialLinks } from "@/data/social-links";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Hubungi ${profileData.fullName} untuk kolaborasi proyek perangkat lunak atau komunikasi profesional.`,
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12">
      <SectionHeader
        eyebrow="Contact & Channels"
        title="Mari Terhubung"
        description="Terbuka untuk diskusi seputar pengembangan perangkat lunak, arsitektur backend, kolaborasi proyek akademik/komunitas, maupun kesempatan profesional."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-5 rounded-xl border border-zinc-800 bg-[#121216] p-6 space-y-4">
          <p className="text-xs font-mono uppercase tracking-wider text-lime-400">
            Identitas & Lokasi
          </p>
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-zinc-100">
              {profileData.fullName}
            </h2>
            <p className="text-xs text-zinc-400">
              {profileData.academicIdentity}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 pt-2">
            <MapPin className="w-4 h-4 text-lime-400" />
            <span>{profileData.location}</span>
          </div>
        </div>

        <div className="md:col-span-7 space-y-3">
          {socialLinks.map((item) => (
            <a
              key={item.platform}
              href={item.url}
              target={item.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                item.url.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group rounded-xl border border-zinc-800 bg-[#121216] hover:border-lime-400/60 p-5 flex items-center justify-between transition-colors"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono text-zinc-400 block">
                  {item.label}
                </span>
                <span className="text-base font-medium text-zinc-100 group-hover:text-lime-300 transition-colors">
                  {item.usernameOrAddress}
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-lime-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}