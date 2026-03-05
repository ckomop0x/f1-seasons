import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import StandingsTable from './StandingsTable';

const mockStandings = {
  Results: [
    {
      position: '1',
      number: '33',
      Driver: {
        driverId: 'verstappen',
        givenName: 'Max',
        familyName: 'Verstappen',
      },
      Constructor: { name: 'Red Bull' },
    },
    {
      position: '2',
      number: '44',
      Driver: {
        driverId: 'hamilton',
        givenName: 'Lewis',
        familyName: 'Hamilton',
      },
      Constructor: { name: 'Mercedes' },
    },
  ],
};

describe('StandingsTable', () => {
  it('renders a row for each result', () => {
    render(
      <StandingsTable
        standings={mockStandings}
        savedDrivers={[]}
        onFavouriteClick={vi.fn()}
      />,
    );

    expect(screen.getByText('Max Verstappen')).toBeInTheDocument();
    expect(screen.getByText('Lewis Hamilton')).toBeInTheDocument();
  });

  it('renders position and number for each driver', () => {
    render(
      <StandingsTable
        standings={mockStandings}
        savedDrivers={[]}
        onFavouriteClick={vi.fn()}
      />,
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('33')).toBeInTheDocument();
  });

  it('shows "X" in the favorite button for saved drivers', () => {
    render(
      <StandingsTable
        standings={mockStandings}
        savedDrivers={['verstappen']}
        onFavouriteClick={vi.fn()}
      />,
    );

    const buttons = screen.getAllByRole('button');

    expect(buttons[0]).toHaveTextContent('X');
    expect(buttons[1]).toHaveTextContent('');
  });

  it('calls onFavouriteClick when a row is clicked', async () => {
    const onFavouriteClick = vi.fn();

    render(
      <StandingsTable
        standings={mockStandings}
        savedDrivers={[]}
        onFavouriteClick={onFavouriteClick}
      />,
    );

    screen.getAllByRole('row')[1].click();
    expect(onFavouriteClick).toHaveBeenCalledWith('verstappen', false);
  });
});
