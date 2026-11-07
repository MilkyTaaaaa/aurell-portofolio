import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-28 text-center space-y-6">
      <p className="text-xs font-mono uppercase tracking-widest text-lime-400">
        Error 404
      </p>
      <h1 className="text-3xl font-semibold text-zinc-100">
        Halaman Tidak Ditemukan
      </h1>
      <p className="text-sm text-zinc-400 max-w-md mx-auto">
        Rute yang Anda tuju tidak tersedia. Silakan kembali ke halaman utama portofolio.
      </p>
      <Link
        href="/"
        className="inline-block px-5 py-2.5 rounded-lg bg-lime-400 text-zinc-950 text-sm font-medium hover:bg-lime-300"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}