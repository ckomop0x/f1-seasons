import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Logo from './Logo';

describe('Logo', () => {
  it('renders children', () => {
    render(<Logo>My Logo</Logo>);

    expect(screen.getByText('My Logo')).toBeInTheDocument();
  });

  it('renders a link with the default href "/"', () => {
    render(<Logo>Logo</Logo>);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  it('renders a link with a custom href', () => {
    render(<Logo link="/seasons">Logo</Logo>);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/seasons');
  });

  it('renders the title attribute when provided', () => {
    render(<Logo title="Go home">Logo</Logo>);

    expect(screen.getByRole('link')).toHaveAttribute('title', 'Go home');
  });
});
