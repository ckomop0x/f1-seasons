import { FC, useEffect, useState } from 'react';

import getSeason from '../../services/api/getSeason';

import SeasonsList from 'components/SeasonsList';
import { RacesResultInterface } from 'types/RacesResult.interface';

interface RacesListProps {
  selectedSeason: number;
}

const RacesList: FC<RacesListProps> = ({ selectedSeason }) => {
  const [racesList, setRacesList] = useState<RacesResultInterface[]>([]);

  useEffect(() => {
    getSeason(selectedSeason).then((data: any) => {
      if (typeof data !== 'string' && data?.MRData?.RaceTable?.Races) {
        setRacesList(() => data.MRData.RaceTable.Races);
      }
    });
  }, [selectedSeason]);

  return <SeasonsList seasons={racesList} year={selectedSeason} />;
};

export default RacesList;
