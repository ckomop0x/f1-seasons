import { FC, useEffect, useState } from 'react';

import getSeason from '../../services/api/getSeason';

import SeasonsList from 'components/SeasonsList';
import { RacesResultInterface } from 'types/RacesResult.interface';

interface RacesListProps {
  selectedYear: number;
}

const RacesList: FC<RacesListProps> = ({ selectedYear }) => {
  const [racesList, setRacesList] = useState<RacesResultInterface[]>([]);

  useEffect(() => {
    getSeason(selectedYear).then((data: any) => {
      if (typeof data !== 'string' && data?.MRData?.RaceTable?.Races) {
        setRacesList(() => data.MRData.RaceTable.Races);
      }
    });
  }, [selectedYear]);

  return <SeasonsList seasons={racesList} year={selectedYear} />;
};

export default RacesList;
