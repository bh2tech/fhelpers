import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { componentProps } from './Text.type'

const useStyles = makeStyles({
  xxl: {
    fontSize: 48,
  },
  xl: {
    fontSize: 34,
  },
  lg: {
    fontSize: 24,
  },
  md: {
    fontSize: 20,
  },
  sm: {
    fontSize: 16,
  },
  xs: {
    fontSize: 14,
  },
  xxs: {
    fontSize: 12,
  },
})

export const Text: React.FC<componentProps> = ({
  size,
  children,
  style,
  tag,
}) => {
  const classes = useStyles()
  return (
    <Typography component={tag} className={classes[size]} style={{ ...style }}>
      {children}
    </Typography>
  )
}
