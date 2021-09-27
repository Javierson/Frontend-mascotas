

import React, { useState, useEffect } from 'react'
import { get } from 'axios'
import { useSnackbar } from 'notistack'
import { Grid as G } from '@mui/material'
import { Alert, Card, Grid } from '../Components'

import { GetRandomInt } from '../App modules'


const { Info, InfoMessage, Error, ErrorMessage, Success } = require('../App modules')?.SnackBarVariant, ProfilePetCare = ({ match: { params: { ID } = { } } }) => {

    const { enqueueSnackbar } = useSnackbar(), [ state, setState ] = useState({ Loading: false, Data: undefined, Exception: undefined }), { Loading, Data, Data: { Name, NickName, Image } = { }, Exception } = state, CurrentID = ID?.trim()

    useEffect( () => {

        if (!Data && !Exception) {
            enqueueSnackbar(InfoMessage, Info)
            new Promise( resolve => get(`https://reqres.in/api/users/${ CurrentID }`)
             .then( ({ data: { data: {  email: NickName, first_name, last_name, avatar: Image } } = { } }) => {
                    setState({ ...state, Data: { Name: `${ first_name } ${ last_name }`, NickName, Image }, Loading: false })
                    enqueueSnackbar('Consulta del cuidador completada', Success)
                resolve()
                } )
             .catch( e => {
                console.error(e)
                setState({ ...state, Loading: false, Exception: [ e?.message ] ?? [ 'Excepción en la solicitud' ] })
                enqueueSnackbar(ErrorMessage, Error)
                resolve()
             })
         )
        }

    }, [ enqueueSnackbar, Exception, Data, state, CurrentID ] )

    return <Grid>
    <G item key = { `Care ${ ID }` } xs = { 4 } md = { 4 }>
    { Data && <Card Image = { Image } Name = { Name } Rating = { GetRandomInt(0, 6) } Elements = { [ { Title: 'Nombre de usuario', Text: NickName }, { Title: 'Análisis', Text: GetRandomInt(0, 100) }, { Title: 'Fotos', Text: GetRandomInt(0, 6) }, { Title: 'Likes', Text: GetRandomInt(0, 100) }, { Title: 'Seguidores', Text: GetRandomInt(0, 100) } ] }/> }
    </G>
</Grid>


}


export default ProfilePetCare
