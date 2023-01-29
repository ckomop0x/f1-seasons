import Footer from 'components/Footer';
import Header from 'components/Header';
import Races from 'components/Races';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Container } from 'styles/index';

const SeasonPage: NextPage = () => {
  const router = useRouter();
  const { season } = router.query;

  return (
    <Container>
      <Header />
      <Races season={season} />
      <Footer />
    </Container>
  );
};

export default SeasonPage;
