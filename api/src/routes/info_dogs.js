const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { allInfo }= require('../controllers/get_dogs')



router.get('/', async (req,res)=> {
    try {
        const allDogs = await allInfo()
        res.send(allDogs)        
    } catch (error) {
        console.log(error);
    }
})

module.exports = router