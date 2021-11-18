import Flag from '../Flag';
import { Card } from './SeasonCardStyles';
import styled from 'styled-components';

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

export default function SeasonCard({
  raceName,
  circuitName,
  round,
  country,
  locality,
  date,
  onSeasonSelect
}: ISeasonCardProps): JSX.Element {
  return (
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
      <BackButton onClick={onSeasonSelect} title="Go to standings">
        Go to standings &rarr;
      </BackButton>
    </Card>
  );
}

const BackButton = styled.button`
  display: block;
  width: 100%;
  background: ${({ theme }) => theme.primaryRed};
  box-shadow: none;
  color: white;
  box-sizing: border-box;
  border: 0;
  cursor: pointer;
  line-height: 1;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.2, 0, 0.05, 1);
  font-size: 1rem;
  letter-spacing: 0.5px;
  font-weight: normal;
  position: relative;
  padding: ${({ theme }) => theme.grid * 2.5}px;

  &:hover {
    background: ${({ theme }) => theme.primaryRedLighten};
  }
`;

export interface CardTitleTypes {
  fontSize?: string;
}

export const CardTitle = styled.h2<CardTitleTypes>`
  margin: 0;
  font-size: ${({ fontSize }) => fontSize ?? '1.25rem'};
  padding: ${({ theme }) => theme.grid * 2}px;
  text-align: center;
  font-family: ${({ theme }) => theme.secondaryFont};
  background: ${({ theme }) => theme.gray1};
  color: white;
  height: ${({ theme }) => theme.grid * 10}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
