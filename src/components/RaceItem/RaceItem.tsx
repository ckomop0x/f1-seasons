import Flag from '../Flag/Flag';
import { DateLine, RaceDate, RaceItemHeader, RaceItemWrapper, RoundNumber } from './styles';

export interface ISeasonCardProps {
  raceName: string;
  circuitName: string;
  season: string;
  round: string;
  country: string;
  locality: string;
  circuitId: string;
  date: string;
  time: string;

  onSeasonSelect(): void;
}

export default function RaceItem({
  raceName,
  circuitName,
  round,
  country,
  locality,
  date,
  onSeasonSelect
}: ISeasonCardProps): JSX.Element {
  return (
    <RaceItemWrapper>
      <RaceItemHeader>
        <RoundNumber>Round {round}</RoundNumber>
        <DateLine>
          <RaceDate>{date}</RaceDate>
          <Flag country={country} />
        </DateLine>
      </RaceItemHeader>
      <h2>
        {raceName} ({locality}, {country})
      </h2>
      <h4>{circuitName}</h4>
    </RaceItemWrapper>
  );
}
