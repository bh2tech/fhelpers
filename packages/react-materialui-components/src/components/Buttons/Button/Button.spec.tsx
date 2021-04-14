import React from 'react'

import { render, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

import { Button } from '.'

it('should have "Spinner" component when has "loading prop"', () => {
  const { container } = render(<Button loading={true}>Loading</Button>)

  expect(
    container.querySelector('.MuiCircularProgress-svg')
  ).toBeInTheDocument()
})

it('should not click when button is loading', () => {
  const onClick = jest.fn()

  const { container } = render(
    <Button loading={true} onClick={onClick}>
      Loading
    </Button>
  )

  const button = container.querySelector('button') || container

  fireEvent.click(button)

  expect(onClick).not.toHaveBeenCalled()
})

it('should click when button is not loading', () => {
  const onClick = jest.fn()

  const { container } = render(<Button onClick={onClick}>Loading</Button>)

  const button = container.querySelector('button') || container

  fireEvent.click(button)

  expect(onClick).toHaveBeenCalled()
})
