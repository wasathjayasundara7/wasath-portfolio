import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../../data/portfolioData";
import heroProfileBg from "../../assets/images/WhatsApp Image 2026-04-28 at 4.58.01 PM.jpeg";

export default function Hero() {
    const [typedName, setTypedName] = useState("");

    useEffect(() => {
        const fullName = personalInfo.name;
        let i = 0;
        const timer = setInterval(() => {
            i += 1;
            setTypedName(fullName.slice(0, i));
            if (i >= fullName.length) clearInterval(timer);
        }, 80);

        return () => {
            clearInterval(timer);
        };
    }, []);

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
                        <span className="text-gradient">
                            {typedName}
                            <span className="tiny-cursor-blink text-primary-500">|</span>
                        </span>
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
                            className="px-6 py-3 bg-gradient-to-r from-primary-500 via-accent to-primary-400 rounded-xl
                         text-white font-body font-medium transition-all duration-300
                         shadow-lg shadow-primary-500/30 hover:shadow-primary-400/50 hover:brightness-110"
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
                    className="w-full h-[200px] sm:h-[260px] lg:h-[420px] mt-2 lg:mt-0"
                >
                    {/* <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary-900/40 via-[#021a6b]/25 to-dark-bg/20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,8,46,0.45)_100%)]" />
                    </div> */}
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