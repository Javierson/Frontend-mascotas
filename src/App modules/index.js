

const { REACT_APP_Spacing, REACT_APP_Direction, REACT_APP_Justify, REACT_APP_AlignItems, REACT_APP_Item_XS, REACT_APP_Item_MD, REACT_APP_Submit_XS, REACT_APP_Submit_MD } = process.env,


GridLayout = {
    Spacing: Number(REACT_APP_Spacing),
    Direction: REACT_APP_Direction,
    Justify: REACT_APP_Justify,
    AlignItems: REACT_APP_AlignItems,
    Item: { xs: Number(REACT_APP_Item_XS), md: Number(REACT_APP_Item_MD) },
    Submit: { xs: Number(REACT_APP_Submit_XS), md: Number(REACT_APP_Submit_MD) }
},


DefalultInputProps = { Text: { minLength: 2, maxLength: 40 }, Telefhone: { minLength: 10, maxLength: 10 }, URL: { minLength: 4, maxLength: 100 } },


SnackBarVariant = { Info: { variant: 'info' }, InfoMessage: 'Cargando...', Error: { variant: 'error' }, ErrorMessage: 'Se presento una o mas excepciones', Success: { variant: 'success' } },


GetRandomInt = (Minimun = 1, Maximun = 12) => Math.floor(Math.random() * (Maximun - Minimun)) + Minimun,


SetState = (state, setState) => async ({ target: { name, value } = { } }) => await setState({ ...state, [name]: value }),


SetDataState = (DataName, Data, state, setState) => async ({ target: { name, value } = { } }) => await setState({ ...state, [DataName]: { ...Data, [name]: value } }),


SetIntegerDataState = (DataName, Data, state, setState) => async ({ target: { name, value } = { } }) => {

    const N = Number(value)
    await value?.trim()?.length !== 0 && !isNaN(N) && setState({ ...state, [DataName]: { ...Data, [name]: N.toFixed(0) } })

}


export { GridLayout, DefalultInputProps, SnackBarVariant, GetRandomInt, SetState, SetDataState, SetIntegerDataState }

