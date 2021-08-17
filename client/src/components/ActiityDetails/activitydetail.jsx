import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import {getAct} from "../../actions/actions"



export default function ActDetails() {
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.actLoaded)

    let {id} = useParams();
    

    useEffect(() => {
      dispatch(getAct(id))   
    },[dispatch,id])



    return (
        <div>
            <h1>{detail.name}</h1>
            <h1>Difficulty: {detail.difficulty}</h1>
            <h1>Duration:{detail.duration}</h1>
            <h1>Season: {detail.season}</h1>
           
            <h4>{detail.country && detail.country.map(e => {
                if(e){
                    return e.name + " "
                } return " "
            })} </h4>
        </div>
    );
}