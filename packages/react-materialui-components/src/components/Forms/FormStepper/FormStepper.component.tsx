import React, { useState, useMemo, useCallback } from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import { Button } from '../../Buttons/Button'

import { FormStepperProps } from './FormStepper.type'

const messages = {
  btnLabelPrev: 'Voltar',
  btnLabelNext: 'Continuar',
  btnLabelFinish: 'Concluir',
}

const useStyles = makeStyles({
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
})

export const FormStepper: React.FC<FormStepperProps> = ({
  children,
  isLoading = false,
  hasError = false,
  handleNext: handleNextProp,
  handleBack: handleBackProp,
  handleFinish: handleFinishProp,
  footer = true,
  steps,
  buttonInitialProps,
  buttonPrevProps,
  buttonNextProps,
  buttonFinishProps,
}) => {
  const [loading, setLoading] = useState(false)

  const classes = useStyles()

  const MAX_STEPS = useMemo(() => steps.length, [steps])
  const MAX_STEPS_BY_INDEX = useMemo(() => MAX_STEPS - 1, [MAX_STEPS])

  const [currentStep, setCurrentStep] = useState<number>(0)

  const hasNextStep = useMemo(
    () =>
      MAX_STEPS > 1 && currentStep !== 0 && currentStep < MAX_STEPS_BY_INDEX,
    [currentStep]
  )

  const hasPrevStep = useMemo(
    () => currentStep !== 0 && MAX_STEPS_BY_INDEX !== currentStep,
    [currentStep]
  )

  const isFinalStep = useMemo(() => MAX_STEPS_BY_INDEX === currentStep, [
    currentStep,
  ])

  const isInitialStep = useMemo(() => MAX_STEPS !== 0 && currentStep === 0, [
    currentStep,
  ])

  const handleFinish = useCallback(async () => {
    if (!handleFinishProp) {
      return null
    }

    setLoading(true)

    await handleFinishProp()

    setLoading(false)

    return true
  }, [currentStep])

  const handleNext = useCallback(async () => {
    const new_value = currentStep + 1

    if (handleNextProp) {
      setLoading(true)

      await handleNextProp({
        currentStepIndex: new_value,
        currentStepName: steps[new_value],
      })

      setLoading(false)
    }

    setCurrentStep(new_value)

    return true
  }, [currentStep])

  const handleBack = useCallback(async () => {
    const new_value = currentStep - 1

    if (handleBackProp) {
      setLoading(true)

      await handleBackProp({
        currentStepIndex: new_value,
        currentStepName: steps[new_value],
      })

      setLoading(false)
    }

    setCurrentStep(new_value)

    return true
  }, [currentStep])

  return (
    <Grid container>
      <Grid item xs={12}>
        {children({
          isLoading,
          hasNextStep,
          hasPrevStep,
          hasError,
          handleNext,
          handleBack,
          handleFinish,
          currentStepIndex: currentStep,
          currentStepName: steps[currentStep],
        })}
      </Grid>

      {footer && (
        <Grid item xs={12}>
          <Grid container justify="flex-end">
            {hasPrevStep && (
              <Grid item xs={6} className={classNames(classes.center)}>
                <Button
                  onClick={handleBack}
                  disabled={isLoading || loading}
                  {...(buttonPrevProps as any)}
                >
                  {messages.btnLabelPrev}
                </Button>
              </Grid>
            )}

            {hasNextStep && (
              <Grid item xs={6} className={classNames(classes.center)}>
                <Button
                  onClick={handleNext}
                  disabled={isLoading || loading || hasError}
                  loading={isLoading || loading}
                  {...(buttonNextProps as any)}
                >
                  {messages.btnLabelNext}
                </Button>
              </Grid>
            )}

            {isInitialStep && (
              <Grid item xs={6} className={classNames(classes.center)}>
                <Button
                  onClick={handleNext}
                  disabled={isLoading || loading || hasError}
                  loading={isLoading || loading}
                  {...(buttonInitialProps as any)}
                >
                  {messages.btnLabelNext}
                </Button>
              </Grid>
            )}

            {isFinalStep && (
              <>
                <Grid item xs={6} className={classNames(classes.center)}>
                  <Button onClick={handleBack} disabled={isLoading || loading}>
                    {messages.btnLabelPrev}
                  </Button>
                </Grid>
                <Grid item xs={6} className={classNames(classes.center)}>
                  <Button
                    onClick={handleFinish}
                    disabled={isLoading || loading || hasError}
                    loading={isLoading || loading}
                    {...(buttonFinishProps as any)}
                  >
                    {messages.btnLabelFinish}
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}
