import React from "react"
import Card from '../Card/card'
import {getAll} from '../../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

export default function Cards(props){

  const dispatch = useDispatch();
  const couni = useSelector(state => state.allCountries)      
useEffect(() => {
    dispatch(getAll())
}, [dispatch])  



    return (
    <div>
        {couni && couni.map((e) => {
            return( <Card key={e.id} id={e.id} region={e.region} flag={e.flag} />)
        })}
    </div>
)}