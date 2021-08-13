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
                attributes: ['name', 'id', 'region', 'flag','region','capital' ,'subregion', 'population','area'],
                include: [Activities]
            })
            return res.status(200).send(allCountries)
        }
        
    }catch(error){
        console.log(error)
    }
        
           
         
})


router.get('/:id', async (req, res) => {
  try{

      const id = req.params.id.toUpperCase();
    
        let countryDetail = await Country.findOne({
            where: {id},
            attributes: ['name', 'id', 'region', 'flag','region','capital' ,'subregion', 'population','area'],
            include: [Activities]
        })
        return res.status(200).send(countryDetail)
  }catch(error){
      console.log("el pais no existe")
  }  
})




module.exports = router;