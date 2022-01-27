import React from "react"
import Cardx from '../Card/card'


import { Grid } from '@nextui-org/react';


export default function Cards({currentCountry}) {    

    

    return (      
        <Grid.Container gap={2} justify="center" align="center">
            {currentCountry && currentCountry.map((e) => {
                return (<Cardx key={e.id} id={e.id} region={e.region} flag={e.flag} name={e.name} />)
            })}
            
        </Grid.Container>
    )
}