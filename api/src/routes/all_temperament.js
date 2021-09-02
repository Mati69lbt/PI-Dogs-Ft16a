const { Router } = require("express");
const router = Router();
const { gettemperament } = require( "../controllers/get_temperament" );

router.get("/", async (req, res, next) => {
    try {
      const response = await gettemperament();
      res.send(response);
    } catch (error) {
      next (error)
    }
  });
  
  module.exports = router;