import { render } from '@testing-library/react';
import TariffList from './TariffList';
import { Tariff } from './components/TariffItem.types';

const mockItems: Tariff[] = [
  {
    name: 'Tariff Item 1',
    price: 100,
    link: 'http://example.com/tariff1',
    downloadSpeed: 10,
    uploadSpeed: 5,
    benefits: ['Benefit A', 'Benefit B'],
  },
  {
    name: 'Tariff Item 2',
    price: 200,
    link: 'http://example.com/tariff2',
    downloadSpeed: 20,
    uploadSpeed: 10,
    benefits: ['Benefit C'],
  },
];

describe('TariffList component', () => {
  it('renders correct number of TariffItem components', () => {
    const { getAllByText } = render(<TariffList items={mockItems} />);

    const tariffItems = getAllByText(/Tariff Item/);

    expect(tariffItems.length).toBe(mockItems.length);
  });

  it('passes the correct props to TariffItem components', () => {
    const { getByText } = render(<TariffList items={mockItems} />);

    mockItems.forEach((item) => {
      const tariffNameElement = getByText(item.name);
      expect(tariffNameElement).toBeTruthy();
    });
  });
});
