import Footer from 'components/Footer';
import Header from 'components/Header';
import Seasons from 'components/Seasons/Seasons';
import { NextPage } from 'next';
import { Container } from 'styles/index';

const IndexPage: NextPage = () => (
  <Container id="main-app">
    <Header />
    <Seasons />
    <Footer />
  </Container>
);

export default IndexPage;
