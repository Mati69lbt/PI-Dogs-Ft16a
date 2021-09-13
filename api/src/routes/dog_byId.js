const { Router } = require("express");
const router = Router();
const { allInfo } = require("../controllers/get_dogs");

router.get("", async (req, res) => {
  const { id } = req.params;

  try {
    const alldogs = await allInfo();
    if (id) {
      let dogId = alldogs.filter((el) => el.id === parseInt(id));
      dogId.length
        ? res.status(200).json(dogId)
        : res.status(404).send("No se encontro el pichichus");
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
