"use client";

import { Code2, Server, Lightbulb } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const highlights = [
    {
        icon: Code2,
        title: "Frontend Dev",
        desc: "Membangun antarmuka web yang responsif dan interaktif dengan teknologi modern.",
    },
    {
        icon: Server,
        title: "Backend Dev",
        desc: "Mengembangkan server-side logic dan RESTful API yang scalable.",
    },
    {
        icon: Lightbulb,
        title: "Problem Solving",
        desc: "Menganalisis masalah kompleks dan merancang solusi yang efisien.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="About Me"
                    subtitle="Mengenal lebih dekat tentang perjalanan saya dalam dunia programming"
                />

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Story */}
                    <ScrollReveal direction="left">
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-xl font-semibold mb-4 text-foreground">
                                Cerita Saya 📖
                            </h3>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Saya adalah siswa jurusan <strong className="text-foreground">Rekayasa Perangkat Lunak (RPL)</strong> di
                                    SMK Negeri 1 Slawi yang memiliki passion mendalam terhadap dunia
                                    programming dan pengembangan web.
                                </p>
                                <p>
                                    Perjalanan saya dimulai dari rasa penasaran terhadap bagaimana sebuah
                                    website bekerja, hingga kini saya telah membangun beberapa proyek
                                    nyata menggunakan berbagai teknologi web modern.
                                </p>
                                <p>
                                    Saat ini, saya sedang menjalani <strong className="text-foreground">Praktik Kerja Lapangan (PKL)</strong> sebagai
                                    developer di <strong className="text-primary">CV Vodeco Digital Mediatama</strong>, di mana saya mendapatkan pengalaman
                                    berharga dalam pengembangan aplikasi di lingkungan industri nyata.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Highlights */}
                    <div className="space-y-4">
                        {highlights.map((item, index) => (
                            <ScrollReveal key={item.title} direction="right" delay={index * 0.15}>
                                <div
                                    className="glass rounded-2xl p-6 flex items-start gap-4 group
                             hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
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
