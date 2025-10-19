import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ALGORITHMS } from "../../algorithms/algorithms";
import type { AlgorithmOption } from "../../types";
import { useClickOutside } from "../../hooks/useClickOutside";

interface AlgorithmSelectorProps {
  selected: string;
  onChange: (id: string) => void;
}

export const AlgorithmSelector: React.FC<AlgorithmSelectorProps> = ({
  selected,
  onChange
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const containerRef =useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setOpen(false))

  const selectedLabel =
    ALGORITHMS.find((algo) => algo.id === selected)?.name || "Select Algorithm";

  return (
    <div ref={containerRef} className="relative w-60 text-sm">
      {/* Selector Button */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen((p) => !p)}
        className="flex w-full items-center justify-between rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-left text-gray-200 hover:bg-gray-700 transition"
      >
        <span>{selectedLabel}</span>
        <svg
          xmlns="https://www.w3.org/2000/svg"
          className={`h-4 w-4 transform transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>

      {/* Dropdown List */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-11 z-10 w-full rounded-md border border-gray-700 bg-gray-900 shadow-lg overflow-hidden"
          >
            {ALGORITHMS.map((algo: AlgorithmOption) => (
              <li
                key={algo.id}
                onClick={() => {
                  onChange(algo.id);
                  setOpen(false);
                }}
                className={`cursor-pointer px-3 py-2 hover:bg-blue-600 hover:text-white transition ${algo.id === selected ? "bg-blue-700 text-white" : ""}`}
              >
                {algo.name}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}