import { motion } from "framer-motion";

const blobs = [
  { color: "#00d4ff", size: 600, x: "10%", y: "15%", duration: 18 },
  { color: "#7c3aed", size: 500, x: "70%", y: "60%", duration: 22 },
  { color: "#10b981", size: 400, x: "85%", y: "10%", duration: 16 },
  { color: "#00d4ff", size: 350, x: "30%", y: "80%", duration: 20 },
];

export default function MeshBackground() {
  return (
    <div className="mesh-bg pointer-events-none">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="mesh-blob"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            backgroundColor: blob.color,
          }}
          animate={{
            x: [0, 40, -30, 20, 0],
            y: [0, -30, 40, -20, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
}
