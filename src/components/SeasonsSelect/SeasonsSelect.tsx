import React from 'react';
import { SelectForm, SelectWrapper } from './styles';

interface ISeasonsSelectProps {
  seasons: number[];
  selectedSeason: number;

  onChange(value: number): void;
}

export default function SeasonsSelect({ seasons, onChange, selectedSeason }: ISeasonsSelectProps) {
  const onSeasonChange = (event: React.ChangeEvent<HTMLFormElement>): void =>
    onChange(Number(event.target.value));

  return (
    <SelectForm onChange={onSeasonChange}>
      <SelectWrapper name="seasons" defaultValue={selectedSeason}>
        {seasons.map((season: number) => (
          <option value={season} key={season}>
            {season}
          </option>
        ))}
      </SelectWrapper>
    </SelectForm>
  );
}
