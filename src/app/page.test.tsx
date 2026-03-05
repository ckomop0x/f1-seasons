import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import IndexPage from './page';

vi.mock('components/Seasons/Seasons', () => ({
  default: () => <div data-testid="seasons" />,
}));

describe('IndexPage', () => {
  it('renders the Seasons component', () => {
    render(<IndexPage />);

    expect(screen.getByTestId('seasons')).toBeInTheDocument();
  });
});
