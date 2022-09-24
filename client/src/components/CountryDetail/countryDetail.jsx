import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getCountryDetail } from "../../actions/actions"
import { NavLink } from "react-router-dom"
import { Box , AppBar, Toolbar, Typography  } from '@mui/material';
import { Card, Grid, Col, Text } from "@nextui-org/react";

export default function CountryDetails() {
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.countryDetail)
    

    
    let { id } = useParams();

    useEffect(() => {
        dispatch(getCountryDetail(id))

    }, [dispatch, id])



    return (
        <div>
             <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <NavLink  exact to="/countries">
                            <img src="https://i.pinimg.com/originals/b9/93/02/b99302e5e4d36d7a4af5bf6f17583008.png" alt="mundo" height="60" width="60"/>
                        </NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        
        <Grid.Container gap={2} justify="center">
     <Grid xs={12} sm={4}>
       <Card cover>
         <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
           <Col>
             <Text h2 color="Black">
               {detail.name}
             </Text>
           </Col>
         </Card.Header>
            <Card.Body>
         <Card.Image
           src={detail.flag}
           alt="Card image background"
           object-fit= 'cover'
           width="100%"
           height={500}
         />
        <Col>
        <Text h5 color="Black">
            Capital: {detail.capital}
        </Text>
        <Text h5 color="Black">
        Continent: {detail.region}
        </Text>
        {detail.subregion !== null ? <Text h5 color="Black">Subregion: {detail.subregion} </Text> : null}
        </Col>
        <Col>
        <Text h5 color="Black">
            Population: {detail.population}
        </Text>
        <Text h5 color="Black">
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
              color="Black"
            >
              Activities
            </Text>
            
          </Col>
        </Card.Header>
        <Card.Body>
        {detail.activities === null ? <Text h5 color="Black">"No hay actividades asociadas "</Text> :<Text h5 color="Black">
                    {detail.activities && detail.activities.map(e => {
                        if (e) {
                            return e.name
                        } return <Text h5 color="Black">No hay actividades asociadas </Text>
                    })}
                </Text>
                }
        </Card.Body>
      </Card>
    </Grid>
 </Grid.Container>
        </div>
    );
}