"use client";

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Top Center Glow (Modern Vercel / Linear look) */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full
                    bg-gradient-to-b from-blue-500/15 via-cyan-500/10 to-transparent blur-[120px] dark:from-blue-600/20 dark:via-cyan-600/10"
            />

            {/* Ambient subtle glow left */}
            <div
                className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full
                    bg-gradient-to-tr from-primary/10 to-transparent blur-[140px]"
            />

            {/* Ambient subtle glow right */}
            <div
                className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] rounded-full
                    bg-gradient-to-bl from-accent/10 to-transparent blur-[150px]"
            />

            {/* Micro Dot Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.25] dark:opacity-[0.2]"
                style={{
                    backgroundImage: `radial-gradient(rgba(148, 163, 184, 0.25) 1px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                    maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 60%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 60%, transparent 100%)",
                }}
            />
        </div>
    );
}
