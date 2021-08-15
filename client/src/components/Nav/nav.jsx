import React from "react"
import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/searchbar"
import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import {orderByAz, orderByZa,orderByMayToMen, orderByMenToMay, getAll, filterByContinent} from '../../actions/actions'





export default function Nav(){


 const dispatch = useDispatch();

 const[order, setOrder] = useState("")
    const[continent, setContinent] = useState("")

    const handleOrderChange = (e) =>{
        setOrder(e.target.value)
    }

    const handleFilterChange = (e) =>{
        setContinent(e.target.value)
    }


    useEffect(() => {
        if(order === "all")dispatch(getAll())
        else if(order === "A-Z")dispatch(orderByAz())
        else if(order === "Z-A")dispatch(orderByZa())
        else if(order === "MayToMen")dispatch(orderByMayToMen())
        else if(order === "MenToMAy")dispatch(orderByMenToMay())
    }, [dispatch,order])

    useEffect(() => {
        if(continent){
            getAll()
                if(continent !== "all"){
                    dispatch(filterByContinent(continent))
            }
        }
    }, [dispatch,continent])



    return (
    <div>
        <NavLink exact to= "/countries"> Home</NavLink>
        <select onChange={(e) => handleOrderChange(e)}>
            <option value="all">All</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="MayToMen">MayToMen</option>
            <option value="MenToMAy">MenToMAy</option>
            
        </select>
        <SearchBar />
        <select onChange={(e) => handleFilterChange(e)}>
            <option value ="all"> All</option>
            <option value ="Americas"> Americas</option>
            <option value ="Europe"> Europe</option>
            <option value ="Africa"> Africa</option>
            <option value ="Oceania"> Oceania</option>
            <option value ="Asia"> Asia</option>
            </select>
    </div>
)}