import React from 'react'

import Button from '@material-ui/core/Button'

import { IHelloWorld } from '@fhelpers/types'

export const HelloWorld: React.FunctionComponent<
  IHelloWorld & React.HTMLProps<HTMLDivElement>
> = ({ name }) => {
  return (
    <div>
      <Button>HelloWorld {name}</Button>
    </div>
  )
}
