import { RaceSeason } from './types';
import { SeasonsWrapper } from './styles';
import SelectedSeason from './SelectedSeason';
import getYears from '../../services/getYears';
import { useState } from 'react';
import Loader from './Loader';

export default function Seasons() {
  const years: number[] = getYears();
  const [selectedYear, setSelectedYear] = useState<number>(years[0]);
  const [seasons, setSeasons] = useState<RaceSeason[]>([]);
  const [isUpdating, setIsUpdating] = useState(true);

  return (
    <SeasonsWrapper>
      <SelectedSeason selectedYear={selectedYear} setSelectedYear={setSelectedYear} years={years} />
      {isUpdating && <Loader />}
    </SeasonsWrapper>
  );
}
