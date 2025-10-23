import { useMemo, useState, useEffect } from "react";
import { motion } from "motion/react";
import "./prismLanguages";
import { Highlight } from "prism-react-renderer";
import githubDark from "./themes/githubDark";

import { getSnippetsByAlgorithm } from "./importSnippets";
import { prismLanguageMap } from "./languages";
import { LanguageSelect } from "./LanguageSelect";

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

interface CodeDisplayProps {
  algorithmId: string;
}

export const CodeDisplay: React.FC<CodeDisplayProps> = ({ algorithmId }) => {
  const languageMap = useMemo(
    () => getSnippetsByAlgorithm(algorithmId),
    [algorithmId]);
  const languages = Object.keys(languageMap);

  const [language, setLanguage] = useState(
    languages.includes("javascript")
      ? "javascript"
      : languages[0] || ""
  );
  const [copied, setCopied] = useState<boolean>(false);

  const code = languageMap[language] ||"// No Snippet Available For This Language";

  const handleCopy = async () => {
    const ok = await copyToClipboard(code);
    if (!ok) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  
  useEffect(() => {
    console.log("Language:", language)
  }, [language])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full bg-gray-900 border border-gray-800 rounded-md p-4 mt-4"
    >
      {/* Header Row */}
      <div className="flex flex-wrap justify-between items-center mb-3 gap-2">
        <h3 className="text-gray-200 font-semibold text-lg">
          Code Example
        </h3>

        <div className="flex gap-2 items-center">
          {languages.length > 0 && (
            <LanguageSelect 
              selected={language}
              available={languages}
              onChange={setLanguage}
            />
          )}

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="px-3 py-1 rounded-md text-sm font-medium bg-gray-700 hover:bg-gray-600 text-gray-200 transition"
          >
            {copied ? "✓ Copied!" : "Copy"}
          </motion.button>
        </div>
      </div>

      {/* Code Box */}
      <div className="overflow-auto max-h-96 rounded-md">
        <Highlight
          code={code.trim()}
          language={prismLanguageMap[language.toLowerCase()] || language.toLowerCase()}
          theme={githubDark}
        >
          {({
            className,
            style,
            tokens,
            getLineProps,
            getTokenProps
          }) => (
            <pre
              className={`${className} text-sx sm:text-sm rounded-md p-4`}
              style={{
                ...style,
                background: "transparent",
                color: "#e5e7eb",
                fontFamily: "JetBrains Mono, Fira, Code, monospace",
              }}
            >
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line })}
                >
                  {line.map((token, key) => (
                    <span key={key}{...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </motion.div>
  )
}