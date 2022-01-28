import getYearsRange from '../../services/getYearsRange';
import { FormEvent, useState } from 'react';
import { SelectedSeason } from 'components/Seasons/styles';
import YearsSelect from 'components/YearsSelect';
import RacesList from 'components/RacesList';

const Season = () => {
  const currentYear = new Date().getFullYear();
  const yearsRange = getYearsRange(1950, currentYear).reverse();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const onFormChange = (event: FormEvent<HTMLFormElement>): void => {
    const el: HTMLInputElement = event.target as HTMLInputElement;

    setSelectedYear(() => Number(el.value));
  };

  return (
    <>
      <SelectedSeason>Selected season: </SelectedSeason>
      <YearsSelect years={yearsRange} onChange={onFormChange} />
      <RacesList selectedYear={selectedYear} />
    </>
  );
};

export default Season;
