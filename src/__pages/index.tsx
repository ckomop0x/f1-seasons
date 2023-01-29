import Footer from 'components/Footer';
import Seasons from 'components/Seasons/Seasons';
import Header from 'components/UI/Header';
import { NextPage } from 'next';

const IndexPage: NextPage = () => (
  <Container>
    <Header />
    <Seasons />
    <Footer />
  </Container>
);

export default IndexPage;
