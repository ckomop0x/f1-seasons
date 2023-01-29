import Seasons from 'components/Seasons/Seasons';
import Footer from 'components/UI/Footer';
import Header from 'components/UI/Header';

const IndexPage = () => (
  <>
    <Seasons />
    <div
      style={{
        overflowY: 'scroll',
        height: 'calc(100vh - calc(--var(grid) * 14))',
      }}
    ></div>
  </>
);

export default IndexPage;
