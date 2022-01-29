import { FC, FormEvent } from 'react';

import { YearsSelectWrapper } from '../Seasons/styles';

interface SeasonsSelectProps {
  years: string[];
  onChange(event: FormEvent<HTMLFormElement>): void;
}

const SeasonsSelect: FC<SeasonsSelectProps> = ({ years, onChange }) => (
  <YearsSelectWrapper>
    <form onChange={onChange} className="select">
      <select name="years">
        {years.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  </YearsSelectWrapper>
);

export default SeasonsSelect;
