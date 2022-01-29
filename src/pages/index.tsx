import Layout from 'components/layouts/Layout';
import { MainContainer } from 'components/Seasons/styles';
import { NextPage } from 'next';
import Season from 'components/Season/Season';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <MainContainer>
        <Season />
      </MainContainer>
    </Layout>
  );
};

export default IndexPage;
