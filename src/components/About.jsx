import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personal } from "../data/portfolio";

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Technologies", value: "10+" },
  { label: "Internship", value: "3 months" },
  { label: "Events Led", value: "7" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — Text */}
          <div>
            <AnimatedSection>
              <span className="section-label inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-[#00d4ff]" />
                About Me
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-6">
                Crafting ideas into{" "}
                <span className="gradient-text">digital reality</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="font-body text-[#8ba3b0] text-base leading-relaxed mb-5">
                {personal.about}
              </p>
              <p className="font-body text-[#8ba3b0] text-base leading-relaxed mb-8">
                Currently pursuing <span className="text-[#e2eaf0] font-medium">B.E. in Computer Engineering</span> at{" "}
                <span className="text-[#e2eaf0] font-medium">Dr. D. Y. Patil Institute of Technology, Pune</span>{" "}
                (2022–2026) with a CGPA of <span className="text-[#00d4ff] font-medium">7.11</span>.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-wrap gap-3">
                {["Quick Learner", "Problem Solver", "Team Player", "Detail-Oriented"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-[#0d1117] border border-[#1e2d3d] font-mono text-xs text-[#8ba3b0] hover:border-[#00d4ff]/40 hover:text-[#00d4ff] transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Stats Grid */}
          <div ref={ref}>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#0d1117] border border-[#1e2d3d] rounded-2xl p-6 hover:border-[#00d4ff]/30 transition-colors duration-200 group"
                >
                  <div className="font-display font-bold text-4xl gradient-text mb-1 group-hover:scale-105 transition-transform duration-200">
                    {s.value}
                  </div>
                  <div className="font-body text-[#4a6a7a] text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#0d1117] border border-[#1e2d3d] rounded-2xl p-6 hover:border-[#10b981]/30 transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-lg flex-shrink-0">
                  🎓
                </div>
                <div>
                  <div className="font-display font-semibold text-[#e2eaf0] text-base leading-tight mb-1">
                    B.E. Computer Engineering
                  </div>
                  <div className="font-body text-[#4a6a7a] text-sm mb-2">
                    Dr. D.Y. Patil Institute of Technology, Pune
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#8ba3b0]">2022 – 2026</span>
                    <span className="font-mono text-xs text-[#10b981]">CGPA: 7.11</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
