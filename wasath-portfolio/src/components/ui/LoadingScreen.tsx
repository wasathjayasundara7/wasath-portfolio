import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setVisible(false), 2200);
        return () => clearTimeout(t);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-bg"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="text-5xl font-display font-bold text-gradient mb-4"
                    >
                        WJ
                    </motion.div>
                    <motion.div
                        className="w-48 h-1 bg-dark-border rounded-full overflow-hidden"
                    >
                        <motion.div
                            className="h-full bg-gradient-to-r from-primary-500 to-accent"
                            initial={{ width: 0 }} animate={{ width: "100%" }}
                            transition={{ duration: 1.8, ease: "easeInOut" }}
                        />
                    </motion.div>
                    <p className="mt-4 text-sm text-gray-400 font-mono">Initializing portfolio…</p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}