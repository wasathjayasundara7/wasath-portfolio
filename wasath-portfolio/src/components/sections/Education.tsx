import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { education } from "../../data/portfolioData";
import { GraduationCap } from "lucide-react";
import eduBg1 from "../../assets/images/WhatsApp Image 2026-04-28 at 5.11.38 PM.jpeg";
import eduBg2 from "../../assets/images/WhatsApp Image 2026-04-28 at 5.12.46 PM.jpeg";

export default function Education() {
    return (
        <section id="education" className="section-padding dark:bg-dark-card relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <img src={eduBg1} alt="" className="absolute top-0 left-0 w-1/2 h-full object-cover opacity-5 dark:opacity-10" />
                <img src={eduBg2} alt="" className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-5 dark:opacity-10" />
            </div>
            <div className="max-w-3xl mx-auto relative z-10">
                <SectionTitle title="Education" />
                <div className="space-y-6">
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                            className="glass rounded-2xl p-6 border border-gray-200 dark:border-dark-border
                         hover:border-primary-500/30 transition-all duration-300 flex gap-5"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50
                              flex items-center justify-center border border-primary-300 dark:border-primary-800/50">
                                <GraduationCap size={20} className="text-primary-400" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                                <p className="text-primary-400 font-body text-sm mb-1">{edu.institution}</p>
                                <p className="text-gray-700 dark:text-gray-500 text-xs font-mono mb-2">{edu.period}</p>
                                {edu.note && (
                                    <p className="text-gray-700 dark:text-gray-400 text-sm">{edu.note}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}