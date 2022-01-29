import getParamsString from 'utils/getParamsString';

describe('getParamsString', () => {
  it('should return an empty string', () => {
    expect(getParamsString({})).toBe('');
  });

  it('should return an empty string with one set of params', () => {
    expect(getParamsString({ limit: 100 })).toBe('?limit=100');
  });

  it('should return an empty string with multiple sets of params', () => {
    expect(
      getParamsString({
        limit: 100,
        offset: 10
      })
    ).toBe('?limit=100&offset=10');
  });
});
