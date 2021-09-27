

import React from 'react'
import { InputLabel, MenuItem, FormControl, Select, Grid } from '@mui/material'


const { xs, md } = require('../../App modules')?.GridLayout?.Item, SelectInput = ({ XS = xs, MD = md, Name, Title = Name, Value = '', OnChange = async ({ target }) => await console.log(target), Elements, Variant = 'standard', Disabled, Required = true }) => <Grid item xs = { XS } md = { MD }> <FormControl variant = { Variant } disabled = { Disabled } required = { Required } fullWidth>
        <InputLabel id = { `Label ${ Name }` }>{ Title }</InputLabel>
        <Select labelId = { `Label ${ Name }` } id = { `ID ${ Name }` } name = { Name } label = { Name } onChange = { OnChange } value = { Value } autoWidth>
          { Elements?.map( ({ ID, Nombre }) => <MenuItem key = { ID } value = { ID }>{ Nombre }</MenuItem> ) }
          <MenuItem><em>None</em></MenuItem>
        </Select>
      </FormControl> </Grid>


export default SelectInput

