import React, { useState } from 'react'

import TextFieldMaterial from '@material-ui/core/TextField'
import NumberFormat from 'react-number-format'

import { TextFieldProps } from './TextField.type'

const TextFieldCNPJ = (props) => (
  <NumberFormat
    customInput={TextFieldMaterial}
    format="##.###.###/####-##"
    {...props}
  />
)

const TextFieldCPF = (props) => (
  <NumberFormat
    customInput={TextFieldMaterial}
    format="###.###.###-##"
    {...props}
  />
)

const TextFieldBirth = (props) => (
  <NumberFormat
    customInput={TextFieldMaterial}
    format="##/##/####"
    {...props}
  />
)

const TextFieldCurrency = (props) => (
  <NumberFormat
    customInput={TextFieldMaterial}
    prefix="R$ "
    thousandSeparator="."
    decimalSeparator=","
    decimalScale={2}
    fixedDecimalScale
    {...props}
  />
)

const TextFieldZipCode = (props) => (
  <NumberFormat
    customInput={TextFieldMaterial}
    format="##.###-###"
    {...props}
  />
)

const TextFieldMobile = (props) => {
  const [value, setValue] = useState('')

  const handleOnValueChange = (values) => {
    const { onValueChange } = props

    setValue(values.value)

    if (onValueChange) {
      onValueChange(values)
    }
  }

  return (
    <NumberFormat
      customInput={TextFieldMaterial}
      format={value.length === 11 ? '(##) #####-####' : '(##) ####-#####'}
      onValueChange={handleOnValueChange}
      {...props}
    />
  )
}

const ComponentToRender = {
  cnpj: TextFieldCNPJ,
  cpf: TextFieldCPF,
  currency: TextFieldCurrency,
  zipcode: TextFieldZipCode,
  mobile: TextFieldMobile,
  date_of_birth: TextFieldBirth,
  default: TextFieldMaterial,
}

export const TextField: React.FC<TextFieldProps> = ({ mask, ...restProps }) => {
  return React.createElement(
    ComponentToRender[mask || 'default'],
    restProps as any
  )
}
