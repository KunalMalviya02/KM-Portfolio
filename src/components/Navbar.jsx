import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050a0e]/90 backdrop-blur-xl border-b border-[#1e2d3d]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNav(e, "#hero")}
            className="font-display font-bold text-xl tracking-tight"
          >
            <span className="gradient-text">KM</span>
            <span className="text-[#4a6a7a] ml-1 font-mono text-sm">.dev</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className={`nav-link font-body text-sm font-medium transition-colors duration-200 ${
                    active === link.href ? "text-[#00d4ff]" : "text-[#8ba3b0] hover:text-[#e2eaf0]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="mailto:kunalmalviya855@gmail.com"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-[#00d4ff]/30 text-[#00d4ff] font-body text-sm font-medium hover:bg-[#00d4ff]/10 transition-all duration-200"
          >
            <span>Hire Me</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          >
            <span className={`block h-px bg-[#e2eaf0] transition-all duration-300 ${menuOpen ? "w-5 rotate-45 translate-y-[4px]" : "w-5"}`} />
            <span className={`block h-px bg-[#e2eaf0] transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-4"}`} />
            <span className={`block h-px bg-[#e2eaf0] transition-all duration-300 ${menuOpen ? "w-5 -rotate-45 -translate-y-[4px]" : "w-5"}`} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-[#0d1117]/95 backdrop-blur-xl border-b border-[#1e2d3d] md:hidden"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="block px-6 py-3 text-[#8ba3b0] hover:text-[#00d4ff] font-body font-medium transition-colors"
                  >
                    <span className="text-[#00d4ff]/40 font-mono text-xs mr-3">0{i + 1}.</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
