const axios = require('axios');
const { Country } = require("../db")

async function loadCountries(req, res) {
    try {
        
            const apiUrl = await axios.get(`https://restcountries.com/v3.1/all`)

            const newCountrys =  apiUrl.data

            newCountrys.map(async (country) => {
                const { name, cca3, region, subregion, capital, population, area, flags } = country
               const capitals = JSON.stringify(capital)


                await Country.create({
                    name: name.common,
                    id: cca3,
                    region,
                    subregion ,
                    capital: capitals,
                    population,
                    area,
                    flag: flags.png
                })
            })

    } catch (error) {
        console.log(error)
    }
}


module.exports = { loadCountries }