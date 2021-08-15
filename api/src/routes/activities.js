const {Op} = require('sequelize')
const { Router } = require('express');
const {Activities, Country} = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/', async (req, res) => {
   try{
    const{name, difficulty, duration, season, id} = req.body
    let activityC = await Activities.create({name, difficulty, duration, season})
    let countryMatch = await Country.findAll({
        where: {
           id: id
        }
    })

    const actCountry = await activityC.addCountry(countryMatch)



    return res.status(200).send(activityC)
       
} catch (error){
    console.log(error)
}
    
    
})



module.exports = router;