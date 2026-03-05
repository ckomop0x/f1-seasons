import { render, screen, act } from '@testing-library/react';
import { Suspense } from 'react';
import { describe, expect, it, vi } from 'vitest';

import RaceDetailsPage from './page';

vi.mock('components/RaceDetails', () => ({
  RaceDetails: ({ season, raceId }: { season?: string; raceId?: string }) => (
    <div data-testid="race-details">
      {season}/{raceId}
    </div>
  ),
}));

describe('RaceDetailsPage', () => {
  it('renders the RaceDetails component with the resolved season and raceId params', async () => {
    const params = Promise.resolve({ season: '2024', raceId: '5' });

    await act(async () => {
      render(
        <Suspense fallback={null}>
          <RaceDetailsPage params={params} />
        </Suspense>,
      );
    });

    expect(screen.getByTestId('race-details')).toBeInTheDocument();
    expect(screen.getByTestId('race-details')).toHaveTextContent('2024/5');
  });
});
