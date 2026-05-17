export interface Project {
    id: number;
    title: string;
    titleEn?: string;
    description: string;
    descriptionEn?: string;
    techStack: string[];
    image: string;
    githubUrl: string;
    liveUrl: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Website File Manajemen",
        titleEn: "File Management Website",
        description:
            "Website untuk manajemen file yang aman dan transparan. Dilengkapi fitur autentikasi, serta dashboard admin untuk mengelola file.",
        descriptionEn:
            "A website for secure and transparent file management. Features authentication and an admin dashboard for managing files.",
        techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        image: "/project/manajemen-surat.jpeg",
        githubUrl: "https://github.com/Fensacel/e-arsip",
        liveUrl: "#",
    },
    {
        id: 2,
        title: "Website Degrave Studio",
        titleEn: "Degrave Studio Website",
        description:
            "Website untuk Degrave Studio yang bergerak di bidang jasa desain grafis dan percetakan. Website ini digunakan untuk menampilkan portofolio, jasa yang ditawarkan, dan informasi kontak.",
        descriptionEn:
            "A website for Degrave Studio, a graphic design and printing service. Used to showcase their portfolio, services offered, and contact information.",
        techStack: ["React", "Node.js", "Tailwind CSS", "MySQL"],
        image: "/project/degrave.png",
        githubUrl: "https://github.com/Fensacel/project",
        liveUrl: "https://degravestudio.com/",
    },
    {
        id: 3,
        title: "Website E-commerce Sederhana",
        titleEn: "Simple E-commerce Website",
        description:
            "Platform e-commerce dengan fitur katalog produk, keranjang belanja, checkout, dan panel admin. Mengimplementasikan UI/UX modern dengan performa optimal.",
        descriptionEn:
            "An e-commerce platform featuring product catalog, shopping cart, checkout, and an admin panel. Implements modern UI/UX with optimal performance.",
        techStack: ["Laravel", "Tailwind CSS", "Mysql"],
        image: "/project/ecommerce.png",
        githubUrl: "https://github.com/Fensacel/testing-payment",
        liveUrl: "#",
    },
];
