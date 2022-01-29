import {
  BackButton,
  FavoriteButton,
  StandingsStyled,
  StandingsTable,
  StandingsTableRow
} from './styles';
import { PureComponent } from 'react';
import { RacesResultInterface } from 'types/RacesResult.interface';
import getSeasonsResults from '../../services/api/getSeasonsResults';
import { ResultInterface } from 'types/Result.interface';

interface SeasonResultsProps {
  season: string;
  round: string;
  year: string;
  toggleViews(): void;
}

interface SeasonResultsState {
  isUpdating: boolean;
  racesResult?: RacesResultInterface;
  savedDrivers: string[];
}

class SeasonResults extends PureComponent<SeasonResultsProps, SeasonResultsState> {
  private loadingTimerId: any;

  constructor(props: SeasonResultsProps) {
    super(props);
    const savedDrivers: string = localStorage.getItem('savedDrivers') || '';

    this.state = {
      isUpdating: false,
      savedDrivers: savedDrivers ? JSON.parse(savedDrivers) : []
    };
  }

  private load(timeout: number = 50): void {
    if (this.state.isUpdating) {
      return;
    }

    this.setState({ isUpdating: true });

    getSeasonsResults(this.props.season, this.props.round)
      .then((data: any) => {
        this.setState({
          racesResult: data?.MRData?.RaceTable?.Races?.[0],
          isUpdating: false
        });
      })
      .catch((error) => {
        alert(error);
        this.setState({
          isUpdating: false
        });
      });
  }

  addDriverToFavorite = (driverCode: string): void => {
    this.setState({
      savedDrivers: this.state.savedDrivers.concat(driverCode)
    });
  };

  removeDriverFromFavorites = (driverCode: string): void => {
    this.setState({
      savedDrivers: this.state.savedDrivers.filter(
        (savedDriverCode): boolean => savedDriverCode !== driverCode
      )
    });
  };

  saveFavoritesDrivers(): void {
    localStorage.setItem('savedDrivers', JSON.stringify(this.state.savedDrivers));
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

  render() {
    return (
      <StandingsStyled>
        <BackButton onClick={this.props.toggleViews}>&larr; Back to seasons</BackButton>
        {this.state.isUpdating && (
          <div style={{ textAlign: 'center', marginTop: 40 }}>Loading results...</div>
        )}
        {this.state.racesResult && <h2>{this.state.racesResult.Circuit.circuitName}</h2>}
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
                {this.state?.racesResult?.Results.map((result: ResultInterface) => {
                  const { Driver } = result;
                  const isDriverFavorite: boolean = this.state.savedDrivers.includes(Driver.code);

                  return (
                    <StandingsTableRow
                      key={Driver.code}
                      position={result.position}
                      onClick={
                        isDriverFavorite
                          ? this.removeDriverFromFavorites.bind(this, Driver.code)
                          : this.addDriverToFavorite.bind(this, Driver.code)
                      }>
                      <td>{result.position}</td>
                      <td>{result.number}</td>
                      <td>
                        {Driver.givenName} {Driver.familyName}
                      </td>
                      <td>{Driver.code}</td>
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
            <div style={{ textAlign: 'center', marginTop: 40 }}>No results available</div>
          )
        )}
      </StandingsStyled>
    );
  }
}

export default SeasonResults;
