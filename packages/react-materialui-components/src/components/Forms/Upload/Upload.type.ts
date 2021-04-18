import { BoxProps } from '@material-ui/core/Box'

import { IUpload } from '@fhelpers/types'

import { ButtonProps } from '../../Buttons/Button/Button.type'

export type UploadProps = IUpload &
  BoxProps & {
    buttonProps?: ButtonProps
    [key: string]: any
  }
