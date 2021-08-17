import React from "react"
import { Link } from "react-router-dom"





export default function Card(props){
    console.log(props)
    return (
        <Link to={`/countries/details/${props.id}`} >
        <div className="card-body"   >
        <h4 className="card-title">  {props.id} </h4>
        <img src = {props.flag}  alt="Flag not found"  width="150px" height="100px"/>
        <p > Continent: {props.region}</p>
    </div>
    </Link>
)}