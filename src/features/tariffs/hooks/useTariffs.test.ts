import { renderHook, waitFor } from '@testing-library/react';
import { useTariffs } from './useTariffs';
import { BASE_URL } from '@verivox/utils/Contants';
import { server } from '@verivox/mocks/Node';
import { http, HttpResponse } from 'msw';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('useTariffs hook', () => {
  test('should fetch and set tariffs data successfully', async () => {
    const { result } = renderHook(() => useTariffs());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.hasError).toBe(false);
      expect(result.current.tariffs).toHaveLength(5);
    });
  });

  test('should handle errors and set error state on fetch failure', async () => {
    server.use(
      http.get(`${BASE_URL}/tariffs`, () => {
        return HttpResponse.json();
      })
    );

    const { result } = renderHook(() => useTariffs());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.hasError).toBe(true);
      expect(result.current.tariffs).toEqual([]);
    });
  });
});
