import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { experience } from "../../data/portfolioData";
import { Briefcase, CheckCircle } from "lucide-react";
import expBg1 from "../../assets/images/WhatsApp Image 2026-04-28 at 4.51.20 PM.jpeg";
import expBg2 from "../../assets/images/WhatsApp Image 2026-04-28 at 4.52.40 PM.jpeg";
import expBg3 from "../../assets/images/WhatsApp Image 2026-04-28 at 4.54.31 PM.jpeg";

export default function Experience() {
    const impactStats = [
        { value: "200+", label: "Apps Reviewed" },
        { value: "100%", label: "Issue Resolution" },
    ];

    return (
        <section id="experience" className="section-padding dark:bg-dark-card relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <img src={expBg1} alt="" className="absolute top-0 left-0 w-full md:w-1/3 h-1/3 md:h-full object-cover opacity-[0.2] md:opacity-[0.22]" />
                <img src={expBg2} alt="" className="absolute top-1/3 md:top-0 left-0 md:left-1/3 w-full md:w-1/3 h-1/3 md:h-full object-cover opacity-[0.2] md:opacity-[0.22]" />
                <img src={expBg3} alt="" className="absolute top-2/3 md:top-0 left-0 md:left-2/3 w-full md:w-1/3 h-1/3 md:h-full object-cover opacity-[0.2] md:opacity-[0.22]" />
                <div className="absolute inset-0 bg-black/45 md:bg-black/40" />
            </div>
            <div className="max-w-4xl mx-auto relative z-10">
                <SectionTitle title="Experience"
                    subtitle="Where I've built real-world impact" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {impactStats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass rounded-2xl p-5 text-center border border-primary-300/40 dark:border-primary-500/20"
                        >
                            <div className="text-3xl font-display font-bold text-gradient">{s.value}</div>
                            <div className="text-sm text-gray-700 dark:text-gray-400 mt-1">{s.label}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500 to-accent" />

                    {experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="relative pl-16 mb-12 last:mb-0"
                        >
                            {/* Dot */}
                            <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full
                              bg-primary-600 border-2 border-white dark:border-dark-bg
                              flex items-center justify-center">
                                <Briefcase size={10} className="text-white" />
                            </div>

                            <div className="glass rounded-2xl p-6 border border-gray-200 dark:border-dark-border
                              hover:border-primary-500/30 transition-all duration-300">
                                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                        <p className="text-primary-400 font-body font-medium">{exp.company}</p>
                                    </div>
                                    <span className="text-xs font-mono text-primary-400 glass px-3 py-1 rounded-full">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                                <ul className="space-y-2 mb-4">
                                    {exp.bullets.map((b, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                            <CheckCircle size={14} className="text-accent mt-0.5 flex-shrink-0" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map(t => (
                                        <span key={t}
                                            className="text-xs px-2 py-1 rounded-md bg-primary-100 dark:bg-primary-900/40
                                 text-primary-700 dark:text-primary-300 border border-primary-300 dark:border-primary-800/50">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}