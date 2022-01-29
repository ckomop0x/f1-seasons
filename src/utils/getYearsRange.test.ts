import getYearsRange from 'utils/getYearsRange';

describe('getYearsRange', () => {
  it('should return array of years from ', () => {
    const currentYear = new Date().getFullYear();
    const yearsRange = getYearsRange(currentYear - 5, currentYear).reverse();
    expect(yearsRange.length).toBe(6);
  });
});
