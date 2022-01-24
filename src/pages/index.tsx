import Seasons from 'components/Seasons/Seasons';

import Layout from 'components/layouts/Layout';
import { MainContainer, SelectedSeason } from 'components/Seasons/styles';
import YearsSelect from 'components/YearsSelect';
import Loader from 'components/Loader';
import SeasonsList from 'components/SeasonsList';
import SeasonResults from 'components/SeasonResults';

const IndexPage = () => (
  <Layout>
    <MainContainer>
      <Seasons />
      {/*<SelectedSeason>Selected season: {this.state.year}</SelectedSeason>*/}
      {/*{isSeasons && <YearsSelect years={this.state.years} onChange={this.onFormChange} />}*/}
      {/*{isUpdating && <Loader />}*/}
      {/*{!isUpdating && !error && isSeasons && (*/}
      {/*  <SeasonsList seasons={this.state.seasons} onSeasonSelect={this.showSeasonResults} />*/}
      {/*)}*/}
      {/*{!isUpdating && error && <div>No Data {isSeasons}</div>}*/}
      {/*{!isUpdating && !error && activeSeason && !isSeasons && (*/}
      {/*  <SeasonResults*/}
      {/*    season={activeSeason.season}*/}
      {/*    toggleViews={this.toggleViews.bind(this)}*/}
      {/*    year={activeSeason.year}*/}
      {/*    round={activeSeason.round}*/}
      {/*  />*/}
      {/*)}*/}
    </MainContainer>
  </Layout>
);

export default IndexPage;
