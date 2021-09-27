

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, IconButton } from '@mui/material'
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating'
import { List, ListItem, ListItemText } from '@mui/material'
import { FavoriteBorderSharp, FavoriteSharp } from '@mui/icons-material'
import { useHistory } from 'react-router-dom'


export default function MediaCard({ SX, ID, Image = '', Name = '', Rating: R = 0, Elements, FollowOption }) {

    const [ state, setState ] = useState(false), { push } = useHistory()

  return <Card sx = { SX }>
      <CardMedia component='img' height='400' image= { Image } alt='Profile'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          { Name }
        </Typography>
        { /* <Typography variant='body2' color='text.secondary'> */ }

      <List dense>
               { Elements?.map( ({ Title = '', Text = '' }, _) => <ListItem key = { _ }> <ListItemText primary = { Title } secondary = { Text }/> </ListItem> )
              }
            </List>

      </CardContent>
     <CardActions>

<List dense>

<ListItem> <Rating value = { R } readOnly/> </ListItem>
{ FollowOption &&
<> <ListItem> <Button size = 'small' onClick = { async () => await push(`/perfil/${ ID ?? 1 }`) }>Ver perfil</Button>
 <IconButton size = 'small' color = 'secondary' aria-label='Follow' title = { !state ? `Seguir a ${ Name }` : 'No seguir' } onClick={ async () => await setState(!state) }>{ !state ? <FavoriteBorderSharp/> : <FavoriteSharp/> }</IconButton> </ListItem> </> }

</List>


      </CardActions> 
    </Card>

}

