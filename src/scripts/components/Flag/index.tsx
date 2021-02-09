import * as React from 'react';
import { FlagStyled } from './FlagStyles';

export interface FlagProps {
  country: string;
}

const Flag = ({ country }: FlagProps) => {
  return (
    <FlagStyled>
      <img
        src={require(`./flags/${country.toLowerCase().replace(' ', '-')}.svg`) || ''}
        alt={country}
        className="flag-icon"
      />
    </FlagStyled>
  );
};

export default Flag;
