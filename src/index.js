

import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomeSharp, GroupAddSharp, PetsSharp, AccountBoxSharp, TableViewSharp, GroupWorkSharp, ReviewsSharp }  from '@mui/icons-material'

import { Container, Grow } from '@mui/material'
import { ColorMode, Drawer } from './Components'

import { CardPet, CreateAccout, CreatePet, Home, Profile, PetCareList, ProfilePetCare, Reviews } from './Pages'


import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const Client = new ApolloClient({ uri: process.env.REACT_APP_API, cache: new InMemoryCache({ addTypename: false }) })

render(
      <ApolloProvider client = { Client }>
    <StrictMode>
    <ColorMode>
    <SnackbarProvider maxSnack = { 3 } anchorOrigin = { { vertical: 'bottom', horizontal: 'left' } }
    TransitionComponent = { Grow } preventDuplicate>
  <BrowserRouter>
  
  <Container>
  <Drawer Routes = { [ { Text: 'Inicio', Path: '/', Icon: <HomeSharp/> }, { Text: 'Cuenta', Path: '/crear cuenta', Icon: <GroupAddSharp/> }, { Text: 'Mascota', Path: '/crear mascota', Icon: <PetsSharp/> }, { Text: 'Perfil', Path: '/perfil', Icon: <AccountBoxSharp/> }, { Text: 'Consultar mascotas', Path: '/consulta', Icon: <TableViewSharp/> }, { Text: 'Cuidador', Path: '/cuidador', Icon: <GroupWorkSharp/> }, { Text: 'Analisis', Path: '/analisis', Icon: <ReviewsSharp/> } ] }>
      <Switch>{ [
          { Path: '/', Component: Home },
          { Path: '/crear cuenta', Component: CreateAccout },
          { Path: '/crear mascota', Component: CreatePet },
          { Path: '/consulta', Component: CardPet },
          { Path: '/perfil', Component: Profile },
          { Path: '/cuidador', Component: PetCareList },
          { Path: '/perfil/:ID', Component: ProfilePetCare },
          { Path: '/analisis', Component: Reviews },
          { Component: () => <h2>Ruta no definida</h2> }
        ].map( ({ Path, Component }, _) => <Route key = { _ } component = { Component } path = { Path } exact/>
         ) }</Switch>
</Drawer>
</Container>

  </BrowserRouter> </SnackbarProvider> </ColorMode> </StrictMode> </ApolloProvider>, document.getElementById('root') )

