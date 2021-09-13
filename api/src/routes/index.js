const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routeDogs = require('./info_dogs')
const routeDogsbyName = require('./dogs_byname')
const routeTemperament = require('./all_temperament');
const routePostDog = require('./post_dog');
//const routeDogId = require('./dog_byId')



const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs/query', routeDogsbyName)
router.use('/dogs',routeDogs)
//router.use('/dogs/:id', routeDogId)
router.use('/temperament', routeTemperament)
router.use('/dog', routePostDog)

module.exports = router;
