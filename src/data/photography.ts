import { PhotographyAlbum } from "@/types/portfolio";

/**
 * Daftar koleksi album fotografi.
 * Array `images` dikosongkan secara jujur hingga foto asli dimasukkan ke `source-images/photography/`
 * dan dioptimasi menggunakan `npm run images:optimize`.
 */
export const photographyAlbums: PhotographyAlbum[] = [
  {
    slug: "mountain-activities",
    title: "Mountain & Vertical Activities",
    category: "Mountain Activities",
    description:
      "Dokumentasi kegiatan lapangan, operasional gunung hutan, dan aktivitas pemanjatan tebing.",
    coverImageKey: "photography/scenery",
    images: [
        {
            imageKey: "photography/greenery",
            alt: "Pemandangan alam hijau",
            caption: "Pemandangan alam hijau nan kabut di perbukitan Purworejo.",
            date: "2026-10-23",
            location: "Purworejo, Indonesia",
            camera: "Sony Alpha 7R III · 85mm f/1.8"
        },
        {
            imageKey: "photography/spider-web",
            alt: "spider web",
            caption: "Jaring laba-laba di gubuk.",
            date: "2026-10-24",
            location: "Purworejo, Indonesia",
            camera: "Sony Alpha 7R III · 85mm f/1.8"
        },
        {
            imageKey: "photography/scenery",
            alt: "Pemandangan alam",
            caption: "Pemandangan Waduk Sermo dari Purworejo.",
            date: "2026-10-25",
            location: "Kulon Progo, Indonesia",
            camera: "Sony Alpha 7R III · 85mm f/1.8"
        }
    ],
    featured: true,
    tags: ["Mountaineering", "Rock Climbing", "Field Operations"],
  },
  {
    slug: "outdoor-and-nature",
    title: "Outdoor & Natural Landscapes",
    category: "Outdoor & Nature",
    description:
      "Eksplorasi visual lanskap alam terbuka, suasana hutan, dan kondisi lingkungan selama perjalanan lapangan.",
    coverImageKey: null,
    images: [
        {
            imageKey: "experiences/impk",
            alt: "Kegiatan IMPK",
            caption: "Kegiatan Ilmu Medan, Peta, dan Kompas.",
            date: "2026-10-25",
            location: "Gunung Sigepak, Purworejo",
            camera: "Sony Alpha 7R III · 85mm f/1.8"
        }
    ],
    featured: true,
    tags: ["Nature", "Landscape", "Outdoor"],
  },
  {
    slug: "organizational-documentation",
    title: "Organizational & Event Documentation",
    category: "Organizational Activities",
    description:
      "Rekaman visual kegiatan organisasi, latihan rutin, dan program kerja kolektif di lingkungan kampus.",
    coverImageKey: "experiences/long-march",
    images: [
        {
            imageKey: "experiences/rescue-korban",
            alt: "Kegiatan Rescue",
            caption: "Kegiatan rescue korban di perbukitan Menoreh.",
            date: "2026-10-25",
            location: "Gunung Sigepak",
            camera: "Sony Alpha 7R III · 85mm f/1.8"
        },
        {
            imageKey: "experiences/rescue",
            alt: "Kegiatan Rescue",
            caption: "Penyelamatan korban di mulut goa.",
            date: "2026-10-25",
            location: "Watu Pecah, Purworejo",
            camera: "Sony Alpha 7R III · 85mm f/1.8"
        },
        {
            imageKey: "experiences/long-march",
            alt: "Kegiatan Long March",
            caption: "Kegiatan long march di perbukitan Menoreh.",
            date: "2026-10-25",
            location: "Gunung Sigepak",
            camera: "Sony Alpha 7R III · 85mm f/1.8"
        }
    ],
    featured: true,
    tags: ["MAPAGAMA", "Event", "Documentation"],
  },
];