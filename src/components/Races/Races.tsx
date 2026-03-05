'use client';

import RacesList from 'components/Races/RacesList';
import { FC, useEffect, useState } from 'react';

import getSeasonRaces from '../../services/get-season-races';

interface RacesProps {
  season: number;
}

const Races: FC<RacesProps> = ({ season }) => {
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
        }
      })
      .catch(() => {});

    return () => controller.abort();
  }, [season]);

  return <RacesList races={races} />;
};

export default Races;
