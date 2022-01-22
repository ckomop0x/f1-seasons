import { FlagStyled } from './FlagStyles';

export interface FlagProps {
  country: string;
}

interface CountryAdapter {
  [key: string]: string;
}

const Flag = ({ country }: FlagProps) => {
  const countryAdapter: CountryAdapter = {
    'united states': 'usa'
  };
  const adoptedCountry = countryAdapter[country.toLowerCase()] ?? country;
  const flagSrc =
    require(`./flags/${adoptedCountry.toLowerCase().replace(' ', '-')}.svg`)?.default?.src || '';

  return (
    <FlagStyled>
      <img src={flagSrc} alt={country} className="flag-icon" />
    </FlagStyled>
  );
};

export default Flag;
