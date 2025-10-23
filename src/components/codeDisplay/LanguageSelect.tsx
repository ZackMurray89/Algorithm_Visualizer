import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { LogoLoader } from "../common/LogoLoader";

import { languages, getLanguageLabel } from "./languages";

interface LanguageSelectProps {
  selected: string;
  available: string[];
  onChange: (language: string) => void;
}

export const LanguageSelect: React.FC<LanguageSelectProps> = ({
  selected,
  available,
  onChange
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const selectedMeta = languages[selected as keyof typeof languages];

  return (
    <div className="relative text-sm text-gray-200">
      {/* Current Selection Button */}
      <button
        onClick={() =>setOpen((p) => !p)}
        className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-md border border-gray-700 hover:bg-gray-700 transition"
      >
        {selectedMeta && (
          <LogoLoader 
            name={selectedMeta.icon} 
            size={18} 
            className="shrink-0" 
          />
        )}
        <span>
          {getLanguageLabel(selected)}
        </span>
        <svg
          className={`ml-2 w-3 h-3 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown List */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1 w-44 bg-gray-900 border border-gray-700 rounded-md shadow-lg overflow-hidden"
          >
            {available.map((lang) => {
              const meta = languages[lang as keyof typeof languages];
              return (
                <li
                  key={lang}
                  onClick={() => {
                    onChange(lang);
                    setOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-800 ${
                    selected === lang ? "bg-gray-800" : ""
                  }`}
                >
                  {meta && (
                    <LogoLoader 
                      name={meta.icon}
                      size={16}
                      className="shrink-0 text-gray-200"
                    />
                  )}
                  <span className="text-sm leading-none">
                    {getLanguageLabel(lang)}
                  </span>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}