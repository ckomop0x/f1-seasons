import Seasons from 'components/Seasons/Seasons';

import Layout from 'components/layouts/Layout';
import { MainContainer } from 'components/Seasons/styles';
import Season from 'components/Season';

const IndexPage = () => {
  return (
    <Layout>
      <MainContainer>
        <Season />
      </MainContainer>
    </Layout>
  );
};

export default IndexPage;
