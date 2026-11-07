import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { socialLinks } from "@/data/social-links";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 bg-[#0a0a0c] mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="text-sm font-medium text-zinc-200">
            {profileData.fullName}
          </p>
          <p className="text-xs text-zinc-500">
            {profileData.academicIdentity} · {profileData.location}
          </p>
          <p className="text-xs font-mono text-zinc-600 pt-2">
            © {currentYear} {profileData.fullName}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/education"
            className="text-xs font-mono text-zinc-400 hover:text-lime-400 transition-colors"
          >
            Education & Credentials
          </Link>
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
              className="inline-flex items-center gap-1 text-xs font-mono text-zinc-300 hover:text-lime-400 transition-colors"
            >
              <span>{item.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}