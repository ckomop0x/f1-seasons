import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import YearsSelect from './YearsSelect';

describe('YearsSelect', () => {
  const years = [2024, 2023, 2022];
  const noop = vi.fn();

  it('renders an option for each year', () => {
    render(<YearsSelect years={years} selectedYear={2024} onChange={noop} />);

    years.forEach(year => {
      expect(
        screen.getByRole('option', { name: String(year) }),
      ).toBeInTheDocument();
    });
  });

  it('marks the selected year as selected', () => {
    render(<YearsSelect years={years} selectedYear={2023} onChange={noop} />);

    const selectedOption = screen.getByRole('option', {
      name: '2023',
    }) as HTMLOptionElement;

    expect(selectedOption.selected).toBe(true);
  });
});
