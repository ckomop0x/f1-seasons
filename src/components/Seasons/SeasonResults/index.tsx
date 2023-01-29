import { PureComponent } from 'react';

import getSeasonsResults from '../../../services/get-seasons-results';
import { RacesResult, Result } from '../types';

import {
  BackButton,
  FavoriteButton,
  StandingsStyled,
  StandingsTable,
  StandingsTableRow,
} from './styles';

interface SeasonResultsProps {
  season: string;
  round: string;
  year: string;
  toggleViews(): void;
}

interface SeasonResultsState {
  isUpdating: boolean;
  racesResult?: RacesResult;
  savedDrivers: string[];
}

class SeasonResults extends PureComponent<
  SeasonResultsProps,
  SeasonResultsState
> {
  private loadingTimerId: any;

  constructor(props: SeasonResultsProps) {
    let savedDrivers: string[] = [];
    super(props);
    if (typeof window !== 'undefined') {
      savedDrivers =
        JSON.parse(localStorage.getItem('savedDrivers') || '') || [];
    }

    this.state = {
      isUpdating: false,
      savedDrivers,
    };
  }

  addDriverToFavorite = (driverCode: string): void => {
    this.setState({
      savedDrivers: this.state.savedDrivers.concat(driverCode),
    });
  };

  removeDriverFromFavorites = (driverCode: string): void => {
    this.setState({
      savedDrivers: this.state.savedDrivers.filter(
        (savedDriverCode): boolean => savedDriverCode !== driverCode,
      ),
    });
  };

  saveFavoritesDrivers(): void {
    localStorage.setItem(
      'savedDrivers',
      JSON.stringify(this.state.savedDrivers),
    );
  }

  componentDidUpdate() {
    this.saveFavoritesDrivers();
  }

  componentDidMount() {
    this.load();
  }

  componentWillUnmount() {
    this.saveFavoritesDrivers();
    this.setState({});
  }

  private load(timeout = 50): void {
    if (this.state.isUpdating) {
      return;
    }

    this.setState({ isUpdating: true });

    clearTimeout(this.loadingTimerId);
    this.loadingTimerId = Number(
      setTimeout((): void => {
        getSeasonsResults(this.props.season, this.props.round)
          .then(data => {
            this.setState({
              racesResult: data.MRData.RaceTable.Races[0],
              isUpdating: false,
            });
          })
          .catch(error => {
            alert(error);
            this.setState({
              isUpdating: false,
            });
          });
      }, timeout),
    );
  }

  render() {
    return (
      <StandingsStyled>
        <BackButton onClick={this.props.toggleViews}>
          &larr; Back to seasons
        </BackButton>
        {this.state.isUpdating && (
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            Loading results...
          </div>
        )}
        {this.state.racesResult && (
          <h2>{this.state.racesResult.Circuit.circuitName}</h2>
        )}
        {this.state.racesResult ? (
          <StandingsTable>
            <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Number</th>
                  <th>Driver</th>
                  <th>Code</th>
                  <th>Favorites</th>
                </tr>
              </thead>
              <tbody>
                {this.state.racesResult &&
                  this.state.racesResult.Results.map((result: Result) => {
                    const { Driver } = result;
                    const isDriverFavorite: boolean =
                      this.state.savedDrivers.includes(Driver.driverId);

                    return (
                      <StandingsTableRow
                        key={Driver.driverId}
                        position={result.position}
                        onClick={
                          isDriverFavorite
                            ? this.removeDriverFromFavorites.bind(
                                this,
                                Driver.driverId,
                              )
                            : this.addDriverToFavorite.bind(
                                this,
                                Driver.driverId,
                              )
                        }
                      >
                        <td>{result.position}</td>
                        <td>{result.number}</td>
                        <td>
                          {Driver.givenName} {Driver.familyName}
                        </td>
                        <td>{Driver.driverId}</td>
                        <td>
                          <FavoriteButton isDriverFavorite={isDriverFavorite} />
                        </td>
                      </StandingsTableRow>
                    );
                  })}
              </tbody>
            </table>
          </StandingsTable>
        ) : (
          !this.state.isUpdating && (
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              No results available
            </div>
          )
        )}
      </StandingsStyled>
    );
  }
}

export default SeasonResults;
