import {describe, test} from 'vitest';
import {render} from '@testing-library/react';

import Home from '../index';

describe('test for Home component', () => {
  test('should be expect title', () => {
    render(<Home />)
  })
})
