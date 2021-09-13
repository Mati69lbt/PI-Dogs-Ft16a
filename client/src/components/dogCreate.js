import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postDogs, getTemperaments } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import validate from "./Validate";
import "../Styles/dogCreate.css";

export default function DogCreate() {
  const dispatch = useDispatch();
  const history = useHistory();

  const alltemperaments = useSelector((state) => state.temperaments);

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    height_min: "",
    height_max: "",
    weight_max: "",
    weight_min: "",
    life_span: "",
    temperament: [],
  });

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(postDogs(input));
    alert("Guao!! Guao!! Guao!!");
    setInput({
      name: "",
      height_min: "",
      height_max: "",
      weight_max: "",
      weight_min: "",
      life_span: "",
      temperament: [],
    });
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  function handleSelect(e) {
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
  }

  function handleDelete(el) {
    setInput({
      ...input,
      temperament: input.temperament.filter((temp) => temp !== el),
    });
  }

  return (
    <div className="allcreate">
      <div>
        <Link to="/home">
          <button>Los Perritos nos extrañan!!!</button>
        </Link>
      </div>

      <div className="create">
        <div>
          <h1>Crea tu Perrito:</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="nombre">
            <label>Nombre: </label>
            <input
              type="text"
              value={input.name}
              name="name"
              placeholder="nombre"
              autoComplete={false}
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="pmin">
            <label>Peso minimo: </label>
            <input
              type="number"
              value={input.weight_min}
              name="weight_min"
              placeholder="peso minimo"
              onChange={(e) => handleChange(e)}
            />
            <label> kgs.</label>
          {errors.weight_min && <p className="error">{errors.weight_min}</p>}
          </div>


          <div className="pmax">
            <label>Peso maximo: </label>
            <input
              type="number"
              value={input.weight_max}
              name="weight_max"
              placeholder="peso maximo"
              onChange={(e) => handleChange(e)}
            />
            <label> kgs. </label>
          {errors.weight_max && <p className="error">{errors.weight_max}</p>}
          </div>


          <div className="amin"> 
            <label>Altura minima: </label>
            <input
              type="number"
              value={input.height_min}
              name="height_min"
              placeholder="altura minima"
              onChange={(e) => handleChange(e)}
            />
            <label> cms.</label>
          {errors.height_min && <p className="error">{errors.height_min}</p>}
          </div>


          <div className="amax">
            <label>Altura maxima: </label>
            <input
              type="number"
              value={input.height_max}
              name="height_max"
              placeholder="altura maxima"
              onChange={(e) => handleChange(e)}
            />
            <label> cms.</label>
          {errors.height_max && <p className="error">{errors.height_max}</p>}
          </div>


          <div className="ev">
            <label>Esperanza de vida: </label>
            <input
              type="number"
              value={input.life_span}
              name="life_span"
              placeholder="edad"
              onChange={(e) => handleChange(e)}
            />
            <label> años.</label>
          {errors.life_span && <p className="error">{errors.life_span}</p>}
          </div>


          <label>¿Como queres q sea tu Perrito? </label>
          <select onChange={(e) => handleSelect(e)}>
            {alltemperaments?.map((temp) => (
              <option value={temp.name} key={temp.id}>
                {" "}
                {temp.name}{" "}
              </option>
            ))}
          </select>
          <ul>
            <div className="li">
              <li>{input.temperament?.map((element) => element + " ,")}</li>
            </div>
          </ul>

          <div className="botonCrear">
            <button type="submit">Nuevo Perrito</button>
          </div>
        </form>
      </div>

      <div className="equis">
        {input.temperament?.map((el) => (
          <div className="divocc">
            <p>{el}</p>
            <button className="botonX" onClick={() => handleDelete(el)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
