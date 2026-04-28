import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub, SiFigma } from "react-icons/si";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "../../data/portfolioData";

export default function Projects() {
    return (
        <section id="projects" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="Projects"
                    subtitle="Building solutions that matter" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -6 }}
                            className={`glass rounded-2xl p-6 border transition-all duration-300 flex flex-col
                ${p.highlight
                                    ? "border-primary-500/40 shadow-lg shadow-primary-500/10"
                                    : "border-gray-200 dark:border-dark-border hover:border-primary-500/30"}`}
                        >
                            {p.highlight && (
                                <span className="text-xs font-mono text-accent mb-3 flex items-center gap-1">
                                    ⭐ Featured Project
                                </span>
                            )}
                            <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg mb-2">{p.title}</h3>
                            <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-4">{p.description}</p>
                            <span className="text-xs font-mono text-gray-600 dark:text-gray-500 mb-3">{p.period}</span>

                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {p.tech.map(t => (
                                    <span key={t}
                                        className="text-xs px-2 py-0.5 rounded bg-gray-200 dark:bg-dark-border text-gray-800 dark:text-gray-300">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3 mt-auto">
                                {p.github && (
                                    <a href={p.github} target="_blank" rel="noreferrer"
                                        className="text-gray-700 dark:text-gray-400 hover:text-primary-400 transition-colors">
                                        <SiGithub size={18} />
                                    </a>
                                )}
                                {p.figma && (
                                    <a href={p.figma} target="_blank" rel="noreferrer"
                                        className="text-gray-700 dark:text-gray-400 hover:text-accent transition-colors">
                                        <SiFigma size={18} />
                                    </a>
                                )}
                                {p.live && (
                                    <a href={p.live} target="_blank" rel="noreferrer"
                                        className="text-gray-700 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}