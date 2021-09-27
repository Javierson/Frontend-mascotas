

import React, { useState } from 'react'
import { Grid, TextField, IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'


const { xs, md } = require('../../App modules').GridLayout.Item, GridPasswordField = ({ Name, Label = Name, OnChange, Position = 'end', Value = '', Disabled = false, Variant = 'standard', XS = xs, MD = md }) => {

    const [ state, setState ] = useState(false), Show = !state ? { Type: 'password', Text: 'Mostrar contraseña', Icon: <Visibility/> } : { Text: 'Ocultar contraseña', Icon: <VisibilityOff/> }, { Type, Text, Icon } = Show

    return <Grid item xs = { XS } md = { MD }> <TextField type = { Type } name = { Name } label = { Label } onChange = { OnChange } InputProps = { { endAdornment:
        <InputAdornment position = { Position }>
          <IconButton aria-label = { Text } title = { Text } onClick = { async () => await setState(!state) } /* onMouseDown = { async e => await e.preventDefault() } */ edge = { Position }>{ Icon }</IconButton>
        </InputAdornment>
      } } value = { Value } disabled = { Disabled } variant = { Variant } required fullWidth/> </Grid>

}

export default GridPasswordField

/*

{ endAdornment: {
              <InputAdornment position="end">
                <IconButton
                  aria-label="Contraseña"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  { state ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            } }


*/

