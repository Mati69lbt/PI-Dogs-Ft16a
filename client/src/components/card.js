import React from "react";
import "../Styles/Cards.css";


export default function Card({
  id,
  name,
  image,
  height_min,
  height_max,
  weight_max,
  weight_min,
  temperaments,
}) {
  return (
    <div className="allcards">      
        <div className="cartas">
          <h3>Yo soy {name}!!!</h3>
          <img src={image || "https://www.freude-kinder.com/wp-content/uploads/2020/06/7-1.jpg"} alt="Y la Foto?" width="200vw" height="150vw" />
        <div className= "descripcion">
         <h5>Soy {temperaments}, mido entre {height_min} y {height_max} centimetros y peso entre {weight_min} y {weight_max} kgs.</h5>
        </div>
         

          
        </div>
      
    </div>
  );
}
