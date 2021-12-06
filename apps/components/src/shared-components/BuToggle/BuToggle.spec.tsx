import { render } from '@testing-library/react';

import BuToggle from './BuToggle';

describe('BuToggle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BuToggle />);
    expect(baseElement).toBeTruthy();
  });
});
