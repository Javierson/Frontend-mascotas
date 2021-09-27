

import React, { useState } from 'react'
import { Grid } from '.'
import { ThumbUpOutlined, ThumbUpSharp } from '@mui/icons-material'
import { Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Grid as G } from '@mui/material'


export default function RecipeReviewCard({ Elements = [ ] }) {


  const [ state, setState ] = useState(Elements && new Array (Elements && Elements?.length).fill(true))


    return <Grid>{ Elements?.map ( ({ ID, UserImage, FullName, PetImage, PetName }, _) => <G key = { ID } item xs = { 6 } md = { 4 }> <Card>

        <CardHeader title= { FullName } avatar = { <Avatar src = { UserImage } alt = { FullName } aria-label = { FullName }/> }/>

        <CardMedia component = 'img' height = '200' image = { PetImage } alt = { PetName }/>

        <CardContent>
          <Typography variant = 'body2' color = 'text.secondary'>{ PetName }</Typography>
        </CardContent>

        <CardActions disableSpacing>
  
          { !state[ _ ] ? <IconButton aria-label = 'Me gusta' title = 'Me gusta'> <ThumbUpOutlined/> </IconButton> : <IconButton aria-label = 'No me gusta' title = 'Me gusta'> <ThumbUpSharp/> </IconButton> }

        </CardActions>

      </Card> </G> ) }</Grid>

  }

