

import React, { useState } from 'react'
import { Grid } from '.'
import { ExpandMore } from '@mui/icons-material'
import { Avatar, Accordion, AccordionDetails, AccordionSummary, Stack, Typography, Grid as G } from '@mui/material'
import { List, ListItem, ListItemText } from '@mui/material'
import { StarRateSharp, StarBorderSharp } from '@mui/icons-material'


const ControlledAccordion = ({ Elements = [ ] }) => {


    const [expanded, setExpanded] = useState(false),
    handleChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false)

//       faker.datatype.number(5).toString()
  return <Grid> <G item xs = { 12 } md = { 12 }>
      { Elements?.map( ({ ID, Image, NickName, DateTime, Rating = 0, Comment }, _) => <Accordion key = { `Card ${ ID }` } expanded = { expanded === `panel${ _ }` } onChange = { handleChange(`panel${ _ }`) }>

        <AccordionSummary id = { `panel${ _ }bh-header` } aria-controls = { `panel${ _ }bh-content` } expandIcon = { <ExpandMore/> }>


        <Stack direction = 'row' spacing = { 2 }>

            <Avatar alt = { NickName?.split('@')[ 1 ] } src = { Image }/>

            <Typography sx = { { flexShrink: 0 } }>{ NickName }</Typography>

            <Typography sx = { { color: 'text.secondary' } }> Comento el dia { DateTime }</Typography>

            <Typography>Califico con { Rating }{ Rating ? <StarRateSharp/> : <StarBorderSharp/> }</Typography>

    </Stack>


        </AccordionSummary>

        <AccordionDetails>
            <Typography>{ Comment }</Typography>
        </AccordionDetails> 

      </Accordion> ) }
      </G>
</Grid>

}


export default ControlledAccordion

