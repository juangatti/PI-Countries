


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
                queryMatch: action.payload
            }
            default:
                return state
    }
}