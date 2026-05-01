import { useState, useEffect, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import { navLinks, personalInfo } from "../../data/portfolioData";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    const initials = "IamWasath";
    const handleNavClick = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setOpen(false);
        const id = href.startsWith("#") ? href.slice(1) : href;
        const target = document.getElementById(id);
        if (!target) return;

        const scrollToTarget = () => {
            const header = document.querySelector("header");
            const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 88;
            const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
            window.scrollTo({ top, behavior: "smooth" });
            window.history.replaceState(null, "", `#${id}`);
        };

        if (window.innerWidth < 1024) {
            window.setTimeout(scrollToTarget, 180);
        } else {
            scrollToTarget();
        }
    };

    return (
        <motion.header
            initial={{ y: -80 }} animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "glass shadow-lg shadow-black/30" : "bg-transparent"}`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero"
                    className="text-xl font-display font-bold text-gradient"
                >
                    {initials}
                </a>

                {/* Desktop Links */}
                <ul className="hidden lg:flex items-center gap-8">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={handleNavClick(link.href)}
                                className="text-sm font-body text-gray-700 dark:text-gray-400 hover:text-primary-400
                           transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px]
                                 bg-primary-500 group-hover:w-full transition-all duration-300" />
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex items-center gap-3">
                    <ThemeToggle />
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="px-4 py-2 text-sm font-body glass text-primary-400 hover:text-accent
                       rounded-lg transition-colors"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden text-gray-700 dark:text-gray-300"
                    onClick={() => setOpen(p => !p)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden glass border-t border-gray-200 dark:border-dark-border overflow-hidden"
                    >
                        <ul className="flex flex-col px-6 py-4 gap-4">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={handleNavClick(link.href)}
                                        className="block text-gray-700 dark:text-gray-300 hover:text-primary-400 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li><ThemeToggle /></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}