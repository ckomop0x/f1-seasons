import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Flag from './Flag';

describe('Flag', () => {
  it('renders an image with the country as alt text', () => {
    render(<Flag country="Germany" />);

    expect(screen.getByRole('img', { name: 'Germany' })).toBeInTheDocument();
  });

  it('converts "United States" to "usa" in the image src', () => {
    render(<Flag country="United States" />);
    const img = screen.getByRole('img', { name: 'United States' });

    expect(img).toHaveAttribute('src', expect.stringContaining('usa'));
  });

  it('lowercases the country name in the image src', () => {
    render(<Flag country="Germany" />);
    const img = screen.getByRole('img', { name: 'Germany' });

    expect(img).toHaveAttribute('src', expect.stringContaining('germany'));
  });

  it('replaces spaces with hyphens in the image src', () => {
    render(<Flag country="Great Britain" />);
    const img = screen.getByRole('img', { name: 'Great Britain' });

    expect(img).toHaveAttribute('src', expect.stringContaining('great-britain'));
  });
});
