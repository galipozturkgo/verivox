import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  const defaultProps = {
    id: 'test-input',
    label: 'Test Label',
    value: '',
    onChange: jest.fn(),
    placeholder: 'Enter text',
  };

  beforeEach(() => {
    defaultProps.onChange.mockClear();
  });

  it('renders with the correct label and placeholder', () => {
    render(<Input {...defaultProps} />);
    expect(screen.getByLabelText('Test Label')).toBeTruthy();
    expect(screen.getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('calls onChange with the correct value for text input', () => {
    render(<Input {...defaultProps} type="text" />);

    const inputElement = screen.getByLabelText(
      'Test Label'
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    expect(defaultProps.onChange).toHaveBeenCalledWith('Hello');
  });
});
