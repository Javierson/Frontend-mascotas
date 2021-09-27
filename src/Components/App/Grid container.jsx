

import React from 'react'
import { Grid } from '@mui/material'


const { Spacing: spacing, Direction, Justify, AlignItems } = require('../../App modules')?.GridLayout, GridContainer = ({ Spacing = spacing, Wrap, children }) => <Grid container spacing = { Spacing } direction = { Direction } justifyContent = { Justify } alignItems = { AlignItems } wrap = { Wrap }>{ children }</Grid>


export default GridContainer

