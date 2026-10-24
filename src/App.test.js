import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page content', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /make room for something growing/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /shop houseplants/i })).toHaveAttribute('href', '#plants');
  expect(screen.getByText(/easy to care for/i)).toBeInTheDocument();
});

test('opens and closes the mobile navigation', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: /toggle navigation/i });
  const navigation = toggle.nextElementSibling;

  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  expect(navigation).toHaveClass('show');

  fireEvent.click(screen.getByRole('link', { name: /our plants/i }));
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(navigation).not.toHaveClass('show');
});
