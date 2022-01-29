import { FC, useEffect } from 'react';
import RacesList from 'components/RacesList';

interface SeasonProps {
  year: number;
}

const Season: FC<SeasonProps> = ({ year }) => {
  useEffect(() => {}, []);

  return (
    <>
      <RacesList selectedYear={year} />
    </>
  );
};

export default Season;
