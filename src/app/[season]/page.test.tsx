import { render, screen, act } from '@testing-library/react';
import { Suspense } from 'react';
import { describe, expect, it, vi } from 'vitest';

import SeasonPage from './page';

vi.mock('components/Seasons/Seasons', () => ({
  default: ({ season }: { season?: string }) => (
    <div data-testid="seasons">{season}</div>
  ),
}));

describe('SeasonPage', () => {
  it('renders the Seasons component with the resolved season param', async () => {
    const params = Promise.resolve({ season: '2024' });

    await act(async () => {
      render(
        <Suspense fallback={null}>
          <SeasonPage params={params} />
        </Suspense>,
      );
    });

    expect(screen.getByTestId('seasons')).toBeInTheDocument();
    expect(screen.getByTestId('seasons')).toHaveTextContent('2024');
  });
});
