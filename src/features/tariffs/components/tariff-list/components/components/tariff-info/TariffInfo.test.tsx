import { render } from '@testing-library/react';
import TariffInfo from './TariffInfo';

describe('TariffInfo Component', () => {
  const mockProps = {
    price: 123.45,
    link: 'https://verivox.de',
  };

  it('renders correctly with given price and link', () => {
    const { getByText, getByRole } = render(<TariffInfo {...mockProps} />);

    expect(getByText('123,45 €')).toBeTruthy();

    const link = getByRole('link', { name: /to tariff/i });
    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toBe('https://verivox.de');
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noreferrer');
  });

  it('displays the correct currency format for different prices', () => {
    const { rerender, getByText } = render(<TariffInfo {...mockProps} />);

    rerender(<TariffInfo price={1000} link="https://verivox.de" />);
    expect(getByText('1.000,00 €')).toBeTruthy();

    rerender(<TariffInfo price={0.99} link="https://verivox.de" />);
    expect(getByText('0,99 €')).toBeTruthy();
  });
});
