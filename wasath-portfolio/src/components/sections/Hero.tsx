import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../../data/portfolioData";
import heroProfileBg from "../../assets/images/WhatsApp Image 2026-04-28 at 4.58.01 PM.jpeg";

export default function Hero() {
    const [bubblePos, setBubblePos] = useState({ x: 50, y: 50 });

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden bg-gray-100 dark:bg-dark-bg"
        >
            {/* Radial gradient bg */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1d4ed840,_transparent_60%)]" />
            <div className="absolute inset-0 pointer-events-none">
                <img
                    src={heroProfileBg}
                    alt="Wasath background"
                    className="w-full h-full object-cover opacity-10 dark:opacity-20"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2
                      gap-8 lg:gap-12 items-center pt-24 pb-16">
                {/* Left — Text */}
                <div>
                    <motion.p
                        initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-accent font-mono text-sm mb-3 tracking-widest uppercase"
                    >
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-4 leading-tight"
                    >
                        <span className="text-gray-900 dark:text-white">{personalInfo.name.split(" ")[0]} </span>
                        <span className="text-gradient">{personalInfo.name.split(" ")[1]}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-700 dark:text-gray-400 text-lg md:text-xl mb-6 font-body"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ delay: 0.65 }}
                        className="text-gray-700 dark:text-gray-500 text-base leading-relaxed mb-8 max-w-md"
                    >
                        {personalInfo.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#contact"
                            className="px-6 py-3 bg-primary-600 hover:bg-primary-500 rounded-xl
                         text-white font-body font-medium transition-all duration-300
                         shadow-lg shadow-primary-600/30 hover:shadow-primary-500/50"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="#projects"
                            className="px-6 py-3 glass text-gray-900 dark:text-white font-body font-medium rounded-xl
                         hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                        >
                            <Download size={16} /> View My Work
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex gap-5 mt-8"
                    >
                        {[
                            { href: personalInfo.github, icon: <FaGithub size={20} /> },
                            { href: personalInfo.linkedin, icon: <FaLinkedin size={20} /> },
                            { href: `mailto:${personalInfo.email}`, icon: <Mail size={20} /> },
                        ].map(({ href, icon }) => (
                            <a
                                key={href} href={href} target="_blank" rel="noreferrer"
                                className="p-2.5 glass rounded-lg text-gray-700 dark:text-gray-400 hover:text-primary-400
                           hover:border-primary-500/50 transition-all duration-300"
                            >
                                {icon}
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* Right — Interactive Shining Bubble */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="w-full h-[300px] sm:h-[360px] lg:h-[520px] mt-2 lg:mt-0"
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = ((e.clientX - rect.left) / rect.width) * 100;
                        const y = ((e.clientY - rect.top) / rect.height) * 100;
                        setBubblePos({ x, y });
                    }}
                >
                    <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary-900 via-[#021a6b] to-dark-bg border border-primary-500/20">
                        <motion.div
                            animate={{ left: `${bubblePos.x}%`, top: `${bubblePos.y}%` }}
                            transition={{ type: "spring", stiffness: 80, damping: 18 }}
                            className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        >
                            <div className="absolute inset-0 rounded-full bg-cyan-200/80 blur-2xl" />
                            <div className="absolute inset-6 rounded-full bg-white/90 blur-sm" />
                        </motion.div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,8,46,0.7)_100%)]" />
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-700 dark:text-gray-500
                   hover:text-primary-400 transition-colors"
            >
                <ChevronDown size={28} />
            </motion.a>
        </section>
    );
}