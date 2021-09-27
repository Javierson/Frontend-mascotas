

import React, { useState, forwardRef } from 'react'
import { string, func } from 'prop-types'
import { IMaskInput } from 'react-imask'
import { Input, InputLabel, FormControl, Grid } from '@mui/material'


const { md, xs } = require('../../App modules')?.GridLayout?.Item,


TextMaskCustom = forwardRef( (props, ref) => {

  const { name, onChange, ...other } = props

  return <IMaskInput { ...other } mask = '(#00) 000-0000' definitions = { { '#': /[1-9]/ } } inputRef = { ref } onAccept = { async value => await onChange({ target: { name, value } }) } overwrite/>

} ),


GridTextMask = ({ XS = xs, MD = md, Name, Label = Name, OnChange = async ({ target: { name, value }}) => await console.log({ [name]: value }), Value = '', Variant = 'standard', Disabled, Required = true }) => {

  return <Grid item xs = { XS } md = { MD }> <FormControl variant = { Variant } disabled = { Disabled } required = { Required } fullWidth>
        <InputLabel htmlFor = { `Text mask ${ Name }` }>{ Label }</InputLabel>
        <Input id = { `Text mask ${ Name }` } name = { Name } onChange = { OnChange } value = { Value } placeholder = '(012) 345-6789' inputComponent = { TextMaskCustom }/>
      </FormControl> </Grid> 
}


TextMaskCustom.propTypes = { name: string.isRequired, onChange: func.isRequired }


export default GridTextMask

