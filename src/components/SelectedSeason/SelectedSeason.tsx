import SeasonsSelect from '../SeasonsSelect';
import { SelectedSeasonTitle, SelectedSeasonWrapper } from './styles';

interface ISelectedSeasonProps {
  seasons: number[];
  selectedSeason: number;
  setSelectedYear(value: number): void;
}

export default function SelectedSeason({
  seasons,
  setSelectedYear,
  selectedSeason
}: ISelectedSeasonProps) {
  return (
    <SelectedSeasonWrapper>
      <SelectedSeasonTitle>Selected season:</SelectedSeasonTitle>
      <SeasonsSelect seasons={seasons} onChange={setSelectedYear} selectedSeason={selectedSeason} />
    </SelectedSeasonWrapper>
  );
}
