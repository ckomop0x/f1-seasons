import { FlagStyled } from './FlagStyles';

export interface FlagProps {
  country: string;
}

export default function Flag({ country }: FlagProps) {
  console.log(country);

  return (
    <FlagStyled>
      <img
        src={require(`./flags/${country.toLowerCase().replace(' ', '-')}.svg`).default || ''}
        alt={country}
        className="flag-icon"
      />
    </FlagStyled>
  );
}
