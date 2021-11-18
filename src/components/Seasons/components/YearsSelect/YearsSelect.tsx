import React from 'react';

import { SelectForm, SelectWrapper } from '../../styles';

interface IYearsSelectProps {
  years: number[];
  onChange(value: number): void;
  selectedYear: number;
}

export default function YearsSelect({ years, onChange, selectedYear }: IYearsSelectProps) {
  const onYearsChange = (event: React.ChangeEvent<HTMLFormElement>): void =>
    onChange(Number(event.target.value));

  return (
    <SelectForm onChange={onYearsChange}>
      <SelectWrapper name="years" defaultValue={selectedYear}>
        {years.map((year: number) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </SelectWrapper>
    </SelectForm>
  );
}
