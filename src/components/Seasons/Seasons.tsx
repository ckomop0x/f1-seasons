import { getSeasons, calculateYears } from '../../scripts/services';
import { RaceSeason, ActiveSeason } from './types';
import { MainContainer, SelectedSeason } from './styles';
import { YearsSelect, Loader, SeasonsList, SeasonResults } from './components';

interface SeasonsState {
  year: number;
  years: number[];
  seasons: RaceSeason[];
  isUpdating: boolean;
  isSeasons: boolean;
  activeSeason?: ActiveSeason;
  error?: Error;
}

export default class Seasons extends React.PureComponent<{}, SeasonsState> {
  private loadingTimerId: any;

  constructor(props: any) {
    super(props);

    this.onFormChange = this.onFormChange.bind(this);
    this.showSeasonResults = this.showSeasonResults.bind(this);
    this.state = {
      years: calculateYears(),
      year: calculateYears()[0],
      seasons: [],
      isUpdating: false,
      isSeasons: true
    };
  }

  private showSeasonResults(season: string, round: string): void {
    this.setState({
      isSeasons: false,
      activeSeason: {
        season,
        round,
        year: String(this.state.year)
      }
    });
  }

  private toggleViews(): void {
    this.setState({
      isSeasons: !this.state.isSeasons
    });
  }

  load(timeout: number = 50): void {
    if (this.state.isUpdating) {
      return;
    }

    clearTimeout(this.loadingTimerId);
    this.loadingTimerId = Number(
      setTimeout((): void => {
        this.setState({
          isUpdating: true
        });
        getSeasons(this.state.year)
          .then((data: any) => {
            this.setState({
              seasons: data.MRData.RaceTable.Races,
              isUpdating: false,
              error: undefined
            });
          })
          .catch((error: any) => {
            console.log(error);
            this.setState({
              isUpdating: false,
              error
            });
          });
      }, timeout)
    );
  }

  onFormChange = (event: React.FormEvent<HTMLFormElement>): void => {
    const el: HTMLInputElement = event.target as HTMLInputElement;

    this.setState({
      year: Number(el.value),
      isSeasons: true
    });
    this.load();
  };

  componentDidMount(): void {
    this.load();
  }

  componentWillUnmount() {
    clearTimeout(this.loadingTimerId);
  }

  render() {
    const { activeSeason, isSeasons, isUpdating, error } = this.state;

    return (
      <MainContainer>
        <SelectedSeason>Selected season: {this.state.year}</SelectedSeason>
        {isSeasons && <YearsSelect years={this.state.years} onChange={this.onFormChange} />}
        {isUpdating && <Loader />}
        {!isUpdating && !error && isSeasons && (
          <SeasonsList seasons={this.state.seasons} onSeasonSelect={this.showSeasonResults} />
        )}
        {!isUpdating && error && <div>No Data {isSeasons}</div>}
        {!isUpdating && !error && activeSeason && !isSeasons && (
          <SeasonResults
            season={activeSeason.season}
            toggleViews={this.toggleViews.bind(this)}
            year={activeSeason.year}
            round={activeSeason.round}
          />
        )}
      </MainContainer>
    );
  }
}
