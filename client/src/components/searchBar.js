import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsNames } from "../actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleImputChange(event) {
    event.preventDefault();
    setName(event.target.value);    
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (name !== "") {
      dispatch(getDogsNames(name));
      setName("");
    } else {
      alert("Ingresa un nombre para buscar");
    }
  }

  function handleKeyDown(event) {
    event.preventDefault();
    dispatch(getDogsNames(name));
    setName("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={name}
        onChange={(event) => handleImputChange(event)}
        onKeyPress={(event) => {
          if (event.key === "Enter") handleKeyDown(event);
        }}
      />
      <button type="submit" onClick={(event) => handleSubmit(event)}>
        Buscar
      </button>
    </div>
  );
}
