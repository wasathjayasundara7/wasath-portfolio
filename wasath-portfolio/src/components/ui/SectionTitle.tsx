import { motion } from "framer-motion";

interface Props { title: string; subtitle?: string; }

export default function SectionTitle({ title, subtitle }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">
                {title}
            </h2>
            {subtitle && (
                <p className="text-gray-700 dark:text-gray-400 text-lg max-w-xl mx-auto">{subtitle}</p>
            )}
            <div className="mt-4 flex justify-center gap-1">
                <div className="w-12 h-1 rounded-full bg-primary-500" />
                <div className="w-3  h-1 rounded-full bg-accent" />
            </div>
        </motion.div>
    );
}