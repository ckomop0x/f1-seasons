import { RaceSeason } from '../Seasons/types';
import SeasonCard from '../SeasonCard';
import { FC } from 'react';
import { SeasonStyled } from 'components/Seasons/styles';

export interface SeasonsListProps {
  seasons: any;
  onSeasonSelect: any;
}

const SeasonsList: FC<SeasonsListProps> = ({ seasons, onSeasonSelect }) => (
  <SeasonStyled>
    {seasons.map(({ season, round, Circuit, raceName, date, time }: RaceSeason) => (
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
    ))}
  </SeasonStyled>
);

export default SeasonsList;
