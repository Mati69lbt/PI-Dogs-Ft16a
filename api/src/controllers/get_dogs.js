require("dotenv").config(); 
const axios = require('axios')
const { Dog, Temperament }= require ("../db");
const { apiKey } = process.env
const { dogsUrl } = require('../../Constantes')

const infoApi = async () => {
  try {
    const urlInfo = await axios.get(`${dogsUrl}?apiKey=${apiKey}`);
    const dogInfo = await urlInfo.data.map((element) => {
      return {
        weight: element.weight.metric,
        height: element.height.metric,
        name: element.name,
        id: element.id,
        life_span: element.life_span,
        temperament: element.temperament,
        image: element.image.url,
      };
    });
    return dogInfo;
  } catch (error) {
    console.log(error);
  }
};

const infoDB = async () => {
  try {
    return await Dog.findAll({
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const allInfo = async () => {
  try {
    const apiInfo = await infoApi();
    const dbInfo = await infoDB();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    allInfo
}
