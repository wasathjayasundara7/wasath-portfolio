import { personalInfo } from "../../data/portfolioData";

export default function Footer() {
    return (
        <footer className="py-8 text-center border-t border-dark-border">
            <p className="text-sm text-gray-500 font-body">
                © {new Date().getFullYear()}{" "}
                <span className="text-primary-400 font-medium">{personalInfo.name}</span>.
            </p>
            {/* <p className="text-xs text-gray-600 mt-1">Crafted with ❤️ in Sri Lanka</p> */}
        </footer>
    );
}