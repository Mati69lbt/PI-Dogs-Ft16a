require("dotenv").config();
const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { apiKey } = process.env;
const { dogsUrl } = require("../../Constantes");

const infoApi = async () => {
  try {
    const urlInfo = await axios.get(`${dogsUrl}?apiKey=${apiKey}`);
    const dogInfo = await urlInfo.data.map((element) => {
      let weight=element.weight.metric.split(" ")      
      return {

        weight_min:
          weight[0] !== "NaN"
            ? weight[0]
            : parseInt(weight[2]) - 1 || "(no registra datos)",
        weight_max:
        weight[2] === undefined ? weight[0] :
          weight[2] !== "NaN"
            ? weight[2]
            : parseInt(weight[0]) + 1 || "(no registra datos)" ,

        height_min: element.height.metric.split("-")[0] ,
        height_max: element.height.metric.split("-")[1]
          ? element.height.metric.split("-")[1]
          : parseInt(element.height.metric.split("-")[0]) + 8,

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
  allInfo,
};
