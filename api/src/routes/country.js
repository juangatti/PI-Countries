const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const{ Country } = require ('../db')
const axios = require('axios')
const  {paisesFiltrados} = require('./funciones')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async  (req, res) => {
    const{name} = req.query
    
    const apiUrl = await axios.get(`https://restcountries.eu/rest/v2/all`)
    
if(name){
    var match = paisesFiltrados(name)

    return res.status(200).send(match)

}


apiUrl.data.forEach(element => {
    Country.create({
        name: element.name,
        id: element.alpha3code,
        region: element.region,
        subregion: element.subregion,
        population: element.population,
        capital: element.capital,
        area: element.area,
        flag: element.flag
    })
});
    return res.status(200).send(apiUrl.data)
    
})


router.get('/:id', async (req, res) => {
    const {id} = req.params;

    const idUrl = await axios.get(`https://restcountries.eu/rest/v2/alpha/${id}`)
    
    let paisDetalle = {
        name: idUrl.data.name,
        id: idUrl.data.alpha3code,
        region: idUrl.data.region,
        subregion: idUrl.data.subregion,
        population: idUrl.data.population,
        capital: idUrl.data.capital,
        area: idUrl.data.area,
        flag: idUrl.data.flag
    }
    return res.status(200).send(paisDetalle)
})




module.exports = router;