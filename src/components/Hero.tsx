"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    const handleScroll = (href: string) => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    const skills = ["React", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB", "Git"];

    return (
        <section id="home" className="pt-[74px]">
            <div className="retro-shell">
                <div className="hero-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="hero-copy"
                    >
                        <span className="retro-kicker">Hey, I&apos;m Fachri</span>
                        <h1>SOFTWARE<br />DEVELOPER</h1>
                        <p className="hero-description">
                            I build scalable web applications and turn ideas into impactful products
                            with clean, efficient code.
                        </p>

                        <div className="hero-actions">
                            <button onClick={() => handleScroll("#projects")} className="retro-button retro-button-green">
                                VIEW MY WORK <ArrowDown className="w-4 h-4" />
                            </button>
                            <a href="/CV%20Fachri%20Mufidan.pdf" download className="retro-button">
                                DOWNLOAD CV <Download className="w-4 h-4" />
                            </a>
                        </div>

                        <div className="hero-socials">
                            <span>CONNECT WITH ME</span>
                            <div>
                                <a href="https://github.com/Fensacel" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
                                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                                <a href="mailto:hello@example.com" aria-label="Email"><Mail /></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15, duration: 0.55 }}
                        className="hero-visual"
                    >
                        <div className="hero-photo-frame">
                            <Image src="/images/fachri.webp" alt="M. Fachri Mufidan" fill priority className="object-cover" />
                        </div>
                        <div className="hero-code-card">
                            <p><span>&gt;</span> const developer = {'{'}</p>
                            <p>&nbsp;&nbsp;name: &apos;Fachri&apos;,</p>
                            <p>&nbsp;&nbsp;role: &apos;Full Stack&apos;,</p>
                            <p>&nbsp;&nbsp;passion: &apos;Solving problems&apos;</p>
                            <p>{'}'};</p>
                        </div>
                    </motion.div>
                </div>

                <div className="skills-strip">
                    <div className="skills-strip-title">SKILLS <span>→</span></div>
                    <div className="skills-strip-items">
                        {skills.map((skill) => (
                            <div key={skill}><span className="skill-glyph">{skill.charAt(0)}</span><strong>{skill}</strong></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
