import { Container, GlobalStyles, NormalizeStyles, themeStyles } from '../components/styles';
import Header from '../components/Header';
import Seasons from '../components/Seasons/Seasons';
import Footer from '../components/Footer';
import { ThemeProvider } from 'styled-components';

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
