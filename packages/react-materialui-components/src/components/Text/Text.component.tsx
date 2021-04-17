import React, { useMemo } from 'react'

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
  context,
}) => {
  const classes = useStyles()

  const stylesDefault = useMemo(
    () => ({
      title: {
        tag: 'h2',
        size: 'xl',
      },
      subtitle: {
        tag: 'h3',
        size: 'md',
      },
      description: {
        tag: 'p',
        size: 'sm',
      },
      text: {
        tag: 'span',
        size: 'xs',
      },
    }),
    []
  )

  return (
    <Typography
      component={stylesDefault[context as any]?.tag || tag || 'span'}
      className={
        classes[stylesDefault[context as any]?.size] || classes[size || 'sm']
      }
      style={{ ...style }}
    >
      {children}
    </Typography>
  )
}
