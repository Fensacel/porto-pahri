"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navLinks.map((l) => l.href.slice(1));
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 transition-all duration-300"
        >
            <div className="retro-nav max-w-[1180px] mx-auto flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("#home");
                    }}
                    className="flex items-center gap-2 group"
                >
                    <Image
                        src="/logo.png"
                        alt="Fachri Logo"
                        width={28}
                        height={28}
                        className="w-7 h-7 rounded-lg group-hover:scale-105 transition-transform"
                    />
                    <span className="font-semibold text-sm tracking-tight text-foreground hidden sm:inline">
                        Fachri<span className="text-primary font-mono">.dev</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleClick(link.href);
                            }}
                            className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                                activeSection === link.href.slice(1)
                                    ? "text-foreground font-semibold"
                                    : "text-muted-foreground hover:text-foreground"
                            }`}
                        >
                            {activeSection === link.href.slice(1) && (
                                <motion.span
                                    layoutId="activeNav"
                                    className="absolute inset-0 bg-muted rounded-full border border-card-border"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{link.name}</span>
                        </a>
                    ))}
                </div>

                {/* Mobile Controls */}
                <div className="flex md:hidden items-center gap-3">
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="w-10 h-10 rounded-full glass flex items-center justify-center cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden max-w-5xl mx-auto"
            >
                <div className="mt-3 p-4 glass rounded-3xl border border-card-border shadow-2xl flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleClick(link.href);
                            }}
                            className={`px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                                activeSection === link.href.slice(1)
                                    ? "text-primary bg-muted font-semibold"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </motion.div>
        </motion.nav>
    );
}
