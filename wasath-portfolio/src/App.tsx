import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import PreparationProfessionalWorld from "./components/sections/PreparationProfessionalWorld";
import LoadingScreen from "./components/ui/LoadingScreen";
import ScrollProgress from "./components/ui/ScrollProgress";
import { ThemeProvider } from "./context/ThemeContext";
import { motion } from "framer-motion";
import GlobalBubble from "./components/ui/GlobalBubble";

export default function App() {
  const sectionAnim = {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.65, ease: "easeOut" as const },
  };

  return (
    <ThemeProvider>
      <LoadingScreen />
      <ScrollProgress />
      <GlobalBubble />
      <Navbar />
      <main>
        <motion.div {...sectionAnim}><Hero /></motion.div>
        <motion.div {...sectionAnim}><About /></motion.div>
        <motion.div {...sectionAnim}><Skills /></motion.div>
        <motion.div {...sectionAnim}><Experience /></motion.div>
        <motion.div {...sectionAnim}><Projects /></motion.div>
        <motion.div {...sectionAnim}><Education /></motion.div>
        <motion.div {...sectionAnim} viewport={{ once: true, amount: "some" }}><PreparationProfessionalWorld /></motion.div>
        <motion.div {...sectionAnim}><Contact /></motion.div>
      </main>
      <Footer />
    </ThemeProvider>
  );
}