"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
        <ScrollReveal className="retro-section-heading mb-10">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                    {subtitle}
                </p>
            )}
        </ScrollReveal>
    );
}
