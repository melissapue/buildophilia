import { parseFallbackText } from '../parseFallback';

describe('parseFallbackText', () => {
  const sample = `
1. Hex & Co.
2. Turning chaos into clarity — one spell at a time.
3. Mystical, precise, bold
4. Born from a late-night idea and the need to express something real.
5. You turn fuzzy founder thoughts into bold clarity.
6. ritual, founders, transformation
`;

  it('parses fallback content correctly', () => {
    const result = parseFallbackText(sample);

    expect(result.brandName).toBe('Hex & Co.');
    expect(result.tagline).toMatch(/chaos/);
    expect(result.tone).toContain('Mystical');
    expect(result.origin).toContain('late-night');
    expect(result.powerStatement).toContain('clarity');
    expect(result.keywords).toEqual(['ritual', 'founders', 'transformation']);
  });
});
function expect(tagline: string) {
  throw new Error('Function not implemented.');
}
