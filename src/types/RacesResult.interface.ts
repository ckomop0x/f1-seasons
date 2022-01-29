import { CircuitInterface } from 'types/Circuit.interface';
import { ResultInterface } from 'types/Result.interface';

export interface RacesResultInterface {
  Circuit: CircuitInterface;
  Results: ResultInterface[];
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
}
