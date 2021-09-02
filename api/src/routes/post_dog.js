const { Router } = require("express");
const router = Router();
const { Dog, Temperament } = require("../db");
const { v4: uuidv4 } = require("uuid");


router.post("/", async (req, res) => {
  const { name, height, weight, life_span, temperament, madeInDB } = req.body;
  try {
    const dogCreated = await Dog.create({
      id: uuidv4(),
      name,
      height,
      weight,
      life_span,
      madeInDB,
    });
    // const temperamentDB = await Temperament.findAll({
    //   where: { name: temperament },
    // });
    dogCreated.setTemperaments(temperament);
    res.send("personaje creado con exito");
  } catch (error) {
    console.log(error);
  }
});



module.exports = router