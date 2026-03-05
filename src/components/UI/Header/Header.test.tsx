import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Header from './Header';

describe('Header', () => {
  it('renders the F1 Standings title', () => {
    render(<Header />);

    expect(screen.getByText('F1 Standings')).toBeInTheDocument();
  });

  it('renders a header element', () => {
    render(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
