import SeasonCard from '../SeasonCard';
import styled from 'styled-components';
import { Race } from '../../types';

export interface ISeasonsListProps {
  races: Race[];

  onSeasonSelect(season: string, round: string): void;
}

export default function RacesList({ races, onSeasonSelect }: ISeasonsListProps): JSX.Element {
  return (
    <RacesListWrapper>
      {races.map(({ season, round, Circuit, raceName, date, time }: Race) => {
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
    </RacesListWrapper>
  );
}

export const RacesListWrapper = styled.div`
  padding-top: ${({ theme }) => theme.grid * 2}px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;
