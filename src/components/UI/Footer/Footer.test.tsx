import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import packageJson from '../../../../package.json';

import Footer from './Footer';

describe('Footer', () => {
  it('renders the current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();

    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('renders a link to the author GitHub', () => {
    render(<Footer />);

    expect(
      screen.getByRole('link', { name: 'Pavel Klochkov' }),
    ).toHaveAttribute('href', 'https://github.com/ckomop0x');
  });

  it('renders a link to Flaticon', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: 'Flaticon' })).toHaveAttribute(
      'href',
      'https://www.flaticon.com',
    );
  });

  it('renders the app version from package.json', () => {
    render(<Footer />);

    expect(
      screen.getByText(new RegExp(`v${packageJson.version}`)),
    ).toBeInTheDocument();
  });
});
