export const languages = {
  javascript: {
    id: 1,
    label: "JavaScript",
    icon: "javascript.svg",
  },
  typescript: {
    id: 2,
    label: "TypeScript",
    icon: "typescript.svg",
  },
  python: {
    id: 3,
    label: "Python",
    icon: "python.svg",
  },
  c: {
    id: 4,
    label: "C",
    icon: "c.svg",
  },
  cpp: {
    id: 5,
    label: "C++",
    icon: "cpp.svg",
  },
  csharp: {
    id: 6,
    label: "C#",
    icon: "csharp.svg",
  },
  go: {
    id: 7,
    label: "Go",
    icon: "go.svg",
  },
  java: {
    id: 8,
    label: "Java",
    icon: "java.svg",
  },
  kotlin: {
    id: 9,
    label: "Kotlin",
    icon: "kotlin.svg",
  },
  rust: {
    id: 10,
    label: "Rust",
    icon: "rust.svg",
  },
  swift: {
    id: 11,
    label: "Swift",
    icon: "swift.svg",
  },
  ruby: {
    id: 12,
    label: "Ruby",
    icon: "ruby.svg",
  },
} as const;

export type LanguageKey = keyof typeof languages;

export function getLanguageLabel(language: string): string {
  return languages[language as LanguageKey]?.label ?? language;
}

export const prismLanguageMap: Record<string, string> = {
  javascript: "javascript",
  typescript: "typescript",
  python: "python",
  c: "c",
  cpp: "cpp",
  csharp: "csharp",
  go: "go",
  java: "java",
  kotlin: "kotlin",
  rust: "rust",
  ruby: "ruby",
  swfit: "swift",
} as const;
