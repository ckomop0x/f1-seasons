import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import getSeasons from '../../scripts/services/get-seasons';
import SeasonsList from 'components/SeasonsList';
import Layout from 'components/layouts/Layout';

const SeasonPage: FC = () => {
  const [seasonData, setSeasonData] = useState(undefined);
  const router = useRouter();

  const loadSeason = async (season: number) => {
    return await getSeasons(season);
  };

  useEffect(() => {
    if (typeof router.query.season === 'string') {
      loadSeason(parseInt(router.query.season))
        .then((loadedSeasonData) => {
          if (loadedSeasonData) {
            setSeasonData(loadedSeasonData.MRData.RaceTable.Races);
          }
        })
        .catch((error) => console.log(error.message));
    }
  }, [router.query.season]);

  return (
    <Layout>{seasonData && <SeasonsList seasons={seasonData} onSeasonSelect={() => {}} />}</Layout>
  );
};

export default SeasonPage;
