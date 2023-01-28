import createCache from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { globalStyles } from 'styles/GlobalStyle';
import { theme } from 'theme/theme';

const cache = createCache({ key: 'next' });

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      {globalStyles}
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default App;
