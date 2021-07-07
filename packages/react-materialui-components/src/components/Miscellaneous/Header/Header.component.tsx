import React from 'react'

import Box from '@material-ui/core/Box'

import { componentProps } from './Header.type'
export const Header: React.FunctionComponent<
  componentProps & React.HTMLProps<HTMLDivElement>
> = ({ leftArea, rightArea }) => {
  return (
    <Box component="header">
      <Box component="nav">
        <Box
          component="div"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {leftArea}
          {rightArea}
        </Box>
      </Box>
    </Box>
  )
}
