import React from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Lightbox from 'react-image-lightbox'

import 'react-image-lightbox/style.css'

import { Image } from '../Image'

import { componentProps } from './LightBox.type'

const LightBoxComponent: React.FC<
  componentProps & React.HTMLProps<HTMLDivElement>
> = ({ mainSrc, isOpen, setIsOpen }) => {
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <Image src={mainSrc} alt="image" />
      </Button>
      {isOpen && (
        <Lightbox mainSrc={mainSrc} onCloseRequest={() => setIsOpen(false)} />
      )}
    </>
  )
}

export const LightBoxContainer: React.FC<componentProps> = ({
  isOpen,
  mainSrc,
}) => {
  const [state, setState] = React.useState(isOpen)
  return (
    <Box
      component="div"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <LightBoxComponent
        mainSrc={mainSrc}
        isOpen={state}
        setIsOpen={setState}
      />
    </Box>
  )
}
