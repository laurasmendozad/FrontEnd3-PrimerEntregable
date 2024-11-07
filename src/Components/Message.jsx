import React from "react";

const Message = ({ nombre, color }) => {
  return (
    <>
      <h4>Hola {nombre}! </h4>
      <h4>Sabemos que tu color favorito es: </h4>
      <h4>{color}</h4>
    </>
  );
};

export default Message;