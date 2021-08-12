import React from "react"






export default function Card(props){
    console.log(props)
    return (
    <div>
        <h4>  {props.id} </h4>
        <img src = {props.flag}  alt="Flag not found"  width="150px" height="100px"/>
        <h4> Continent: {props.region}</h4>
    </div>
)}