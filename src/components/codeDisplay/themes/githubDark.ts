import type { PrismTheme } from "prism-react-renderer";

const githubDark: PrismTheme = {
  plain: {
    backgroundColor: "#0d1117",
    color: "#e6edf3",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#8b949e" },
    },
    {
      types: ["punctuation"],
      style: { color: "#c9d1d9" },
    },
    {
      types: ["property", "tag", "boolean", "number", "constant", "symbol"],
      style: { color: "#79c0ff" },
    },
    {
      types: ["attr-name", "string", "char", "builtin"],
      style: { color: "#a5d6ff" },
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: { color: "#d2a8ff" },
    },
    {
      types: ["keyword"],
      style: { color: "#ff7b72" },
    },
    {
      types: ["function", "class-name"],
      style: { color: "#d2a8ff" },
    },
    {
      types: ["regex", "important"],
      style: { color: "#a5d6ff" },
    },
    {
      types: ["deleted"],
      style: { color: "#ff7b72" },
    },
    {
      types: ["inserted"],
      style: { color: "#3fb950" },
    },
  ],
};

export default githubDark;
