import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profileData } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aurell-portfolio.vercel.app"),
  title: {
    default: `${profileData.fullName} — Software Developer Portfolio`,
    template: `%s | ${profileData.fullName}`,
  },
  description: profileData.heroSubheadline,
  openGraph: {
    title: `${profileData.fullName} — Software Developer Portfolio`,
    description: profileData.heroSubheadline,
    url: "https://aurell-portfolio.vercel.app",
    siteName: profileData.fullName,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.fullName} — Software Developer`,
    description: profileData.heroSubheadline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="relative min-h-screen flex flex-col bg-[#0a0a0c] text-zinc-100 antialiased selection:bg-lime-400/20 selection:text-lime-300">
      {/* Efek Dot Matrix Halus di Bagian Atas */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-tech-grid" aria-hidden="true" />
      
      <Navbar />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
    </body>
    </html>
  );
}