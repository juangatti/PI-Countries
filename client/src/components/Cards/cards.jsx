import React from "react"
import Card from '../Card/card'
import { getAll } from '../../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import Pagination from "../Pagination/pagination";
import './cards.css'


export default function Cards() {

    const dispatch = useDispatch();
    const couni = useSelector(state => state.allCountries)
    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])


    const [page, setPage] = useState(1);
    const [countryPerPage] = useState(9)

    let nextPage = page * countryPerPage;
    let lastPage = nextPage - countryPerPage;

    function renderPage(num) {
        setPage(num)
    }

    const obj = couni.slice(lastPage, nextPage)





    return (
        <div className='cards'>
            {obj && obj.map((e) => {
                return (<Card key={e.id} id={e.id} region={e.region} flag={e.flag} />)
            })}
            <div>
                <Pagination countries={couni} countryPp={countryPerPage} renderPage={renderPage} />


            </div>

        </div>

    )
}