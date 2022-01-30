import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';

import getSeasons from '../../services/api/getSeasons';

import Loader from 'components/Loader';
import RacesList from 'components/RacesList';
import { SelectedSeason } from 'components/Seasons/styles';
import YearsSelect from 'components/SeasonsSelect/SeasonsSelect';

const Season = () => {
  const [selectedSeason, setSelectedSeason] = useState<number | undefined>(undefined);
  const [seasons, setSeasons] = useState<string[]>([]);

  const onFormChange = (event: FormEvent<HTMLFormElement>): void => {
    const el: HTMLInputElement = event.target as HTMLInputElement;

    setSelectedSeason(() => Number(el.value));
  };

  useEffect(() => {
    getSeasons().then(setSeasons);
  }, []);

  useEffect(() => {
    seasons.length > 0 && setSelectedSeason(() => Number(seasons[0]));
  }, [seasons]);

  return !selectedSeason ? (
    <Loader />
  ) : (
    <>
      <SelectedSeason>Selected season: {selectedSeason}</SelectedSeason>
      <YearsSelect years={seasons} onChange={onFormChange} />
      <RacesList selectedSeason={selectedSeason} />
    </>
  );
};

export default Season;
