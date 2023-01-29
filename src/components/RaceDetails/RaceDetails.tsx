import StandingsTable from 'components/RaceDetails/StandingsTable';
import Link from 'next/link';
import { FC, useCallback, useEffect, useState } from 'react';

import getSeasonsResults from '../../services/get-seasons-results';
import getSavedDrivers from '../../services/setSavedDrivers';

import styles from './RaceDetails.module.scss';

interface RaceDetailsProps {
  season: string | string[] | undefined;
  raceId: string | string[] | undefined;
}

export const RaceDetails: FC<RaceDetailsProps> = ({ season, raceId }) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [raceResults, setRaceResults] = useState<any>(true);
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

  const loadRaceResults = useCallback(async (): Promise<void> => {
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
    } catch (error: any) {
      console.log(error?.message || 'Race results request failed');
      setIsUpdating(false);
    }
  }, [season, raceId]);

  const saveFavoritesDriversToLocalStorage = useCallback((): void => {
    localStorage.setItem('savedDrivers', JSON.stringify(savedDrivers));
  }, [savedDrivers]);

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
  }, [savedDrivers, saveFavoritesDriversToLocalStorage]);

  useEffect(() => {
    if (raceId && season) {
      void loadRaceResults();
    }
  }, [season, raceId, loadRaceResults]);

  return (
    <div className={styles.wrapper}>
      <Link className={styles.backButton} href={`/${season}`}>
        &larr; Back to season
      </Link>
      {isUpdating && (
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          Loading results...
        </div>
      )}
      {raceResults && <h2>{raceResults?.Circuit?.circuitName}</h2>}
      {raceResults ? (
        <StandingsTable
          standings={raceResults}
          savedDrivers={savedDrivers}
          onFavouriteClick={favouriteClickHandler}
        />
      ) : (
        !isUpdating && (
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            No results available
          </div>
        )
      )}
    </div>
  );
};
