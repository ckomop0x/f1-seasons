import Footer from 'components/Footer';
import Header from 'components/Header';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Container } from 'styles/index';

const SeasonsPage: NextPage = () => {
  const router = useRouter();
  const { season } = router.query;

  return (
    <Container id="main-app">
      <Header />
      {season}
      <Footer />
    </Container>
  );
};

export default SeasonsPage;
