import React from "react"
import Cardx from '../Card/card'
import { getAll,page } from '../../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect,  } from 'react';
import s from  './cards.module.css'
import { Grid } from '@nextui-org/react';
import { Pagination } from '@nextui-org/react';

export default function Cards() {

    const dispatch = useDispatch();
    const couni = useSelector(state => state.allCountries)
    const pages =  useSelector(state => state.page)
    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    const countryPerPage = 6;
    const lastCountryIndex = pages * countryPerPage;
    const firstRecipeIndex = lastCountryIndex - countryPerPage;
    const currentCountry = couni.slice(firstRecipeIndex, lastCountryIndex);
    const handleChange = (e) => {    
        dispatch(page(e));
    }

    const numberOfButtons = Math.ceil(couni.length / countryPerPage);


    return (      
        <Grid.Container gap={2} justify="center" align="center">
            {currentCountry && currentCountry.map((e) => {
                return (<Cardx key={e.id} id={e.id} region={e.region} flag={e.flag} name={e.name} />)
            })}
            <Grid xs={6} >
            <Pagination rounded  shadow color="secondary" total={numberOfButtons} initialPage={1} onChange= { (e) => handleChange(e)} controls="true" />    
            </Grid>
        </Grid.Container>
    )
}