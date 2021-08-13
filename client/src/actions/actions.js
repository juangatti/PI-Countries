import axios from "axios"
import { GET_ALL, GET_COUNTRY_ID, GET_COUNTRY } from "./constantes"
import { URL_COUNTRIES  } from "../urlsconst"



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