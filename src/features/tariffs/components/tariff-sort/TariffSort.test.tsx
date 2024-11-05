import { render, screen, fireEvent } from '@testing-library/react';
import TariffSort from './TariffSort';

describe('TariffSort component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly sort options', () => {
    render(<TariffSort sortBy="price-asc" onChange={mockOnChange} />);

    const select = screen.getByLabelText('Sort by');
    expect(select).toBeTruthy();
    expect(screen.getAllByRole('option').length).toBe(6);
    expect(screen.getByText('Price: Ascending')).toBeTruthy();
    expect(screen.getByText('Price: Descending')).toBeTruthy();
    expect(screen.getByText('Download speed: Ascending')).toBeTruthy();
    expect(screen.getByText('Download speed: Descending')).toBeTruthy();
    expect(screen.getByText('Upload speed: Ascending')).toBeTruthy();
    expect(screen.getByText('Upload speed: Descending')).toBeTruthy();
  });

  it('calls onChange with the correct value when an option is selected', () => {
    render(<TariffSort sortBy="price-asc" onChange={mockOnChange} />);

    const select = screen.getByLabelText('Sort by');

    fireEvent.change(select, { target: { value: 'price-desc' } });

    expect(mockOnChange).toHaveBeenCalledWith('price-desc');
  });
});
