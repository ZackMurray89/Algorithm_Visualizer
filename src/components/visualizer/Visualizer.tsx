import { motion, AnimatePresence } from "motion/react";
import type { SortAction } from "../../algorithms/bubbleSort";

interface VisualizerProps {
  array: number[];
  highlights?: number[];
  action?: SortAction;
}

export const Visualizer: React.FC<VisualizerProps> = ({ 
  array,
  highlights = [],
  action = "compare" 
}) => {
  if (!array.length) {
    return (
      <div className="w-full h-64 flex justify-center items-center bg-gray-900 border border-gray-800 rounded-md p-4">
        <motion.p
          key="empty"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500 text-sm"
        >
          Click "Generate Array" To Create New Data
        </motion.p>
      </div>
    )
  }

  const maxValue = Math.max(...array);
  const barCount = array.length;

  const containerWidthPct = 0.8;
  const containerHeightPct = 0.8;

  const barWidth = (containerWidthPct * 100) / barCount;
  const heightScale = containerHeightPct / maxValue;

  const getHighlightColor = (act: SortAction): string => {
    switch (act) {
      case "compare": return "#3b82f6";
      case "swap": return "#f97316";
      case "pass": return "#22c55e";
      case "done": return "#10b981";
      default: return "#22c55e"
    }
  }

  return (
    <div className="w-full h-64 flex justify-center items-end bg-gray-900 border border-gray-800 rounded-md p-4 overflow-hidden">
      <div className="flex items-end justify-center h-full w-[80%]">
        <AnimatePresence initial={false}>
          {array.map((val, i) => {
            const isHighlighted = highlights.includes(i);
            const color = isHighlighted ? getHighlightColor(action) : "#16a34a";
          
            return (
              <motion.div 
                key={i}
                layout
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: `${val * heightScale * 100}%`,
                  opacity: 1,
                  backgroundColor: color,
                }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.008,
                }}
                className={`rounded-t mx-[1px] ${
                  isHighlighted ? "shadow-lg shadow-current/40" : ""
                }`}
                style={{
                  width: `${barWidth}%`
                }}
              />
            )
          })}
        </AnimatePresence>
      </div>      
    </div>
  )
}