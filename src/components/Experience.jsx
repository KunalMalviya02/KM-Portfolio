import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "../data/portfolio";

function ExperienceCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-[#0d1117] border border-[#1e2d3d] rounded-2xl p-7 hover:border-opacity-60 transition-all duration-300"
      style={{ "--exp-color": item.color }}
    >
      {/* Accent line */}
      <motion.div
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
        className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full origin-top"
        style={{ backgroundColor: item.color }}
      />

      <div className="pl-4">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="font-mono text-xs px-2 py-0.5 rounded"
                style={{ backgroundColor: `${item.color}15`, color: item.color }}
              >
                {item.type}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-[#e2eaf0]">{item.role}</h3>
            <p className="font-body text-[#8ba3b0] text-sm font-medium mt-0.5">{item.company}</p>
          </div>
          <div className="text-right">
            <span className="font-mono text-xs text-[#4a6a7a] bg-[#111820] border border-[#1e2d3d] rounded-lg px-3 py-1.5 inline-block">
              {item.duration}
            </span>
          </div>
        </div>

        {/* Points */}
        <ul className="space-y-2">
          {item.points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.15 + i * 0.07 }}
              className="flex items-start gap-3"
            >
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="font-body text-sm text-[#8ba3b0] leading-relaxed">{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// Timeline connector
function TimelineConnector({ color }) {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="flex flex-col items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-px h-2"
            style={{ backgroundColor: color, opacity: 1 - i * 0.18 }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      {/* Gradient bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(16,185,129,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto">
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
              Experience
              <span className="w-6 h-px bg-[#00d4ff]" />
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl">
              Where I've <span className="gradient-text">Worked & Led</span>
            </h2>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1e2d3d] to-transparent" />

          <div className="space-y-3">
            {experience.map((item, index) => (
              <div key={index}>
                <ExperienceCard item={item} index={index} />
                {index < experience.length - 1 && (
                  <TimelineConnector color={item.color} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14"
        >
          <div className="text-center mb-6">
            <h3 className="font-display font-semibold text-xl text-[#e2eaf0]">
              Certifications
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Data Analytics Certification",
                issuer: "Godrej InfoTech Pvt. Ltd.",
                date: "October 2024",
                desc: "SQL, Power BI, data cleaning & visualization",
                icon: "📊",
                color: "#10b981",
              },
              {
                name: "Python Certification",
                issuer: "DevTown",
                date: "August 2023",
                desc: "Python fundamentals, logic & problem-solving",
                icon: "🐍",
                color: "#7c3aed",
              },
            ].map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-[#0d1117] border border-[#1e2d3d] rounded-2xl p-5 flex items-start gap-4 hover:border-[#00d4ff]/25 transition-colors duration-200"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 border"
                  style={{ backgroundColor: `${cert.color}12`, borderColor: `${cert.color}25` }}
                >
                  {cert.icon}
                </div>
                <div>
                  <div className="font-display font-semibold text-[#e2eaf0] text-sm mb-0.5">
                    {cert.name}
                  </div>
                  <div className="font-body text-xs text-[#4a6a7a] mb-1">{cert.issuer}</div>
                  <div className="font-body text-xs text-[#8ba3b0]">{cert.desc}</div>
                  <div className="font-mono text-xs mt-2" style={{ color: cert.color }}>
                    {cert.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
