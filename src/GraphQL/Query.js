

import { gql } from '@apollo/client'


const GET_HOME_DATA = gql` query ($Cantidad: PositiveInt!) { getHomeData (Cantidad: $Cantidad) { ID UserImage FullName PetImage PetName } }`,


GET_MASCOTAS = gql`query ($Limit: PositiveInt! $OffSet: NonNegativeInt ) { Pets: getMascotas (Query: { Limit: $Limit OffSet: $OffSet }) { ID: id Nombre RazaID { id Nombre } Edad Genero } Quantity: getMascotasQuantity }`,


GET_RAZAS = gql`query ($Limit: PositiveInt! $OffSet: NonNegativeInt) { Razas: getRazas (Query: { Limit: $Limit OffSet: $OffSet }) { id Nombre } Quantity: getRazasQuantity }`


export { GET_HOME_DATA, GET_MASCOTAS, GET_RAZAS }

