import { CircuitInterface } from 'types/Circuit.interface';

export interface RacesResultInterface {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: CircuitInterface;
  date: string;
  time: string;
}
