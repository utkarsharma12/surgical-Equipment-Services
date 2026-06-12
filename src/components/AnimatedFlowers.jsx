import { motion } from "framer-motion";

const CrossSVG = ({ color, outlined, className = "" }) => {
  // A continuous path for a rounded medical cross
  const pathData =
    "M 40 40 L 40 20 A 10 10 0 0 1 60 20 L 60 40 L 80 40 A 10 10 0 0 1 80 60 L 60 60 L 60 80 A 10 10 0 0 1 40 80 L 40 60 L 20 60 A 10 10 0 0 1 20 40 Z";

  return (
    <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
      <path
        d={pathData}
        fill={outlined ? "transparent" : color}
        stroke={outlined ? color : "transparent"}
        strokeWidth={outlined ? "8" : "0"}
        strokeLinejoin="round"
      />
    </svg>
  );
};

const AnimatedFlowers = () => {
  // Define crosses based on the user's reference image
  const crosses = [
    { id: 1, color: "#10b981", outlined: true, size: "w-24 h-24", top: "15%", left: "60%", duration: 30 }, // green outline top-ish
    { id: 2, color: "#2563eb", outlined: false, size: "w-14 h-14", top: "70%", left: "45%", duration: 20, reverse: true }, // blue solid bottom
    { id: 3, color: "#2563eb", outlined: true, size: "w-40 h-40", top: "45%", right: "5%", duration: 45 }, // large blue outline right
    { id: 4, color: "#10b981", outlined: false, size: "w-12 h-12", top: "35%", left: "15%", duration: 25, reverse: true }, // extra small green
    { id: 5, color: "#3b82f6", outlined: true, size: "w-20 h-20", top: "80%", left: "10%", duration: 35 }, // extra light blue
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {crosses.map((f) => (
        <motion.div
          key={f.id}
          className={`absolute ${f.size} opacity-90`}
          style={{ top: f.top, left: f.left, right: f.right }}
          animate={{ rotate: f.reverse ? -360 : 360 }}
          transition={{ repeat: Infinity, duration: f.duration, ease: "linear" }}
        >
          <CrossSVG color={f.color} outlined={f.outlined} />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedFlowers;
