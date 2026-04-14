import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "../data/portfolio";

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group bg-[#0d1117] border border-[#1e2d3d] rounded-2xl overflow-hidden hover:border-opacity-60 transition-all duration-300 flex flex-col"
      style={{ "--project-color": project.color }}
    >
      {/* Card Header */}
      <div className="relative p-6 pb-4">
        {/* Gradient accent top bar */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0.3, opacity: hovered ? 1 : 0.5 }}
          transition={{ duration: 0.4 }}
          className="absolute top-0 left-0 right-0 h-0.5 origin-left"
          style={{ backgroundColor: project.color }}
        />

        {/* Corner glow on hover */}
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-bl-full pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle, ${project.color}12 0%, transparent 70%)`,
            opacity: hovered ? 1 : 0,
          }}
        />

        <div className="flex items-start justify-between mb-4 relative z-10">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border"
            style={{
              backgroundColor: `${project.color}12`,
              borderColor: `${project.color}25`,
            }}
          >
            {project.icon}
          </div>

          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#111820] border border-[#1e2d3d] flex items-center justify-center text-[#4a6a7a] hover:text-[#e2eaf0] hover:border-[#e2eaf0]/20 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200"
              style={{
                backgroundColor: `${project.color}10`,
                borderColor: `${project.color}30`,
                color: project.color,
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <h3 className="font-display font-bold text-xl text-[#e2eaf0] leading-tight mb-1">
          {project.title}
        </h3>
        <p className="font-mono text-xs mb-3" style={{ color: project.color }}>
          {project.subtitle}
        </p>
        <p className="font-body text-sm text-[#8ba3b0] leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Highlights */}
      <div className="px-6 pb-4 flex-1">
        <div className="space-y-2">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: project.color }} />
              <span className="font-body text-xs text-[#4a6a7a]">{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="px-6 pb-6">
        <div className="pt-4 border-t border-[#1e2d3d] flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-2 py-1 rounded-md bg-[#111820] border border-[#1e2d3d] text-[#4a6a7a]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      {/* Background glow */}
      <div
        className="absolute right-0 top-1/3 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#00d4ff]" />
              Projects
              <span className="w-6 h-px bg-[#00d4ff]" />
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Things I've <span className="gradient-text">Built</span>
            </h2>
            <p className="font-body text-[#4a6a7a] text-base max-w-lg mx-auto">
              A selection of projects spanning full-stack web development and data analytics.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/KunalMalviya02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d1117] border border-[#1e2d3d] text-[#8ba3b0] rounded-xl font-body text-sm hover:border-[#00d4ff]/40 hover:text-[#e2eaf0] transition-all duration-200 group"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View all projects on GitHub
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
