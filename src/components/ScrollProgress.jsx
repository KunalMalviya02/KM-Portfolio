import { useScroll, motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-0.5 z-[100] origin-left"
      // gradient line
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="w-full h-full bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#10b981]" />
    </motion.div>
  );
}
