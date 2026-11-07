import { ProjectItem } from "@/types/portfolio";

export const projectsData: ProjectItem[] = [
  {
    slug: "bioloop-ax",
    title: "BioLoop AX",
    category: "Backend & Web System",
    typeLabel: "Web Application Platform",
    role: "Backend Developer (BE1) & Project Manager",
    period: "Oktober 2026",
    description:
      "Pengembangan platform pengelolaan minyak jelantah berbasis web dengan integrasi backend, basis data, dan AI untuk menganalisis foto serta memperkirakan volume minyak jelantah.",
    overview:
      "BioLoop AX merupakan platform digital yang dikembangkan untuk mendukung pengelolaan minyak jelantah dari sisi usaha kuliner. Aplikasi ini mengintegrasikan layanan backend, antarmuka web, basis data, dan teknologi AI. Saya berperan sebagai Backend Developer (BE1) sekaligus Project Manager, dengan tanggung jawab pada pengembangan layanan backend, integrasi sistem, serta koordinasi pelaksanaan proyek.",
    responsibilities: [
      "Pengembangan layanan backend menggunakan Python dan FastAPI.",
      "Perancangan dan implementasi endpoint RESTful API untuk kebutuhan aplikasi.",
      "Pengembangan fitur analisis foto minyak jelantah menggunakan Gemini Vision untuk memperkirakan volume berdasarkan gambar yang diunggah.",
      "Integrasi backend dengan Supabase PostgreSQL untuk pengelolaan data aplikasi.",
      "Integrasi Supabase Storage untuk penyimpanan berkas yang diunggah pengguna.",
      "Kolaborasi teknis dengan tim frontend dalam proses integrasi backend dan frontend.",
      "Penyusunan sprint planning serta pembagian dan pemantauan tugas tim.",
      "Koordinasi antaranggota tim untuk memastikan proses pengembangan berjalan sesuai rencana.",
    ],
    technologies: {
      personalContribution: [
        "Python",
        "FastAPI",
        "RESTful API",
        "Supabase",
        "PostgreSQL",
        "Gemini Vision",
        "Database Design",
      ],
      teamOrContext: ["React", "Next.js"],
    },
    developmentProcess: [
      "Pengelolaan sprint planning dan koordinasi pekerjaan lintas tim.",
      "Pengembangan backend dan integrasi layanan pendukung aplikasi.",
      "Integrasi backend dengan frontend hingga aplikasi dapat digunakan secara terpadu.",
    ],
    status: "Completed & Deployed",
    resultOrStatus:
      "Frontend dan backend telah dikembangkan, diintegrasikan, dan dideploy secara terpisah. Fitur analisis foto menggunakan Gemini Vision menghasilkan estimasi volume minyak jelantah berdasarkan gambar yang diunggah.",
    thumbnail: "projects/bioloop-ax/thumbnail",
    gallery: [],
    featured: true,
    githubUrl: "https://github.com/MilkyTaaaaa/BioLoop-AX.git",
    liveUrl: null,
    isTeamCollaboration: true,
    collaborationNote:
      "Pengembangan dilakukan secara kolaboratif. Kontribusi saya berfokus pada backend menggunakan Python dan FastAPI serta koordinasi proyek. React dan Next.js merupakan teknologi frontend yang dikembangkan oleh anggota tim lainnya.",
  },
  {
    slug: "simonika",
    title: "SIMONIKA",
    category: "Backend & Web System",
    typeLabel: "Web Application System",
    role: "Backend & System Developer",
    period: "September - November 2026",
    description:
      "Pengembangan sistem monitoring kinerja aparatur kalurahan menggunakan Laravel dan MySQL, mencakup autentikasi, manajemen data, presensi, serta monitoring kinerja pegawai.",
    overview:
      "SIMONIKA merupakan sistem informasi berbasis web untuk mendukung pengelolaan dan monitoring kinerja aparatur kalurahan. Sistem dikembangkan secara kolaboratif dengan pembagian pekerjaan backend dan frontend. Saya bertanggung jawab pada pengembangan backend menggunakan Laravel, perancangan basis data MySQL, serta pemodelan sistem melalui ERD dan DFD.",
    responsibilities: [
      "Pengembangan backend aplikasi menggunakan Laravel 13.x dan PHP.",
      "Perancangan Entity Relationship Diagram (ERD) dan Data Flow Diagram (DFD) sebagai dasar pemodelan sistem.",
      "Perancangan dan pengelolaan struktur basis data menggunakan MySQL.",
      "Implementasi sistem autentikasi dengan dukungan login multi-peran dan pengelolaan sesi akun.",
      "Pengembangan modul manajemen pengguna, nomenklatur jabatan, serta konfigurasi struktur organisasi dan beban kinerja.",
      "Implementasi fitur presensi berbasis geotag dan selfie dengan validasi radius GPS.",
      "Pengembangan modul pencatatan rencana kerja, laporan kinerja, dan pengunggahan bukti kegiatan.",
      "Implementasi fitur monitoring antar-pamong dan dashboard rekapitulasi presensi serta capaian kinerja.",
      "Koordinasi integrasi backend dengan frontend yang dikembangkan oleh anggota tim.",
    ],
    technologies: {
      personalContribution: [
        "Laravel 13.x",
        "PHP",
        "MySQL",
        "Database Design",
        "Entity Relationship Diagram (ERD)",
        "Data Flow Diagram (DFD)",
        "Backend Development",
      ],
      teamOrContext: ["React"],
    },
    developmentProcess: [
      "Pemodelan sistem melalui penyusunan Entity Relationship Diagram (ERD) dan Data Flow Diagram (DFD).",
      "Perancangan skema basis data MySQL dan pengembangan modul autentikasi multi-peran pada Laravel.",
      "Implementasi modul presensi berbasis radius GPS, pelaporan rencana kerja, serta integrasi dengan tim frontend.",
    ],
    status: "In Development",
    resultOrStatus:
      "Modul backend utama meliputi autentikasi multi-peran, manajemen struktur organisasi, validasi presensi GPS, serta pelaporan dan monitoring kinerja aparatur telah diimplementasikan menggunakan Laravel dan MySQL.",
    thumbnail: "projects/simonika/thumbnail",
    gallery: [],
    featured: true,
    githubUrl: "https://github.com/MilkyTaaaaa/SIMONIKA.git",
    liveUrl: null,
    isTeamCollaboration: true,
    collaborationNote:
      "Pengembangan dilakukan secara kolaboratif. Kontribusi saya berfokus pada backend, perancangan basis data, ERD, dan DFD menggunakan Laravel serta MySQL. Pengembangan frontend menggunakan React dikerjakan oleh anggota tim lainnya.",
  },
  {
    slug: "panenin",
    title: "PanenIn",
    category: "Backend & AI Development",
    typeLabel: "AI-Based Mobile-First Web Application",
    role: "Backend Developer",
    period: "April–Mei 2026",
    description:
      "Pengembangan backend aplikasi pertanian berbasis AI menggunakan Next.js dan TypeScript, dengan integrasi Gemini AI, OpenWeatherMap, Supabase, serta Firebase Cloud Messaging.",
    overview:
      "PanenIn merupakan aplikasi berbasis web dengan pendekatan mobile-first yang dikembangkan untuk membantu petani memperoleh informasi dan panduan terkait aktivitas pertanian. Aplikasi ini menyediakan fitur konsultasi AI, informasi cuaca dan rekomendasi pertanian, kalkulator usaha tani, panduan tanam, serta pencatatan hasil panen. Saya bertanggung jawab pada pengembangan backend, integrasi layanan eksternal, pengelolaan data, dan implementasi API selama Sprint 1 hingga Sprint 4.",
    responsibilities: [
      "Menyiapkan fondasi backend dan struktur proyek menggunakan Next.js App Router dan TypeScript.",
      "Mengembangkan endpoint REST API untuk mendukung kebutuhan fitur aplikasi.",
      "Mengintegrasikan Google Gemini API untuk fitur konsultasi pertanian berbasis AI.",
      "Mengembangkan layanan rekomendasi pertanian berdasarkan informasi cuaca menggunakan Gemini AI.",
      "Mengintegrasikan OpenWeatherMap API untuk memperoleh data cuaca dan informasi lokasi.",
      "Mengintegrasikan Supabase untuk autentikasi, pengelolaan data, dan penyimpanan informasi aplikasi.",
      "Mengembangkan API untuk fitur kalkulator usaha tani dan pencatatan hasil panen.",
      "Mengimplementasikan Firebase Admin SDK dan Firebase Cloud Messaging untuk pengiriman push notification.",
      "Mengembangkan mekanisme pengelolaan preferensi notifikasi dan penjadwalan pengiriman notifikasi.",
      "Mengintegrasikan antarmodul backend dengan frontend serta melakukan perbaikan bug selama pengembangan.",
    ],
    technologies: {
      personalContribution: [
        "TypeScript",
        "Next.js App Router",
        "RESTful API",
        "Supabase",
        "Google Gemini API",
        "OpenWeatherMap API",
        "Firebase Admin SDK",
        "Firebase Cloud Messaging",
      ],
      teamOrContext: ["React", "Next.js"],
    },
    developmentProcess: [
      "Sprint 1: Penyiapan fondasi backend, autentikasi, onboarding, dan integrasi awal layanan cuaca.",
      "Sprint 2: Pengembangan API konsultasi AI, integrasi Gemini, layanan cuaca, dan push notification.",
      "Sprint 3: Pengembangan dukungan fitur kalkulator usaha tani dan panduan tanam.",
      "Sprint 4: Pengembangan API catatan panen, integrasi penyimpanan data, dan sinkronisasi antarmodul.",
      "Final & UAT: Integrasi sistem, perbaikan bug, pengujian pengguna, dan finalisasi MVP.",
    ],
    status: "Completed",
    resultOrStatus:
      "Seluruh tahapan Sprint 1 hingga Sprint 4 dan pengujian UAT telah diselesaikan. Aplikasi MVP telah dideploy ke Vercel dengan fitur konsultasi Gemini AI, rekomendasi cuaca OpenWeatherMap, kalkulator tani, dan push notification yang terintegrasi penuh.",
    thumbnail: "projects/panenin/thumbnail",
    gallery: [],
    featured: true,
    githubUrl: "https://github.com/ggalangswt/Panen-In",
    liveUrl: "https://panen-in-omega.vercel.app",
    isTeamCollaboration: true,
    collaborationNote:
      "Proyek dikembangkan secara kolaboratif dengan pembagian tanggung jawab backend dan frontend. Saya berfokus pada pengembangan backend API, integrasi layanan eksternal, dan pengelolaan data. Frontend dikembangkan oleh anggota tim lainnya.",
  },
  {
    slug: "gi-presensi",
    title: "GI-Presensi",
    category: "Backend Development & API",
    typeLabel: "Attendance REST API",
    role: "Backend Developer / API Designer",
    period: "September–November 2024",
    description:
      "Pengembangan backend REST API untuk sistem presensi sekolah menggunakan Golang, Fiber, dan PostgreSQL dengan penerapan struktur Clean Architecture.",
    overview:
      "GI-Presensi merupakan proyek pengembangan sistem presensi sekolah yang dikerjakan dalam rangka Praktik Kerja Lapangan (PKL) saat SMK. Proyek ini awalnya dikembangkan secara tim, tetapi hasil akhir yang saya kerjakan berfokus pada sisi backend berupa RESTful API menggunakan Golang dan Fiber. Pengembangan mencakup pengelolaan routing, middleware, controller, integrasi basis data, serta penerapan struktur Clean Architecture.",
    responsibilities: [
      "Pengembangan backend RESTful API menggunakan Golang dan Fiber.",
      "Perancangan dan pengelolaan routing untuk kebutuhan endpoint API.",
      "Implementasi middleware untuk mendukung alur pemrosesan request.",
      "Pengembangan controller untuk menangani logika pemrosesan API.",
      "Integrasi backend dengan basis data PostgreSQL.",
      "Penerapan struktur Clean Architecture untuk menjaga pemisahan tanggung jawab antarbagian sistem.",
    ],
    technologies: {
      personalContribution: [
        "Golang",
        "Fiber",
        "PostgreSQL",
        "RESTful API",
        "Clean Architecture",
      ],
      teamOrContext: [],
    },
    developmentProcess: [
      "Perancangan spesifikasi endpoint RESTful API dan skema basis data PostgreSQL untuk kebutuhan presensi sekolah.",
      "Penyusunan arsitektur proyek menggunakan Golang dan Fiber dengan pendekatan Clean Architecture.",
      "Implementasi routing, middleware, dan controller serta pengujian fungsionalitas endpoint API.",
    ],
    status: "Completed",
    resultOrStatus:
      "Layanan backend RESTful API presensi sekolah berhasil diimplementasikan menggunakan Golang, Fiber, dan PostgreSQL dengan pemisahan layer Clean Architecture yang terstruktur.",
    thumbnail: "projects/gi-presensi/thumbnail",
    gallery: [],
    featured: false,
    githubUrl: "https://github.com/MilkyTaaaaa/GI-presensi.git",
    liveUrl: null,
    isTeamCollaboration: true,
    collaborationNote:
      "Proyek bermula dari pengerjaan tim selama Praktik Kerja Lapangan (PKL). Hasil akhir yang saya kerjakan berfokus pada pengembangan backend REST API, tanpa mencakup pengembangan frontend.",
  },
  {
    slug: "marbotfx",
    title: "MarbotFX",
    category: "System Design & Project Management",
    typeLabel: "Course Platform Prototype",
    role: "Project Manager & Database Designer",
    period: "Januari–Maret 2025",
    description:
      "Perancangan prototype platform kursus saham dengan sistem pengelolaan kursus dan subscription pelanggan melalui halaman admin dan subscriber.",
    overview:
      "MarbotFX merupakan proyek perancangan platform kursus saham berbasis web yang dirancang untuk menyediakan layanan pembelajaran dengan sistem subscription. Platform ini memiliki dua sisi utama, yaitu halaman admin untuk mengelola kursus dan pelanggan, serta halaman subscriber untuk mengakses layanan pembelajaran. Saya berperan sebagai Project Manager dan Database Designer dengan tanggung jawab pada koordinasi proyek, perencanaan workflow, serta perancangan struktur basis data. Proyek ini diselesaikan hingga tahap prototype dan tidak berlanjut ke tahap implementasi aplikasi.",
    responsibilities: [
      "Mengelola koordinasi tim dan alur pengerjaan proyek.",
      "Menyusun sprint planning dan memantau pelaksanaan tugas.",
      "Merancang Entity Relationship Diagram (ERD) sebagai dasar struktur basis data.",
      "Merancang struktur data untuk pengelolaan kursus, pelanggan, dan subscription.",
      "Menyelaraskan kebutuhan sistem antara sisi admin dan subscriber.",
      "Mengawasi proses perancangan prototype agar sesuai dengan kebutuhan platform.",
    ],
    technologies: {
      personalContribution: [
        "Database Design",
        "Entity Relationship Diagram (ERD)",
        "Sprint Planning",
        "Project Management",
      ],
      teamOrContext: [],
    },
    developmentProcess: [
      "Perencanaan workflow proyek, pembagian tugas tim, dan penyusunan jadwal sprint.",
      "Analisis kebutuhan fungsional antara sisi halaman admin dan halaman subscriber.",
      "Perancangan Entity Relationship Diagram (ERD) dan struktur data untuk manajemen kursus serta subscription.",
    ],
    status: "Prototype Only",
    resultOrStatus:
      "Rancangan struktur basis data (ERD), alur kerja sistem, dan prototype antarmuka untuk sisi admin serta subscriber telah diselesaikan sesuai ruang lingkup tahap perancangan.",
    repositoryNote:
      "Diselesaikan hingga tahap perancangan prototype dan basis data (tanpa repositori kode publik).",
    thumbnail: "projects/marbotfx/thumbnail",
    gallery: [],
    featured: false,
    githubUrl: null,
    liveUrl: null,
    isTeamCollaboration: true,
    collaborationNote:
      "Proyek dikerjakan secara kolaboratif dengan pembagian tanggung jawab dalam tim. Kontribusi saya berfokus pada manajemen proyek dan perancangan basis data. Pengembangan aplikasi tidak dilanjutkan setelah tahap prototype.",
  },
];