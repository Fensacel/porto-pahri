"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Skill } from "@/data/skills";

interface SkillBarProps {
    skill: Skill;
    index: number;
}

export default function SkillBar({ skill, index }: SkillBarProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
        >
            <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                    {skill.name}
                </span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                    className="text-xs text-muted-foreground font-mono"
                >
                    {skill.level}%
                </motion.span>
            </div>

            <div className="h-3 rounded-full bg-muted overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{
                        duration: 1.2,
                        delay: index * 0.1 + 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                        background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})`,
                    }}
                >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.div>
            </div>
        </motion.div>
    );
}
