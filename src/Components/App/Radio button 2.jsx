

import React from 'react'

import { FormControl, FormLabel, FormControlLabel, Grid, Radio as R, RadioGroup } from '@mui/material'


const { xs, md } = require('../../App modules')?.GridLayout?.Item, Radio = ({ Name = 'Genero', Title = Name, OnChange = async ({ target: { name, value } = { } }) => await console.log({ Radio: { [name]: value } }), Elements = [ { Label: 'Masculino', Value: '1' }, { Label: 'Femenino', Color: 'secondary', Value: '0' } ], Disabled, XS = xs, MD = md }) => <Grid item xs = { XS } md = { MD }>
<FormControl component = 'fieldset' fullWidth required>
  <FormLabel component = 'legend'>{ Title }</FormLabel>
  <RadioGroup name = { Name } aria-label = { Name } onChange = { OnChange } row>
      { Elements?.map( ({ Label, Value, Color }, _) => <FormControlLabel key = { _ } name = { Name } label = { Label } value = { Value } disabled = { Disabled } control = { <R color = { Color } required/> }/> ) }
  </RadioGroup>
</FormControl>
</Grid>


export default Radio

