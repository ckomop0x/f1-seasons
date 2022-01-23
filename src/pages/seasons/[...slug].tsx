import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import getSeasons from '../../scripts/services/get-seasons';
import SeasonsList from 'components/SeasonsList';
import Layout from 'components/layouts/Layout';

const SeasonPage: FC = () => {
  const [seasonData, setSeasonData] = useState(undefined);
  const router = useRouter();

  console.log(router);

  const loadSeason = async (season: number) => {
    return getSeasons(season);
  };

  useEffect(() => {
    const season = router?.query?.slug?.[0];
    const race = router?.query?.slug?.[1];

    if (season && !race) {
      loadSeason(parseInt(season))
        .then((loadedSeasonData) => {
          if (loadedSeasonData) {
            setSeasonData(loadedSeasonData.MRData.RaceTable.Races);
          }
        })
        .catch((error) => console.log(error.message));
    }
  }, [router.query.slug]);

  return (
    <Layout>{seasonData && <SeasonsList seasons={seasonData} onSeasonSelect={() => {}} />}</Layout>
  );
};

export default SeasonPage;
