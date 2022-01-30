import { FlagWrapper } from './FlagStyles';

export interface FlagProps {
  country: string;
  className?: string;
}

interface CountryAdapter {
  [key: string]: string;
}

const Flag = ({ country, className }: FlagProps) => {
  const countryAdapter: CountryAdapter = {
    'united states': 'usa'
  };
  const adoptedCountry = countryAdapter[country.toLowerCase()] ?? country;
  const flagSrc =
    require(`./flags/${adoptedCountry.toLowerCase().replace(' ', '-')}.svg`)?.default?.src || '';

  return (
    <FlagWrapper className={className}>
      <img src={flagSrc} alt={country} />
    </FlagWrapper>
  );
};

export default Flag;
