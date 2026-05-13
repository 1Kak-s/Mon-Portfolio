// ============================================================
// APP.JSX — avec Framer Motion + CustomCursor
// ============================================================

// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projectss from "./components/Projectss";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3, ease: "easeIn" },
    },
};

function App() {
    return (
        <>
            <CustomCursor />
            <AnimatePresence mode="wait">
                <motion.div
                    key="main-content"
                    variants={pageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="min-h-screen bg-slate-900 text-white"
                >
                    <Navbar />
                    <main>
                        <Hero />
                        <About />
                        <Skills />
                        <Projectss />
                        <Experience />
                        <Contact />
                    </main>
                </motion.div>
            </AnimatePresence>
        </>
    );
}

export default App;