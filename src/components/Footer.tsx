"use client";

import { Heart } from "lucide-react";

const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
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
        <footer className="border-t border-card-border py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Copyright */}
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                    © {new Date().getFullYear()} Pahri. Made with
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
                    using Next.js
                </p>

                {/* Quick Links */}
                <div className="flex flex-wrap justify-center items-center gap-4">
                    {footerLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleClick(link.href);
                            }}
                            className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
