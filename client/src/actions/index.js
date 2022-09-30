import axios from "axios";
const url = "http://localhost:3001/";

export function getDogs() {

  return async function (dispatch) {

    var json = await axios.get(`${url}dogs`, {});
    console.log(json.data);
    json = json.data.map(element => {
      if (Array.isArray(element.temperaments)) {
        const arrayTemperaments = element.temperaments.map(element => " " + element.name)
       element.temperaments = arrayTemperaments.toString().trim()
      
       return element
      }
      else return element
      
    })
    return dispatch({
      type: "GET_DOGS",
      payload: json
    });
  };
}

export function getTemperaments() {
  return  function (dispatch) {
    

     return axios.get(`${url}temperament`, {})
     .then((responseAxios) => {
       return dispatch({
         type: "GET_TEMPERAMENTS",
         payload: responseAxios.data,
       });

     })

    
}
}
export function Details(id) {
  return async function (dispatch) {
    try {
      var info = await axios.get(`${url}dogs/${id}`);
      return dispatch({
        type: "GET_DETAILS",
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function orderAZ(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderKGS(payload) {
  return {
    type: "ORDER_BY_KGS",
    payload,
  };
}

export function getDogsNames(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`${url}dogs/query?name=${name}`, {});      
      return dispatch({
        type: "GET_DOGS_NAMES",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      alert("Perrito Perdido");
    }
  };
}

export function postDogs(payload) {
  return async function (dispatch) {
    try {
      const data = await axios.post(`${url}dog`, payload);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function filtroCreados(payload) {
  return {
    type: "FILTRO_CREADOS",
    payload,
  };
}

export function filterbyTemp(payload) {
  return function (dispatch) {
    dispatch({ type: "FILTRO_TEMP", payload: payload });
  };
}










// export function getTemperaments() {
//   return async function (dispatch) {
//     try {
//       var info = await axios.get(`${url}temperament`, {});

//       return dispatch({
//         type: "GET_TEMPERAMENTS",
//         payload: info.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }