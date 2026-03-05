import StandingsTable from 'components/RaceDetails/StandingsTable';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

import getSeasonsResults from '../../services/get-seasons-results';
import getSavedDrivers from '../../services/setSavedDrivers';

import styles from './RaceDetails.module.scss';

interface RaceDetailsProps {
  season: string | string[] | undefined;
  raceId: string | string[] | undefined;
}

export const RaceDetails: FC<RaceDetailsProps> = ({ season, raceId }) => {
  const [raceResults, setRaceResults] = useState<any>(undefined);
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
    localStorage.setItem('savedDrivers', JSON.stringify(savedDrivers));
  }, [savedDrivers]);

  useEffect(() => {
    if (!season || !raceId) {
      return;
    }

    const controller = new AbortController();
    const seasonString = Array.isArray(season) ? season.join('') : season;
    const raceIdString = Array.isArray(raceId) ? raceId.join('') : raceId;

    getSeasonsResults(seasonString, raceIdString)
      .then(data => {
        if (!controller.signal.aborted) {
          setRaceResults(data.MRData.RaceTable.Races[0] ?? null);
        }
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setRaceResults(null);
        }
      });

    return () => controller.abort();
  }, [season, raceId]);

  return (
    <div className={styles.wrapper}>
      <Link className={styles.backButton} href={`/${season}`}>
        &larr; Back to season
      </Link>
      {raceResults === undefined && (
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
        raceResults === null && (
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            No results available
          </div>
        )
      )}
    </div>
  );
};
