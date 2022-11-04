import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

describe('test for Home component', () => {
  it('should be expect title', () => {
    render(<h1>Hola</h1>)

    screen.getByText('Hola')
  })
})
