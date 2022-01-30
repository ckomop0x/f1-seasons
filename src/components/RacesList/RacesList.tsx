import { FC, useEffect, useState } from 'react';

import getSeason from '../../services/api/getSeason';

import SeasonsList from 'components/SeasonsList';
import { RacesResultInterface } from 'types/RacesResult.interface';
import { SeasonInterface } from 'types/Season.interface';

interface RacesListProps {
  selectedYear: number;
}

const RacesList: FC<RacesListProps> = ({ selectedYear }) => {
  const [racesList, setRacesList] = useState<RacesResultInterface[]>([]);

  useEffect(() => {
    getSeason(selectedYear).then((data) => {
      if (typeof data !== 'string' && data?.MRData?.RaceTable?.Races) {
        setRacesList(() => data.MRData.RaceTable.Races);
      }
    });
  }, [selectedYear]);

  return <SeasonsList seasons={racesList} onSeasonSelect={() => {}} />;
};

export default RacesList;
