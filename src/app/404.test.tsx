import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Page404 from './404';

describe('Page404', () => {
  it('renders 404 heading', () => {
    render(<Page404 />);

    expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument();
  });

  it('renders a link back to the main page', () => {
    render(<Page404 />);

    expect(
      screen.getByRole('link', { name: /back to main page/i }),
    ).toHaveAttribute('href', '/');
  });
});
