import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import SeasonCard from './SeasonCard';

const defaultProps = {
  raceName: 'Austrian Grand Prix',
  circuitName: 'Red Bull Ring',
  season: '2020',
  round: '1',
  country: 'Austria',
  locality: 'Spielberg',
  circuitId: 'red_bull_ring',
  date: '2020-07-05',
  time: '13:10:00Z',
};

describe('SeasonCard', () => {
  it('renders the circuit name', () => {
    render(<SeasonCard {...defaultProps} />);

    expect(screen.getByText('Red Bull Ring')).toBeInTheDocument();
  });

  it('renders the race name', () => {
    render(<SeasonCard {...defaultProps} />);

    expect(screen.getByText('Austrian Grand Prix')).toBeInTheDocument();
  });

  it('renders the round number', () => {
    render(<SeasonCard {...defaultProps} />);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('renders the date', () => {
    render(<SeasonCard {...defaultProps} />);

    expect(screen.getByText('2020-07-05')).toBeInTheDocument();
  });

  it('renders the locality and country', () => {
    render(<SeasonCard {...defaultProps} />);

    expect(screen.getByText(/Spielberg, Austria/)).toBeInTheDocument();
  });

  it('renders a link to the race standings', () => {
    render(<SeasonCard {...defaultProps} />);

    expect(screen.getByRole('link', { name: /Go to standings/i })).toHaveAttribute(
      'href',
      '/2020/1',
    );
  });
});
