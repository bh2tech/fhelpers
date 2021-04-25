import React from 'react'

import ButtonMaterial from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import { ButtonProps } from './ButtonSocial.type'
import iconFacenbook from './facebookIcon.svg'
import googleIcon from './googleIcon.svg'

const commonStyles = {
  width: '100%',
  height: '40px',
  borderRadius: '4px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
}

const useStyles = makeStyles({
  google: {
    ...commonStyles,
    color: '#6A7C95',
    backgroundColor: '#FFFFFF',
    border: '1px solid #CDD3DC',
    boxSizing: 'border-box',
    backgroundImage: `url(${googleIcon})`,
    backgroundPosition: '5px 8px',
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
  },
  facebook: {
    ...commonStyles,
    color: '#FFFFFF',
    backgroundColor: '#4469B0',
    backgroundImage: `url(${iconFacenbook})`,
    backgroundPosition: '10px center',
    '&:hover': {
      backgroundColor: '#4469B0',
    },
  },
})

const ButtonSocialFacebook = (props) => {
  const classes = useStyles()

  return (
    <ButtonMaterial {...props} className={classes.facebook}>
      Entrar com Facebook
    </ButtonMaterial>
  )
}

const ButtonSocialGoogle = (props) => {
  const classes = useStyles()

  return (
    <ButtonMaterial {...props} className={classes.google}>
      Entrar com Gmail
    </ButtonMaterial>
  )
}

const Component = {
  google: ButtonSocialGoogle,
  facebook: ButtonSocialFacebook,
}

export const ButtonSocial: React.FunctionComponent<ButtonProps> = ({
  MS_ACCOUNT,
  social,
  onClick,
  ...restProps
}) => {
  const handleClick = () => {
    window.open(`${MS_ACCOUNT}/api/sso/${social}`)

    if (onClick) {
      onClick()
    }
  }

  return React.createElement(
    Component[social],
    Object.assign(restProps, {
      onClick: MS_ACCOUNT ? handleClick : onClick,
    })
  )
}
