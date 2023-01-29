export default function calculateYears(yearsCount = 10): number[] {
  const currentDate: Date = new Date();
  const currentYear: number = currentDate.getFullYear();
  const years: number[] = [];

  for (let iterator = 0; iterator < yearsCount; iterator++) {
    years.push(currentYear - iterator);
  }

  return years;
}
