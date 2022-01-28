import Seasons from 'components/Seasons/Seasons';

import Layout from 'components/layouts/Layout';
import { MainContainer } from 'components/Seasons/styles';

const IndexPage = () => (
  <Layout>
    <MainContainer>
      <Seasons />
    </MainContainer>
  </Layout>
);

export default IndexPage;
