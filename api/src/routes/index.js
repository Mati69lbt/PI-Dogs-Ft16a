const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routeDogs = require('./info_dogs')
const routeDogsbyName = require('./dogs_byname')


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs',routeDogs)
router.use('/dogs/query', routeDogsbyName)

module.exports = router;
