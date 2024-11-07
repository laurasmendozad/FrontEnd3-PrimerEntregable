import React from "react";
import { cardContainer, colorContainer } from "../styles/Card.module.css";

const Card = ({ nombre, color }) => {
  const formattedColor = color.startsWith("#") ? color : `#${color}`;
  return (
    <div className={cardContainer}>
      <h4>Hola {nombre}! </h4>
      <h4>Sabemos que tu color favorito es: </h4>
      <div className={colorContainer} style={{ backgroundColor: formattedColor}}>
        <h4>{formattedColor}</h4>
      </div>
    </div>
  );
};

export default Card;
