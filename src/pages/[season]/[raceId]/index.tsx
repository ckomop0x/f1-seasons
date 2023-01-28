import Footer from 'components/Footer';
import Header from 'components/Header';
import SeasonResults from 'components/Seasons/SeasonResults';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Container } from 'styles/index';

const SeasonsPage: NextPage = () => {
  const router = useRouter();
  console.log(router.query);
  const { raceId, season } = router.query;

  return (
    <Container id="main-app">
      <Header />
      <SeasonResults season={season} year={season} round={raceId} />
      {raceId}
      <Footer />
    </Container>
  );
};

export default SeasonsPage;
