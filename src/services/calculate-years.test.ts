import { describe, expect, it } from 'vitest';

import calculateYears from './calculate-years';

describe('calculateYears', () => {
  it('returns an array starting from the current year', () => {
    const years = calculateYears();
    const currentYear = new Date().getFullYear();

    expect(years[0]).toBe(currentYear);
  });

  it('ends at 1950', () => {
    const years = calculateYears();

    expect(years[years.length - 1]).toBe(1950);
  });

  it('returns correct number of years', () => {
    const years = calculateYears();
    const currentYear = new Date().getFullYear();

    expect(years.length).toBe(currentYear - 1949);
  });

  it('returns years in descending order', () => {
    const years = calculateYears();

    for (let i = 0; i < years.length - 1; i++) {
      expect(years[i]).toBeGreaterThan(years[i + 1]);
    }
  });
});
