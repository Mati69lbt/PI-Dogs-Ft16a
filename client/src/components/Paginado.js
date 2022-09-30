import React from "react";
import '../Styles/Paginado.css'


export default function Paginado({ dogsPerPage, allDogs, paginado }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="paginado" >
        {pageNumbers &&
          pageNumbers.map((number, i) => (
            <button className="pagNumber" key={i}>
            <li className="number">
              <a href onClick={() => paginado(number)}>{number}</a>
            </li>
            </button>
          ))}
      </ul>
    </nav>
  );
}
