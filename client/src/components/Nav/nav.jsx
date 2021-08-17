import React from "react"
import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/searchbar"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { orderByAz, orderByZa, orderByMayToMen, orderByMenToMay, getAll, filterByContinent, filterByActivity } from '../../actions/actions'





export default function Nav() {


    const dispatch = useDispatch();

    const countries = useSelector((state) => state.allCountries)

    const [order, setOrder] = useState("")
    const [continent, setContinent] = useState("")
    const [activities, setActivities] = useState("")

    const handleOrderChange = (e) => {
        setOrder(e.target.value)
    }

    const handleFilterChange = (e) => {
        setContinent(e.target.value)
    }

    const handleFilterActChange = (e) => {
        setActivities(e.target.value)
    }



    useEffect(() => {
        if (order === "A-Z") dispatch(orderByAz())
        else if (order === "Z-A") dispatch(orderByZa())
        else if (order === "MayToMen") dispatch(orderByMayToMen())
        else if (order === "MenToMAy") dispatch(orderByMenToMay())
    }, [dispatch, order])




    useEffect(() => {
        if (continent === "-") dispatch(getAll())
        else if (continent !== "-") dispatch(filterByContinent(continent))


    }, [dispatch, continent])

    useEffect(() => {
        if (activities === "-") dispatch(getAll())
        else if (activities !== "-") dispatch(filterByActivity(activities))
    }, [dispatch, activities])



    return (
        <div>
            <NavLink exact to="/countries"> Home</NavLink>
            <select onChange={(e) => handleOrderChange(e)}>
                <option> - </option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="MayToMen">MayToMen</option>
                <option value="MenToMAy">MenToMAy</option>
            </select>
            <SearchBar />
            <select onChange={(e) => handleFilterChange(e)}>
                <option value="-"> -</option>
                <option value="Americas"> Americas</option>
                <option value="Europe"> Europe</option>
                <option value="Africa"> Africa</option>
                <option value="Oceania"> Oceania</option>
                <option value="Asia"> Asia</option>
            </select>
            <NavLink exact to="/activities">Create Your Own Tour!</NavLink>
            <select onChange={(e) => handleFilterActChange(e)}>
                <option value="-"> -</option>
                {
                    countries && countries.map(country => {
                        return country.activities?.map((activity) => {
                            return (<option key={activity.name} value={activity.name}>{activity.name}</option>)
                        })
                    })}
            </select>
        </div>
    )
}