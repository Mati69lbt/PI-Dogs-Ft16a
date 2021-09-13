import React from "react";
import '../Styles/Paginado.css'


export default function Paginado({ dogsPerPage, allDogs, paginado }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="paginado" key="paginado">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <button className="pagNumber" key="pagNumber">
            <li className="number" key={Math.random(number)}>
              <a href onClick={() => paginado(number)}>{number}</a>
            </li>
            </button>
          ))}
      </ul>
    </nav>
  );
}
