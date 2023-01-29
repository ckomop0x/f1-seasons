import React from 'react';

import styles from './YearsSelect.module.scss';

interface IYearsSelect {
  years: number[];
  onChange(event: React.FormEvent<HTMLFormElement>): void;
}

const YearsSelect: React.FC<IYearsSelect> = ({ years, onChange }) => (
  <div className={styles.wrapper}>
    <form onChange={onChange} className={styles.select}>
      <select name="years">
        {years.map((year: number) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  </div>
);

export default YearsSelect;
