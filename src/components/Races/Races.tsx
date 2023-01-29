'use client';

import RacesList from 'components/Races/RacesList';
import { FC, useCallback, useEffect, useState } from 'react';

import getSeasonRaces from '../../services/get-season-races';

interface RacesProps {
  season: string | string[] | undefined;
}

const Races: FC<RacesProps> = ({ season }) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [races, setRaces] = useState([]);

  const loadRaces = useCallback(async (): Promise<void> => {
    if (!season) {
      return;
    }

    try {
      const seasonString = Array.isArray(season) ? season.join('') : season;
      const seasonRaces = await getSeasonRaces(seasonString);
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

  return <RacesList races={races} />;
};

export default Races;
