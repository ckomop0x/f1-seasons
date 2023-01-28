import { ThemeProvider } from 'styled-components';

import {
  Container,
  themeStyles,
  NormalizeStyles,
  GlobalStyles,
} from './styles';

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={themeStyles}>
    <Container id="main-app">
      <NormalizeStyles />
      <GlobalStyles />
      <Header />
      <ErrorBoundary>
        <Seasons />
      </ErrorBoundary>
      <Footer />
    </Container>
  </ThemeProvider>
);

export default App;
