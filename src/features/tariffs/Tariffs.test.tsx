import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Tariffs from './Tariffs';
import { server } from '@verivox/mocks/Node';
import { http, HttpResponse } from 'msw';
import { BASE_URL } from '@verivox/utils/Contants';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Tariffs component', () => {
  test('displays loading state initially', () => {
    render(<Tariffs />);
    expect(screen.getByText(/loading/i)).toBeTruthy();
  });

  test('renders list of tariffs after loading', async () => {
    render(<Tariffs />);
    await waitFor(() => {
      expect(screen.getAllByRole('listitem')).toHaveLength(5);
    });
  });

  test('applies filtering correctly', async () => {
    render(<Tariffs />);

    await waitFor(() => {
      expect(screen.getAllByRole('listitem')).toHaveLength(5);
    });

    const filterDropdown = screen.getByRole('combobox', { name: /filter by/i });
    fireEvent.change(filterDropdown, { target: { value: 'download-speed' } });

    const minInput = screen.getByLabelText(/min/i);
    fireEvent.change(minInput, { target: { value: '100' } });

    await waitFor(() => {
      const items = screen.getAllByRole('listitem');
      expect(items).toHaveLength(3);
    });
  });

  test('displays not found message when no tariffs match filter criteria', async () => {
    render(<Tariffs />);

    await waitFor(() => {
      expect(screen.getAllByRole('listitem')).toHaveLength(5);
    });

    const filterDropdown = screen.getByRole('combobox', { name: /filter by/i });
    fireEvent.change(filterDropdown, { target: { value: 'download-speed' } });

    const minInput = screen.getByLabelText(/min/i);
    fireEvent.change(minInput, { target: { value: '1000' } });

    await waitFor(() => {
      expect(screen.getByText(/not found/i)).toBeTruthy();
    });
  });

  test('displays error message when API returns 500', async () => {
    server.use(
      http.get(`${BASE_URL}/tariffs`, () => {
        return HttpResponse.json(
          { message: 'Internal Server Error' },
          { status: 500 }
        );
      })
    );

    render(<Tariffs />);

    await waitFor(() => {
      expect(screen.getByText(/error loading tariffs/i)).toBeTruthy();
    });
  });
});
