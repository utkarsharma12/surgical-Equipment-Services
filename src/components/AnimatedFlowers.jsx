import { motion } from "framer-motion";

const FlowerSVG = ({ color, petals = 5, className = "" }) => {
  const petalElements = [];
  const radius = 22; // Distance from center to petal center
  const petalR = 22; // Radius of each petal
  const holeR = 12; // Radius of the center hole

  // Generate petal positions
  for (let i = 0; i < petals; i++) {
    // Offset by -90 degrees so the first petal is at the top
    const angle = (i * 360) / petals - 90;
    const rad = (angle * Math.PI) / 180;
    const px = 50 + Math.cos(rad) * radius;
    const py = 50 + Math.sin(rad) * radius;
    petalElements.push(<circle key={i} cx={px} cy={py} r={petalR} fill={color} />);
  }

  // Unique ID for the mask to prevent conflicts
  const maskId = `holeMask-${color.replace("#", "")}-${petals}`;

  return (
    <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
      <defs>
        <mask id={maskId}>
          <rect width="100" height="100" fill="white" />
          <circle cx="50" cy="50" r={holeR} fill="black" />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        {/* Central base to connect petals solidly */}
        <circle cx="50" cy="50" r="20" fill={color} />
        {/* The petals */}
        {petalElements}
      </g>
    </svg>
  );
};

const AnimatedFlowers = () => {
  // Define flowers based on the user's provided images
  const flowers = [
    { id: 1, color: "#043254", petals: 5, size: "w-28 h-28", top: "12%", left: "6%", duration: 25 },
    { id: 2, color: "#1f3eb1", petals: 5, size: "w-40 h-40", top: "30%", right: "8%", duration: 35, reverse: true },
    { id: 3, color: "#be117c", petals: 5, size: "w-24 h-24", top: "55%", left: "10%", duration: 20 },
    { id: 4, color: "#2877c4", petals: 6, size: "w-32 h-32", top: "75%", right: "12%", duration: 30, reverse: true },
    { id: 5, color: "#043254", petals: 5, size: "w-20 h-20", top: "85%", left: "15%", duration: 18 },
    { id: 6, color: "#be117c", petals: 5, size: "w-28 h-28", top: "45%", right: "6%", duration: 28 },
    { id: 7, color: "#2877c4", petals: 6, size: "w-16 h-16", top: "18%", right: "20%", duration: 15 },
    { id: 8, color: "#1f3eb1", petals: 5, size: "w-24 h-24", top: "65%", left: "25%", duration: 22, reverse: true },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {flowers.map((f) => (
        <motion.div
          key={f.id}
          className={`absolute ${f.size} opacity-25`}
          style={{ top: f.top, left: f.left, right: f.right }}
          animate={{ rotate: f.reverse ? -360 : 360 }}
          transition={{ repeat: Infinity, duration: f.duration, ease: "linear" }}
        >
          <FlowerSVG color={f.color} petals={f.petals} />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedFlowers;
