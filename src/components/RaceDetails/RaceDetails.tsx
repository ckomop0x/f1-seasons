import {
  BackButton,
  FavoriteButton,
  StandingsStyled,
  StandingsTable,
  StandingsTableRow,
} from 'components/Seasons/SeasonResults/styles';
import { Result } from 'components/Seasons/types';
import { FC, useEffect, useState } from 'react';

import getSeasonsResults from '../../services/get-seasons-results';
import getSavedDrivers from '../../services/setSavedDrivers';

interface RaceDetailsProps {
  season: string | string[] | undefined;
  raceId: string | string[] | undefined;
}

export const RaceDetails: FC<RaceDetailsProps> = ({ season, raceId }) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [raceResults, setRaceResults] = useState<boolean>(true);
  const [savedDrivers, setSavedDrivers] = useState<string[]>(getSavedDrivers());

  const addDriverToFavorite = (driverCode: string): void => {
    setSavedDrivers(prevState => [...prevState, driverCode]);
  };

  const removeDriverFromFavorites = (driverCode: string): void => {
    setSavedDrivers(prevState =>
      prevState.filter(
        (savedDriverCode): boolean => savedDriverCode !== driverCode,
      ),
    );
  };

  const loadRaceResults = async (): Promise<void> => {
    if (!season || !raceId) {
      return;
    }

    try {
      const seasonString = Array.isArray(season) ? season.join('') : season;
      const raceIdString = Array.isArray(raceId) ? raceId.join('') : raceId;
      const raceResultsResponse = await getSeasonsResults(
        seasonString,
        raceIdString,
      );
      setIsUpdating(false);
      setRaceResults(raceResultsResponse.MRData.RaceTable.Races[0]);
    } catch (error: Error) {
      console.log(error?.message || 'Race results request failed');
      setIsUpdating(false);
    }
  };

  const saveFavoritesDriversToLocalStorage = (): void => {
    console.log('savedDrivers', savedDrivers);
    localStorage.setItem('savedDrivers', JSON.stringify(savedDrivers));
  };

  const favouriteClickHandler = (
    driverCode: string,
    isFavorite: boolean,
  ): void => {
    if (!isFavorite) {
      addDriverToFavorite(driverCode);
    } else {
      removeDriverFromFavorites(driverCode);
    }
  };

  useEffect(() => {
    saveFavoritesDriversToLocalStorage();
  }, [savedDrivers]);

  useEffect(() => {
    if (raceId && season) {
      void loadRaceResults();
    }
  }, [season, raceId]);

  return (
    <StandingsStyled>
      <BackButton href={`/${season}`}>&larr; Back to season</BackButton>
      {isUpdating && (
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          Loading results...
        </div>
      )}
      {raceResults && <h2>{raceResults?.Circuit?.circuitName}</h2>}
      {raceResults ? (
        <StandingsTable>
          <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Number</th>
                <th>Driver</th>
                <th>Favorites</th>
              </tr>
            </thead>
            <tbody>
              {raceResults?.Results?.map((result: Result, index: number) => {
                const { Driver } = result;
                const isDriverFavorite: boolean = savedDrivers.includes(
                  Driver.driverId,
                );
                console.log(Driver);

                return (
                  <StandingsTableRow
                    key={Driver.driverId}
                    position={result.position}
                    onClick={() =>
                      favouriteClickHandler(Driver.driverId, isDriverFavorite)
                    }
                  >
                    <td>{result.position}</td>
                    <td>{result.number}</td>
                    <td>
                      {Driver.givenName} {Driver.familyName}
                    </td>
                    <td>
                      <FavoriteButton>{isDriverFavorite && 'X'}</FavoriteButton>
                    </td>
                  </StandingsTableRow>
                );
              })}
            </tbody>
          </table>
        </StandingsTable>
      ) : (
        !isUpdating && (
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            No results available
          </div>
        )
      )}
    </StandingsStyled>
  );
};
