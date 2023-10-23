import Image from 'next/image';
import { FC } from 'react';

import styles from './Flag.module.scss';

export interface FlagProps {
  country: string;
}

const Flag: FC<FlagProps> = ({ country }) => {
  let countryName = country?.toLowerCase()?.replace(' ', '-');

  if (countryName === 'united-states') {
    countryName = 'usa';
  }

  return (
    <div className={styles.wrapper}>
      <Image
        src={`./flags/${countryName}.svg`}
        alt={country}
        width={60}
        height={60}
      />
    </div>
  );
};

export default Flag;
