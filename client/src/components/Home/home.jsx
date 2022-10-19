import React, { Suspense} from "react"
import Nav from "../Nav/nav"
import FiltersOrder from "../Nav/filters&order"
import styles from './home.module.css'

import { getAll } from '../../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect,  } from 'react';

const Cards = React.lazy (() => import("../Cards/cards") )


export default function Home() {
    
    
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
    

    const numberOfButtons = Math.ceil(couni.length / countryPerPage);

    
    
    
    
    
    
    
    return (
        <div>
            <Nav />
            <FiltersOrder />
                <div className={styles.HomeContainer}>
                 <Suspense fallback={<div>Loading...</div>}>   
                <Cards currentCountry={currentCountry} />
                </Suspense>
            </div>
        </div>
    )
}