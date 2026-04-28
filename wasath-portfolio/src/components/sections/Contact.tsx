import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { personalInfo } from "../../data/portfolioData";

export default function Contact() {
    const links = [
        { icon: <Mail size={20} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: <Phone size={20} />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
        { icon: <MapPin size={20} />, label: "Location", value: personalInfo.location, href: "#" },
    ];

    return (
        <section id="contact" className="section-padding">
            <div className="max-w-4xl mx-auto">
                <SectionTitle title="Get In Touch"
                    subtitle="Let's build something great together" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {links.map((l, i) => (
                        <motion.a
                            key={l.label}
                            href={l.href}
                            target={l.href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="glass rounded-2xl p-5 border border-dark-border
                         hover:border-primary-500/40 transition-all duration-300 group"
                        >
                            <div className="text-primary-400 group-hover:text-accent transition-colors mb-3">
                                {l.icon}
                            </div>
                            <div className="text-xs text-gray-500 mb-1">{l.label}</div>
                            <div className="text-sm text-gray-200 font-body truncate">{l.value}</div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}