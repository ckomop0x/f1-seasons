export default function getYears(yearsCount: number = 10): number[] {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const years: number[] = [];

  for (let iterator = 0; iterator < yearsCount; iterator++) {
    years.push(currentYear - iterator);
  }

  return years;
}
