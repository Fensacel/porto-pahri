export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    image: string;
    githubUrl: string;
    liveUrl: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Website File Manajemen",
        description:
            "Website untuk manajemen file yang aman dan transparan. Dilengkapi fitur autentikasi, serta dashboard admin untuk mengelola file.",
        techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        image: "/project/manajemen-surat.jpeg",
        githubUrl: "https://github.com/Fensacel/e-arsip",
        liveUrl: "#",
    },
    {
        id: 2,
        title: "Website Degrave Studio",
        description:
            "Website untuk Degrave Studio yang bergerak di bidang jasa desain grafis dan percetakan. Website ini digunakan untuk menampilkan portofolio, jasa yang ditawarkan, dan informasi kontak.",
        techStack: ["React", "Node.js", "Tailwind CSS", "MySQL"],
        image: "/project/degrave.png",
        githubUrl: "https://github.com/Fensacel/project",
        liveUrl: "#",
    },
    {
        id: 3,
        title: "Website E-commerce Sederhana",
        description:
            "Platform e-commerce dengan fitur katalog produk, keranjang belanja, checkout, dan panel admin. Mengimplementasikan UI/UX modern dengan performa optimal.",
        techStack: ["Laravel", "Tailwind CSS", "Mysql"],
        image: "/project/ecommerce.png",
        githubUrl: "https://github.com/Fensacel/testing-payment",
        liveUrl: "#",
    },
];
