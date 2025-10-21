import { motion } from "motion/react";
import { easeInOut } from "motion";
import type { SortAction } from "../../algorithms/bubbleSort";

interface ColorLegendProps {
  action?: SortAction;
}

export const ColorLegend: React.FC<ColorLegendProps> = ({ action = "compare" }) => {
  const legendItems = [
    { id: "compare", color: "bg-blue-500", label: "Compare" },
    { id: "swap", color: "bg-orange-500", label: "Swap" },
    { id: "pass", color: "bg-green-500", label: "Sorted" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-300 mt-2"
    >
      {legendItems.map((item, i) => {
        const isActive = item.id === action;
        const pulseAnimation = isActive
          ? {
            scale: [1, 1.12, 1],
            boxShadow: [
              `0 0 0px rgba(255, 255, 255, 0.3)`,
              `0 0 14px rgba(255, 255, 255, 0.6)`,
              `0 0 0px rgba(255, 255, 255, 0.3)`
            ],
            transition: {
              duration: 1.6,
              repeat: Infinity,
              ease: easeInOut
            }
          } : {};

        return (
          <motion.div
            key={i}
            className="flex items-center gap-1 cursor-default select-none"
            animate={{
              scale: isActive ? 1.15 : 1,
              opacity: isActive ? 1 : 0.6
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              duration: 0.3,
            }}
          >
            <motion.span
              animate={pulseAnimation}
              className={`w-4 h-4 rounded ${item.color}`}
            />
            <span
              className={`${isActive ? "text-white font-medium" : "text-gray-400"}`}
            >
              {item.label}
            </span>
          </motion.div>
        )
      })}
    </motion.div>
  )
}