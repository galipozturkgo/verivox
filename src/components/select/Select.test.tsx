import { render, screen, fireEvent } from '@testing-library/react';
import Select from './Select';

describe('Select component', () => {
  const mockOnChange = jest.fn();

  const props = {
    id: 'test-select',
    label: 'Select an option',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
    value: 'option1',
    onChange: mockOnChange,
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders successfully', () => {
    render(<Select {...props} />);

    expect(screen.getByLabelText('Select an option')).toBeTruthy();
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeTruthy();
  });

  it('renders options correctly', () => {
    render(<Select {...props} />);

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(2);
    expect(options[0].textContent).toBe('Option 1');
    expect(options[0].getAttribute('value')).toBe('option1');
    expect(options[1].textContent).toBe('Option 2');
    expect(options[1].getAttribute('value')).toBe('option2');
  });

  it('calls onChange when an option is selected', () => {
    render(<Select {...props} />);

    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'option2' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('option2');
  });
});
