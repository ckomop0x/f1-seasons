export default function calculateYears(): number[] {
  const currentDate: Date = new Date();
  const currentYear: number = currentDate.getFullYear();
  const years: number[] = [];
  const yearsCount = currentDate.getFullYear() - 1949;

  for (let iterator = 0; iterator < yearsCount; iterator++) {
    years.push(currentYear - iterator);
  }

  return years;
}
