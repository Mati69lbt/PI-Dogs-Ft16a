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
    if (
      !name &&
      !height_min &&
      !height_max &&
      !weight_max &&
      !weight_min &&
      !life_span
    ) {
      res.send(alert("Faltan campos por completar"));
    } else {
      const dogCreated = await Dog.create({
        id: uuidv4(),
        name,
        height_min,
        height_max,
        weight_max,
        weight_min,
        life_span,
        madeInDB,
      });
    }
    temperament.map((temp) => {
      dogCreated.setTemperaments(temp);
    });
    res.send("perrito creado con exito");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
