"use client";

import { Heart } from "lucide-react";

const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Footer() {
    const handleClick = (href: string) => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="px-6 pb-10">
            <div className="retro-footer max-w-[1180px] mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Copyright */}
                <div className="text-center md:text-left">
                    <p className="text-xs font-mono text-muted-foreground">
                        © {new Date().getFullYear()} M. Fachri Mufidan. Engineered with Next.js & Tailwind CSS.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-wrap justify-center items-center gap-1.5">
                    {footerLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleClick(link.href);
                            }}
                            className="px-3 py-1 rounded-full text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
