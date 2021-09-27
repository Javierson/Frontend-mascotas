

import React, { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { Grid, GridButton, GridTextField, GridTextMask } from '../Components'
import { SetDataState } from '../App modules'

/*
Mostrar formulario  para capturar  los siguientes datos: Nombre, Apellidos, 
nombre de usuario, correo, teléfono, foto de perfil (Tomar URL’s de google
*/

const { Text: inputProps, URL: URL_Props } = require('../App modules')?.DefalultInputProps, CreateAccout = () => {

    const { enqueueSnackbar } = useSnackbar(), [ state, setState ] = useState({ Usuario: { Nombre: undefined, SegundoNombre: undefined, ApellidoPaterno: undefined, ApellidoMaterno: undefined, NickName: undefined, Email: undefined, Telefono: undefined, Foto: undefined }, Loading: false }), { Nombre, SegundoNombre, ApellidoPaterno, ApellidoMaterno, NickName, Email, Telefono, Foto } = state?.Usuario, { Usuario, Loading } = state, OnChange = SetDataState('Usuario', Usuario, state, setState), LoadingChange = async () => await setState({ ...state, Loading: !Loading })


    useEffect( () => {

        if (Loading) {
            enqueueSnackbar('Cargando', { variant: 'info' })
            alert(JSON.stringify(Usuario))
            setTimeout( () => { setState({ ...state, Usuario: { Nombre: undefined, SegundoNombre: undefined, ApellidoPaterno: undefined, ApellidoMaterno: undefined, NickName: undefined, Email: undefined, Telefono: undefined, Foto: undefined }, Loading: false }); enqueueSnackbar('Registro exitoso', { variant: 'success' }) }, 4000)
        }

    }, [ enqueueSnackbar, Loading, Usuario, state ] )


    return <form onSubmit = { async e => { e.preventDefault(); await LoadingChange() } }><Grid> <GridTextField Elements = { [ { Name: 'Nombre', OnChange, inputProps, Value: Nombre, Disabled: Loading }, { Name: 'SegundoNombre', Label: 'Segundo nombre', OnChange, inputProps, Value: SegundoNombre, Required: false, Disabled: Loading }, { Name: 'ApellidoPaterno', Label: 'Apellido paterno', OnChange, inputProps, Value: ApellidoPaterno, Disabled: Loading }, { Name: 'ApellidoMaterno', Label: 'Apellido materno', OnChange, inputProps, Value: ApellidoMaterno, Disabled: Loading }, { Name: 'NickName', Label: 'Nombre de usuario', OnChange, inputProps, Value: NickName, Disabled: Loading }, { Type: 'email', Name: 'Email', Label: 'Correo electrónico', OnChange, inputProps, Value: Email, Disabled: Loading } ] }/> <GridTextMask Name = 'Telefono' Label = 'Teléfono' OnChange = { OnChange } Disabled = { Loading } Value = { Telefono }/> <GridTextField Elements = { [ { XS: 8, MD: 6, Type: 'url', Name: 'Foto', OnChange, inputProps: URL_Props, Value: Foto } ] }/> <GridButton Disabled = { Loading }>Crear cuenta</GridButton> </Grid> </form> 

}


export default CreateAccout

