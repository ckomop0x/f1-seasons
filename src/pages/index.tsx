import { NextPage } from 'next';

import Season from 'components/Season/Season';
import { MainContainer } from 'components/Seasons/styles';
import Layout from 'components/layouts/Layout';

const IndexPage: NextPage = () => (
  <Layout>
    <MainContainer>
      <Season />
    </MainContainer>
  </Layout>
);

export default IndexPage;
