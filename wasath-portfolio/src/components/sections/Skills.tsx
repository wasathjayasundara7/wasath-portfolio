import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { skills } from "../../data/portfolioData";
import type { Skill } from "../../types";

const CATEGORIES = [
    { key: "all", label: "All" },
    { key: "pm", label: "Project Mgmt" },
    { key: "tools", label: "Tools" },
    { key: "technical", label: "Technical" },
    { key: "design", label: "Design" },
] as const;

type Cat = typeof CATEGORIES[number]["key"];

export default function Skills() {
    const [active, setActive] = useState<Cat>("all");
    const filtered = active === "all"
        ? skills
        : skills.filter((s: Skill) => s.category === active);

    return (
        <section id="skills" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="Skills & Technologies"
                    subtitle="Tools and technologies I work with" />

                {/* Filter Pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {CATEGORIES.map(c => (
                        <button
                            key={c.key}
                            onClick={() => setActive(c.key as Cat)}
                            className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-200
                ${active === c.key
                                    ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30"
                                    : "glass text-gray-700 dark:text-gray-400 hover:text-primary-500 dark:hover:text-white"}`}
                        >
                            {c.label}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {filtered.map((skill, i) => (
                        <motion.div
                            key={skill.name} layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ delay: i * 0.04 }}
                            whileHover={{ scale: 1.08, y: -4 }}
                            className="glass rounded-xl p-4 text-center cursor-default border border-gray-200 dark:border-dark-border
                         hover:border-primary-500/50 transition-all duration-300 group"
                        >
                            <div className="text-3xl mb-2">{skill.icon}</div>
                            <div className="text-xs text-gray-700 dark:text-gray-300 font-body leading-tight mb-2">{skill.name}</div>
                            <div className="w-full bg-gray-300 dark:bg-dark-border rounded-full h-1.5 overflow-hidden">
                                <motion.div
                                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: i * 0.04 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}