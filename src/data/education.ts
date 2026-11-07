import {
  EducationItem,
  CertificationItem,
  LanguageTestItem,
} from "@/types/portfolio";

export const educationList: EducationItem[] = [
  {
    degree: "D-IV Teknologi Rekayasa Perangkat Lunak",
    institution: "Universitas Gadjah Mada",
    period: "2025–Present",
    description:
      "Fokus studi pada rekayasa perangkat lunak terapan, pengembangan sistem informasi, perancangan basis data, dan manajemen proyek perangkat lunak.",
  },
];

export const certificationsList: CertificationItem[] = [
  {
    title: "Data Center Technical Support Junior",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2025",
  },
];

export const languageTestsList: LanguageTestItem[] = [
  {
    testName: "ETS TOEIC",
    organizer: "Educational Testing Service (ETS)",
    score: "825 / 990",
    year: "2023",
  },
];