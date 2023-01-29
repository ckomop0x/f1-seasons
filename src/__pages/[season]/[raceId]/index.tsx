import Footer from 'components/Footer';
import { RaceDetails } from 'components/RaceDetails';
import Header from 'components/UI/Header';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Container } from 'styles/index';

const RaceDetailsPage: NextPage = () => {
  const router = useRouter();
  const { raceId, season } = router.query;

  return (
    <Container>
      <Header />
      <RaceDetails season={season} raceId={raceId} />
      <Footer />
    </Container>
  );
};

export default RaceDetailsPage;
