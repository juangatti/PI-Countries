const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const{ Country, Activities } = require ('../db')
const axios = require('axios');

const  {paisesFiltrados} = require('./funciones')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async  (req, res) => {
    try{
        const{name} = req.query      
        const apiUrl = await axios.get(`https://restcountries.eu/rest/v2/all`)
         
        if(name){
            console.log("Entre puto")

            var match = await paisesFiltrados(name)
           
            return res.status(200).send(match)
    
        }
        

        var newCountry = await apiUrl.data.map((e) =>{
            Country.findOrCreate({

                where: {id : e.alpha3Code},
                defaults:{
                name: e.name,
                id: e.alpha3Code,
                region: e.region,
                subregion: e.subregion,
                population: e.population,
                capital: e.capital,
                area: e.area,
                flag: e.flag
                },
                includes: Activities
            })
            return {  
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
        return res.status(200).send(newCountry)
    } catch(error){
        console.log(error)
    }  
})


router.get('/:id', async (req, res) => {
    const {id} = req.params;

    const idUrl = await axios.get(`https://restcountries.eu/rest/v2/alpha/${id}`)
    let paisDetalle = {
        name: idUrl.data.name,
        id: idUrl.data.alpha3Code,
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