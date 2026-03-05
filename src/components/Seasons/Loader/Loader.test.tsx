import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Loader from './Loader';

describe('Loader', () => {
  it('renders the loader placeholder text', () => {
    render(<Loader />);

    expect(
      screen.getByText(/Here should be Loader/i),
    ).toBeInTheDocument();
  });
});
