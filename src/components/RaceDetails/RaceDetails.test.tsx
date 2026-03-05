import { render, screen, act, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi, afterEach } from 'vitest';

import getSeasonsResults from '../../services/get-seasons-results';
import { RaceDetails } from './RaceDetails';

vi.mock('components/RaceDetails/StandingsTable', () => ({
  default: ({
    standings,
    onFavouriteClick,
  }: {
    standings: any;
    savedDrivers: string[];
    onFavouriteClick: (code: string, isFavorite: boolean) => void;
  }) => (
    <div data-testid="standings-table">
      <span>{standings.Circuit?.circuitName}</span>
      <button onClick={() => onFavouriteClick('HAM', false)}>add HAM</button>
      <button onClick={() => onFavouriteClick('HAM', true)}>remove HAM</button>
    </div>
  ),
}));

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => <a href={href}>{children}</a>,
}));

vi.mock('../../services/get-seasons-results', () => ({
  default: vi.fn(),
}));

vi.mock('../../services/setSavedDrivers', () => ({
  default: vi.fn(() => []),
}));

const mockGetSeasonsResults = vi.mocked(getSeasonsResults);

afterEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
});

const mockRace = {
  Circuit: { circuitName: 'Monaco Circuit' },
  Results: [],
};

describe('RaceDetails', () => {
  it('shows loading state initially', () => {
    mockGetSeasonsResults.mockImplementation(() => new Promise(() => {}));

    render(<RaceDetails season="2024" raceId="6" />);

    expect(screen.getByText('Loading results...')).toBeInTheDocument();
  });

  it('renders race results after fetch', async () => {
    mockGetSeasonsResults.mockResolvedValue({
      MRData: { RaceTable: { Races: [mockRace] } },
    });

    await act(async () => {
      render(<RaceDetails season="2024" raceId="6" />);
    });

    expect(
      screen.getByRole('heading', { name: 'Monaco Circuit' }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('standings-table')).toBeInTheDocument();
  });

  it('shows no results message when fetch returns empty', async () => {
    mockGetSeasonsResults.mockResolvedValue({
      MRData: { RaceTable: { Races: [] } },
    });

    await act(async () => {
      render(<RaceDetails season="2024" raceId="6" />);
    });

    expect(screen.getByText('No results available')).toBeInTheDocument();
  });

  it('shows no results message on fetch error', async () => {
    mockGetSeasonsResults.mockRejectedValue(new Error('network error'));

    await act(async () => {
      render(<RaceDetails season="2024" raceId="6" />);
    });

    expect(screen.getByText('No results available')).toBeInTheDocument();
  });

  it('renders back link to the season', async () => {
    mockGetSeasonsResults.mockResolvedValue({
      MRData: { RaceTable: { Races: [mockRace] } },
    });

    await act(async () => {
      render(<RaceDetails season="2024" raceId="6" />);
    });

    expect(screen.getByRole('link')).toHaveAttribute('href', '/2024');
  });

  it('does not fetch when season or raceId is missing', () => {
    render(<RaceDetails season={undefined} raceId={undefined} />);

    expect(mockGetSeasonsResults).not.toHaveBeenCalled();
  });

  it('adds and removes drivers from favorites', async () => {
    mockGetSeasonsResults.mockResolvedValue({
      MRData: { RaceTable: { Races: [mockRace] } },
    });

    await act(async () => {
      render(<RaceDetails season="2024" raceId="6" />);
    });

    fireEvent.click(screen.getByText('add HAM'));
    expect(JSON.parse(localStorage.getItem('savedDrivers') ?? '[]')).toContain(
      'HAM',
    );

    fireEvent.click(screen.getByText('remove HAM'));
    expect(
      JSON.parse(localStorage.getItem('savedDrivers') ?? '[]'),
    ).not.toContain('HAM');
  });
});
