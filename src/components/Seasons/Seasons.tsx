'use client';
import { FC, FormEvent, useState } from 'react';
import Races from 'components/Races';
import YearsSelect from 'components/Seasons/YearsSelect';

import calculateYears from '../../services/calculate-years';

import styles from './Seasons.module.scss';

const Seasons: FC = () => {
  const [selectedSeason, setSelectedSeason] = useState<string>(
    calculateYears()[0].toString(),
  );

  const onFormChange = (event: FormEvent<HTMLFormElement>): void => {
    const el: HTMLInputElement = event.target as HTMLInputElement;

    setSelectedSeason(el.value);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.selectedSeason}>
        Selected season: {selectedSeason}
      </h1>
      <YearsSelect years={calculateYears()} onChange={onFormChange} />
      <Races season={selectedSeason} />
    </div>
  );
};

export default Seasons;
