

import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, Skeleton, Grid as G } from '@mui/material'
import { MaleSharp, FemaleSharp } from '@mui/icons-material'

import { Grid } from '.'


const Media = ({ Elements, Loading = false }) => {

    
        /* id, Nombre, Edad, Genero, Foto, RazaID: { id, Nombre } */
    

  return <Grid Spacing = { 1 }>
      { ( Loading ? Array.from(new Array(3)) : Elements)?.map( ({ ID, Nombre, Edad, Genero, Foto = 'http://lorempixel.com/210/118/animals', RazaID = { } }) => <G key = { ID } item xs = { 4 } md = { 3 }> <Box sx = { { width: 210, marginRight: 0.5, my: 5, boxShadow: '4px 4px lightGray' } }>
          { ID ? <img style = { { width: 210, height: 118 } } alt = { Nombre } src = { Foto }
            /> : <Skeleton variant = 'rectangular' width = { 210 } height = { 118 }/> }
          { RazaID ? <Box sx = { { pr: 2 } }>
              <Typography gutterBottom variant = 'body2'>{ Nombre }</Typography>
              <Typography display = 'block' variant = 'caption' color = 'text.secondary'>{ Genero ? <>Masculino <MaleSharp/> </> : <> Femenino <FemaleSharp/> </> }</Typography>
              <Typography variant = 'caption' color = 'text.secondary'>
                { `Raza ${ RazaID?.Nombre } - Edad ${ Edad }` }
              </Typography>
            </Box> : <Box sx = { { pt: 0.5 } }>
              <Skeleton/>
              <Skeleton width = '60%'/>
            </Box> }
        </Box> </G>
      ) }
    </Grid>

}

Media.propTypes = { Loading: PropTypes.bool }

export default Media

/*

export default function YouTube() {
  return <Box sx = { { overflow: 'hidden' } }>
      <Media loading />
      <Media />
    </Box>
  
}

*/