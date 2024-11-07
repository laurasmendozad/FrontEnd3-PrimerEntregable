import { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    color: "",
  });
  console.log(user);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.nombre.trim().length >= 3 && user.color.trim().length >= 6) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={user.nombre}
          placeholder="Ingresa tu nombre"
          onChange={(event) =>
            setUser({ ...user, nombre: event.target.value })
          }
        />
        <label>Color:</label>
        <input
          type="text"
          value={user.color}
          placeholder="Ingresa tu color favorito (formato HEX)"
          onChange={(event) =>
            setUser({ ...user, color: event.target.value })
          }
        />
        <button>Enviar</button>
        {error ? (
          <h4 style={{ color: "red" }}>
            Por favor chequea que la información sea correcta
          </h4>
        ) : null}
      </form>
      {show && <Card nombre={user.nombre} color={user.color} />}
    </div>
  );
};

export default Form;
