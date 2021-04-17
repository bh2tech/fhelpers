import { IUpload } from '@fhelpers/types'

import { ButtonProps } from '../../Buttons/Button/Button.type'

export type UploadProps = IUpload & {
  buttonProps?: ButtonProps
  [key: string]: any
}
