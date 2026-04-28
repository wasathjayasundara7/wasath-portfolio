export interface NavLink {
    label: string;
    href: string;
}

export interface Skill {
    name: string;
    icon: string;         // emoji or icon name
    category: "pm" | "tools" | "technical" | "design";
    level: number;        // 0–100
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    location: string;
    description: string;
    bullets: string[];
    tech: string[];
}

export interface Project {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    figma?: string;
    live?: string;
    period: string;
    highlight?: boolean;
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    note?: string;
}

export interface Reference {
    name: string;
    role: string;
    company: string;
    phone: string;
    email: string;
}