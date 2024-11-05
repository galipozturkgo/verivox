import { fireEvent, render, screen } from '@testing-library/react';
import TariffFilter from './TariffFilter';
import { TariffFilterBy } from './TariffFilter.types';

describe('TariffFilter component', () => {
  const mockOnChange = jest.fn();
  const initialFilter: TariffFilterBy = {
    type: 'price',
    min: null,
    max: null,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with initial filter values', () => {
    render(<TariffFilter filter={initialFilter} onChange={mockOnChange} />);

    const select = screen.getByLabelText('Filter by');
    expect(select).toBeTruthy();

    const minInput = screen.getByLabelText('Min');
    const maxInput = screen.getByLabelText('Max');
    expect(minInput).toBeTruthy();
    expect(maxInput).toBeTruthy();

    expect(minInput.textContent).toBe('');
    expect(maxInput.textContent).toBe('');
  });

  it('calls onChange with correct value when select option is changed', () => {
    render(<TariffFilter filter={initialFilter} onChange={mockOnChange} />);

    const select = screen.getByLabelText('Filter by');
    fireEvent.change(select, { target: { value: 'download-speed' } });

    expect(mockOnChange).toHaveBeenCalledWith({
      type: 'download-speed',
      min: null,
      max: null,
    });
  });

  it('calls onChange with correct value when min input is changed', () => {
    render(<TariffFilter filter={initialFilter} onChange={mockOnChange} />);

    const minInput = screen.getByLabelText('Min');
    fireEvent.change(minInput, { target: { value: 10 } });

    expect(mockOnChange).toHaveBeenCalledWith({
      type: 'price',
      min: 10,
      max: null,
    });
  });

  it('calls onChange with correct value when max input is changed', () => {
    render(<TariffFilter filter={initialFilter} onChange={mockOnChange} />);

    const maxInput = screen.getByLabelText('Max');
    fireEvent.change(maxInput, { target: { value: 100 } });

    expect(mockOnChange).toHaveBeenCalledWith({
      type: 'price',
      min: null,
      max: 100,
    });
  });
});
