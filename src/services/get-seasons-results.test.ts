import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import getSeasonsResults from './get-seasons-results';

describe('getSeasonsResults', () => {
  const mockResponse = { MRData: { RaceTable: { Races: [] } } };

  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve(mockResponse),
      }),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('fetches results for the given season and round', async () => {
    const result = await getSeasonsResults('2020', '1');

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('2020/1/results.json'),
    );
    expect(result).toEqual(mockResponse);
  });
});
