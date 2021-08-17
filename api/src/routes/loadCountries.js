const axios = require('axios');
const { Country } = require("../db")

async function loadCountries(req, res) {
    try {
        {
            const apiUrl = await axios.get(`https://restcountries.eu/rest/v2/all`)
            var newCountry = await apiUrl.data.map((e) => {
                Country.create({
                    name: e.name,
                    id: e.alpha3Code,
                    region: e.region,
                    subregion: e.subregion,
                    population: e.population,
                    capital: e.capital,
                    area: e.area,
                    flag: e.flag
                })
            })
        }

    } catch (error) {
        console.log(error)
    }
}


module.exports = { loadCountries }