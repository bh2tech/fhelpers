import React from 'react'

import ButtonMaterial from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import { ButtonProps } from './Button.type'

export const Button: React.FunctionComponent<
  ButtonProps & React.HTMLProps<HTMLDivElement>
> = ({ loading, children, onClick, ...restProps }) => {
  return (
    <ButtonMaterial {...restProps} onClick={!loading ? onClick : undefined}>
      {loading && <CircularProgress />}

      {!loading && children}
    </ButtonMaterial>
  )
}
