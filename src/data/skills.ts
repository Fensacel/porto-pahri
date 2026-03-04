export interface Skill {
    name: string;
    level: number; // percentage 0-100
    color: string;
}

export const skills: Skill[] = [
    { name: "HTML", level: 90, color: "#e34f26" },
    { name: "CSS", level: 85, color: "#1572b6" },
    { name: "JavaScript", level: 80, color: "#f7df1e" },
    { name: "PHP", level: 75, color: "#777bb4" },
    { name: "React / Next.js", level: 70, color: "#61dafb" },
    { name: "MySQL", level: 72, color: "#4479a1" },
];
