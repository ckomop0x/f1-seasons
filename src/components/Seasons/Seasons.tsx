import { useEffect, useState } from 'react';
import styled from 'styled-components';

import SelectedSeason from '../SelectedSeason';
import Loader from '../Loader';
import RacesList from '../RacesList';
import getYears from '../../utils/getYears';
import getSeasonData from '../../utils/getSeasonData';
import { Race } from '../../types';

export default function Seasons() {
  const years: number[] = getYears();
  const [selectedYear, setSelectedYear] = useState<number>(years[0]);
  const [races, setRaces] = useState<Race[]>([]);
  const [isUpdating, setIsUpdating] = useState(true);

  const loadSeasons = async () => {
    const seasonData = await getSeasonData(selectedYear);
    setRaces(seasonData);
    setIsUpdating(() => false);
  };

  useEffect(() => {
    loadSeasons();
  }, []);

  return (
    <SeasonsWrapper>
      <SelectedSeason selectedYear={selectedYear} setSelectedYear={setSelectedYear} years={years} />
      {isUpdating && <Loader />}
      {!isUpdating && <RacesList races={races} onSeasonSelect={() => {}} />}
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
