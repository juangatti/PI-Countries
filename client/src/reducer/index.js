
import {orderAz, orderMayToMen} from '../components/Funciones/funciones'

const initialState = {

    countryDetail: [],
    allCountries: [],
    queryMatch: []
}

export default function rootReducer(state= initialState, action){
    switch(action.type){
        case "GET_ALL":
            return{
                ...state,
                allCountries: action.payload
            }
            case "GET_COUNTRY_ID":
            return{
                ...state,
                countryDetail: action.payload
            }
            case "GET_COUNTRY":
            return{
                ...state,
                allCountries: action.payload
            }
            case "ORDER_AZ":
                return{
                    ...state,
                    allCountries: state.allCountries.slice().sort(orderAz)
                }
                case "ORDER_ZA":
                return{
                    ...state,
                    allCountries: state.allCountries.slice().sort(orderAz).reverse()
                }
                case "ORDER_MAY_TO_MEN":
                return{
                    ...state,
                    allCountries: state.allCountries.slice().sort(orderMayToMen)
                }
                case "ORDER_MEN_TO_MAY":
                return{
                    ...state,
                    allCountries: state.allCountries.slice().sort(orderMayToMen).reverse()
                }
                case "BY_CONTINENT":
                return{
                    ...state,
                    allCountries: state.allCountries.filter((e) => e.region === action.payload)
                }


            default:
                return state
    }
}