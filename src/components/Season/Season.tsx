import Loader from 'components/Loader';
import { SelectedSeason } from 'components/Seasons/styles';
import YearsSelect from 'components/SeasonsSelect/SeasonsSelect';
import RacesList from 'components/RacesList';
import { FormEvent, useEffect, useState } from 'react';
import getSeasons from '../../services/api/getSeasons';

const Season = () => {
  const currentYear = new Date().getFullYear();
  const [selectedSeason, setSelectedSeason] = useState(currentYear);
  const [seasons, setSeasons] = useState<string[]>([]);

  const onFormChange = (event: FormEvent<HTMLFormElement>): void => {
    const el: HTMLInputElement = event.target as HTMLInputElement;

    setSelectedSeason(() => Number(el.value));
  };

  useEffect(() => {
    getSeasons().then(setSeasons);
  }, []);

  return !seasons ? (
    <Loader />
  ) : (
    <>
      <SelectedSeason>Selected season: {selectedSeason}</SelectedSeason>
      <YearsSelect years={seasons} onChange={onFormChange} />
      <RacesList selectedYear={selectedSeason} />
    </>
  );
};

export default Season;
