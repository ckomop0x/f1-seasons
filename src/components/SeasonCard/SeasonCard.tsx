import Link from 'next/link';
import { FC } from 'react';

import Flag from '../Flag';

import {
  CircuitName,
  CountryDetails,
  DetailsLink,
  RaceName,
  Round,
  RoundNumber,
  RoundTitle,
  SeasonCardWrapper
} from 'components/SeasonCard/styles';
import { RacesResultInterface } from 'types/RacesResult.interface';

export interface SeasonCardProps {
  season: RacesResultInterface;
  year: number;
}

const SeasonCard: FC<SeasonCardProps> = ({ season, year }) => {
  const { raceName, round, Circuit, date } = season;

  return (
    <SeasonCardWrapper title={raceName}>
      <Round>
        <RoundTitle>Round</RoundTitle>
        <RoundNumber>{round}</RoundNumber>
      </Round>
      <CountryDetails>
        <Flag country={Circuit.Location.country} />
        <CircuitName>
          <h3>{raceName}</h3>
          <span>
            {Circuit.Location.locality}, {Circuit.Location.country}
          </span>
        </CircuitName>
      </CountryDetails>

      <RaceName>
        <b>Race</b> {raceName}
      </RaceName>
      <RaceName>
        <b>Date</b> {date}
      </RaceName>
      <Link href={`/seasons/${year}/${round}`}>
        <DetailsLink href={`/seasons/${year}/${round}`}>Details</DetailsLink>
      </Link>
    </SeasonCardWrapper>
  );
};

export default SeasonCard;
