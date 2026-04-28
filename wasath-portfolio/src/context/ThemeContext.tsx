import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface ThemeCtx { isDark: boolean; toggle: () => void; }
const ThemeContext = createContext<ThemeCtx>({ isDark: true, toggle: () => { } });

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === "undefined") return true;
        return localStorage.getItem("theme") !== "light";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, toggle: () => setIsDark(p => !p) }}>
            {children}
        </ThemeContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);