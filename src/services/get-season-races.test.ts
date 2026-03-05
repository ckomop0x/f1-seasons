import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import getSeasonRaces from './get-season-races';

describe('getSeasonRaces', () => {
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

  it('fetches races for the given year', async () => {
    const result = await getSeasonRaces(2020);

    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('2020.json'));
    expect(result).toEqual(mockResponse);
  });

  it('accepts a string year', async () => {
    await getSeasonRaces('2021');

    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('2021.json'));
  });
});
