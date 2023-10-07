import { render, screen } from '@testing-library/react';

import Container from './Container';

test('renders children inside the container', () => {
  const testContent = 'Test Content';

  render(<Container>{testContent}</Container>);

  expect(screen.getByText(testContent)).toBeInTheDocument();
});
