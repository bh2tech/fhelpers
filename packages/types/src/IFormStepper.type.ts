export type stepObj = {
  currentStepIndex: number
  currentStepName: string
}

export interface IFormStepper {
  isLoading?: boolean
  hasError?: boolean
  handleNext?: (obj: stepObj) => Promise<any>
  handleBack?: (obj: stepObj) => Promise<any>
  handleFinish: () => Promise<any>
  footer: boolean
  steps: string[]
}
