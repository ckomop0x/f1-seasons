import SeasonCardButton from 'components/Seasons/SeasonCard/SeasonCardButton/SeasonCardButton';
import { FC } from 'react';

import Flag from '../../UI/Flag';

import styles from './SeasonCard.module.scss';

export interface SeasonCardProps {
  raceName: string;
  circuitName: string;
  season: string;
  round: string;
  country: string;
  locality: string;
  circuitId: string;
  date: string;
  time: string;
}

const SeasonCard: FC<SeasonCardProps> = ({
  raceName,
  circuitName,
  season,
  round,
  country,
  locality,
  date,
}) => (
  <div title={circuitName} className={styles.wrapper}>
    <div className={styles.content}>
      <Flag country={country} />
      <h3>{circuitName}</h3>
    </div>
    <div className={styles.raceInfo}>
      <div>
        <b>City:</b> {locality}, {country}
      </div>
      <div>
        <b>Round:</b> {round}
      </div>
      <div>
        <b>Race:</b> {raceName}
      </div>
      <div>
        <b>Date:</b> {date}
      </div>
    </div>

    <SeasonCardButton link={`/${season}/${round}`} title="Go to standings">
      Go to standings &rarr;
    </SeasonCardButton>
  </div>
);

export default SeasonCard;
