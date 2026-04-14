import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import MeshBackground from "./components/MeshBackground";
import ScrollProgress from "./components/ScrollProgress";

// Section divider
function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="glow-line" />
    </div>
  );
}

export default function App() {
  // Disable default cursor on desktop
  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) {
      document.body.style.cursor = "auto";
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050a0e] text-[#e2eaf0] overflow-x-hidden">
      {/* Background */}
      <MeshBackground />
      <div className="noise-overlay" />

      {/* Scroll progress */}
      <ScrollProgress />

      {/* Custom cursor (desktop) */}
      <div className="hidden md:block">
        <Cursor />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
