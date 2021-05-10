import React from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import { Image } from '../Image'

import { componentProps } from './LightBox.type'

export const LightBoxComponent: React.FC<
  componentProps & React.HTMLProps<HTMLDivElement>
> = ({ mainSrc, isOpen, onCloseRequest }) => {
  return (
    <>
      <Button>
        <Image src={mainSrc} alt="image" />
      </Button>
      {isOpen && <Lightbox mainSrc={mainSrc} onCloseRequest={onCloseRequest} />}
    </>
  )
}

const stories = storiesOf('MISCELLANEOUS|LightBox/LightBox', module)

stories.addDecorator(withKnobs)
stories.add('Base', () => (
  <LightBoxComponent
    mainSrc={text('Image Url', 'https://picsum.photos/300')}
    isOpen={boolean('Active', false)}
    onCloseRequest={() => {
      return
    }}
  />
))
