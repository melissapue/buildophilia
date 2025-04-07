export function parseFallbackText(text: string) {
  const lines = text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  return {
    brandName: lines[0]?.replace(/^1\.\s*/, '') ?? '',
    tagline: lines[1]?.replace(/^2\.\s*/, '') ?? '',
    tone: lines[2]?.replace(/^3\.\s*/, '') ?? '',
    origin: lines[3]?.replace(/^4\.\s*/, '') ?? '',
    powerStatement: lines[4]?.replace(/^5\.\s*/, '') ?? '',
    keywords:
      lines[5]
        ?.replace(/^6\.\s*/, '')
        .split(',')
        .map((k) => k.trim()) ?? [],
  };
}
