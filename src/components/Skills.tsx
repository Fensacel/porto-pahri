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
    { name: "HTML", logo: "/logos/html.svg", color: "#e34f26" },
    { name: "CSS", logo: "/logos/css.svg", color: "#1572b6" },
    { name: "JavaScript", logo: "/logos/javascript.svg", color: "#f7df1e" },
    { name: "PHP", logo: "/logos/php.svg", color: "#777bb4" },
    { name: "React", logo: "/logos/react.svg", color: "#61dafb" },
    { name: "MySQL", logo: "/logos/mysql.svg", color: "#4479a1" },
];

/* ── Tech Ecosystem (pill badges) ─────────────────────── */

interface TechItem {
    name: string;
    logo: string;
    color: string;
    featured?: boolean;
}

const techItems: TechItem[] = [
    { name: "JavaScript", logo: "/logos/javascript.svg", color: "#f7df1e" },
    { name: "TypeScript", logo: "/logos/typescript.svg", color: "#3178c6" },
    { name: "React", logo: "/logos/react.svg", color: "#61dafb" },
    { name: "Next.js", logo: "/logos/nextjs.svg", color: "#000000", featured: true },
    { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg", color: "#06b6d4" },
    { name: "Node.js", logo: "/logos/nodejs.svg", color: "#339933" },
    { name: "Python", logo: "/logos/python.svg", color: "#3776ab" },
    { name: "Java", logo: "/logos/java.svg", color: "#e11d29" },
    { name: "PHP", logo: "/logos/php.svg", color: "#777bb4" },
    { name: "Laravel", logo: "/logos/laravel.svg", color: "#ff2d20" },
    { name: "Docker", logo: "/logos/docker.svg", color: "#2496ed" },
    { name: "Git", logo: "/logos/git.svg", color: "#f05032" },
    { name: "Figma", logo: "/logos/figma.svg", color: "#f24e1e" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg", color: "#4169e1" },
    { name: "MongoDB", logo: "/logos/mongodb.svg", color: "#47a248" },
    { name: "Prisma", logo: "/logos/prisma.svg", color: "#2d3748" },
    { name: "Supabase", logo: "/logos/supabase.svg", color: "#3ecf8e" },
    { name: "Vercel", logo: "/logos/vercel.svg", color: "#000000" },
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
                            <div className="glass rounded-2xl p-8 space-y-6">
                                <h3 className="text-lg font-semibold text-foreground mb-6">
                                    Proficiency Level
                                </h3>
                                {skills.map((skill, index) => (
                                    <SkillBar key={skill.name} skill={skill} index={index} />
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Tech Icons Grid */}
                        <ScrollReveal direction="right">
                            <div className="glass rounded-2xl p-8">
                                <h3 className="text-lg font-semibold text-foreground mb-6">
                                    Tech Stack
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {coreTechStack.map((tech, index) => (
                                        <ScrollReveal key={tech.name} delay={index * 0.08}>
                                            <div
                                                className="group flex flex-col items-center gap-3 p-4 rounded-xl
                                                 hover:bg-muted transition-all duration-300 cursor-default
                                                 hover:-translate-y-2"
                                            >
                                                <div className="group-hover:scale-110 transition-transform duration-300">
                                                    <Image
                                                        src={tech.logo}
                                                        alt={tech.name}
                                                        width={48}
                                                        height={48}
                                                        className="drop-shadow-lg"
                                                    />
                                                </div>
                                                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                                    {tech.name}
                                                </span>
                                                <div
                                                    className="w-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    style={{ background: tech.color }}
                                                />
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
                        <div className="flex flex-wrap justify-center gap-3">
                            {techItems.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className={`
                                        inline-flex items-center gap-2 px-4 py-2 rounded-full
                                        text-sm font-medium transition-all duration-300
                                        cursor-default select-none
                                        hover:-translate-y-0.5 hover:shadow-md
                                        ${tech.featured
                                            ? "bg-foreground text-background shadow-sm"
                                            : "bg-muted/60 text-foreground border border-border/50 hover:border-border"
                                        }
                                    `}
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                    }}
                                >
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={18}
                                        height={18}
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
