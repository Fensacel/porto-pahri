export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    image: string;
    githubUrl: string;
    liveUrl: string;
    featured?: boolean;
    role?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Website Arsip & Manajemen File",
        description:
            "Sistem arsip digital berbasis web untuk tata kelola dokumen yang aman, terstruktur, dan transparan. Dilengkapi manajemen hak akses multi-level (role-based), pencatatan surat masuk/keluar, audit riwayat, serta dashboard analytics.",
        techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        image: "/project/manajemen-surat.jpeg",
        githubUrl: "https://github.com/Fensacel/e-arsip",
        liveUrl: "#",
        featured: true,
        role: "Full Stack Developer",
    },
    {
        id: 2,
        title: "Website Degrave Studio",
        description:
            "Platform web resmi untuk Degrave Studio di bidang industri kreatif desain grafis dan percetakan. Menampilkan showcase portofolio interaktif, katalog layanan, form konsultasi pesanan, dan antarmuka responsif berperforma tinggi.",
        techStack: ["React", "Node.js", "Tailwind CSS"],
        image: "/project/degrave.png",
        githubUrl: "https://github.com/Fensacel/project",
        liveUrl: "https://degravestudio.com/",
        featured: true,
        role: "Frontend & UI Developer",
    },
    {
        id: 3,
        title: "Platform E-Commerce Modern",
        description:
            "Aplikasi e-commerce komprehensif dengan katalog produk interaktif, sistem keranjang belanja (cart), alur checkout efisien, simulasi integrasi payment gateway, serta panel admin untuk manajemen inventaris & pesanan.",
        techStack: ["Laravel", "Tailwind CSS", "MySQL", "REST API"],
        image: "/project/ecommerce.png",
        githubUrl: "https://github.com/Fensacel/testing-payment",
        liveUrl: "#",
        featured: true,
        role: "Backend & Full Stack Developer",
    },
];
