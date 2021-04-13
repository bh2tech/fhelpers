import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { Button } from '.'

it('should have "Spinner" component when has "loading prop"', () => {
  const { container } = render(<Button loading={true}>Loading</Button>)
  expect(
    container.querySelector('.MuiCircularProgress-svg')
  ).toBeInTheDocument()
})
