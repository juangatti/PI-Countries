import axios from "axios"
import { GET_ALL, GET_COUNTRY_ID, GET_COUNTRY , ORDER_AZ, ORDER_ZA, ORDER_MAY_TO_MEN, ORDER_MEN_TO_MAY,BY_CONTINENT, BY_ACTIVITY,GET_ALL_ACT} from "./constantes"
import { URL_COUNTRIES , URL_ACTIVITY } from "../urlsconst"



export function getAll(){
    return  async (dispatch) =>{
        const prome = await axios.get(URL_COUNTRIES)
        dispatch({type: GET_ALL, payload: prome.data})
        
    }
}

export function getCountryDetail(id){
    return  async (dispatch) =>{
        const prome = await axios.get(URL_COUNTRIES + `/${id}`)
        dispatch({type: GET_COUNTRY_ID, payload: prome.data})
        
    }
}


export function getAllNames(name){
    return async (dispatch) => {
        try{
            const prome = await axios.get(`http://localhost:3001/countries?name=${name}`)
            dispatch({type: GET_COUNTRY, payload: prome.data})
        }catch(error){
            console.log(error);
        }
    };
}

export function createActivity(activity){
    return async function() {
        try{
            const newActivity = await axios.post(URL_ACTIVITY, activity)
            console.log(newActivity)
        }catch(error){
            console.log(error)
        }
    }
}

export function getAct(id){
    return  async (dispatch) =>{
        const prome = await axios.get(URL_ACTIVITY + `/${id}`)
        dispatch({type: GET_ALL_ACT, payload: prome.data})
        
    }
}




export function orderByAz(){
    return{
        type: ORDER_AZ
    }
}

export function orderByZa(){
    return{
        type: ORDER_ZA
    }
}

export function orderByMayToMen(){
    return{
        type: ORDER_MAY_TO_MEN
    }
}

export function orderByMenToMay(){
    return{
        type: ORDER_MEN_TO_MAY
    }
}

export function filterByContinent(payload){
    return{
        type:BY_CONTINENT,
        payload
    }
}

export function filterByActivity(payload){
    return{
        type:BY_ACTIVITY,
        payload
    }
}