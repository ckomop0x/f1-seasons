import * as React from 'react';
import getSeasons from '../../services/get-seasons';
import SeasonCard from './SeasonCard/index';
import SeasonResults from './SeasonResults/index';
import {RaceSeason} from './seasons';
import {seasons, container, seasonsSelector} from './seasons.css';

interface SeasonsProps {
}

interface SeasonsState {
    year: number;
    seasons: RaceSeason[];
    isUpdating: boolean;
    isSeasons: boolean;
    selectedSeason?: {
        season: string;
        round: string;
        year: string;
    }
}

const years: number[] = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];

export default class Seasons extends React.PureComponent<SeasonsProps, SeasonsState> {
    private loadingTimerId: number;

    constructor (props: SeasonsProps) {
        super(props);

        this.onFormChange = this.onFormChange.bind(this);
        this.state = {
            year: 2009,
            seasons: [],
            isUpdating: false,
            isSeasons: true
        }
    };

    private onFormChange (event: React.FormEvent<HTMLFormElement>): void {
        const el: HTMLInputElement = event.target as HTMLInputElement;

        this.setState({
            year: Number(el.value),
            isSeasons: true
        });
        this.load();
    }

    private showSeasonResults (season: string, round: string): void {
        this.setState({
            isSeasons: false,
            selectedSeason: {
                season,
                round,
                year: String(this.state.year)
            }
        });
    }

    private toggleViews () {
        this.setState({
            isSeasons: !this.state.isSeasons
        })
    }

    private load (timeout: number = 50): void {
        if (this.state.isUpdating) {
            return;
        }

        clearTimeout(this.loadingTimerId);
        this.loadingTimerId = Number(
            setTimeout((): void => {
                this.setState({isUpdating: true});
                getSeasons(this.state.year)
                .then((response) => {
                    this.setState({
                        seasons: response.data.MRData.RaceTable.Races,
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

    componentDidMount () {
        this.load();
    }

    render () {
        const {selectedSeason} = this.state;

        return (
            <div className={container}>
                <div className={seasonsSelector}>
                    <h1>Selected season: {this.state.year}</h1>
                    <form onChange={this.onFormChange}>
                        <select name="years">
                            {years.map((year: number) => (
                                <option value={year} key={year}>{year}</option>
                            ))}
                        </select>
                    </form>
                </div>
                {this.state.isSeasons ? (
                    <div className={seasons}>
                        {this.state.seasons.map(
                            ({season, round, Circuit, raceName, date, time}: RaceSeason) => {

                            return <SeasonCard raceName={raceName}
                                               key={raceName}
                                               onSeasonSelect={this.showSeasonResults.bind(this, season, round)}
                                               circuitName={Circuit.circuitName}
                                               season={season}
                                               round={round}
                                               country={Circuit.Location.country}
                                               locality={Circuit.Location.locality}
                                               circuitId={Circuit.circuitId}
                                               date={date}
                                               time={time}/>;
                        })}
                    </div>
                ) : (
                    <SeasonResults season={selectedSeason.season}
                                   toggleViews={this.toggleViews.bind(this)}
                                   year={selectedSeason.year}
                                   round={selectedSeason.round}/>
                )}
            </div>
        )
    }
}