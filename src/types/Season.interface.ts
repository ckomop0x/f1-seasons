import { RacesResultInterface } from 'types/RacesResult.interface';

export interface SeasonInterface {
  MRData: {
    xmlns: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: {
      season: string;
      Races: RacesResultInterface[];
    };
  };
}
