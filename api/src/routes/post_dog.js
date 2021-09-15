const { Router } = require("express");
const router = Router();
const { Dog, Temperament } = require("../db");
const { v4: uuidv4 } = require("uuid");

router.post("/", async (req, res) => {
  const {
    name,
    height_min,
    height_max,
    weight_max,
    weight_min,
    life_span,
    temperament,
    madeInDB,
  } = req.body;
  try {
    
      const createDog = await Dog.create({
        id: uuidv4(),
        name,
        height_min,
        height_max,
        weight_max,
        weight_min,
        life_span,
        madeInDB,
      });
    
    let tempDB = await Temperament.findAll({
      where : { name: temperament}
    })
    createDog.addTemperament(tempDB)

    res.send("perrito creado con exito");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
