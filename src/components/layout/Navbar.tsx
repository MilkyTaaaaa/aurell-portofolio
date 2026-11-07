"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { profileData } from "@/data/profile";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Creative Works", href: "/creative-works" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

    // Tambahkan state di dalam komponen Navbar():
  const [scrollProgress, setScrollProgress] = useState(0);

  React.useEffect(() => {
    const updateScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0a0a0c]/85 border-b border-zinc-800/80">
      {/* Progress Bar */}
      <div
        className="h-1 bg-lime-400 transition-all duration-180 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <span className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-xs font-mono font-semibold text-lime-400 group-hover:border-lime-400/60 transition-colors">
            {profileData.monogram}
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-100 tracking-tight">
              Aurell Satrianitto
            </span>
            <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
              Software & Backend Engineering
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-2 rounded-md text-sm transition-colors ${
                  active
                    ? "text-lime-400 bg-zinc-900/90 font-medium"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/40"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 border border-transparent hover:border-zinc-800"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-b border-zinc-800 bg-[#0e0e12] px-4 pt-2 pb-4 space-y-1"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm ${
                  active
                    ? "text-lime-400 bg-zinc-900 font-medium"
                    : "text-zinc-300 hover:bg-zinc-900/60"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}