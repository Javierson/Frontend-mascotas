

import React, { useState, useEffect } from 'react'
import { get } from 'axios'
import { GetRandomInt } from '../App modules'
import { ControlledAccordion, Alert } from '../Components'
import { useSnackbar } from 'notistack'
import faker from 'faker'


const { Info, InfoMessage, Error, ErrorMessage, Success } = require('../App modules')?.SnackBarVariant, Reviews = () => {


    const { enqueueSnackbar } = useSnackbar(), [ state, setState ] = useState({ Loading: false, Data: undefined, Exception: undefined, StopRequest: false }), { Loading, Data, Exception, StopRequest } = state


    useEffect( () => {

        if (!Data && !Exception) {
            enqueueSnackbar(InfoMessage, Info)
            new Promise( resolve => get(`https://reqres.in/api/users?page=${ GetRandomInt(1, 3) }`)
             .then( ({ data: { data = [ ] } = { } }) => {
                  if (data && data?.length !== 0) {
                    setState({ ...state, Data: data?.map( ({ id: ID, avatar: Image }) => ({ ID, NickName: faker.internet.userName(), Image, Rating: faker.datatype.number(5), DateTime: faker.datatype.datetime().toLocaleDateString('es-ES', {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }), Comment: faker.lorem.paragraphs(2) }) ), Loading: false })
                    enqueueSnackbar('Consulta de analisis completada', Success)
                 } else
                    state({ ...state, Loading: false, Exception: [ 'Excepción en la solicitud' ] })
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

    }, [ enqueueSnackbar, Loading, Exception, Data, StopRequest, state ] )

    if (Exception && Exception?.length !== 0 )
        return <Alert Elements = { Exception }/>


    return <ControlledAccordion Elements = { Data }/>


}


export default Reviews

