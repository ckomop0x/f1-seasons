import classNames from 'classnames';
import FavoriteButton from 'components/RaceDetails/FavoriteButton';
import { Result } from 'components/Seasons/types';
import { FC } from 'react';

import styles from './StandingsTable.module.scss';

interface StandingsTableProps {
  standings: any;
  savedDrivers: string[];
  onFavouriteClick(driverCode: string, isFavorite: boolean): void;
}

const StandingsTable: FC<StandingsTableProps> = ({
  onFavouriteClick,
  standings,
  savedDrivers,
}) => (
  <div className={styles.wrapper}>
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
        {standings?.Results?.map((result: Result, index: number) => {
          const { Driver } = result;
          const isDriverFavorite: boolean = savedDrivers.includes(
            Driver.driverId,
          );

          return (
            <tr
              key={Driver.driverId}
              className={classNames({ firstRow: result.position })}
              onClick={() =>
                onFavouriteClick(Driver.driverId, isDriverFavorite)
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
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default StandingsTable;
