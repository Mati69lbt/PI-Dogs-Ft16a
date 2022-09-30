require("dotenv").config();
const axios = require("axios");
const { Temperament } = require("../db");
const { allInfo } = require("./get_dogs");

const gettemperament = async () => {
  try {
    const temperamentA = await allInfo();

    const temperamentB = temperamentA.map((element) => element.temperaments).toString();

    const temperamentC = new Set(temperamentB.split(","))// 

    let temperamentD = [...temperamentC].sort();    // hace una copia sacando los repetidos y el sort los ordenas

    const temperamentE = temperamentD.filter(element => element !== "")
    
    const temperamentF = temperamentE.map((element) =>
      element.replace(" ", "")
    )
    
    temperamentF.forEach((element) => {
      Temperament.findOrCreate({
        where: {
          name: element,
        },
      });
    });
    const allTemperaments = await Temperament.findAll();
    return allTemperaments;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  gettemperament,
};
