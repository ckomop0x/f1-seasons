import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import getSeasons from '../../services/api/getSeason';

import Season from 'components/Season/Season';
import { MainContainer } from 'components/Seasons/styles';
import SeasonsList from 'components/SeasonsList';
import Layout from 'components/layouts/Layout';

const SeasonPage: NextPage = () => {
  const router = useRouter();
  console.log(router);

  // const [seasonData, setSeasonData] = useState(undefined);
  // const router = useRouter();
  //
  // const loadSeason = async (season: number) => getSeasons(season);
  //
  // useEffect(() => {
  //   const season = router?.query?.slug?.[0];
  //   const race = router?.query?.slug?.[1];
  //
  //   if (season && !race) {
  //     loadSeason(parseInt(season))
  //       .then((loadedSeasonData) => {
  //         if (loadedSeasonData) {
  //           setSeasonData(loadedSeasonData.MRData.RaceTable.Races);
  //         }
  //       })
  //       .catch((error) => console.log(error.message));
  //   }
  // }, [router.query.slug]);
  //
  return (
    <Layout>
      <MainContainer>
        <Season />
      </MainContainer>
    </Layout>
  );
};

export default SeasonPage;
