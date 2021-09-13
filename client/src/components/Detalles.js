import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Details } from "../actions";
import '../Styles/detalles.css'


export default function Detail(props) {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  useEffect(() => {
    dispatch(Details(id));
  }, [dispatch]);

  const dog = useSelector((state) => state.details);

  return (
    <div className="alldetails">

    <div className="detalles">
      {dog.length > 0 ? (
        <div>
          <h1>Soy un {dog[0].name}</h1>
          <img src={dog[0].image} alt="img Not Found" width="300px" height="300px" />
          <h3>Puedo llegar a pesar hasta {dog[0].weight_max} kgs</h3>
          <h3>y medir hasta {dog[0].height_max} cms</h3>
          <h4>me gusta ser: {!dog[0].madeinbd?  dog[0].temperament + ", " : dog[0].temperament.map(element => element.name + (' ')) } </h4>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
      <Link to="/home">
        <button>Volver</button>
      </Link>      
    </div>
  );
}
