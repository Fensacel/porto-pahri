"use client";

import Image from "next/image";
import { skills } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import SkillBar from "./SkillBar";
import ScrollReveal from "./ScrollReveal";

/* ── Core Tech Stack (icon grid) ──────────────────────── */

interface CoreTech {
    name: string;
    logo: string;
    color: string;
}

const coreTechStack: CoreTech[] = [
    { name: "Next.js", logo: "/logos/nextjs.svg", color: "#000000" },
    { name: "Laravel", logo: "/logos/laravel.svg", color: "#ff2d20" },
    { name: "React", logo: "/logos/react.svg", color: "#61dafb" },
    { name: "TypeScript", logo: "/logos/typescript.svg", color: "#3178c6" },
    { name: "MySQL", logo: "/logos/mysql.svg", color: "#4479a1" },
    { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg", color: "#06b6d4" },
];

/* ── Tech Ecosystem (pill badges) ─────────────────────── */

interface TechItem {
    name: string;
    logo: string;
    color: string;
    featured?: boolean;
}

const techItems: TechItem[] = [
    { name: "Next.js", logo: "/logos/nextjs.svg", color: "#000000", featured: true },
    { name: "Laravel", logo: "/logos/laravel.svg", color: "#ff2d20", featured: true },
    { name: "React", logo: "/logos/react.svg", color: "#61dafb", featured: true },
    { name: "TypeScript", logo: "/logos/typescript.svg", color: "#3178c6" },
    { name: "JavaScript", logo: "/logos/javascript.svg", color: "#f7df1e" },
    { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg", color: "#06b6d4" },
    { name: "PHP", logo: "/logos/php.svg", color: "#777bb4" },
    { name: "MySQL", logo: "/logos/mysql.svg", color: "#4479a1" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg", color: "#4169e1" },
    { name: "Node.js", logo: "/logos/nodejs.svg", color: "#339933" },
    { name: "Git", logo: "/logos/git.svg", color: "#f05032" },
    { name: "Docker", logo: "/logos/docker.svg", color: "#2496ed" },
    { name: "Figma", logo: "/logos/figma.svg", color: "#f24e1e" },
    { name: "Prisma", logo: "/logos/prisma.svg", color: "#2d3748" },
    { name: "Supabase", logo: "/logos/supabase.svg", color: "#3ecf8e" },
    { name: "Vercel", logo: "/logos/vercel.svg", color: "#000000" },
    { name: "Python", logo: "/logos/python.svg", color: "#3776ab" },
    { name: "Java", logo: "/logos/java.svg", color: "#e11d29" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* ── Proficiency Level + Tech Stack ───────── */}
                <div>
                    <SectionHeading
                        title="Skills"
                        subtitle="Teknologi dan tools yang saya gunakan dalam pengembangan web"
                    />

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Progress Bars */}
                        <ScrollReveal direction="left">
                            <div className="glass rounded-3xl p-6 md:p-8 space-y-6 border border-card-border">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-base font-bold text-foreground tracking-tight">
                                        Core Stack Proficiency
                                    </h3>
                                    <span className="text-xs font-mono text-muted-foreground uppercase">Benchmark</span>
                                </div>
                                {skills.map((skill, index) => (
                                    <SkillBar key={skill.name} skill={skill} index={index} />
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Tech Icons Grid */}
                        <ScrollReveal direction="right">
                            <div className="glass rounded-3xl p-6 md:p-8 border border-card-border">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-base font-bold text-foreground tracking-tight">
                                        Primary Frameworks
                                    </h3>
                                    <span className="text-xs font-mono text-muted-foreground uppercase">Production</span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {coreTechStack.map((tech, index) => (
                                        <ScrollReveal key={tech.name} delay={index * 0.05}>
                                            <div
                                                className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl glass-subtle
                                                 border border-card-border hover:border-primary/40 transition-all duration-300 cursor-default
                                                 hover:-translate-y-1"
                                            >
                                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-muted group-hover:scale-105 transition-transform">
                                                    <Image
                                                        src={tech.logo}
                                                        alt={tech.name}
                                                        width={32}
                                                        height={32}
                                                        className="drop-shadow-sm"
                                                    />
                                                </div>
                                                <span className="text-xs font-mono font-medium text-foreground">
                                                    {tech.name}
                                                </span>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* ── Tech Ecosystem (pill badges) ─────────── */}
                <div>
                    <SectionHeading
                        title="Tech Ecosystem"
                        subtitle="Tools dan teknologi yang saya gunakan untuk membangun solusi digital."
                    />

                    <ScrollReveal>
                        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
                            {techItems.map((tech) => (
                                <div
                                    key={tech.name}
                                    className={`
                                        inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                                        text-xs font-mono transition-all duration-200
                                        cursor-default select-none
                                        hover:-translate-y-0.5 hover:shadow-md
                                        ${tech.featured
                                            ? "bg-foreground text-background shadow-sm font-semibold"
                                            : "glass-subtle text-foreground border border-card-border hover:border-primary/40"
                                        }
                                    `}
                                >
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={15}
                                        height={15}
                                        className={`${tech.featured ? "invert dark:invert-0" : ""}`}
                                    />
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
}
