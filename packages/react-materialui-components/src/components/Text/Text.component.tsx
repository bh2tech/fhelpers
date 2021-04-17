import React, { useMemo } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'

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
  tag,
  context,
  ...restProps
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
      {...restProps}
      component={stylesDefault[context as any]?.tag || tag || 'span'}
      className={classNames(
        restProps.className,
        classes[stylesDefault[context as any]?.size] || classes[size || 'sm']
      )}
    >
      {children}
    </Typography>
  )
}
