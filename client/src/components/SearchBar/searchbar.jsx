import React from "react"
import { useDispatch } from "react-redux"
import { getAllNames } from "../../actions/actions"
import { useState } from "react"
import { Link } from "react-router-dom"



export default function SearchBar() {

    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    

    const handleSubmit = (e) => {
        dispatch(getAllNames(input));
    };



    return (
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
            ) : (
                <Link to="/countries">
                    <button type="submit" onClick={() => handleSubmit()}>Search</button>
                </Link>
            )}
        </div>

    )
}