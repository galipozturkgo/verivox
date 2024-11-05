import { render } from '@testing-library/react';
import TariffBenefits from './TariffBenefits';

describe('TariffBenefits Component', () => {
  const benefits = ['Benefit 1', 'Benefit 2', 'Benefit 3'];

  it('renders the list of benefits', () => {
    const { getByText } = render(<TariffBenefits benefits={benefits} />);

    expect(getByText('Benefit 1')).toBeTruthy();
    expect(getByText('Benefit 2')).toBeTruthy();
    expect(getByText('Benefit 3')).toBeTruthy();
  });
});
