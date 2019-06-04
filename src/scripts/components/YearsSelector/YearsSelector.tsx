import { YearsSelectStyled } from '../Seasons/styles';
import * as React from 'react';

interface YearsSelectProps {
  years: number[]
  onFormChange(event: React.FormEvent<HTMLFormElement>): void
}

const YearsSelect: React.FC<YearsSelectProps> = ({onFormChange, years}) => (
  <YearsSelectStyled>
    <form onChange={onFormChange} className="select">
      <select name="years">
        {years.map((year: number) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  </YearsSelectStyled>
)

export default YearsSelect
