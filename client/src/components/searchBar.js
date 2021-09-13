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
    dispatch(getDogsNames(name));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={(event) => handleImputChange(event)}        
      />
      <button type="submit" onClick={(event) => handleSubmit(event)}>
        Buscar
      </button>
    </div>
  );
}
