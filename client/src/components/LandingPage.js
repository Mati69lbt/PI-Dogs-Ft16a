import React from "react";
import { Link } from "react-router-dom";
import "../Styles/landingpage.css";

export default function LandingPage() {
  return (
    <div className="fondo">
      <div className="titulolp" key="titulo">
        <h1>¡¡¡ Los Pichichus !!!</h1>
      </div>
      <Link to="/home">
        <button>Ingresa a nuestra Casita</button>
      </Link>
    </div>
  );
}
