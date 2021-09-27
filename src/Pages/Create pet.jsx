

import React, { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { AddSharp } from '@mui/icons-material'
import { useMutation, useQuery } from '@apollo/client'
import { SetDataState, SetIntegerDataState } from '../App modules'
import { Grid, GridButton, GridTextField, Radio, SelectInput } from '../Components'
import { CREATE_MASCOTA, GET_RAZAS } from '../GraphQL'


/* Foto http://lorempixel.com/400/200/cats animals */


const { Info, InfoMessage, Error, ErrorMessage, Success } = require('../App modules')?.SnackBarVariant, { Text: inputProps, URL: URL_Props } = require('../App modules')?.DefalultInputProps, CreatePet = () => {


    const { enqueueSnackbar } = useSnackbar(), [ state, setState ] = useState({ Mascota: { Nombre: undefined, RazaID: undefined, Edad: undefined, Genero: undefined, Foto: undefined } }), { Nombre, RazaID, Edad, Genero, Foto } = state?.Mascota, { Mascota } = state, [ Mutation, { loading, error, data } ] = useMutation(CREATE_MASCOTA, { variables: { Mascota: { ...Mascota, Genero: Boolean(Genero) } } }), { loading: loadingQuery, data: { Razas, Quantity } = { }, error: errorQuery } = useQuery(GET_RAZAS, { variables: { Limit: 100 } }), OnChange = SetDataState('Mascota', Mascota, state, setState), OnChangeInteger = SetIntegerDataState('Mascota', Mascota, state, setState)


    useEffect( () => {

        if (loading || loadingQuery)
            enqueueSnackbar(InfoMessage, Info)

        if (error || errorQuery) {
            enqueueSnackbar(ErrorMessage, Error)
        }

        if (!data && Razas && Razas?.length !== 0)
            enqueueSnackbar('Consulta de razas completada', Success)

        if (data)
            enqueueSnackbar(`${ data?.createMascota?.Nombre } registrado`, Success)


    }, [ enqueueSnackbar, loading, error, data, loadingQuery, errorQuery, Razas ] )


    return <form onSubmit = { async e => { e.preventDefault(); await Mutation() } }> <Grid> <GridTextField Elements = { [ { Name: 'Nombre', OnChange, inputProps, Value: Nombre, Disabled: loading } /*  { Name: 'RazaID', Label: 'Raza', OnChange, inputProps, Value: RazaID } */ ] }/>

    <SelectInput Title = { `Tipo de raza, ${ Quantity } opciones` } Label = 'Raza' Name = 'RazaID' OnChange = { OnChange } Value = { RazaID } Elements = { Razas } Disabled = { loading || loadingQuery }/>

    <GridTextField Elements = { [ { Type: 'number', Name: 'Edad', OnChange: OnChangeInteger, inputProps: { min: 0, max: 100 }, Value: Edad, Disabled: loading } ] }/>

    <Radio Name = 'Genero' OnChange = { OnChange } Value = { Genero } Disabled = { loading }/>

    <GridTextField Elements = { [ { XS: 8, MD: 6, Type: 'url', Name: 'Foto', OnChange, inputProps: URL_Props, Value: Foto, Disabled: loading } ] }/> <GridButton disabled = { loading } StartIcon = { <AddSharp/> }>Crear mascota</GridButton> </Grid>

    </form>


}


export default CreatePet

