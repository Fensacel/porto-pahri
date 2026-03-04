"use client";

import Image from "next/image";
import { skills } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import SkillBar from "./SkillBar";
import ScrollReveal from "./ScrollReveal";

/* ── Tech Stack with logo images ──────────────────────── */

interface TechItem {
    name: string;
    logo: string;
    color: string;
}

const techIcons: TechItem[] = [
    { name: "HTML", logo: "/logos/html.svg", color: "#e34f26" },
    { name: "CSS", logo: "/logos/css.svg", color: "#1572b6" },
    { name: "JavaScript", logo: "/logos/javascript.svg", color: "#f7df1e" },
    { name: "PHP", logo: "/logos/php.svg", color: "#777bb4" },
    { name: "React", logo: "/logos/react.svg", color: "#61dafb" },
    { name: "MySQL", logo: "/logos/mysql.svg", color: "#4479a1" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
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
                            <div className="grid grid-cols-3 gap-4">
                                {techIcons.map((tech, index) => (
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
        </section>
    );
}
