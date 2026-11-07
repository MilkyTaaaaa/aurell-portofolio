export interface ImageVariant {
  width: number;
  height: number;
  path: string;
  sizeBytes: number;
}

export interface ManifestEntry {
  key: string;
  originalFilename: string;
  category: string;
  originalWidth: number;
  originalHeight: number;
  outputWidth: number;
  outputHeight: number;
  aspectRatio: number;
  originalSizeBytes: number;
  avif: ImageVariant[];
  webp: ImageVariant[];
  fallbackSrc: string;
}

export interface ProfileData {
  fullName: string;
  monogram: string;
  professionalIdentity: string;
  academicIdentity: string;
  institution: string;
  location: string;
  enrollmentYear: number;
  focus: string;
  heroHeadline: string;
  heroSubheadline: string;
  shortIntroduction: string;
  profileImageKey?: string | null;
  cvUrl?: string | null;
  aboutSections: {
    personalIntroduction: string[];
    educationalBackground: string[];
    technicalInterests: string[];
    professionalInterests: string[];
    workingApproach: string[];
    careerDirection: string[];
  };
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: "System Design & Project Management" |"Backend & Web System" | "AI & Mobile App" | "API & Automation" | "Backend Development & API" |"Backend & AI Development" |"Other";
  typeLabel?: string;
  role: string;
  period: string;
  description: string;
  overview?: string;
  background?: string;
  solution?: string;
  responsibilities: string[];
  technologies: {
    personalContribution: string[];
    teamOrContext?: string[];
  };
  developmentProcess?: string[];
  challengesAndSolutions?: {
    challenge: string;
    solution: string;
  }[];
  status?: string;
  resultOrStatus?: string;
  thumbnail?: string | null;
  gallery: {
    imageKey: string;
    alt: string;
    caption?: string;
  }[];
  featured: boolean;
  githubUrl?: string | null;
  repositoryNote?: string;
  liveUrl?: string | null;
  isTeamCollaboration?: boolean;
  collaborationNote?: string;
}

export interface ExperienceItem {
  slug: string;
  organization: string;
  programName?: string;
  position: string;
  additionalPositions?: string[];
  category: "organizational" | "committee";
  period: string;
  startDate?: string;
  endDate?: string;
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  contributions?: string[];
  featured: boolean;
  images: {
    imageKey: string;
    alt: string;
    caption?: string;
  }[];
  externalLinks?: {
    label: string;
    url: string;
  }[];
}

export interface PhotoItem {
  imageKey: string;
  alt: string;
  caption?: string;
  date?: string;
  location?: string;
  camera?: string;
}

export interface PhotographyAlbum {
  slug: string;
  title: string;
  category:
    | "Outdoor & Nature"
    | "Mountain Activities"
    | "Event Documentation"
    | "Organizational Activities"
    | "Travel";
  description: string;
  date?: string;
  location?: string;
  coverImageKey?: string | null;
  images: PhotoItem[];
  featured: boolean;
  tags: string[];
}

export interface SocialMediaWork {
  slug: string;
  title: string;
  campaignOrEvent: string;
  description: string;
  period: string;
  coverImageKey?: string | null;
  images: {
    imageKey: string;
    alt: string;
    caption?: string;
  }[];
  contentType: "Single Feed" | "Carousel Feed" | "Story & Publication" | "Visual Documentation";
  caption?: string;
  roleAndContribution: string;
  ownershipType: "Individual Work" | "Team Collaboration";
  featured: boolean;
  postUrl?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
  credentialNote?: string;
}

export interface LanguageTestItem {
  testName: string;
  organizer: string;
  score: string;
  year?: string;
}

export interface SocialLinkItem {
  platform: "GitHub" | "LinkedIn" | "Instagram" | "Email";
  label: string;
  url: string;
  usernameOrAddress: string;
}