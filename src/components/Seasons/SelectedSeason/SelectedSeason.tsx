import YearsSelect from '../YearsSelect';
import { SelectedSeasonTitle, SelectedSeasonWrapper } from './styles';

interface ISelectedSeasonProps {
  years: number[];
  selectedYear: number;
  setSelectedYear(value: number): void;
}

export default function SelectedSeason({
  years,
  setSelectedYear,
  selectedYear
}: ISelectedSeasonProps) {
  return (
    <SelectedSeasonWrapper>
      <SelectedSeasonTitle>Selected season:</SelectedSeasonTitle>
      <YearsSelect years={years} onChange={setSelectedYear} selectedYear={selectedYear} />
    </SelectedSeasonWrapper>
  );
}
