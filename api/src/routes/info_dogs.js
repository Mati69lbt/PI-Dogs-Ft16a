const { Router } = require("express");
const router = Router();
const { allInfo }= require('../controllers/get_dogs')


router.get("/:id", async (req, res) => {
    const  {id}  = req.params
    console.log(`id: ${id}`);
    try {
      const alldogs = await allInfo();
      if (id) {
        let dogId = await alldogs.filter((el) => el.id.toString() === id);
        dogId.length
          ? res.status(200).json(dogId)
          : res.status(404).send("No se encontro el pichichus");
      }
    } catch (error) {
      console.log(error);
    }
  });


router.get('/', async (req,res)=> {
    try {
        const allDogs = await allInfo()
        res.send(allDogs)        
    } catch (error) {
        console.log(error);
    }
})










module.exports = router