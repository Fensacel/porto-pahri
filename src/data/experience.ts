export interface ExperienceItem {
    id: string;
    role: string;
    institution: string;
    location: string;
    period: string;
    type: "work" | "education" | "organization";
    description: string[];
    skills: string[];
}

export interface CertificateItem {
    id: string;
    title: string;
    issuer: string;
    period: string;
    scoreOrId?: string;
    description: string;
    badge: string;
}

export const experiences: ExperienceItem[] = [
    {
        id: "cakrawala",
        role: "Mahasiswa Science Data",
        institution: "Cakrawala University",
        location: "Jakarta, Indonesia",
        period: "09/2026 - Sekarang",
        type: "education",
        description: [
            "Mempelajari analisis data, statistik, pemrograman, dan machine learning.",
            "Mengembangkan kemampuan pengolahan data serta pengambilan keputusan berbasis data.",
        ],
        skills: ["Data Analysis", "Statistics", "Python", "Machine Learning", "SQL"],
    },
    {
        id: "vodeco",
        role: "Developer",
        institution: "CV Vodeco Digital Mediatama",
        location: "Indonesia",
        period: "12/2025 - 03/2026",
        type: "work",
        description: [
            "Mengembangkan dan memelihara website internal untuk meningkatkan efisiensi operasional tim.",
            "Melakukan debugging dan optimasi kode demi performa sistem yang stabil, cepat, dan responsif.",
            "Berkolaborasi merancang struktur database relasional dan antarmuka pengguna (UI) yang intuitif.",
        ],
        skills: ["Next.js", "Laravel", "MySQL", "REST API", "Tailwind CSS", "Git"],
    },
    {
        id: "smkn1slawi",
        role: "Siswa Rekayasa Perangkat Lunak (RPL)",
        institution: "SMK Negeri 1 Slawi",
        location: "Kab. Tegal, Jawa Tengah",
        period: "07/2023 - 06/2026",
        type: "education",
        description: [
            "Mendalami kurikulum kejuruan rekayasa perangkat lunak, pemrograman web modern, dan arsitektur database.",
            "Membangun berbagai proyek riil berbasis web stack modern dengan standar clean code.",
        ],
        skills: ["Full Stack Web", "Object-Oriented Programming", "Database Design", "Software Architecture"],
    },
    {
        id: "osis",
        role: "Pengurus OSIS",
        institution: "SMK Negeri 1 Slawi",
        location: "Kab. Tegal, Jawa Tengah",
        period: "09/2023 - 08/2025",
        type: "organization",
        description: [
            "Aktif memimpin dan mengeksekusi berbagai program kerja sekolah berskala besar.",
            "Mengasah kemampuan kepemimpinan, komunikasi publik, negosiasi, dan koordinasi tim lintas divisi.",
        ],
        skills: ["Leadership", "Communication", "Event Planning", "Team Collaboration"],
    },
];

export const certificates: CertificateItem[] = [
    {
        id: "bnsp",
        title: "Junior Web Developer",
        issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
        period: "11/2025 - 11/2028",
        badge: "Standar Nasional BNSP",
        description:
            "Dinyatakan kompeten sebagai Junior Web Developer standar nasional dalam pemrograman server-side dan pengelolaan basis data sesuai standar industri.",
    },
    {
        id: "toeic",
        title: "TOEIC",
        issuer: "ETS (Educational Testing Service)",
        period: "Sertifikat Bahasa Inggris",
        badge: "International English Certification",
        description:
            "Sertifikasi kemampuan bahasa Inggris untuk lingkungan profesional dan komunikasi bisnis internasional.",
    },
];
