"use client";

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Gradient blob 1 */}
            <div
                className="absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-20 dark:opacity-10
                    bg-gradient-to-br from-blue-500 to-cyan-400 blur-3xl animate-blob"
            />
            {/* Gradient blob 2 */}
            <div
                className="absolute top-1/3 -right-20 w-96 h-96 rounded-full opacity-15 dark:opacity-8
                    bg-gradient-to-br from-blue-400 to-teal-300 blur-3xl animate-blob animation-delay-2000"
            />
            {/* Gradient blob 3 */}
            <div
                className="absolute -bottom-40 left-1/3 w-72 h-72 rounded-full opacity-20 dark:opacity-10
                    bg-gradient-to-br from-cyan-400 to-blue-500 blur-3xl animate-blob animation-delay-4000"
            />
            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle, var(--primary) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />
        </div>
    );
}
