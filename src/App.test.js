import { render, screen } from '@testing-library/react';
import App_41 from './App_41';

test('renders learn react link', () => {
  render(<App_41 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
