const axios = require('axios')
const{ Country } = require ('../db')

module.exports = {
    paisesFiltrados : async (parametro) => {
        

        let decodeado = decodeURI(parametro)
        let urlName = await axios.get(`https://restcountries.eu/rest/v2/name/${parametro}`)

        var encontrados = await urlName.data.map((e) =>{
            return{

                name: e.name,
                id: e.alpha3Code,
                region: e.region,
                subregion: e.subregion,
                population: e.population,
                capital: e.capital,
                area: e.area,
                flag: e.flag
            }
        })


        
        return encontrados

        
    }
}