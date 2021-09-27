

import React from 'react'


const FormPet = ({ TextFieldElements = [ ], Radio: { OnChange, Value } = { }, URLFieldElement = [ ] }, Submit: { Type, Variant, Color, StartIcon, EndIcon, Disabled, children = 'Registrar elemento', XS = xs, MD = md  }) => <Grid> <GridTextField Elements = { TextFieldElements }/>

<Radio Name = 'Genero' OnChange = { OnChange } Value = { Genero }/>


<GridTextField Elements = { TextFieldElements }/> </Grid>

<GridButton>{ children }</GridButton>

