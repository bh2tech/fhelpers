import React, { useEffect } from 'react'

import { ButtonProps } from './ButtonMercadoPago.type'

export const ButtonMercadoPago: React.FunctionComponent<
  ButtonProps & React.HTMLProps<HTMLDivElement>
> = ({ globalId }) => {
  useEffect(() => {
    const script: any = document.createElement('script')
    const target = (document as any).getElementById(`payment`)

    script.src =
      'https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js'
    script.setAttribute('data-preference-id', globalId)

    target.appendChild(script)

    return () => {
      target.removeChild(script)
    }
  }, [])

  return <div id="payment" />
}
