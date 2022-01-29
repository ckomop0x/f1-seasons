import { CircuitInterface } from './Circuit.interface';

export interface RaceSeasonInterface {
  Circuit: CircuitInterface;
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
}
