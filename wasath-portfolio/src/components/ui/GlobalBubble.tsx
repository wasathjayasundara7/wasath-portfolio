import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GlobalBubble() {
    const [pos, setPos] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const updateFromPoint = (x: number, y: number) => {
            setPos({
                x: (x / window.innerWidth) * 100,
                y: (y / window.innerHeight) * 100,
            });
        };

        const onPointerMove = (e: PointerEvent) => updateFromPoint(e.clientX, e.clientY);
        const onTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            if (touch) updateFromPoint(touch.clientX, touch.clientY);
        };

        window.addEventListener("pointermove", onPointerMove, { passive: true });
        window.addEventListener("touchmove", onTouchMove, { passive: true });

        return () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("touchmove", onTouchMove);
        };
    }, []);

    return (
        <motion.div
            animate={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            transition={{ type: "spring", stiffness: 70, damping: 18 }}
            className="global-bubble pointer-events-none"
        >
            <div className="global-bubble-halo" />
            <div className="global-bubble-core" />
        </motion.div>
    );
}
