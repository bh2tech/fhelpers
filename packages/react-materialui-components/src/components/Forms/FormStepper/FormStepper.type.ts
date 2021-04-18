import * as React from 'react'

import { IFormStepper, stepObj } from '@fhelpers/types'

import { ButtonProps } from '../../Buttons/Button/Button.type'

type childrenObj = {
  isLoading: boolean
  hasNextStep: boolean
  hasPrevStep: boolean
  hasError: boolean
  handleNext: (obj: stepObj) => Promise<any>
  handleBack: (obj: stepObj) => Promise<any>
  handleFinish: () => Promise<any>
  currentStepIndex: number
  currentStepName: string
}

export type FormStepperProps = IFormStepper & {
  children: (obj: childrenObj) => React.ReactNode
  buttonInitialProps?: ButtonProps
  buttonPrevProps?: ButtonProps
  buttonNextProps?: ButtonProps
  buttonFinishProps?: ButtonProps
}
