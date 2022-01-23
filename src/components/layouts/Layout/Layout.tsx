import { themeStyles } from 'styles/themeStyles';
import Container from 'styles/Container';
import NormalizeStyles from 'styles/NormalizeStyles';
import GlobalStyles from 'styles/GlobalStyles';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { ThemeProvider } from 'styled-components';

const Layout = ({ children }: any) => (
  <ThemeProvider theme={themeStyles}>
    <Container id="main-app">
      <NormalizeStyles />
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </Container>
  </ThemeProvider>
);

export default Layout;
