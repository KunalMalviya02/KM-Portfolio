import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/portfolio";

const categories = ["All", "Frontend", "Backend", "Data", "Tools"];

const categoryColors = {
  Frontend: "#00d4ff",
  Backend: "#7c3aed",
  Data: "#10b981",
  Tools: "#f59e0b",
};

function SkillBar({ skill, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: categoryColors[skill.category] || "#00d4ff" }}
          />
          <span className="font-body text-sm text-[#e2eaf0] font-medium">{skill.name}</span>
          <span
            className="font-mono text-[10px] px-1.5 py-0.5 rounded"
            style={{
              backgroundColor: `${categoryColors[skill.category] || "#00d4ff"}15`,
              color: categoryColors[skill.category] || "#00d4ff",
            }}
          >
            {skill.category}
          </span>
        </div>
        <span className="font-mono text-xs text-[#4a6a7a]">{skill.level}%</span>
      </div>

      {/* Bar */}
      <div className="h-1.5 bg-[#1e2d3d] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full relative skill-bar-fill"
          style={{
            background: `linear-gradient(90deg, ${categoryColors[skill.category] || "#00d4ff"}, ${categoryColors[skill.category] || "#00d4ff"}99)`,
          }}
        />
      </div>
    </motion.div>
  );
}

// Skill pill cloud
const techStack = [
  { name: "React.js", color: "#61dafb" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "Python", color: "#3776ab" },
  { name: "HTML5", color: "#e34f26" },
  { name: "CSS3", color: "#1572b6" },
  { name: "Tailwind", color: "#06b6d4" },
  { name: "Node.js", color: "#339933" },
  { name: "MongoDB", color: "#47a248" },
  { name: "Express", color: "#8ba3b0" },
  { name: "SQL", color: "#f59e0b" },
  { name: "Power BI", color: "#f2c811" },
  { name: "GitHub", color: "#e2eaf0" },
  { name: "VS Code", color: "#007acc" },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-28 px-6">
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
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
              Skills
              <span className="w-6 h-px bg-[#00d4ff]" />
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start" ref={ref}>
          {/* Skill Bars */}
          <div className="space-y-5">
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} inView={inView} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Category Legend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0d1117] border border-[#1e2d3d] rounded-2xl p-6"
            >
              <h3 className="font-display font-semibold text-[#e2eaf0] mb-4">Category Legend</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(categoryColors).map(([cat, color]) => (
                  <div key={cat} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                    <span className="font-body text-sm text-[#8ba3b0]">{cat}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="bg-[#0d1117] border border-[#1e2d3d] rounded-2xl p-6"
            >
              <h3 className="font-display font-semibold text-[#e2eaf0] mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t, i) => (
                  <motion.span
                    key={t.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.04 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111820] border border-[#1e2d3d] font-mono text-xs cursor-default"
                    style={{ color: t.color, borderColor: `${t.color}20` }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: t.color }}
                    />
                    {t.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-[#0d1117] border border-[#1e2d3d] rounded-2xl p-6"
            >
              <h3 className="font-display font-semibold text-[#e2eaf0] mb-4">Certifications</h3>
              <div className="space-y-3">
                {[
                  { name: "Data Analytics", issuer: "Godrej InfoTech", date: "Oct 2024", color: "#10b981" },
                  { name: "Python", issuer: "DevTown", date: "Aug 2023", color: "#7c3aed" },
                ].map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#111820] border border-[#1e2d3d] hover:border-[#00d4ff]/20 transition-colors duration-200"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                      style={{ backgroundColor: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                    >
                      🏅
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-body text-sm font-medium text-[#e2eaf0]">{cert.name}</div>
                      <div className="font-mono text-xs text-[#4a6a7a]">{cert.issuer}</div>
                    </div>
                    <span className="font-mono text-xs text-[#4a6a7a] flex-shrink-0">{cert.date}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
