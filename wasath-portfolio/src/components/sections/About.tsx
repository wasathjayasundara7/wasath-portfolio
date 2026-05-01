import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { personalInfo, interests, languages } from "../../data/portfolioData";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import aboutBg from "../../assets/images/me 3.png";

export default function About() {
    const stats = [
        { value: "6+", label: "Projects Delivered" },
        { value: "2", label: "Languages" },
    ];

    return (
        <section id="about" className="section-padding dark:bg-dark-card relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <img
                    src={aboutBg}
                    alt="Wasath background"
                    className="w-full h-full object-cover opacity-15"
                />
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <SectionTitle title="About Me" subtitle="The person behind the portfolio" />

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.7 }}
                    >
                        <p className="text-gray-700 dark:text-gray-400 leading-8 mb-6 text-base">{personalInfo.bio}</p>
                        <div className="space-y-3">
                            {[
                                { icon: <MapPin size={16} />, text: personalInfo.location },
                                { icon: <GraduationCap size={16} />, text: personalInfo.university },
                                { icon: <Briefcase size={16} />, text: "Open to Graduate PM / BA Roles" },
                            ].map(({ icon, text }) => (
                                <div key={text} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                                    <span className="text-primary-400">{icon}</span>
                                    {text}
                                </div>
                            ))}
                        </div>

                        {/* Interests */}
                        <div className="mt-8">
                            <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-3">Interests</h3>
                            <div className="flex flex-wrap gap-2">
                                {interests.map(i => (
                                    <span key={i}
                                        className="px-3 py-1 text-xs glass rounded-full text-accent border border-accent/20">
                                        {i}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="mt-6">
                            <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-3">Languages</h3>
                            <div className="flex gap-3">
                                {languages.map(l => (
                                    <span key={l}
                                        className="px-3 py-1 text-xs glass rounded-full text-gray-700 dark:text-gray-300">
                                        {l}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.7 }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass rounded-2xl p-6 text-center card-hover border border-primary-500/20"
                                >
                                    <div className="text-4xl font-display font-bold text-gradient">{s.value}</div>
                                    <div className="text-sm text-gray-700 dark:text-gray-400 mt-1">{s.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}