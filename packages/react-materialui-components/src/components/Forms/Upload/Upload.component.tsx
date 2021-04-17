import React from 'react'

import Box from '@material-ui/core/Box'
import { useDropzone } from 'react-dropzone'

import { Button } from '../../Buttons/Button'
import { Text } from '../../Text'

import { UploadProps } from './Upload.type'

const messages = {
  title: 'Arraste para cá',
  subTitle: 'Ou se prefir',
  buttonText: 'Clique para selecionar',
}

export const Upload: React.FC<UploadProps> = ({
  onDrop: onDropProp,
  dropzoneProps,
  buttonProps,
  ...restProps
}) => {
  const dropzone = useDropzone({ onDrop: onDropProp, ...dropzoneProps })

  return (
    <Box
      {...dropzone.getRootProps()}
      display="flex"
      flexDirection="column"
      border="1px dashed black"
      padding={4}
      gridRowGap={24}
      {...restProps}
    >
      <Box display="flex" flexDirection="column">
        <Text align="center">{messages.title}</Text>
        <Text align="center" size="xxs">
          {messages.subTitle}
        </Text>
      </Box>

      <Button {...(buttonProps as any)}>{messages.buttonText}</Button>

      <input
        {...dropzone.getInputProps()}
        type="file"
        style={{ display: 'none' }}
      />
    </Box>
  )
}
