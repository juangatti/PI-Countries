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
            e.preventDefault()
            dispatch(getAllNames(input));            
          }; 



    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="input" onChange= {(e)=>handleInputChange(e)} />
                <input type="submit" value="Search..." />
            </form>
        </div>
        
    )
}