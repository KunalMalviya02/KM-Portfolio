import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { personal } from "../data/portfolio";

const roles = personal.roles;

function TypewriterText({ texts }) {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[roleIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 60);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 35);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx((r) => (r + 1) % texts.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx, texts]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="inline-block w-0.5 h-7 ml-1 bg-[#00d4ff] align-middle animate-pulse" />
    </span>
  );
}

// Particle dots background
function ParticleField() {
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 8 + 4,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#00d4ff]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ opacity: [0, 0.6, 0], scale: [0, 1, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated grid lines
function GridLines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.035]">
      <div
        className="w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(to right, #00d4ff 1px, transparent 1px), linear-gradient(to bottom, #00d4ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <GridLines />
      <ParticleField />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(0,212,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="section-label inline-flex items-center gap-2">
                <span className="w-6 h-px bg-[#00d4ff]" />
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight mb-4"
            >
              Kunal
              <br />
              <span className="gradient-text">Malviya</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="font-display text-xl sm:text-2xl text-[#8ba3b0] font-medium mb-6 h-9"
            >
              <TypewriterText texts={roles} />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="font-body text-[#8ba3b0] text-base leading-relaxed max-w-xl mb-8"
            >
              Building modern web applications & data-driven solutions. Computer Engineering student at{" "}
              <span className="text-[#e2eaf0]">DIT Pune</span> with a passion for clean code and meaningful user experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-5 justify-center lg:justify-start"
            >
              <a
                href="cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-3.5 bg-[#00d4ff] text-[#050a0e] font-body font-bold text-[15px] rounded-full hover:bg-[#00b8e6] shadow-[0_0_20px_rgba(0,212,255,0.25)] hover:shadow-[0_0_25px_rgba(0,212,255,0.45)] transition-all duration-300 flex items-center gap-2.5"
              >
                Download CV
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300">
                  <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3.5 border hover:border-2 border-[#00d4ff] text-[#00d4ff] font-body font-semibold text-[15px] rounded-full hover:bg-[#00d4ff]/10 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all duration-300"
              >
                Let's Talk
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-5 mt-8 justify-center lg:justify-start"
            >
              {[
                {
                  href: personal.instagram,
                  label: "Instagram",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5c0 1.966-1.784 3.75-3.75 3.75h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm8.75 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                    </svg>
                  ),
                },
                {
                  href: personal.github,
                  label: "GitHub",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  href: personal.linkedin,
                  label: "LinkedIn",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },

              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a6a7a] hover:text-[#00d4ff] transition-colors duration-200"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
              <div className="w-16 h-px bg-[#1e2d3d]" />
              <span className="font-mono text-xs text-[#4a6a7a]">Pune, India</span>
            </motion.div>
          </motion.div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-[#00d4ff]/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-dashed border-[#7c3aed]/15"
              />

              {/* Floating glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 blur-2xl scale-110" />

              {/* Image container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden border border-[#1e2d3d] relative">
                  <img
                    src="/profile.jpg"
                    alt="Kunal Malviya"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Overlay tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a0e]/40 to-transparent" />
                </div>

                {/* Decorative corner accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#00d4ff] rounded-tl-lg" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#7c3aed] rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#7c3aed] rounded-bl-lg" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#00d4ff] rounded-br-lg" />
              </motion.div>

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -right-4 top-8 bg-[#0d1117] border border-[#1e2d3d] rounded-xl px-3 py-2 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span className="font-mono text-xs text-[#8ba3b0]">Available</span>
                </div>
              </motion.div>

              {/* Open to Work */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -left-6 bottom-12 bg-[#0d1117] border border-[#1e2d3d] rounded-xl px-3 py-2 shadow-xl"
              >
                <div className="font-display font-bold text-[#00d4ff] text-lg leading-none">10+</div>
                <div className="font-mono text-xs text-[#8ba3b0]">Projects Built</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-[#4a6a7a]">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-[#00d4ff] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
