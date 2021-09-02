const { Router } = require("express");
const router = Router();
const { allInfo } = require("../controllers/get_dogs");

router.get("/query", async (req, res) => {
  const { name } = req.query;
  console.log(`name: ${name}`);
  try {
    const apiInfo = await allInfo();
    const nameDog = apiInfo.filter((element) =>
      element.name.toLowerCase().includes(name.toLowerCase())
    );
    nameDog
      ? res.status(200).send(nameDog)
      : res.status(404).send("No se encontro el pichichus");
  } catch (error) {
    res.status(404).send("No se encontro el pichichus");
  }
});
  
module.exports = router;
