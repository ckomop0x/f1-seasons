import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import getSavedDrivers from './setSavedDrivers';

describe('getSavedDrivers', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('returns an empty array when localStorage is empty', () => {
    expect(getSavedDrivers()).toEqual([]);
  });

  it('parses and returns saved drivers from localStorage', () => {
    const drivers = ['VER', 'HAM', 'LEC'];

    localStorage.setItem('savedDrivers', JSON.stringify(drivers));
    expect(getSavedDrivers()).toEqual(drivers);
  });

  it('returns an empty array when savedDrivers key does not exist', () => {
    localStorage.removeItem('savedDrivers');
    expect(getSavedDrivers()).toEqual([]);
  });
});
