import Image from 'next/image';
import { FC } from 'react';

import { FlagWrapper } from './Flag.styles';

export interface FlagProps {
  country: string;
}

const Flag: FC<FlagProps> = ({ country }) => {
  let countryName = country?.toLowerCase()?.replace(' ', '-');

  if (countryName === 'united-states') {
    countryName = 'usa';
  }

  return (
    <FlagWrapper>
      <Image
        src={`./flags/${countryName?.toLowerCase()?.replace(' ', '-')}.svg`}
        alt={country}
        width={60}
        height={60}
      />
    </FlagWrapper>
  );
};

export default Flag;
