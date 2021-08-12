
const { Router } = require('express');
const {Activities} = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/', (req, res) => {
   try{
    const{name, difficulty, duration,season} = req.body
    let activity =  Activities.create({name, difficulty, duration, season})
    idPais.forEach(async (p) =>{
        let country = await Country.findByPk(p.toUpper());
        await Activities.addCountry(country) 
    })
    return res.status(200).send(activity)
       
} catch (error){
    console.log(error)
}
    
    
})



module.exports = router;