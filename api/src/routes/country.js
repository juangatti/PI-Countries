const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const{ Country, Activities } = require ('../db')
const axios = require('axios');
const {Op} = require('sequelize')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async  (req, res) => {
    try{
        const {name} = req.query      
        
         
        if(name){
            
            let country = await Country.findAll({
                where:{
                    name:{
                        [Op.iLike]: `%${name}%`
                    },
                },
                include: Activities
            })
            if(country.length > 0) return res.status(200).send(country)
            return res.status(404).send("pais no encontrado")
        }else{
            let allCountries = await Country.findAll({
                attributes: ['name', 'id', 'region', 'flag' ],
                include: [Activities]
            })
            return res.status(200).send(allCountries)
        }
        
    }catch(error){
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