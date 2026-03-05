import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import RacesList from './RacesList';

const mockRaces = [
  {
    season: '2020',
    round: '1',
    raceName: 'Austrian Grand Prix',
    date: '2020-07-05',
    time: '13:10:00Z',
    Circuit: {
      circuitId: 'red_bull_ring',
      circuitName: 'Red Bull Ring',
      Location: { country: 'Austria', locality: 'Spielberg' },
    },
  },
  {
    season: '2020',
    round: '2',
    raceName: 'Styrian Grand Prix',
    date: '2020-07-12',
    time: '13:10:00Z',
    Circuit: {
      circuitId: 'red_bull_ring',
      circuitName: 'Red Bull Ring',
      Location: { country: 'Austria', locality: 'Spielberg' },
    },
  },
];

describe('RacesList', () => {
  it('renders a card for each race', () => {
    render(<RacesList races={mockRaces} />);

    expect(screen.getByText('Austrian Grand Prix')).toBeInTheDocument();
    expect(screen.getByText('Styrian Grand Prix')).toBeInTheDocument();
  });

  it('renders nothing when races array is empty', () => {
    const { container } = render(<RacesList races={[]} />);

    expect(container.querySelectorAll('a').length).toBe(0);
  });
});
