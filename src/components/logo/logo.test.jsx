import { it, describe, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Logo } from './logo'
import '@testing-library/jest-dom/extend-expect';

describe('Component Logo', () => {
  it('render to component', () => {
    const { getByText } = render(<Logo />)
    const logoTitle = getByText('Weather')
    const logoSubTitle = getByText('App')
    expect(logoTitle).toBeInTheDocument()
    expect(logoSubTitle).toBeInTheDocument()
  })
});
