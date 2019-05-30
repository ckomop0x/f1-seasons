import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Footer, Header, Seasons } from './components';
import { Container, themeStyles, NormalizeStyles, GlobalStyles } from './components/styles';

const App: React.FunctionComponent = () => (
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

export default App;
