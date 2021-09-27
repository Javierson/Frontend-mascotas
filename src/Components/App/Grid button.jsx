

import { Button, Grid } from '@mui/material'


const { xs, md } = require('../../App modules')?.GridLayout?.Submit,
GridButton = ({ Type = 'submit', Variant = 'outlined', Color = 'primary', StartIcon, EndIcon, Disabled, children = 'Registrar elemento', XS = xs, MD = md }) => <Grid item xs = { XS } md = { MD }> <Button type = { Type } variant = { Variant } color = { Color } startIcon = { StartIcon } endIcon = { EndIcon } disabled = { Disabled } fullWidth>{ children }</Button> </Grid>


export default GridButton

