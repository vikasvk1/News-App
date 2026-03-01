import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => ({
      response: {
        status: 'ok',
        total: 0,
        results: [],
      },
    }),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders navbar brand', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /news\s*x/i });
  expect(linkElement).toBeInTheDocument();
});
