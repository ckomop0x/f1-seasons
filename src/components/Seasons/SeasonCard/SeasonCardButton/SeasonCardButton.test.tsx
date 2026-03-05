import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import SeasonCardButton from './SeasonCardButton';

describe('SeasonCardButton', () => {
  it('renders children', () => {
    render(<SeasonCardButton link="/2020/1">Go to standings</SeasonCardButton>);

    expect(screen.getByText('Go to standings')).toBeInTheDocument();
  });

  it('renders a link with the correct href', () => {
    render(<SeasonCardButton link="/2020/1">Go</SeasonCardButton>);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/2020/1');
  });

  it('renders the title attribute when provided', () => {
    render(
      <SeasonCardButton link="/2020/1" title="View standings">
        Go
      </SeasonCardButton>,
    );

    expect(screen.getByRole('link')).toHaveAttribute(
      'title',
      'View standings',
    );
  });
});
