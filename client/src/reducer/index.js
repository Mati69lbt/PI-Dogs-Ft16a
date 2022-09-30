const initialState = {
  dogs: [],
  temperaments: [],
  alldogs: [],
  alltemperaments: [],
  details: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        alldogs: action.payload,
      };
    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
        alltemperaments: action.payload,
      };
    case "GET_DETAILS":
      return {
        ...state,
        details: action.payload,
      };
    case "ORDER_BY_NAME":
      let sortedArr =
        action.payload === "asc"
          ? state.dogs.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedArr,
      };
    case "ORDER_BY_KGS":
      let sortedkgs =
        action.payload === "asc"
          ? state.dogs.sort(function (a, b) {
              if (parseInt(a.weight_max) < parseInt(b.weight_max)) {
                return 1;
              }
              return -1;
            })
          : state.dogs.sort(function (a, b) {
              if (parseInt(a.weight_min) < parseInt(b.weight_min)) {
                return -1;
              }
              return 1;
            });
      return {
        ...state,
        dogs: sortedkgs,
      };

  
    case "GET_DOGS_NAMES":
      return {
        ...state,
        dogs: action.payload,
      };
    case "POST_DOG":
      return {
        ...state,
      };
    case "FILTRO_CREADOS":
      let dogsCreate =
        action.payload === "created"
          ? state.alldogs.filter((element) => element.madeInDB)
          : state.alldogs.filter((element) => !element.madeInDB);

      return {
        ...state,
        dogs: dogsCreate,
      };

    case "FILTRO_TEMP":     
      const allDogs = state.alldogs;
      // const tempDogs = allDogs?.map((e) => {
      //   console.log(e.temperaments);
      //   return { ...e, temperaments: e.temperaments?.map((e) => e.name) };
      // });
      const temperamentsFiltered =
        action.payload === "All"
          ? allDogs
          : allDogs?.filter((e) => {
              return e.temperaments?.includes(action.payload);
            });      
      return {
        ...state,
        dogs: temperamentsFiltered,
      };
    default:
      return state;
  }
}

export default rootReducer;




// case "FILTRO_TEMP":     
//       const allDogs = state.alldogs;
//       const tempDogs = allDogs?.map((e) => {
//         console.log(e.temperaments);
//         return { ...e, temperaments: e.temperaments?.map((e) => e.name) };
//       });
//       const temperamentsFiltered =
//         action.payload === "All"
//           ? allDogs
//           : tempDogs?.filter((e) => {
//               return e.temperaments?.includes(action.payload);
//             });      
//       return {
//         ...state,
//         dogs: temperamentsFiltered,
//       };