

import React, { useState, useEffect } from 'react'
import { get } from 'axios'
import { GetRandomInt } from '../App modules'
import { Alert, Card, Grid } from '../Components'
import { Grid as G } from '@mui/material'
import { useSnackbar } from 'notistack'


/*

Aclaraciones y facturaciones lunes 800 123 0000

Listo
Listado de cuidadores de mascota con la siguiente información:  Foto de 
usuario, Nombre, nombre de usuario, rating,  opción para ver perfil, opción 
para seguir 

Listo
Ver perfil del cuidador: Foto, nombre, nickname, rating , total de reviews, total 
de fotos, total de likes, total seguidores 

Ver listados de los reviews, mostrar  lo siguiente:  Foto de usuario,   
nickname, rating brindado , comentario,  fecha y hora
GetRandomInt(1, 3)

            <Tooltip title="Add" placement="right">
              <Button>right</Button>
            </Tooltip>

            http://lorempixel.com/400/200/animals

*/

const { Info, InfoMessage, Error, ErrorMessage, Success } = require('../App modules')?.SnackBarVariant, PetCareList = () => {


    const { enqueueSnackbar } = useSnackbar(), [ state, setState ] = useState({ Loading: false, Data: undefined, Exception: undefined, StopRequest: false }), { Loading, Data, Exception, StopRequest } = state


    useEffect( () => {

        if (!Data && !Exception) {
            enqueueSnackbar(InfoMessage, Info)
            new Promise( resolve => get(`https://reqres.in/api/users?page=${ GetRandomInt(1, 3) }`)
             .then( ({ data: { data = [ ] } = { } }) => {
                  if (data && data?.length !== 0) {
                    setState({ ...state, Data: data?.map( ({ id: ID, first_name, last_name, email: NickName, avatar: Image }) => ({ ID, Name: `${ first_name } ${ last_name }`, NickName, Image }) ), Loading: false })
                    enqueueSnackbar('Consulta de cuidadores completada', Success)
                 } else
                    state({ ...state, Loading: false, Exception: [ 'Excepción en la solicitud' ] })
                resolve()
                } )
             .catch( e => {
                console.error(e)
                setState({ ...state, Loading: false, Exception: [ e?.message ] ?? [ 'Excepción en la solicitud' ] })
                resolve()
             })
         )
        }

    }, [ enqueueSnackbar, Loading, Exception, Data, StopRequest, state ] )

    if (Exception && Exception?.length !== 0 )
        return <Alert Elements = { Exception }/>

    return <Grid>
        { Data?.map( ({ ID, Image, Name, NickName }) => <G item key = { `Care ${ ID }` } xs = { 4 } md = { 4 }>
        <Card ID = { ID } Image = { Image } Name = { Name } Rating = { GetRandomInt(0, 6) } Elements = { [ { Title: 'Nombre de usuario', Text: NickName } ] } FollowOption = { true } />
        </G> ) }
    </Grid>

}


export default PetCareList

