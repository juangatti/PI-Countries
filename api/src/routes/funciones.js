const axios = require('axios')
const{ Country } = require ('../db')

module.exports = {
    paisesFiltrados : async (parametro) => {
        

        let decodeado = decodeURI(parametro)
        let urlName = await axios.get(`https://restcountries.eu/rest/v2/name/${decodeado}`)

        return urlName.data

        
    }
}