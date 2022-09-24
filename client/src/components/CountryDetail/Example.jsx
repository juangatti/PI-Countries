import React from 'react'
import { Card, Grid, Col, Text } from '@nextui-org/react';


export default function Example() {
  return (
    <Grid.Container gap={2} justify="center">
     <Grid xs={12} sm={4}>
       <Card cover>
         <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
           <Col>
             <Text h4 color="white">
               {detail.name}
             </Text>
           </Col>
         </Card.Header>
            <Card.Body>
         <Card.Image
           src={detail.flag}
           height={340}
           width="100%"
           alt="Card image background"
         />
        <Col>
        <Text h5 color="white">
            Capital: {detail.capital}
        </Text>
        <Text h5 color="white">
        Continent: {detail.region}
        </Text>
        {detail.subregion !== null ? <Text h5 color="white">Subregion: {detail.subregion} </Text> : null}
        </Col>
        <Col>
        <Text h5 color="white">
            Population: {detail.population}
        </Text>
        <Text h5 color="white">
        Area: {detail.area} Km
        </Text>
        </Col>

            </Card.Body>
       </Card>
     </Grid>
     <Grid xs={12} sm={4}>
      <Card width="100%" cover>
        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
          <Col>
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="#ffffffAA"
            >
              Activities
            </Text>
            
          </Col>
        </Card.Header>
        <Card.Body>
        {detail.activities === null ? <Text h5 color="white">"No hay actividades asociadas "</Text> :<Text h5 color="white">
                    {detail.activities && detail.activities.map(e => {
                        if (e) {
                            return e.name
                        } return <Text h5 color="white">No hay actividades asociadas </Text>
                    })}
                </Text>
                }
        </Card.Body>
      </Card>
    </Grid>
 </Grid.Container>
  )
}
