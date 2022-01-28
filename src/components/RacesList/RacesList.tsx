import { FC, useEffect, useState } from 'react';
import getSeason from '../../services/api/getSeason';

interface RacesListProps {
  selectedYear: number;
}

const RacesList: FC<RacesListProps> = ({ selectedYear }) => {
  const [racesList, setRacesList] = useState([]);

  const loadRaces = async (year: number) => {
    return await getSeason(selectedYear);
  };

  useEffect(() => {
    loadRaces(selectedYear).then((data) => setRacesList(data));
  }, [selectedYear]);

  return (
    <>
      {selectedYear}
      <pre>{JSON.stringify(racesList, null, 2)}</pre>
    </>
  );
};

export default RacesList;
