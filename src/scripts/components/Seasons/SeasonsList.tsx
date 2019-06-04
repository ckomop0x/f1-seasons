import { RaceSeason } from './types';
import SeasonCard from './SeasonCard';
import { SeasonStyled } from './styles';
import * as React from 'react';

export interface SeasonsListProps {
  seasons: any
  onSeasonSelect: any
}

const SeasonsList: React.FC<SeasonsListProps> = ({seasons, onSeasonSelect}) => (
  <SeasonStyled>
    {seasons.map(
      ({
         season,
         round,
         Circuit,
         raceName,
         date,
         time
       }: RaceSeason) => {
        return (
          <SeasonCard
            raceName={raceName}
            key={raceName}
            onSeasonSelect={() => onSeasonSelect(season, round)}
            circuitName={Circuit.circuitName}
            season={season}
            round={round}
            country={Circuit.Location.country}
            locality={Circuit.Location.locality}
            circuitId={Circuit.circuitId}
            date={date}
            time={time}
          />
        );
      }
    )}
  </SeasonStyled>
)

export default SeasonsList
