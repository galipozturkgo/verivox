import { render } from '@testing-library/react';

import App from './App';

describe('App component', () => {
  it('app should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});
