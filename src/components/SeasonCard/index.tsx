import { FC } from 'react';
import styled from 'styled-components';

import Flag from '../Flag';

import CardButton from 'styles/CardButton';

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
  <Card title={circuitName}>
    {/* <CardTitle>{circuitName}</CardTitle>*/}
    <div className="content">
      <Flag country={country} />
      <h3>{circuitName}</h3>
      <p>
        {locality}, {country}
      </p>
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
    <CardButton onClick={onSeasonSelect} title="Go to standings">
      Go to standings &rarr;
    </CardButton>
  </Card>
);

export default SeasonCard;

export const Card = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.grid * 2}px;
  background: white;
  color: ${({ theme }) => theme.gray1};
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);

  @media (min-width: 600px) {
    margin: 8px;
    width: 47%;
  }

  @media (min-width: 900px) {
    width: 31%;
  }

  @media (min-width: 1200px) {
    width: 22%;
  }

  @media (min-width: 1500px) {
    width: 18%;
  }

  .content {
    padding: ${({ theme }) => theme.grid * 2.5}px;
    background: ${({ theme }) => theme.gray2};
  }

  h4 {
    text-align: center;
  }
`;
