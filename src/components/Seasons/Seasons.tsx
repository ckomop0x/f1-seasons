import { Race } from './types';
import SelectedSeason from './SelectedSeason';
import getYears from '../../utils/getYears';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import styled from 'styled-components';
import getSeasons from '../../utils/getSeasons';
import SeasonsList from './SeasonsList';

export default function Seasons() {
  const years: number[] = getYears();
  const [selectedYear, setSelectedYear] = useState<number>(years[0]);
  const [seasons, setSeasons] = useState<Race[]>([]);
  const [isUpdating, setIsUpdating] = useState(true);

  const loadSeasons = async () => {
    const seasonsData = await getSeasons(selectedYear);
    setSeasons(seasonsData);
    setIsUpdating(() => false);
  };

  useEffect(() => {
    loadSeasons();
  }, []);

  return (
    <SeasonsWrapper>
      <SelectedSeason selectedYear={selectedYear} setSelectedYear={setSelectedYear} years={years} />
      {isUpdating && <Loader />}
      {!isUpdating && <SeasonsList seasons={seasons} onSeasonSelect={() => {}} />}
    </SeasonsWrapper>
  );
}

export const SeasonsWrapper = styled.div`
  background: white;
  color: ${({ theme }) => theme.gray1};
  overflow-x: auto;
  overflow-y: auto;
  flex: 1 auto;
  padding: ${({ theme }) => theme.grid * 2}px;
`;
