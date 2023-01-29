import { FC } from 'react';

import SeasonCard from '../SeasonCard';
import { SeasonStyled } from '../styles';
import { RaceSeason } from '../types';

export interface SeasonsListProps {
  seasons: any;
}

const SeasonsList: FC<SeasonsListProps> = ({ seasons }) => (
  <SeasonStyled>
    {seasons.map(
      ({ season, round, Circuit, raceName, date, time }: RaceSeason) => (
        <SeasonCard
          raceName={raceName}
          key={raceName}
          circuitName={Circuit.circuitName}
          season={season}
          round={round}
          country={Circuit.Location.country}
          locality={Circuit.Location.locality}
          circuitId={Circuit.circuitId}
          date={date}
          time={time}
        />
      ),
    )}
  </SeasonStyled>
);

export default SeasonsList;
