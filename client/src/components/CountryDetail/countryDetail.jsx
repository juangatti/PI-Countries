import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getCountryDetail } from "../../actions/actions"
import { Link } from "react-router-dom"


export default function CountryDetails() {
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.countryDetail)
    

    
    let { id } = useParams();

    useEffect(() => {
        dispatch(getCountryDetail(id))

    }, [dispatch, id])



    return (
        <div>
            <Link to="/countries">Home</Link>
            <h1>{detail.name}</h1>
            <img src={detail.flag} alt="Flag not found" width="150px" height="100px" />
            <h1>{detail.id}</h1>
            <h1>Capital:{detail.capital}</h1>
            <h1>Continent: {detail.region}</h1>
            {detail.subregion !== null ? <h1>Subregion: {detail.subregion}</h1> : null}
           
            <h1>Popuation: {detail.population}</h1>
            <h1>Area: {detail.area} Km</h1>

            <h4>{detail.activities && detail.activities.map(e => {
                if (e) {
                    return e.name + " "
                } return " "
            })} </h4>
        </div>
    );
}