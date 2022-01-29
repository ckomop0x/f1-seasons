import { ConstructorInterface } from 'types/Constructor.interface';
import { DriverInterface } from 'types/Driver.interface';
import { FastestLapInterface } from 'types/FastestLap.interface';
import { TimeInterface } from 'types/Time.interface';

export interface ResultInterface {
  Constructor: ConstructorInterface;
  Driver: DriverInterface;
  FastestLap: FastestLapInterface;
  Time: TimeInterface;
  grid: string;
  laps: string;
  number: string;
  points: string;
  position: string;
  positionText: string;
  status: string;
}
