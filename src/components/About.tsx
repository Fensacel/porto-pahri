"use client";

import { Code2, Server, Lightbulb, Award, ChartNoAxesCombined } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/context/LanguageContext";

const stats = [
    { label: "Sertifikasi BNSP", value: "Web Dev" },
    { label: "Pendidikan", value: "Science Data" },
    { label: "Tech Stack", value: "Web & Data" },
    { label: "Pengalaman Kerja", value: "CV Vodeco" },
];

export default function About() {
    const { lang, t } = useLang();

    const highlights = [
        {
            icon: Code2,
            title: "Frontend Dev",
            desc: t(
                "Membangun antarmuka web yang responsif dan interaktif dengan teknologi modern.",
                "Building responsive and interactive web interfaces with modern technologies."
            ),
        },
        {
            icon: Server,
            title: "Backend Dev",
            desc: t(
                "Mengembangkan server-side logic dan RESTful API yang scalable.",
                "Developing scalable server-side logic and RESTful APIs."
            ),
        },
        {
            icon: Lightbulb,
            title: "Problem Solving",
            desc: t(
                "Menganalisis masalah kompleks dan merancang solusi yang efisien.",
                "Analyzing complex problems and designing efficient solutions."
            ),
        },
        {
            icon: ChartNoAxesCombined,
            title: "Data Visualization",
            desc: t(
                "Mengubah data menjadi insight melalui dashboard, grafik, dan visualisasi menggunakan Python.",
                "Turning data into insights through dashboards, charts, and visualizations using Python."
            ),
        },
    ];

    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="About Me"
                    subtitle={t(
                        "Mengenal lebih dekat tentang perjalanan saya dalam dunia programming",
                        "Getting to know more about my journey in the world of programming"
                    )}
                />

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Story */}
                    <ScrollReveal direction="left">
                        <div className="glass rounded-2xl p-8 space-y-6">
                            <h3 className="text-xl font-semibold text-foreground">
                                Cerita Saya 📖
                            </h3>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Saya adalah <strong className="text-foreground">Full Stack Developer</strong> dan mahasiswa jurusan <strong className="text-foreground">Science Data</strong> di Cakrawala University dengan dedikasi tinggi dalam menciptakan aplikasi web yang fungsional, estetik, dan berbasis data.
                                </p>
                                <p>
                                    Saya pernah berkontribusi sebagai developer di <strong className="text-primary font-semibold">CV Vodeco Digital Mediatama</strong> dari Desember 2025 hingga Maret 2026, mengembangkan dan memelihara aplikasi internal serta merancang struktur database dan antarmuka pengguna.
                                </p>
                                <p>
                                    Kompetensi teknis saya telah divalidasi oleh Badan Nasional Sertifikasi Profesi (<strong className="text-foreground">BNSP</strong>) sebagai <strong className="text-foreground">Junior Web Developer</strong>. Saat ini saya menempuh pendidikan Science Data di Cakrawala University.
                                </p>
                            </div>

                            {/* Stat Chips */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-card-border/60">
                                {stats.map((s) => (
                                    <div key={s.label} className="p-3.5 rounded-2xl glass-subtle border border-card-border">
                                        <p className="text-[11px] font-mono text-muted-foreground uppercase">{s.label}</p>
                                        <p className="text-base font-bold text-foreground mt-1">{s.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Highlights */}
                    <div className="space-y-4">
                        {highlights.map((item, index) => (
                            <ScrollReveal key={item.title} direction="right" delay={index * 0.12}>
                                <div
                                    className="glass rounded-2xl p-6 flex items-start gap-4 group
                             border border-card-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 rounded-2xl glass-subtle flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-primary/10 transition-all duration-300">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-1 text-base">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
