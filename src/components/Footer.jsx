import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2d3d] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-[#4a6a7a]">
          © 2026 <span className="text-[#8ba3b0]">Kunal Malviya</span>.
        </div>
        <div className="flex items-center gap-1 font-mono text-xs text-[#4a6a7a]">
          <span>Designed & Developed with</span>
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-red-500 mx-1"
          >
            ♥
          </motion.span>
          
        </div>
      </div>
    </footer>
  );
}
