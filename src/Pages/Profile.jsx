

/*

•Mostrar información de perfil (Foto, nombre, rating , total de reviews, total de 
fotos, total de likes, total seguidores) 
•Mostrar Mascotas dadas de  alta 
•Mostrar feed con fotos de mascotas 
https://reqres.in/api/users/
1 al 12
<Rating name="read-only" value={value} readOnly />
*/


import React, { useState, useEffect } from 'react'
import { Card, Grid } from '../Components'
import { GetRandomInt } from '../App modules'
import { get } from 'axios'
import { Grid as G, ImageList, ImageListItem } from '@mui/material'


const Profile = () => {

    /*
    https://random.dog/woof.json?ref=apilist.fun
    https://aws.random.cat/meow
    */
    const [ state, setState ] = useState({ Loading: undefined, Data: undefined, PetsOwner: undefined, List: undefined, Exception: undefined }), { Data, PetsOwner, List, Exception } = state, ProfilePetsQuantity = GetRandomInt(0, 11)

    useEffect( () => {

        if (!List && !Exception) {

        let Random = [ ...Array(GetRandomInt(12, 25)) ].map( () => GetRandomInt(0, 2) ? 'https://aws.random.cat/meow' : 'https://random.dog/woof.json?ref=apilist.fun' ), Links = [ ]

        Random?.map( I => new Promise( resolve => get(I)
             .then( ({ data: { file, url } = { } }) => {
                 Links.push(file ?? url)
                 // X.push(file ?? url)
                 resolve(file ?? url)
                } )
             .catch( ({ message = 'Excepción en la solicitud' }) => {
                 // console.error('Error', message)
                 setState({ ...state, Exception: [ message ] })
                 resolve()
             })
         ) )

         setState({ ...state, List: Links /* .filter( I => !I?.endsWith('mp4') ) */, Exception: undefined })

        }


        if (!PetsOwner && !Exception) {

            let Random2 = [ ...Array(GetRandomInt(0, 11)) ].map( () => GetRandomInt(0, 2) ? 'https://aws.random.cat/meow' : 'https://random.dog/woof.json?ref=apilist.fun' ), Links2 = [ ]

            Random2?.map( I => new Promise( (resolve, reject) => get(I)
                 .then( ({ data: { file, url } = { } }) => {
                     Links2.push(file ?? url)
                     resolve(file ?? url)
                    } )
                 .catch( ({ message = 'Excepción en la solicitud' }) => {
                     setState({ ...state, Exception: [ message ] })
                     resolve()
                 })
             ) )
    
             setState({ ...state, PetsOwner: Links2, Exception: undefined })

        }


         if (!Data && !Exception) {
            new Promise( (resolve, reject) => get(`https://reqres.in/api/users/${ GetRandomInt(1, 13) ?? 1 }`)
            .then( ({ data: { data: { id, first_name, last_name, avatar } = { } } = { } }) => {
                setState({ ...state, Data: { ID: id, Name: `${ first_name } ${ last_name }`, Image: avatar } })
                resolve()
            } )
            .catch( e => {
                console.error({ Usuario: e })
                setState({ ...state, Exception: [ 'Se presenta una excepción' ] })
                resolve()
            } ) )
         }


    }, [ state, Data, List, PetsOwner, Exception, ProfilePetsQuantity ] )

    return <Grid>
        <G item xs = { 8 } md = { 4 }> <Card ID = { state?.Data?.ID } Image = { state?.Data?.Image } Name = { state?.Data?.Name } Rating = { GetRandomInt(0, 6) } Elements = { [ { Title: 'Análisis', Text: GetRandomInt(0, 100) }, { Title: 'Fotos', Text: PetsOwner?.length ?? 0 }, { Title: 'Likes', Text: GetRandomInt(0, 100) } ] } /> </G>

        <G item xs = { 12 } md = { 6 }>
            { PetsOwner && <ImageList sx = { { height: 450 } } cols = { 2 }>{ PetsOwner?.map( (I = '', _) => <ImageListItem key = { _ }>
            <img src = { I } srcSet = { I } alt = 'My pets' loading = 'lazy'/>
            </ImageListItem> ) }</ImageList> }
    </G>

        <G item xs = { 12 } md = { 12 }>
            { List && <ImageList sx = { { height: 450 } } cols = { 4 }>{ List?.map( (I = '', _) => <ImageListItem key = { _ }>
            <img src = { I } srcSet = { I } alt = 'Pet' loading = 'lazy'/>
            </ImageListItem> ) }</ImageList> }
    </G>

    </Grid>

}


export default Profile

