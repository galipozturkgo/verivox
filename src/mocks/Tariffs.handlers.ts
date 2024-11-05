import { BASE_URL } from '@verivox/utils/Contants';
import { delay, http, HttpResponse } from 'msw';

export const tariffsHandler = [
  http.get(`${BASE_URL}/tariffs`, async () => {
    await delay(500);

    return HttpResponse.json([
      {
        name: 'Tariff 1',
        price: 123.45,
        link: 'https://verivox.de',
        downloadSpeed: 16,
        uploadSpeed: 8,
        benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
      },
      {
        name: 'Tariff 2',
        price: 234.51,
        link: 'https://verivox.de',
        downloadSpeed: 50,
        uploadSpeed: 25,
        benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
      },
      {
        name: 'Tariff 3',
        price: 345.12,
        link: 'https://verivox.de',
        downloadSpeed: 100,
        uploadSpeed: 50,
        benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
      },
      {
        name: 'Tariff 4',
        price: 451.23,
        link: 'https://verivox.de',
        downloadSpeed: 250,
        uploadSpeed: 125,
        benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
      },
      {
        name: 'Tariff 5',
        price: 512.34,
        link: 'https://verivox.de',
        downloadSpeed: 500,
        uploadSpeed: 250,
        benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
      },
    ]);
  }),
];
