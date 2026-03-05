import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Seasons from './Seasons';

const mockPush = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}));

vi.mock('components/Races', () => ({
  default: ({ season }: { season: number }) => (
    <div data-testid="races">{season}</div>
  ),
}));

vi.mock('components/Seasons/YearsSelect', () => ({
  default: ({
    onChange,
    selectedYear,
  }: {
    onChange: (e: React.FormEvent<HTMLFormElement>) => void;
    selectedYear: number;
  }) => (
    <form data-testid="years-select" onChange={onChange}>
      <input data-testid="year-input" defaultValue={selectedYear} />
    </form>
  ),
}));

describe('Seasons', () => {
  it('renders the selected season heading', () => {
    render(<Seasons season="2024" />);

    expect(screen.getByRole('heading')).toHaveTextContent(
      'Selected season: 2024',
    );
  });

  it('falls back to current year when no season is provided', () => {
    const currentYear = new Date().getFullYear();

    render(<Seasons />);

    expect(screen.getByRole('heading')).toHaveTextContent(
      `Selected season: ${currentYear}`,
    );
  });

  it('passes the season to Races', () => {
    render(<Seasons season="2023" />);

    expect(screen.getByTestId('races')).toHaveTextContent('2023');
  });

  it('navigates to the selected year on form change', () => {
    render(<Seasons season="2024" />);

    fireEvent.change(screen.getByTestId('year-input'), {
      target: { value: '2022' },
    });

    expect(mockPush).toHaveBeenCalledWith('/2022');
  });
});
