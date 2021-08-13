
const { Router } = require('express');
const {Activities, Country} = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/', (req, res) => {
   try{
    const{name, difficulty, duration, season, id} = req.body
    let activity =  Activities.create({name, difficulty, duration, season})
    id.map(async (p) =>{
        let country = await Country.findByPk(p);
        await Activities.addCountry(country) 
    })
    return res.status(200).send(activity)
       
} catch (error){
    console.log(error)
}
    
    
})



module.exports = router;