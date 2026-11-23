export interface Skill {
    name: string;
    level: number; // percentage 0-100
    color: string;
}

export const skills: Skill[] = [
    { name: "Next.js", level: 92, color: "#000000" },
    { name: "Laravel", level: 90, color: "#ff2d20" },
    { name: "React", level: 88, color: "#61dafb" },
    { name: "MySQL / Database", level: 88, color: "#4479a1" },
    { name: "Tailwind CSS", level: 92, color: "#06b6d4" },
    { name: "JavaScript / TypeScript", level: 86, color: "#f7df1e" },
    { name: "PHP", level: 84, color: "#777bb4" },
    { name: "Problem Solving", level: 88, color: "#10b981" },
];
