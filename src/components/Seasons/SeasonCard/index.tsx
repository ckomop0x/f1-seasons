import * as React from 'react';
import { FC } from 'react';

import CardButton from '../../../styles/CardButton';
import { CardTitle } from '../../../styles/CardTitle';
import Flag from '../../Flag';

import { Card } from './SeasonCardStyles';

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
}

const SeasonCard: FC<SeasonCardProps> = ({
  raceName,
  circuitName,
  season,
  round,
  country,
  locality,
  date,
}) => (
  <Card title={circuitName}>
    <CardTitle>{circuitName}</CardTitle>
    <div className="content">
      <Flag country={country} />
      <h4>
        {locality}, {country}
      </h4>
      <div>
        <b>Round:</b> {round}
      </div>
      <div>
        <b>Race:</b> {raceName}
      </div>
      <div>
        <b>Date:</b> {date}
      </div>
    </div>
    <CardButton href={`/${season}/${round}`} title="Go to standings">
      Go to standings &rarr;
    </CardButton>
  </Card>
);

export default SeasonCard;
