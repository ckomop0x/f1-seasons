import { FC, useEffect, useState } from 'react';
import getSeason from '../../services/api/getSeason';
import { SeasonInterface } from 'types/Season.interface';
import { RacesResultInterface } from 'types/RacesResult.interface';
import SeasonsList from 'components/SeasonsList';

interface RacesListProps {
  selectedYear: number;
}

const RacesList: FC<RacesListProps> = ({ selectedYear }) => {
  const [racesList, setRacesList] = useState<RacesResultInterface[]>([]);

  useEffect(() => {
    getSeason(selectedYear).then((data) => {
      if (typeof data !== 'string' && data?.MRData?.RaceTable?.Races)
        setRacesList(() => data.MRData.RaceTable.Races);
    });
  }, [selectedYear]);

  return (
    <>
      <SeasonsList seasons={racesList} onSeasonSelect={() => {}} />
    </>
  );
};

export default RacesList;
