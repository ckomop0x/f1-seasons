import * as React from 'react';
import getSeasonsResults from '../../../services/get-seasons-results';
import {RacesResult, Result} from '../seasonsTypes';
import {BackButton, FavoriteButton, Standings, StandingsTable, StandingsTableRow} from './ResultsStyles';

interface SeasonResultsProps {
    season: string;
    round: string;
    year: string;
    toggleViews (): void;
}

interface SeasonResultsState {
    isUpdating: boolean;
    racesResult?: RacesResult;
    savedDrivers: string[];
}

export default class SeasonResults extends React.PureComponent<SeasonResultsProps, SeasonResultsState> {
    private loadingTimerId: number;

    constructor (props: SeasonResultsProps, context?: any) {
        super(props, context);

        this.state = {
            isUpdating: false,
            savedDrivers: JSON.parse(localStorage.getItem('savedDrivers')) || []
        }
    };

    private load (timeout: number = 50): void {
        if (this.state.isUpdating) {
            return;
        }

        clearTimeout(this.loadingTimerId);
        this.loadingTimerId = Number(
            setTimeout((): void => {
                this.setState({isUpdating: true});
                getSeasonsResults(this.props.season, this.props.round)
                .then((response: any) => {
                    this.setState({
                        racesResult: response.data.MRData.RaceTable.Races[0],
                        isUpdating: false
                    })
                })
                .catch((error) => {
                    console.log(error);
                    this.setState({
                        isUpdating: false
                    })
                });
            }, timeout)
        );
    }

    addDriverToFavorite (driverCode: string): void {
        this.setState({
            savedDrivers: this.state.savedDrivers.concat(driverCode)
        });
    }

    removeDriverFromFavorites (driverCode: string): void {
        this.setState({
            savedDrivers: this.state.savedDrivers.filter(
                (savedDriverCode): boolean => savedDriverCode !== driverCode)
        });
    }

    saveFavoritesDrivers (): void {
        localStorage.setItem('savedDrivers', JSON.stringify(this.state.savedDrivers));
    }

    componentDidUpdate () {
        this.saveFavoritesDrivers();
    }

    componentDidMount () {
        this.load();
    }

    componentWillUnmount () {
        this.saveFavoritesDrivers();
    }

    render () {
        return (
            <Standings>
                <BackButton onClick={this.props.toggleViews}>&larr; Back to seasons</BackButton>
                {this.state.racesResult ? (
                    <h2>{this.state.racesResult.Circuit.circuitName}</h2>
                ) : null}
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
                                {this.state.racesResult && this.state.racesResult.Results.map((
                                    {position, number, Driver}: Result
                                ) => {
                                    const isDriverFavorite = this.state.savedDrivers.includes(Driver.code);

                                    return (
                                        <StandingsTableRow position={position}
                                                           onClick={
                                                               isDriverFavorite
                                                                   ? this.removeDriverFromFavorites.bind(this, Driver.code)
                                                                   : this.addDriverToFavorite.bind(this, Driver.code)}>
                                            <td>{position}</td>
                                            <td>{number}</td>
                                            <td>{Driver.givenName} {Driver.familyName}</td>
                                            <td>{Driver.code}</td>
                                            <td>
                                                <FavoriteButton isDriverFavorite={isDriverFavorite}>
                                                </FavoriteButton>
                                            </td>
                                        </StandingsTableRow>
                                    )
                                })}
                            </tbody>
                        </table>
                    </StandingsTable>
                ) : null}
            </Standings>
        )
    }
}