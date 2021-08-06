const { Router } = require('express');
const {Activities} = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/', (req, res) => {
    const{name, difficulty, duration,season} = req.body
    
    Activities.create({
        name,
        difficulty,
        duration,
        season
    })

    res.status(200).send(req.body)
})



module.exports = router;