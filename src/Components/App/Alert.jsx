

import React from 'react'
import { Grid } from '.'
import { Alert as A, AlertTitle, List, ListItem, ListItemText, Grid as G } from '@mui/material'


const Alert = ({ Elements = [ ], Title = Elements?.length > 1 ? `Se presentaron ${ Elements.length } excepciones` : 'Se presento una excepción', Variant = 'outlined', Severity = 'error' }) => <Grid> <G item xs = { 12 }> <A variant = { Variant } severity = { Severity }>
        <AlertTitle>{ Title }</AlertTitle>
        { Elements?.length !== 0 && <List dense>{ Elements?.map( (I, _) => <ListItem key = { `Alert ${ _ }` }> <ListItemText primary = { I }/> </ListItem> ) }
        </List> }
      </A>
      </G>
    </Grid>

export default Alert

