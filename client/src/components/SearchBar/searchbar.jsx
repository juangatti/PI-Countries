import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAll, getAllNames } from "../../actions/actions"
import { useState } from "react" 
import {Link} from "react-router-dom"



export default function SearchBar(){
   
     const dispatch = useDispatch()
     const [input, setInput] = useState("")

        const handleInputChange =  (e) => {    
           setInput(e.target.value)
            
        }
        
        console.log(input)

        const handleSubmit = (e) => {
            
            dispatch(getAllNames(input));            
          }; 



    return(
        <div>
            <input
            type="text"
            placeholder="Search..."
            onChange={(e) => handleInputChange(e)}
            />
            {input !== "" ? (
                <Link to="/countries/search">
                     <button type="submit" onClick={() => handleSubmit()}>Search</button>
                </Link>
            ) :( 
                <Link to="/countries">
                <button type="submit" onClick={() => handleSubmit()}>Search</button>
              </Link>
            )}
        </div>
        
    )
}