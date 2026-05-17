"use client";

import { Code2, Server, Lightbulb } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { useLang } from "@/context/LanguageContext";

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
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-xl font-semibold mb-4 text-foreground">
                                {t("Cerita Saya 📖", "My Story 📖")}
                            </h3>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                {lang === "id" ? (
                                    <>
                                        <p>
                                            Saya adalah lulusan jurusan{" "}
                                            <strong className="text-foreground">
                                                Rekayasa Perangkat Lunak (RPL)
                                            </strong>{" "}
                                            dari SMK Negeri 1 Slawi yang memiliki passion mendalam
                                            terhadap dunia programming, pengembangan web, dan teknologi.
                                        </p>
                                        <p>
                                            Saya memiliki pengalaman membangun beberapa proyek berbasis
                                            web dan terus meningkatkan kemampuan melalui proyek pribadi
                                            maupun akademis. Saya sangat termotivasi, adaptif, dan
                                            semangat belajar hal baru, terutama di bidang software dan
                                            web development.
                                        </p>
                                        <p>
                                            Saya juga telah menyelesaikan{" "}
                                            <strong className="text-foreground">
                                                Praktik Kerja Lapangan (PKL)
                                            </strong>{" "}
                                            sebagai developer di{" "}
                                            <strong className="text-primary">
                                                CV Vodeco Digital Mediatama
                                            </strong>
                                            , di mana saya mendapatkan pengalaman berharga dalam
                                            pengembangan aplikasi di lingkungan kerja nyata. Saat ini
                                            saya sedang mencari peluang untuk terus berkembang dan
                                            berkontribusi secara profesional.
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <p>
                                            I am a graduate of{" "}
                                            <strong className="text-foreground">
                                                Software Engineering (RPL)
                                            </strong>{" "}
                                            from SMK Negeri 1 Slawi with a strong passion for
                                            programming, web development, and technology.
                                        </p>
                                        <p>
                                            I have experience developing several web-based projects and
                                            continuously improving my skills through both personal and
                                            academic projects. I am highly motivated, adaptable, and
                                            eager to learn new things, especially in software and web
                                            development.
                                        </p>
                                        <p>
                                            I also completed an internship as a developer at{" "}
                                            <strong className="text-primary">
                                                CV Vodeco Digital Mediatama
                                            </strong>
                                            , where I gained valuable experience working on real-world
                                            development projects in a professional environment. Currently,
                                            I am looking for opportunities to further develop my skills
                                            and contribute positively in a professional and remote work
                                            environment.
                                        </p>
                                    </>
                                )}
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
