import { ThemeProvider } from 'styled-components';
import { themeStyles } from './components/styles';
import Layout from './components/Layout';
import Seasons from './components/Seasons';

export default function App() {
  return (
    <ThemeProvider theme={themeStyles}>
      <Layout>
        <Seasons />
      </Layout>
    </ThemeProvider>
  );
}
