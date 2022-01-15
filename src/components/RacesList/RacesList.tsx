import RaceItem from '../RaceItem';
import styled from 'styled-components';
import { Race } from '../../types';

export interface ISeasonsListProps {
  races: Race[];

  onRaceSelect(race: string): void;
}

export default function RacesList({ races, onRaceSelect }: ISeasonsListProps): JSX.Element {
  return (
    <RacesListWrapper>
      {races.map(({ season, round, Circuit, raceName, date, time }: Race) => {
        return (
          <RaceItem
            raceName={raceName}
            key={raceName}
            onRaceSelect={() => onRaceSelect(round)}
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
