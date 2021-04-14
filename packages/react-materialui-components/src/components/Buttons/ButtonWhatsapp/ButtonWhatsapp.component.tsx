import React from 'react'

import ButtonMaterial from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'

import { ButtonProps } from './ButtonWhatsapp.type'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#25d366',
    borderRadius: '50%',
    padding: 15,
    '&:hover': {
      backgroundColor: '#25d366',
    },
  },
  icon: {
    color: 'white',
    fontSize: '1.8rem',
  },
})

export const ButtonWhatsapp: React.FunctionComponent<ButtonProps> = ({
  number,
  ...restProps
}) => {
  const classes = useStyles()
  return (
    <ButtonMaterial
      {...restProps}
      onClick={() =>
        window.open(
          `https://api.whatsapp.com/send/?phone=55${number}&text&app_absent=0`
        )
      }
      className={classes.root}
    >
      <WhatsAppIcon className={classes.icon} />
    </ButtonMaterial>
  )
}
