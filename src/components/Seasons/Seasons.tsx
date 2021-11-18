import { useEffect, useState } from 'react';
import styled from 'styled-components';

import SelectedSeason from '../SelectedSeason';
import Loader from '../Loader';
import RacesList from '../RacesList';
import getYears from '../../utils/getYears';
import getSeasonData from '../../utils/getSeasonData';
import { Race } from '../../types';
import getRaceData from '../../utils/getRaceData';

export default function Seasons() {
  const seasons: number[] = getYears();
  const [selectedSeason, setSelectedSeason] = useState<number>(seasons[0]);
  const [selectedRace, setSelectedRace] = useState<string | undefined>(undefined);
  const [races, setRaces] = useState<Race[]>([]);
  const [isUpdating, setIsUpdating] = useState(true);

  const loadSeason = async () => {
    const seasonData = await getSeasonData(selectedSeason);
    setRaces(seasonData);
    setIsUpdating(() => false);
  };

  const loadRace = async () => {
    const raceData = await getRaceData(selectedSeason.toString(), selectedRace?.toString() || '');
    console.log('Race data', raceData);
  };

  const onRaceSelect = (race: string) => {
    setSelectedRace(() => race);
  };

  useEffect(() => {
    loadSeason();
  }, [selectedSeason]);

  useEffect(() => {
    loadSeason();
  }, []);

  return (
    <SeasonsWrapper>
      <SelectedSeason
        selectedSeason={selectedSeason}
        setSelectedYear={setSelectedSeason}
        seasons={seasons}
      />
      {isUpdating && <Loader />}
      {!isUpdating && <RacesList races={races} onRaceSelect={onRaceSelect} />}
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
