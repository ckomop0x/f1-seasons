import React from 'react';

import { YearsSelectWrapper } from '../styles';

interface IYearsSelect {
  years: number[];
  onChange(event: React.FormEvent<HTMLFormElement>): void;
}

const YearsSelect: React.FC<IYearsSelect> = ({ years, onChange }) => {
  return (
    <YearsSelectWrapper>
      <form onChange={onChange} className="select">
        <select name="years">
          {years.map((year: number) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </form>
    </YearsSelectWrapper>
  );
};

export default YearsSelect;
