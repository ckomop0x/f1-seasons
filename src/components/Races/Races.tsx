'use client';

import RacesList from 'components/Races/RacesList';
import { FC, useEffect, useState } from 'react';

import getSeasonRaces from '../../services/get-season-races';

interface RacesProps {
  season: number;
}

const Races: FC<RacesProps> = ({ season }) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [races, setRaces] = useState([]);

  useEffect(() => {
    if (!season) {
      return;
    }

    const controller = new AbortController();

    getSeasonRaces(season)
      .then(data => {
        if (!controller.signal.aborted) {
          setRaces(data.MRData.RaceTable.Races);
          setIsUpdating(false);
        }
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setIsUpdating(false);
        }
      });

    return () => controller.abort();
  }, [season]);

  return <RacesList races={races} isUpdating={isUpdating} />;
};

export default Races;
