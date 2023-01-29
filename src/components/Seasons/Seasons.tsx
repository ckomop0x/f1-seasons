import Races from 'components/Races';
import Loader from 'components/Seasons/Loader';
import SeasonResults from 'components/Seasons/SeasonResults';
import SeasonsList from 'components/Seasons/SeasonsList';
import YearsSelect from 'components/Seasons/YearsSelect';
import { PureComponent } from 'react';

import calculateYears from '../../services/calculate-years';
import getSeasonRaces from '../../services/get-season-races';

import { MainContainer, SelectedSeason } from './styles';
import { RaceSeason, ActiveSeason } from './types';

interface SeasonsState {
  year: number;
  years: number[];
  seasons: RaceSeason[];
  isUpdating: boolean;
  isSeasons: boolean;
  activeSeason?: ActiveSeason;
  error?: Error;
}

export default class Seasons extends PureComponent<{}, SeasonsState> {
  constructor(props: any) {
    super(props);

    this.onFormChange = this.onFormChange.bind(this);
    this.state = {
      years: calculateYears(),
      year: calculateYears()[0],
      seasons: [],
      isUpdating: false,
      isSeasons: true,
    };
  }

  onFormChange = (event: React.FormEvent<HTMLFormElement>): void => {
    const el: HTMLInputElement = event.target as HTMLInputElement;

    this.setState({
      year: Number(el.value),
      isSeasons: true,
    });
  };

  render() {
    const { activeSeason, isSeasons, isUpdating, error } = this.state;

    return (
      <MainContainer>
        <SelectedSeason>Selected season: {this.state.year}</SelectedSeason>
        {isSeasons && (
          <YearsSelect years={this.state.years} onChange={this.onFormChange} />
        )}
        {isUpdating && <Loader />}
        {!isUpdating && !error && isSeasons && (
          <Races season={this.state.year} />
        )}
        {!isUpdating && error && <div>No Data {isSeasons}</div>}
      </MainContainer>
    );
  }
}
