import { render, screen } from '@testing-library/react';
import Field from './Field';

describe('Field Component', () => {
  it('displays the correct label', () => {
    render(
      <Field id="test-field" label="Test Label">
        <input id="test-field" type="text" />
      </Field>
    );
    expect(screen.getByText('Test Label')).toBeTruthy();
  });

  it('renders children correctly', () => {
    render(
      <Field id="test-field" label="Test Label">
        <input id="test-field" type="text" />
      </Field>
    );
    expect(screen.getByLabelText('Test Label')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
