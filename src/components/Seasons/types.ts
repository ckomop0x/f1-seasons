export interface Circuit {
  Location: {
    country: string;
    lat: string;
    long: string;
    locality: string;
  };
  circuitId: string;
  circuitName: string;
  url: string;
}

export interface RaceSeason {
  Circuit: Circuit;
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
}

export interface Driver {
  code: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  permanentNumber: string;
  url: string;
}

export interface FastestLap {
  AverageSpeed: {
    speed: string;
    units: string;
  };
  Time: {
    time: string;
  };
  lap: string;
  rank: string;
}

export interface Constructor {
  constructorId: string;
  name: string;
  nationality: string;
  url: string;
}

export interface Time {
  millis: string;
  time: string;
}

export interface Result {
  Constructor: Constructor;
  Driver: Driver;
  FastestLap: FastestLap;
  Time: Time;
  grid: string;
  laps: string;
  number: string;
  points: string;
  position: string;
  positionText: string;
  status: string;
}

export interface RacesResult {
  Circuit: Circuit;
  Results: Result[];
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
}
