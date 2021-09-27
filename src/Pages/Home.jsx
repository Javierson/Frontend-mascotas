

import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { useSnackbar } from 'notistack'
import { HomeCard } from '../Components'
import { GET_HOME_DATA } from '../GraphQL'
import faker from 'faker'


const Home = () => {


    const { enqueueSnackbar } = useSnackbar(), { loading, error, data } = useQuery(GET_HOME_DATA, { variables: { Cantidad: faker.datatype.number(10) } })


    useEffect( () => {

        if (loading)
            enqueueSnackbar('Cargando...', { variant: 'info' })

        if (error) {
            console.log('Home', { Exception: error?.message })
            enqueueSnackbar(error?.message, { variant: 'error' })
        }

        if (data) {
            console.log(data)
            enqueueSnackbar('Consulta exitosa', { variant: 'success' })
        }

    }, [ enqueueSnackbar, loading, error, data ] )


    return <HomeCard Elements = { data?.getHomeData }/>

}


export default Home

