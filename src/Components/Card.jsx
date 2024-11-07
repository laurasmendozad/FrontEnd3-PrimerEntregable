import React from "react";

const Card = ({ nombre, color }) => {
  const formattedColor = color.startsWith("#") ? color : `#${color}`;
  return (
    <>
      <h4>Hola {nombre}! </h4>
      <h4>Sabemos que tu color favorito es: </h4>
      <h4 style={{ backgroundColor: formattedColor }}>{formattedColor}</h4>
    </>
  );
};

export default Card;
