export default function calculateYears(yearscount: number = 10): number[] {
    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getFullYear();
    const years: number[] = [];

    for (let iterator: number = 0; iterator < yearscount; iterator++) {
        years.push(currentYear - iterator);
    }

    return years;
}
