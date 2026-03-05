import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import FavoriteButton from './FavoriteButton';

describe('FavoriteButton', () => {
  it('renders a button', () => {
    render(<FavoriteButton />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders children inside the button', () => {
    render(<FavoriteButton>X</FavoriteButton>);

    expect(screen.getByRole('button')).toHaveTextContent('X');
  });

  it('renders an empty button when no children provided', () => {
    render(<FavoriteButton />);

    expect(screen.getByRole('button')).toHaveTextContent('');
  });
});
