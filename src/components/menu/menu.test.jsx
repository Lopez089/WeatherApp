import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { Menu } from '../'

describe('Component menu', () => {
  it('show render component menu', () => {
    render(<Menu showNav={true} />)
  })

  it('show show menu', () => {
    const { getByText } = render(<Menu showNav={true} />)


  })
  it.todo('not show menu')
});
