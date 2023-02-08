'use client';
import { FC, FormEvent } from 'react';
import Races from 'components/Races';
import YearsSelect from 'components/Seasons/YearsSelect';
import { useRouter } from 'next/navigation';

import calculateYears from '../../services/calculate-years';

import styles from './Seasons.module.scss';

interface SeasonProps {
  season?: string;
}

const Season: FC<SeasonProps> = ({ season }) => {
  const router = useRouter();

  const onFormChange = (event: FormEvent<HTMLFormElement>): void => {
    const el: HTMLInputElement = event.target as HTMLInputElement;

    router.push(`/${el.value}`);
  };

  const normalizedSeason = Array.isArray(season) ? season.join('') : season;
  const selectedSeason = normalizedSeason ?? new Date().getFullYear();

  return (
    <>
      <h1 className={styles.selectedSeason}>
        Selected season: {selectedSeason}
      </h1>
      <YearsSelect
        years={calculateYears()}
        onChange={onFormChange}
        selectedYear={Number(selectedSeason)}
      />
      <Races season={Number(selectedSeason)} />
    </>
  );
};

export default Season;
