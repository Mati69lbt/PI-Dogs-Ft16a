import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getDogs,
  getTemperaments,
  orderAZ,
  orderKGS,
  filtroCreados,
  filterbyTemp,
} from "../actions";
import Card from "./card";
import Paginado from "./Paginado";
import SearchBar from "./searchBar";
import "../Styles/home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const temperament = useSelector((state) => state.temperaments);

  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOflastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOflastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOflastDog);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handClick(e) {
    e.preventDefault();
    dispatch(getDogs()); // resetea
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderAZ(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleSortKGS(e) {
    e.preventDefault();
    dispatch(orderKGS(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleFilterCreados(event) {
    dispatch(filtroCreados(event.target.value));
  }

  function handleFilterTemp(event) {
    dispatch(filterbyTemp(event.target.value));
  }

  return (
    <div>
      <div className="arriba">
        <Link to="/dog">
        <div className="crear">
          <h3>¿Crearias una nueva Raza?</h3>

        </div>
        </Link>
        <div className="titulo" key="titulo" >
      <h1>MUCHOS, MUCHOS PERRITOS!!!</h1>
        </div>
       
        {/* <button
          onClick={(element) => {
            handClick(element);
          }}
        >
          Refrescame
        </button> */}


      </div>

      <div className="paquetes">
        
          <div className="ordenABC" key="ordenABC" onClick={(element) => handleSort(element)}>
            <h4>Orden ABC: </h4>
            <button value="asc">A - Z </button>
            <button value="desc">Z - A </button>
          </div>
        
        <div className="ordenkgs" key="ordenkgs" onClick={(element) => handleSortKGS(element)}>
          <h4>Orden Kgs: </h4>
          <button value="asc"> + kg </button>
          <button value="desc"> - kg </button>
        </div>

        <div className="filtertemp" key="filtertemp">
          <h4>Como queres que yo sea? </h4>
          <select onChange={(event) => handleFilterTemp(event)}>
            <option value="All" key="All">
              Todos
            </option>
            {temperament.map((temp) => {
              return (
                <option value={temp.name} key={temp.id}>
                  {" "}
                  {temp.name}{" "}
                </option>
              );
            })}
          </select>
          </div>

          <div className="creados" key= "creados" onClick={(element) => handleFilterCreados(element)}>
            <h4>Cuatro Patitas: </h4>
            <button value="api">Los Nuestros</button>
            <button value="created">Creados por TÍ</button>
          </div>          

          <div className="searchbar">
            <SearchBar />
        </div>

        </div>
     

      <div className="paginado" key="paginado">
        <Paginado
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          paginado={paginado}
        />
      </div>
    
        <div className="cardstwo" key="cardstwo">
          {currentDogs?.map((element) => {
            return (
              <Link to={`/home/${element.id}`}>
                <Card
                  name={element.name}
                  image={element.image}
                  height_min={element.height_min}
                  height_max={element.height_max}
                  temperament={element.temperament}
                  weight_max={element.weight_max}
                  weight_min={element.weight_min}
                />
              </Link>
            );
          })}
        </div>
        
        </div>
    
  );
}
