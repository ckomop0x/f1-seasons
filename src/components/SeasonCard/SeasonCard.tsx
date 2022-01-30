import { FC } from 'react';
import CardButton from 'styles/CardButton';

import Flag from '../Flag';

import {
  CircuitName,
  CountryDetails,
  DetailsButton,
  RaceName,
  Round,
  RoundNumber,
  RoundTitle,
  SeasonCardWrapper
} from 'components/SeasonCard/styles';

export interface SeasonCardProps {
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

const SeasonCard: FC<SeasonCardProps> = ({
  raceName,
  circuitName,
  round,
  country,
  locality,
  date,
  onSeasonSelect
}) => (
  <SeasonCardWrapper title={circuitName}>
    <Round>
      <RoundTitle>Round</RoundTitle>
      <RoundNumber>{round}</RoundNumber>
    </Round>
    <CountryDetails>
      <Flag country={country} />
      <CircuitName>
        <h3>{circuitName}</h3>
        <span>
          {locality}, {country}
        </span>
      </CircuitName>
    </CountryDetails>

    <RaceName>
      <b>Race:</b> {raceName}
    </RaceName>
    <RaceName>
      <b>Date:</b> {date}
    </RaceName>
    <DetailsButton onClick={onSeasonSelect} title="Go to standings">
      Details
    </DetailsButton>
  </SeasonCardWrapper>
);

export default SeasonCard;
