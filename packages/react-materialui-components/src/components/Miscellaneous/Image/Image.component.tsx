import React from 'react'

import { componentProps } from './Image.type'

export const Image: React.FC<
  componentProps & React.HTMLProps<HTMLDivElement>
> = ({ src, style }) => {
  return <img src={src || 'https://picsum.photos/300'} style={style} />
}
