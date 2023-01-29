import SeasonCard from 'components/Seasons/SeasonCard/SeasonCard';
import { RaceSeason } from 'components/Seasons/types';
import { FC } from 'react';

import styles from './RacesList.module.scss';

export interface RacesListProps {
  races: any[];
}

const RacesList: FC<RacesListProps> = ({ races }) => (
  <div className={styles.wrapper}>
    {races?.map(
      ({ season, round, Circuit, raceName, date, time }: RaceSeason) => (
        <SeasonCard
          raceName={raceName}
          key={raceName}
          circuitName={Circuit.circuitName}
          season={season}
          round={round}
          country={Circuit.Location.country}
          locality={Circuit.Location.locality}
          circuitId={Circuit.circuitId}
          date={date}
          time={time}
        />
      ),
    )}
  </div>
);

export default RacesList;
