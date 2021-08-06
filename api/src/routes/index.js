const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRoutes = require('./country')
const activitiesRoutes = require('./activities')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countryRoutes )
router.use('/activity', activitiesRoutes )




module.exports = router;
