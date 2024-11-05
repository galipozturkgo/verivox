import { render } from '@testing-library/react';
import TariffSpeed from './TariffSpeed';

describe('TariffSpeed Component', () => {
  it('renders correctly with given download and upload speeds', () => {
    const { getByText } = render(
      <TariffSpeed downloadSpeed={50} uploadSpeed={25} />
    );

    expect(getByText('Download')).toBeTruthy();
    expect(getByText('50 Mbit/s')).toBeTruthy();
    expect(getByText('Upload')).toBeTruthy();
    expect(getByText('25 Mbit/s')).toBeTruthy();
  });
});
