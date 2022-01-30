import { FC } from 'react';

import SeasonCard from '../SeasonCard';

import { SeasonStyled } from 'components/Seasons/styles';
import { RaceSeasonInterface } from 'types/RaceSeason.interface';
import { RacesResultInterface } from 'types/RacesResult.interface';

export interface SeasonsListProps {
  seasons: RacesResultInterface[];
  year: number;
}

const SeasonsList: FC<SeasonsListProps> = ({ seasons, year }) => (
  <SeasonStyled>
    {seasons.map((season, index) => (
      <SeasonCard key={index} season={season} year={year} />
    ))}
  </SeasonStyled>
);

export default SeasonsList;
