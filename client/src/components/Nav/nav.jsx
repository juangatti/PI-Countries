import React from "react"
import { NavLink } from "react-router-dom"



export default function Nav(){
    return (
    <div>
        <NavLink exact to= "/countries"> Home</NavLink>
        <NavLink to="/countries/:id"> Esto deberia ser una search bar</NavLink>
    </div>
)}