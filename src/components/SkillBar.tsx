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
            <div className="flex justify-between items-center mb-1.5">
                <span className="font-medium text-foreground text-xs font-mono group-hover:text-primary transition-colors">
                    {skill.name}
                </span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                    className="text-[11px] text-muted-foreground font-mono"
                >
                    {skill.level}%
                </motion.span>
            </div>

            <div className="h-1.5 rounded-full bg-muted overflow-hidden border border-card-border/60">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{
                        duration: 1.0,
                        delay: index * 0.08 + 0.1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full rounded-full bg-primary relative overflow-hidden"
                >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.div>
            </div>
        </motion.div>
    );
}
