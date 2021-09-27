

import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { useSnackbar } from 'notistack'

import { Media } from '../Components'
import { GET_MASCOTAS } from '../GraphQL'


const CardPet = () => {


    const { enqueueSnackbar } = useSnackbar(), { loading, error, data } = useQuery(GET_MASCOTAS, { variables: { Limit: 10, OffSet: 0 } })


    useEffect( () => {

        if (loading)
            enqueueSnackbar('Cargando', { variant: 'info' })

        if (error) {
            console.log('Card pet', { Exception: error?.message })
            enqueueSnackbar(error?.message, { variant: 'error' })
        }

        if (data) {
            console.log(data)
            enqueueSnackbar('Consulta exitosa', { variant: 'success' })
        }

    }, [ enqueueSnackbar, loading, error, data ] )


    return <Media Elements = { data?.Pets }/>

}


export default CardPet

