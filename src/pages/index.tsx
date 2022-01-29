import Layout from 'components/layouts/Layout';
import { MainContainer, SelectedSeason } from 'components/Seasons/styles';
import Season from 'components/Season';
import { NextPage } from 'next';
import YearsSelect from 'components/YearsSelect';
import getYearsRange from 'utils/getYearsRange';
import { FormEvent, useState } from 'react';

const IndexPage: NextPage = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const yearsRange = getYearsRange(1950, currentYear).reverse();

  const onFormChange = (event: FormEvent<HTMLFormElement>): void => {
    const el: HTMLInputElement = event.target as HTMLInputElement;

    setSelectedYear(() => Number(el.value));
  };

  return (
    <Layout>
      <MainContainer>
        <SelectedSeason>Selected season: </SelectedSeason>
        <YearsSelect years={yearsRange} onChange={onFormChange} />
        <Season year={selectedYear} />
      </MainContainer>
    </Layout>
  );
};

export default IndexPage;
