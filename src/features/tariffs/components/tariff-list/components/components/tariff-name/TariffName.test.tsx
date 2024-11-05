import { render } from '@testing-library/react';
import TariffName from './TariffName';

describe('TariffName Component', () => {
  it('renders correctly with the given name', () => {
    const { getByText } = render(<TariffName name="Test Tariff" />);

    expect(getByText('Test Tariff')).toBeTruthy();
  });
});
