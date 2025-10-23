export const snippetModules = import.meta.glob("./snippets/**/*", {
  query: "?raw",
  import: "default",
  eager: true,
});

const allSnippets: Record<string, Record<string, string>> = {};

for (const [path, code] of Object.entries(snippetModules)) {
  const match = path.match(/snippets\/([^/]+)\/([^/.]+)\./);
  if (!match) continue;

  const language = match[1];
  const algorithm = match[2];

  if (!allSnippets[algorithm]) allSnippets[algorithm] = {};
  allSnippets[algorithm][language] = code as string;
}

export function getSnippetsByAlgorithm(algorithmId: string) {
  const key =
    Object.keys(allSnippets).find(
      (k) => k.toLowerCase() === algorithmId.toLowerCase()
    ) ?? algorithmId;

  return allSnippets[key] ?? {};
}

export { allSnippets };
