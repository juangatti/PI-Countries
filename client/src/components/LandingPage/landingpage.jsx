import React from "react"
import {Link} from "react-router-dom"
import "./landingpage.css"



export function LandingP() {
    return(
        <div>
            <h1>  Bienvenidos a mi app!</h1>
            
            <Link to ="/countries"> Welcome! </Link>
            
          
        </div>
    )
}