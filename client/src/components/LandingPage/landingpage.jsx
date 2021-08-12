import React from "react"
import {Link} from "react-router-dom"




export function LandingP() {
    return(
        <div>
            <h1>  Bienvenidos a mi app!</h1>
            <button type="button">
            <Link to ="/countries">  </Link>
            Ingresar!
            </button>
          
        </div>
    )
}