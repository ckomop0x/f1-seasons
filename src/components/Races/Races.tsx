'use client';

import RacesList from 'components/Races/RacesList';
import { FC, useCallback, useEffect, useState } from 'react';

import getSeasonRaces from '../../services/get-season-races';

interface RacesProps {
  season: number;
}

const Races: FC<RacesProps> = ({ season }) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [races, setRaces] = useState([]);

  const loadRaces = useCallback(async (): Promise<void> => {
    if (!season) {
      return;
    }

    try {
      const seasonRaces = await getSeasonRaces(season);
      setRaces(seasonRaces.MRData.RaceTable.Races);
      setIsUpdating(false);
    } catch {
      setIsUpdating(false);
    }
  }, [season]);

  useEffect(() => {
    if (season) {
      void loadRaces();
      setIsUpdating(true);
    }
  }, [loadRaces, season]);

  return <RacesList races={races} isUpdating={isUpdating} />;
};

export default Races;
