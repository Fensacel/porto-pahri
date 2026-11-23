"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Briefcase,
    GraduationCap,
    Award,
    Calendar,
    MapPin,
    CheckCircle2,
    Users,
    ShieldCheck,
    Languages,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { experiences, certificates } from "@/data/experience";

export default function Experience() {
    const [activeTab, setActiveTab] = useState<"all" | "experience" | "certificates">("all");

    return (
        <section id="experience" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="Experience & Credentials"
                    subtitle="Pengalaman kerja industri, sertifikasi standar nasional & internasional, dan rekam jejak akademis"
                />

                {/* Filter Tabs */}
                <div className="flex justify-center gap-2 mb-12">
                    <button
                        onClick={() => setActiveTab("all")}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                            activeTab === "all"
                                ? "bg-primary text-white shadow-lg shadow-primary/25"
                                : "glass text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        Semua
                    </button>
                    <button
                        onClick={() => setActiveTab("experience")}
                        className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                            activeTab === "experience"
                                ? "bg-primary text-white shadow-lg shadow-primary/25"
                                : "glass text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        <Briefcase className="w-4 h-4" />
                        Pengalaman & Edukasi
                    </button>
                    <button
                        onClick={() => setActiveTab("certificates")}
                        className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                            activeTab === "certificates"
                                ? "bg-primary text-white shadow-lg shadow-primary/25"
                                : "glass text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        <Award className="w-4 h-4" />
                        Sertifikasi
                    </button>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Experience & Education */}
                    {(activeTab === "all" || activeTab === "experience") && (
                        <div className={activeTab === "all" ? "lg:col-span-7 space-y-6" : "lg:col-span-12 max-w-4xl mx-auto w-full space-y-6"}>
                            <h3 className="text-xl font-bold text-foreground flex items-center gap-2.5 mb-6">
                                <Briefcase className="w-5 h-5 text-primary" />
                                Pengalaman Kerja & Pendidikan
                            </h3>

                            <div className="space-y-6">
                                {experiences.map((item, idx) => (
                                    <ScrollReveal key={item.id} delay={idx * 0.1}>
                                        <div className="glass rounded-3xl p-6 md:p-7 relative overflow-hidden group border border-card-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                                            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                                <div>
                                                    <span
                                                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium mb-2.5 ${
                                                            item.type === "work"
                                                                ? "bg-primary/10 text-primary border border-primary/20"
                                                                : item.type === "education"
                                                                ? "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                                                                : "bg-purple-500/10 text-purple-500 border border-purple-500/20"
                                                        }`}
                                                    >
                                                        {item.type === "work" && <Briefcase className="w-3.5 h-3.5" />}
                                                        {item.type === "education" && <GraduationCap className="w-3.5 h-3.5" />}
                                                        {item.type === "organization" && <Users className="w-3.5 h-3.5" />}
                                                        {item.type === "work" ? "Pengalaman Industri" : item.type === "education" ? "Pendidikan Formal" : "Organisasi & Kepemimpinan"}
                                                    </span>
                                                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                                        {item.role}
                                                    </h4>
                                                    <p className="text-sm font-medium text-foreground/80 mt-0.5">
                                                        {item.institution}
                                                    </p>
                                                </div>

                                                <div className="flex flex-col sm:items-end text-xs font-mono text-muted-foreground gap-1">
                                                    <span className="flex items-center gap-1.5 glass-subtle px-2.5 py-1 rounded-md border border-card-border">
                                                        <Calendar className="w-3 h-3 text-primary" />
                                                        {item.period}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="w-3 h-3" />
                                                        {item.location}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Bullet Points */}
                                            <ul className="space-y-2 mt-4 text-sm text-muted-foreground leading-relaxed">
                                                {item.description.map((desc, dIdx) => (
                                                    <li key={dIdx} className="flex items-start gap-2.5">
                                                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                                        <span>{desc}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Skills chips */}
                                            <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-card-border/60">
                                                {item.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-2.5 py-0.5 rounded-md text-xs font-mono text-muted-foreground bg-muted border border-card-border"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Right Column: Certifications */}
                    {(activeTab === "all" || activeTab === "certificates") && (
                        <div className={activeTab === "all" ? "lg:col-span-5 space-y-6" : "lg:col-span-12 max-w-4xl mx-auto w-full space-y-6"}>
                            <h3 className="text-xl font-bold text-foreground flex items-center gap-2.5 mb-6">
                                <Award className="w-5 h-5 text-accent" />
                                Sertifikasi Resmi
                            </h3>

                            <div className="space-y-6">
                                {certificates.map((cert, idx) => (
                                    <ScrollReveal key={cert.id} delay={idx * 0.15}>
                                        <div className="glass rounded-3xl p-6 md:p-7 relative overflow-hidden group border border-card-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-2xl glass-subtle flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-primary/10 transition-all duration-300 border border-card-border">
                                                    {cert.id === "bnsp" ? (
                                                        <ShieldCheck className="w-5 h-5 text-primary" />
                                                    ) : (
                                                        <Languages className="w-5 h-5 text-cyan-400" />
                                                    )}
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                                                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-primary/10 text-primary border border-primary/20">
                                                            {cert.badge}
                                                        </span>
                                                        <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                                                            <Calendar className="w-3 h-3 text-primary" />
                                                            {cert.period}
                                                        </span>
                                                    </div>

                                                    <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                                                        {cert.title}
                                                    </h4>
                                                    <p className="text-xs font-mono text-muted-foreground mb-3">
                                                        {cert.issuer}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        {cert.description}
                                                    </p>

                                                    {cert.scoreOrId && (
                                                        <div className="mt-4 pt-3 border-t border-card-border/60 flex items-center justify-between">
                                                            <span className="text-xs font-mono text-muted-foreground">Kualifikasi:</span>
                                                            <span className="text-xs font-mono font-bold text-foreground px-2 py-0.5 rounded bg-muted border border-card-border">
                                                                {cert.scoreOrId}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}

                                {/* Language Proficiency Card */}
                                <ScrollReveal delay={0.3}>
                                    <div className="glass rounded-3xl p-6 relative overflow-hidden border border-card-border">
                                        <h4 className="text-xs font-mono font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                                            <Languages className="w-4 h-4 text-primary" />
                                            Kemampuan Bahasa
                                        </h4>
                                        <div className="space-y-3.5">
                                            <div>
                                                <div className="flex justify-between text-xs font-mono mb-1.5">
                                                    <span className="text-foreground">Bahasa Indonesia</span>
                                                    <span className="text-primary font-bold">Native</span>
                                                </div>
                                                <div className="h-1.5 rounded-full bg-muted overflow-hidden border border-card-border/60">
                                                    <div className="h-full bg-primary rounded-full w-full" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-xs font-mono mb-1.5">
                                                    <span className="text-foreground">Bahasa Inggris</span>
                                                    <span className="text-cyan-400 font-bold">Working Proficiency</span>
                                                </div>
                                                <div className="h-1.5 rounded-full bg-muted overflow-hidden border border-card-border/60">
                                                    <div className="h-full bg-cyan-400 rounded-full w-[82%]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
