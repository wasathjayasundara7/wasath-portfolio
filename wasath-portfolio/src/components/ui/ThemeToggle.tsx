import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
    const { isDark, toggle } = useTheme();
    return (
        <button
            onClick={toggle}
            className="p-2 rounded-full glass text-primary-400 hover:text-accent transition-colors"
            aria-label="Toggle theme"
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}