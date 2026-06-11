import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

function ScrollVine() {
  const { scrollYProgress } = useScroll();

  // Create an array of leaves/flowers to position along the vine
  // Each has a scroll trigger point at which it blooms
  const elements = [
    { id: 1, cx: 35, cy: 15, trigger: 0.1, type: "flower", color: "#6366f1" },
    { id: 2, cx: 70, cy: 30, trigger: 0.25, type: "leaf", color: "#38bdf8" },
    { id: 3, cx: 30, cy: 50, trigger: 0.45, type: "flower", color: "#8b5cf6" },
    { id: 4, cx: 65, cy: 70, trigger: 0.65, type: "leaf", color: "#14b8a6" },
    { id: 5, cx: 40, cy: 85, trigger: 0.85, type: "flower", color: "#a855f7" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden opacity-70">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/* Main Vine Path */}
        <motion.path
          d="M 50, -5 C 75, 20 25, 40 50, 60 C 75, 80 25, 100 50, 105"
          fill="none"
          stroke="url(#vineGradient)"
          strokeWidth="0.8"
          strokeLinecap="round"
          style={{ pathLength: scrollYProgress }}
        />

        {/* Flowers and Leaves */}
        {elements.map((el) => (
          <BloomElement key={el.id} el={el} progress={scrollYProgress} />
        ))}

        <defs>
          <linearGradient id="vineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function BloomElement({ el, progress }) {
  // The element blooms quickly once the scroll progress reaches its trigger
  const scale = useTransform(
    progress,
    [Math.max(0, el.trigger - 0.05), el.trigger + 0.05],
    [0, 1]
  );
  
  const rotate = useTransform(
    progress,
    [el.trigger - 0.05, el.trigger + 0.1],
    [-45, 0]
  );

  return (
    <motion.g
      style={{ scale, rotate, originX: "50%", originY: "50%" }}
      transform={`translate(${el.cx}, ${el.cy})`}
    >
      {el.type === "flower" ? (
        <path
          d="M 0 0 C -2 -2 -3 -5 0 -6 C 3 -5 2 -2 0 0 M 0 0 C 2 -2 5 -3 6 0 C 5 3 2 2 0 0 M 0 0 C 2 2 3 5 0 6 C -3 5 -2 2 0 0 M 0 0 C -2 2 -5 3 -6 0 C -5 -3 -2 -2 0 0"
          fill={el.color}
          opacity="0.8"
        />
      ) : (
        <path
          d="M 0 0 C 3 -2 4 -5 0 -8 C -1 -5 -2 -2 0 0"
          fill={el.color}
          opacity="0.8"
        />
      )}
      <circle cx="0" cy="0" r="1.5" fill="#fde047" opacity="0.9" />
    </motion.g>
  );
}

export default ScrollVine;
