"use client";

import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageToggle() {
    const { lang, setLang } = useLang();

    return (
        <button
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="relative flex items-center h-8 rounded-full bg-muted border border-card-border overflow-hidden cursor-pointer"
            aria-label="Toggle language"
            style={{ width: "72px" }}
        >
            {/* Sliding pill */}
            <motion.div
                className="absolute top-1 bottom-1 w-[32px] rounded-full bg-gradient-to-r from-primary to-accent"
                animate={{ left: lang === "id" ? "4px" : "36px" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />

            {/* Labels */}
            <span
                className={`relative z-10 w-[36px] text-center text-xs font-semibold transition-colors duration-200 ${
                    lang === "id" ? "text-white" : "text-muted-foreground"
                }`}
            >
                ID
            </span>
            <span
                className={`relative z-10 w-[36px] text-center text-xs font-semibold transition-colors duration-200 ${
                    lang === "en" ? "text-white" : "text-muted-foreground"
                }`}
            >
                EN
            </span>
        </button>
    );
}
