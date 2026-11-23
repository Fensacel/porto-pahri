"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
    index: number;
    lang?: "id" | "en";
}

export default function ProjectCard({ project, index, lang = "id" }: ProjectCardProps) {
    const [imgError, setImgError] = useState(false);

    // Reset error state if image source changes (fixes hot reload issues)
    useEffect(() => {
        setImgError(false);
    }, [project.image]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="retro-project-card group overflow-hidden flex flex-col h-full"
        >
            {/* Thumbnail Area */}
            <div className="relative h-52 bg-muted/50 overflow-hidden border-b border-card-border">
                {project.image && !imgError ? (
                    <Image
                        key={project.image}
                        src={project.image}
                        alt={lang === "en" && project.titleEn ? project.titleEn : project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Folder className="w-14 h-14 text-muted-foreground/30" />
                    </div>
                )}

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quick Action Badges */}
                <div className="absolute top-3 right-3 flex gap-2">
                    {project.liveUrl !== "#" && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md text-foreground text-xs font-mono border border-card-border hover:bg-primary hover:text-white transition-colors flex items-center gap-1 shadow-md"
                        >
                            <span>Live</span>
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    )}
                </div>

                {/* Bottom Bar on hover */}
                <div className="absolute bottom-3 left-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground text-background text-xs font-medium hover:bg-primary hover:text-white transition-colors"
                    >
                        <Github className="w-3.5 h-3.5" />
                        Source Code
                    </a>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                {project.role && (
                    <span className="inline-block text-[11px] font-mono font-medium text-primary uppercase tracking-wider mb-2">
                        {project.role}
                    </span>
                )}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {lang === "en" && project.titleEn ? project.titleEn : project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3">
                    {lang === "en" && project.descriptionEn ? project.descriptionEn : project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-card-border/60">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-muted-foreground bg-muted border border-card-border"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
