import { Race } from '../types';
import SeasonCard from '../SeasonCard';
import { SeasonStyled } from '../styles';

export interface ISeasonsListProps {
  seasons: Race[];

  onSeasonSelect(season: string, round: string): void;
}

export default function SeasonsList({ seasons, onSeasonSelect }: ISeasonsListProps) {
  console.log(seasons);

  return (
    <SeasonStyled>
      {seasons.map(({ season, round, Circuit, raceName, date, time }: Race) => {
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
      })}
    </SeasonStyled>
  );
}
