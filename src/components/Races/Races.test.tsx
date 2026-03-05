import { render, screen, act } from '@testing-library/react';
import { describe, expect, it, vi, afterEach } from 'vitest';

import getSeasonRaces from '../../services/get-season-races';
import Races from './Races';

vi.mock('components/Races/RacesList', () => ({
  default: ({ races }: { races: any[] }) => (
    <div data-testid="races-list">{races.length}</div>
  ),
}));

vi.mock('../../services/get-season-races', () => ({
  default: vi.fn(),
}));

const mockGetSeasonRaces = vi.mocked(getSeasonRaces);

afterEach(() => {
  vi.clearAllMocks();
});

describe('Races', () => {
  it('renders RacesList with empty races initially', async () => {
    mockGetSeasonRaces.mockResolvedValue({
      MRData: { RaceTable: { Races: [] } },
    });

    await act(async () => {
      render(<Races season={2024} />);
    });

    expect(screen.getByTestId('races-list')).toBeInTheDocument();
    expect(screen.getByTestId('races-list')).toHaveTextContent('0');
  });

  it('fetches and renders races for the given season', async () => {
    const mockRaces = [{ raceName: 'Race 1' }, { raceName: 'Race 2' }];

    mockGetSeasonRaces.mockResolvedValue({
      MRData: { RaceTable: { Races: mockRaces } },
    });

    await act(async () => {
      render(<Races season={2024} />);
    });

    expect(mockGetSeasonRaces).toHaveBeenCalledWith(2024);
    expect(screen.getByTestId('races-list')).toHaveTextContent('2');
  });

  it('does not fetch when season is 0', () => {
    render(<Races season={0} />);

    expect(mockGetSeasonRaces).not.toHaveBeenCalled();
  });
});
