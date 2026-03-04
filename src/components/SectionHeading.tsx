"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
        <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">{title}</span>
            </h2>
            {subtitle && (
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    {subtitle}
                </p>
            )}
            <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
        </ScrollReveal>
    );
}
