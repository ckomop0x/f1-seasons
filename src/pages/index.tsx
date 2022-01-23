import Header from 'components/Header';
import Container from 'styles/Container';
import NormalizeStyles from 'styles/NormalizeStyles';
import GlobalStyles from 'styles/GlobalStyles';
import Seasons from 'components/Seasons/Seasons';
import Footer from 'components/Footer';
import { ThemeProvider } from 'styled-components';
import { themeStyles } from '../styles/themeStyles';

const IndexPage = () => {
  return (
    <ThemeProvider theme={themeStyles}>
      <Container id="main-app">
        <NormalizeStyles />
        <GlobalStyles />
        <Header />
        <Seasons />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default IndexPage;
