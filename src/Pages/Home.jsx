

import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { useSnackbar } from 'notistack'


import { GET_HOME_DATA } from '../GraphQL'


const Home = () => {


    const { enqueueSnackbar } = useSnackbar(), { loading, error, data } = useQuery(GET_HOME_DATA, { variables: { Cantidad: 2 } })


    useEffect( () => {

        if (loading)
            enqueueSnackbar('Cargando...', { variant: 'info' })

        if (error) {
            console.log('Homa', { Exception: error?.message })
            enqueueSnackbar(error?.message, { variant: 'error' })
        }

        if (data) {
            console.log(data)
            enqueueSnackbar('Consulta exitosa', { variant: 'success' })
        }

    }, [ enqueueSnackbar, loading, error, data ] )


    return <>Home</>

}


export default Home

