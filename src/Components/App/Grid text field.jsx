

import React from 'react'
import { Grid, TextField } from '@mui/material'


const { xs, md } = require('../../App modules')?.GridLayout?.Item, GridTextField = ({ Elements = [ ] }) => Elements?.map( ({ Type, Name, Label = Name, OnChange, inputProps, InputProps, Variant = 'standard', Required = true, Color, DefaultValue, Value = '', Size, Disabled, Focused, XS = xs, MD = md }, _) => <Grid item key = { _ } xs = { XS } md = { MD }>
        <TextField type = { Type } name = { Name } label = { Label } onChange = { OnChange } inputProps = { inputProps } InputProps = { InputProps } variant = { Variant } required = { Required } color = { Color } defaultValue = { DefaultValue } value = { Value } size = { Size } disabled = { Disabled } focused = { Focused } fullWidth/>
    </Grid> )


export default GridTextField

