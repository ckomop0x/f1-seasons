import { ThemeProvider } from 'styled-components';
import { Seasons } from './components';
import { themeStyles } from './components/styles';
import Layout from './components/Layout';

export default function App() {
  return (
    <ThemeProvider theme={themeStyles}>
      <Layout>
        <Seasons />
      </Layout>
    </ThemeProvider>
  );
}
