import { RaceSeason, ActiveSeason } from './types';
import { SeasonsWrapper, SelectedSeason } from './styles';
import { YearsSelect, Loader, SeasonsList, SeasonResults } from './components';
import getYears from '../../services/getYears';
import React, { FormEvent, useState } from 'react';

// interface SeasonsState {
//   year: number;
//   years: number[];
//   seasons: RaceSeason[];
//   isUpdating: boolean;
//   isSeasons: boolean;
//   activeSeason?: ActiveSeason;
//   error?: Error;
// }

export default function Seasons() {
  const years: number[] = getYears();
  const [selectedYear, setSelectedYear] = useState<number>(years[0]);
  const [seasons, setSeasons] = useState<RaceSeason[]>([]);

  return (
    <SeasonsWrapper>
      <YearsSelect years={years} onChange={setSelectedYear} selectedYear={selectedYear} />
    </SeasonsWrapper>
  );
}

// export default class Seasons extends PureComponent<{}, SeasonsState> {
//   constructor(props: {}) {
//     super(props);
//
//     this.onFormChange = this.onFormChange.bind(this);
//     this.showSeasonResults = this.showSeasonResults.bind(this);
//     this.state = {
//       years: calculateYears(),
//       year: calculateYears()[0],
//       seasons: [],
//       isUpdating: false,
//       isSeasons: true
//     };
//   }
//
//   private showSeasonResults(season: string, round: string): void {
//     this.setState({
//       isSeasons: false,
//       activeSeason: {
//         season,
//         round,
//         year: String(this.state.year)
//       }
//     });
//   }
//
//   private toggleViews(): void {
//     this.setState({
//       isSeasons: !this.state.isSeasons
//     });
//   }
//
//   load(timeout: number = 50): void {
//     if (this.state.isUpdating) {
//       return;
//     }
//
//     this.setState({
//       isUpdating: true
//     });
//     getSeasons(this.state.year)
//       .then((data: any) => {
//         this.setState({
//           seasons: data.MRData.RaceTable.Races,
//           isUpdating: false,
//           error: undefined
//         });
//       })
//       .catch((error: any) => {
//         console.log(error);
//         this.setState({
//           isUpdating: false,
//           error
//         });
//       });
//   }
//
//

//
//   render() {
//     const { activeSeason, isSeasons, isUpdating, error } = this.state;
//
//     return (
//       <MainContainer>
//         {/*<SelectedSeason>Selected season: {this.state.year}</SelectedSeason>*/}
//         {/*{isSeasons && <YearsSelect years={this.state.years} onChange={this.onFormChange} />}*/}
//         {/*{isUpdating && <Loader />}*/}
//         {/*{!isUpdating && !error && isSeasons && (*/}
//         {/*  <SeasonsList seasons={this.state.seasons} onSeasonSelect={this.showSeasonResults} />*/}
//         {/*)}*/}
//         {/*{!isUpdating && error && <div>No Data {isSeasons}</div>}*/}
//         {/*{!isUpdating && !error && activeSeason && !isSeasons && (*/}
//         {/*  <SeasonResults*/}
//         {/*    season={activeSeason.season}*/}
//         {/*    toggleViews={this.toggleViews.bind(this)}*/}
//         {/*    year={activeSeason.year}*/}
//         {/*    round={activeSeason.round}*/}
//         {/*  />*/}
//         {/*)}*/}
//       </MainContainer>
//     );
//   }
// }
