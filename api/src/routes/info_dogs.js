const { Router } = require("express");
const router = Router();
const { allInfo } = require("../controllers/get_dogs");
const { Dog } = require("../db");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
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

router.get("/", async (req, res) => {
  try {
    const allDogs = await allInfo();
    res.status(200).send(allDogs);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

router.put("/:id", async (req, res) => {
  const { id } = req.paramas;
  const dog = req.body;
  //de la trabla DOG, modifica lo que viene por body al id que te digo.
  try {
    var perro = await Dog.update(dog, {
      where: {
        id: id,
      },
    });
    return res.json({ cambio: true });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.paramas;
  //de la trabla DOG, modifica lo que viene por body al id que te digo.
  try {
    var perro = await Dog.destroy({
      where: {
        id: id,
      },
    });
    return res.json({ borrado: true });
  } catch (error) {
    console.log(error);
  }
});
