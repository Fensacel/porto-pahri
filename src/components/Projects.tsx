"use client";

import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { useLang } from "@/context/LanguageContext";

export default function Projects() {
    const { lang, t } = useLang();
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="Projects"
                    subtitle={t(
                        "Beberapa proyek yang telah saya kerjakan untuk mengasah kemampuan",
                        "Some projects I have worked on to sharpen my skills"
                    )}
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} lang={lang} />
                    ))}
                </div>
            </div>
        </section>
    );
}
