"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ArrowDown, Mail } from "lucide-react";

export default function Hero() {
    const handleScroll = (href: string) => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
        >
            <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="order-2 md:order-1">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-primary font-medium mb-3 text-sm tracking-widest uppercase"
                    >
                        Hello, I&apos;m
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                    >
                        <span className="text-foreground">M. Fachri Mufidan</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="h-px w-8 bg-primary" />
                        <p className="text-lg font-medium text-primary-light">
                            Web Developer / Software Developer
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-muted-foreground text-base leading-relaxed max-w-lg mb-8"
                    >
                        Siswa jurusan Rekayasa Perangkat Lunak (RPL) di SMK Negeri 1 Slawi
                        yang bersemangat dalam pengembangan web, saat ini sedang mendalami
                        ekosistem JavaScript dan PHP.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="/cv-pahri.pdf"
                            download
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent
                         text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/25
                         hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <Download className="w-4 h-4 group-hover:animate-bounce" />
                            Download CV
                        </a>
                        <button
                            onClick={() => handleScroll("#contact")}
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium
                         glass hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                        >
                            <Mail className="w-4 h-4" />
                            Contact Me
                        </button>
                    </motion.div>
                </div>

                {/* Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
                    className="order-1 md:order-2 flex justify-center"
                >
                    <div className="relative group">
                        {/* Glow ring */}
                        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />

                        {/* Photo container */}
                        <div
                            className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden
                          border-4 border-card-border group-hover:border-primary/40 transition-all duration-500
                          group-hover:scale-105"
                        >
                            <Image
                                src="/images/fachri.webp"
                                alt="M. Fachri Mufidan"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating badges */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-2 -right-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-primary"
                        >
                            💻 Developer
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-2 -left-2 glass px-3 py-1.5 rounded-full text-xs font-medium text-accent"
                        >
                            🎓 RPL Student
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={() => handleScroll("#about")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{
                    opacity: { delay: 1, duration: 0.6 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
                aria-label="Scroll down"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <ArrowDown className="w-4 h-4" />
            </motion.button>
        </section>
    );
}
