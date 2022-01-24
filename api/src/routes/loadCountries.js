const axios = require('axios');
const { Country } = require("../db")

async function loadCountries(req, res) {
    try {
        
            const apiUrl = await axios.get(`https://restcountries.com/v3/all`)

            const newCountrys =  apiUrl.data

            newCountrys.map(async (country) => {
                const { name, cca3, region, subregion, capital, population, area, flags } = country
              // const capitals = JSON.stringify(capital)


                await Country.create({
                    name: name.common,
                    id: cca3,
                    region,
                    subregion ,
                    capital:  (capital && capital[0]) || "Este país no tiene una capital",
                    population,
                    area,
                    flag:  flags.find((e) => e.includes("png")) || "No se ha encontrado la",
                })
            })

    } catch (error) {
        console.log(error)
    }
}


module.exports = { loadCountries }