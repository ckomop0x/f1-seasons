import * as React from 'react';
import { FlagStyled } from './FlagStyles';

export interface FlagProps {
  country: string;
}

const Flag = ({ country }: FlagProps) => {
  let flagUrl = "";
  let countryName = country?.toLowerCase()?.replace(' ', '-')

  if (countryName === "united-states") {
    countryName = "usa"
  }

  try {
    flagUrl = require(`./flags/${countryName?.toLowerCase()?.replace(' ', '-')}.svg`)
  } catch (e) {
    console.log(`Flag Icon for ${countryName} not found`)
  }

  return (
    <FlagStyled>
      <img
        src={flagUrl}
        alt={country}
        className="flag-icon"
      />
    </FlagStyled>
  );
};

export default Flag;
