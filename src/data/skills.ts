
import { SkillGroup } from "@/types/portfolio";

export const personalSkillGroups: SkillGroup[] = [
  {
    category: "Backend Development",
    description:
      "Pengembangan aplikasi sisi server, implementasi RESTful API, dan integrasi layanan backend.",
    skills: [
      "Laravel",
      "Golang",
      "Flask",
      "FastAPI",
      "RESTful API",
    ],
  },
  {
    category: "Database Management & Design",
    description:
      "Perancangan basis data relasional, pemodelan data, dan pengelolaan basis data.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Database Design",
      "Entity-Relationship Diagram (ERD)",
      "Data Flow Diagram (DFD)",
    ],
  },
  {
    category: "Development & Database Tools",
    description:
      "Penggunaan perangkat pengembangan, kendali versi, dan administrasi basis data.",
    skills: [
      "Git",
      "GitHub",
      "DBeaver",
      "pgAdmin 4",
      "Postman"
    ],
  },
  {
    category: "System Design & Project Management",
    description:
      "Perancangan sistem, perencanaan pekerjaan, dan koordinasi pengembangan proyek perangkat lunak.",
    skills: [
      "System Design",
      "Project Management",
      "Sprint Planning",
    ],
  },
  {
    category: "Other Technical Experience",
    description:
      "Pengalaman eksplorasi perangkat keras dan pemrograman mikrokontroler.",
    skills: ["Arduino"],
  },
];

/**
 * Teknologi yang digunakan dalam proyek kolaboratif atau implementasi
 * dengan ruang lingkup tertentu. Daftar ini tidak merepresentasikan
 * seluruhnya sebagai keahlian utama individu.
 */
export const projectContextTechnologies: string[] = [
  "TypeScript",
  "Next.js App Router",
  "Supabase",
  "Firebase Admin SDK",
  "Firebase Cloud Messaging",
  "Google Gemini API",
  "React",
];
